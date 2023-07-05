const async     = require('async')
const sequelize = require('./db')

const model =
{//{{{
    Measure:        require('./model/measure'),
    Tu:             require('./model/tu'),
    Worker:         require('./model/worker'),
    Product:        require('./model/product'),
    Sphere:         require('./model/sphere'),
    Sphere_Product: require('./model/sphere_product'),
    Claim:          require('./model/claim'),
    Description:    require('./model/description'),
}//}}}
const desc =
{//{{{
    measure: require('./init/measure'),
    tu:      require('./init/tu'),
    worker:  require('./init/worker'),
    sphere:  require('./init/sphere'),
    product: require('./init/product'),
}//}}}

const simple_create = (d, m) => { return (cb) => async.eachSeries(d, (i, cbl) => m.create(i).then(() => cbl()), cb) }
const create =
{
    measures: simple_create(desc.measure, model.Measure),
    tus:      simple_create(desc.tu,      model.Tu     ),
    workers:  simple_create(desc.worker,  model.Worker ),
    products: function(cb)
    {//{{{
        async.eachSeries(desc.product,
            async function(p)
            {
                const transaction = await sequelize.transaction()
                try
                {
                    let tu = (await model.Tu.findOne({attributes: ['id'], where: {number: p.tuno}}))
                    let prod = await model.Product.create(
                        Object.assign(p,
                            {
                                tuId: tu ? tu.id : null,
                            },
                        ),
                        { transaction }
                    )
                    await async.eachSeries(p.claims,
                        async function(c)
                        {
                            await model.Claim.create(
                                Object.assign(c,
                                    {
                                        productId: prod.id,
                                        measureId: (await model.Measure.findOne({attributes: ['id'], where: {name: c.measure}})).id,
                                    },
                                ),
                                { transaction }
                            )
                        }
                    )
                    await async.eachSeries(p.description,
                        async function(d)
                        {
                            await model.Description.create(
                                Object.assign(d,
                                    {
                                        productId: prod.id,
                                    },
                                ),
                                { transaction }
                            )
                        }
                    )
                    await transaction.commit()
                }
                catch (err)
                {
                    console.log(err)
                    await transaction.rollback()
                }
            },
            cb
        )
    },//}}}
    spheres:  function(cb)
    {//{{{
        async.eachSeries(desc.sphere,
            async function(s)
            {
                const transaction = await sequelize.transaction()
                try
                {
                    let sphere = await model.Sphere.create(
                        s,
                        { transaction }
                    )
                    await async.eachSeries(s.products,
                        async function(p)
                        {
                            await model.Sphere_Product.create(
                                {
                                    SphereId:  sphere.id,
                                    ProductId: (await model.Product.findOne({ where: { name: p } })).id,
                                },
                                { transaction }
                            )
                        }
                    )
                    await transaction.commit()
                }
                catch (err)
                {
                    console.log(err)
                    await transaction.rollback()
                }
            },
            cb
        )
    },//}}}
}
const drop     = (cb) => sequelize.drop().then(()=>cb())
const recreate = (cb) => sequelize.sync({ force: true }).then(()=>cb())

function execute()//{{{
{
    async.series(
        [
            drop,
            recreate,
            create.measures,
            create.tus,
            create.products,
            create.workers,
            create.spheres,
        ],
        function(err, results)
        {
            if(err)
            {
                console.log('FINAL ERR: ' + err)
                process.exit(1)
            }
            else
                console.log('All done')
        }
    )
}
execute()//}}}

// vim: foldmethod=marker
