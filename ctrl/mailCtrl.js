var async    = require('async')
const mailer = require('nodemailer')

const htmlFormat = function(name, email, subject, message)
{
    let html = ''
    html += '<h4>Письмо с сайта</h4>'
    html += '<div>Тема: <b>' + subject + '</b></div>'
    html += '<div>Отправитель: <b>' + name + '</b></div>'
    html += '<div>Email: <b>' + email + '</b></div>'
    html += '<div>Сообщение:</div>'
    html += '<div><pre>' + message + '</pre></div>'
    return html
}

const mainMail = async function(name, email, subject, message)
{
    const transporter = await mailer.createTransport(
    {
        host:   'mailbe05.hoster.by',
        port:   465,
        secure: true,
        tls:
        {
            rejectUnauthorized: false,
        },
        auth:
        {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    })
    transporter.verify(function (error, success)
    {
        if (error) { console.log(error) }
        else       { console.log("Server is ready to take our messages") }
    })
    const mailOption =
    {
        from:    process.env.MAIL_USER,
        to:      process.env.MAIL_USER,
        subject: subject,
        html:    htmlFormat(name, email, subject, message),
    }
    try
    {
        await transporter.sendMail(mailOption)
        return Promise.resolve("Message Sent Successfully!")
    }
    catch (error)
    {
        return Promise.reject(error)
    }
}

exports.mail = async function(req, res, next)
{
    const { name, email, subject, message } = req.body
    try
    {
        await mainMail(name, email, subject, message)
        res.send({ responseText: "сообщение отправлено"} )
    }
    catch (error)
    {
        res.status(500)
        res.send("не получилось послать сообщение")
    }
}
// vim:foldmethod=marker
