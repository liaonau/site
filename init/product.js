const product =
[
    {   name:         't20',//{{{
        hide:         true,
        shortname:    'ПП Т20',
        fullname:     'композиция тальконаполненного полипропилена «Прален» 01060-Т20',
        description:
        [
        ],
        tuno:         2,
        claims:
        [
            { measure: 'mfi',           min: 5,  demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 17, max: 23,      },
            { measure: 'sigma_t',       min: 30,                           },
            { measure: 'sharpi_intact', min: 35,                           },
            { measure: 'density',       max: 1.08,                         },

            { measure: 'absorption',     opt: true, max: 1.5,                    },
            { measure: 'modulus_b',      opt: true, min: 1800,                   },
            { measure: 'destruction_b',  opt: true, min: 30,                     },
            { measure: 'HDT',            opt: true, min: 55,  demand: '1,80 МПа' },
            { measure: 'shrinkage_mold', opt: true, min: 0.9, max: 1.8           },
        ]
    },//}}}
    {   name:         't30',//{{{
        shortname:    'ПП Т30',
        fullname:     'композиция тальконаполненного полипропилена «Прален» 01030-Т30',
        summary:      'для изготовления деталей фар автомибилей',
        description:
        [
        ],
        tuno:         2,
        claims:
        [
            { measure: 'mfi',           min: 2,   demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 27,  max: 33,       },
            { measure: 'sigma_t',       min: 31,                            },
            { measure: 'sharpi_intact', min: 22,                            },
            { measure: 'density',       max: 1.20,                          },

            { measure: 'absorption',     opt: true, max: 1.5,                           },
            { measure: 'modulus_b',      opt: true, min: 2200,                          },
            { measure: 'destruction_b',  opt: true, min: 35,                            },
            { measure: 'HDT',            opt: true, min: 60,  demand: '1,80 МПа'        },
            { measure: 'shrinkage_mold', opt: true, min: 0.8, max: 1.6                  },
        ]
    },//}}}
    {   name:         't33',//{{{
        shortname:    'ПП Т33',
        fullname:     'композиция тальконаполненного полипропилена «Прален» 01060-Т33',
        summary:      'для изготовления методом экструзии пластикового соединения реечных гвоздей для пневмопистолета',
        description:
        [
            {
                text: 'обладает повышенной морозостойкостью',
            },
            {
                text: 'обладает повышенной гибкостью',
            },
        ],
        tuno:         2,
        claims:
        [
            { measure: 'mfi',           min: 5,  demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 30, max: 36,                  },
            { measure: 'sigma_t',       min: 28,                           },
            { measure: 'sharpi_intact', min: 16,                           },
            { measure: 'density',       max: 1.20,                         },

            { measure: 'absorption',     opt: true, max: 1.5,                          },
            { measure: 'modulus_b',      opt: true, min: 2200,                         },
            { measure: 'destruction_b',  opt: true, min: 35,                           },
            { measure: 'HDT',            opt: true, min: 62,  demand: '1,80 МПа'       },
            { measure: 'shrinkage_mold', opt: true, min: 0.8, max: 1.6                 },
        ]
    },//}}}
    {   name:         't40',//{{{
        shortname:    'ПП Т40',
        fullname:     'композиция тальконаполненного полипропилена «Прален» 01060-Т40',
        summary:      'для изготовления деталей бытовой техники',
        description:
        [
            {
                text: 'серийно выпускется в натуральном (неокрашенном), черном, сером и белом цветах',
            },
            {
                text: 'возможно окрашивание в любые цвета, в том числе высокой белизны',
            },
        ],
        tuno:         2,
        claims:
        [
            { measure: 'mfi',           min: 5,  demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 37, max: 43,                  },
            { measure: 'sigma_t',       min: 27,                           },
            { measure: 'sharpi_intact', min: 15,                           },
            { measure: 'density',       max: 1.28,                         },

            { measure: 'absorption',     opt: true, max: 1.5,                          },
            { measure: 'modulus_b',      opt: true, min: 2450,                         },
            { measure: 'destruction_b',  opt: true, min: 45,                           },
            { measure: 'HDT',            opt: true, min: 70,  demand: '1,80 МПа'       },
            { measure: 'shrinkage_mold', opt: true, min: 0.7, max: 1.5                 },
        ]
    },//}}}
    {   name:         't40_ral',//{{{
        shortname:    'ПП Т40 RAL 5008/7016/7021',
        fullname:     'композиция тальконаполненного полипропилена «Прален» 01060-Т40 RAL 5008/7016/7021',
        summary:      'для изготовления видовых деталей бытовой техники',
        description:
        [
            {
                text: 'модифицирована скользящими добавками для литья видовых деталей',
            },
        ],
        tuno:         2,
        claims:
        [
            { measure: 'mfi',           min: 5,  demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 37, max: 43,                  },
            { measure: 'sigma_t',       min: 17,                           },
            { measure: 'sharpi_intact', min: 20,                           },
            { measure: 'density',       max: 1.25                          },

            { measure: 'absorption',     opt: true, max: 1.5,                    },
            { measure: 'modulus_b',      opt: true, min: 2000,                   },
            { measure: 'destruction_b',  opt: true, min: 30,                     },
            { measure: 'HDT',            opt: true, min: 65,  demand: '1,80 МПа' },
            { measure: 'shrinkage_mold', opt: true, min: 0.7, max: 1.5           },
        ]
    },//}}}
    {   name:         '153-228',//{{{
        shortname:    'ПЭВД 153-228',
        fullname:     'композиция ПЭВД с пониженной горючестью «Прален» 153-228',
        hit:          15,
        summary:      'для изготовления термоусаживаемых радиационносшитых изделий',
        description:
        [
            {
                text: 'допустим прямой контакт с медью — содержит дезактиватор меди',
            },
            {
                text: 'для использования при высоких рабочих температурах',
            },
            {
                text: 'самозатухающая',
            },
        ],
        tuno:         4,
        claims:
        [
            { measure: 'mfi',       min: 0.4, max: 2.0, demand: '190 °C; 2,16 кг' },
            { measure: 'sigma_t',   min: 8.8,                                     },
            { measure: 'epsilon_r', min: 280,                                     },
            { measure: 'UL94',      text: 'ПВ‑2',                                 },

            { measure: 'el_vol_resistance', opt:true, min: Math.pow(10, 12), },
            { measure: 'el_rupture',        opt:true, min: 30,               },
        ]
    },//}}}
    {   name:         'm40',//{{{
        shortname:    'ПП 01060-М40',
        fullname:     'композиция мелонаполненного полипропилена «Прален» 01060-М40',
        summary:
`для изготовления деталей бытовой техники
подвергающихся при эксплуатации воздействию периодических деформаций и повышенной температуры`,
        description:
        [
        ],
        tuno:         5,
        claims:
        [
            { measure: 'mfi',       min: 5,    demand: '230 °C; 2,16 кг' },
            { measure: 'ash',       min: 38,   max: 42,                  },
            { measure: 'density',   max: 1.25,                           },
            { measure: 'sigma_t',   min: 21,                             },
            { measure: 'sigma_t',   min: 11,   demand: 'при 80 °C'       },
            { measure: 'epsilon_r', min: 3,                              },
            { measure: 'epsilon_r', min: 5,    demand: 'при 80 °C'       },

            { measure: 'modulus_b',      opt: true, min: 2400,                           },
            { measure: 'modulus_b',      opt: true, min: 1100, demand: 'при 80 °C'       },
            { measure: 'shrinkage_mold', opt: true, min: 1.2,  max: 1.35                 },
            { measure: 'sharpi_intact',  opt: true, min: 21,                             },
            { measure: 'sharpi_notched', opt: true, min: 4,                              },
            { measure: 'moisture',       opt: true, max: 0.05,                           },
        ]
    },//}}}
    {   name:         '01130-m40',//{{{
        shortname:    'ПП 01130-М40',
        fullname:     'композиция мелонаполненного полипропилена «Прален» 01130-М40',
        summary:      'для изготовления различных деталей техники и предметов быта',
        description:
        [
        ],
        tuno:         5,
        claims:
        [
            { measure: 'mfi',       min: 13,   demand: '230 °C; 2,16 кг' },
            { measure: 'ash',       min: 38,   max: 42,                  },
            { measure: 'density',   max: 1.25,                           },
            { measure: 'sigma_t',   min: 18,                             },
            { measure: 'sigma_t',   min: 11,   demand: 'при 80 °C'       },
            { measure: 'epsilon_r', min: 3,                              },
            { measure: 'epsilon_r', min: 7,    demand: 'при 80 °C'       },

            { measure: 'modulus_b',      opt: true, min: 2300,                           },
            { measure: 'modulus_b',      opt: true, min: 1150, demand: 'при 80 °C'       },
            { measure: 'shrinkage_mold', opt: true, min: 1.1, max: 1.2                   },
            { measure: 'sharpi_intact',  opt: true, min: 21,                             },
            { measure: 'sharpi_notched', opt: true, min: 4,                              },
            { measure: 'moisture',       opt: true, max: 0.05,                           },
        ]
    },//}}}
    {   name:         'st30',//{{{
        shortname:    'ПП 30СТ',
        fullname:     'композиция стеклонаполненного полипропилена «Прален» 01030-30СТ',
        summary:      'для изготовления различных деталей техники и предметов быта, требующих повышенной стойкости к нагрузкам',
        description:
        [
            {
                text: 'обладает повышенной стойкостью к механическим нагрузкам',
            },
            {
                text: 'значительно снижает усадку полипропилена при литье',
            },
        ],
        tuno:         6,
        claims:
        [
            { measure: 'mfi',       min: 0.8, demand: '230 °C; 2,16 кг' },
            { measure: 'ash',       min: 28,  max: 32,                  },
            { measure: 'density',   max: 1.17,                          },
            { measure: 'sigma_t',   min: 65,                            },
            { measure: 'epsilon_r', min: 3,                             },

            { measure: 'sharpi_intact', opt: true, min: 40,   },
            { measure: 'vicat',         opt: true, min: 130,  },
            { measure: 'modulus_b',     opt: true, min: 3700, },

        ]
    },//}}}
    {   name:         '21-15c',//{{{
        shortname:    'ПП 21-15С',
        fullname:     'композиция полипропилена с пониженной горючестью «Прален» 21-15С',
        hit:          5,
        summary:      'для деталей, контактирующих с токоведущими частями приборов',
        description:
        [
            {
                text: 'повышенная огнестойкость',
            },
            {
                text: 'не содержит галогенов',
            },
            {
                text: 'RoHS2 (2011/65/EU), ТР ЕАЭС 037/2016',
            },
            {
                text: 'меньшая плотность по сравнению с галогенсодержащими аналогами',
            },
            {
                text: 'высокая эластичность — легкая собираемость изделий',
            },
            {
                title: 'серийные цвета',
                text:  'натуральный, серый и черный',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
        ],
        tuno:         7,
        claims:
        [
            { measure: 'mfi',        min: 5,    demand: '230 °C; 2,16 кг' },
            { measure: 'density',    min: 1.05, max: 1.15,                },
            { measure: 'sigma_t',    min: 23.0,                           },
            { measure: 'epsilon_r',  min: 15,                             },
            { measure: 'el_rupture', min: 25,                             },
            { measure: 'UL94',       text: 'ПВ‑0'                         },
            { measure: 'gwit',       min: 775,                            },
            { measure: 'gwfi',       min: 875,                            },

            { measure: 'sharpi_intact',      opt: true, min: 13.5,                          },
            { measure: 'vicat',              opt: true, min: 140,   demand:'10 Н'           },
            { measure: 'vicat',              opt: true, min: 100,   demand:'50 Н'           },
            { measure: 'shrinkage_mold',     opt: true, min: 1.1, max: 1.3                  },
            { measure: 'absorption',         opt: true, max: 0.18                           },
            { measure: 'modulus_b',          opt: true, min: 2100,                          },
            { measure: 'tg_hz',              opt: true, fmt: 'p', max: 3.3*Math.pow(10,-2), },
            { measure: 'el_penetrability',   opt: true, max: 2.4,                           },
            { measure: 'el_surf_resistance', opt: true, min: 1.2*Math.pow(10, 11),          },
            { measure: 'el_vol_resistance',  opt: true, min: 2*Math.pow(10,11),             },
            { measure: 'track',              opt: true, min: 246, max: 254,      },
            { measure: 'heat_resistance',    opt: true, max: 2, demand: '125 °C'            },
        ]
    },//}}}
    {   name:         '21-17c',//{{{
        shortname:    'ПП 21-17С',
        fullname:     'композиция полипропилена с пониженной горючестью «Прален» 21-17С',
        summary:      'для деталей, контактирующих с токоведущими частями приборов',
        description:
        [
            {
                text: 'повышенная огнестойкость',
            },
            {
                text: 'не содержит галогенов',
            },
            {
                text: 'RoHS2 (2011/65/EU), ТР ЕАЭС 037/2016',
            },
            {
                text: 'меньшаяя плотность по сравнению с галогенсодержащими аналогами',
            },
            {
                text: 'высокая элластичность — легкая собираемость изделий',
            },
            {
                title: 'серийные цвета',
                text:  'белый, серый и черный',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
            {
                text: 'уменшенная усадка, по сравнению с',
                link: '21-15c',
            },
        ],
        tuno:         7,
        claims:
        [
            { measure: 'mfi',                 min: 18,   demand: '230 °C; 2,16 кг' },
            { measure: 'density',             min: 1.05, max: 1.15,                },
            { measure: 'sigma_t',             min: 21,                             },
            { measure: 'epsilon_r',           min: 10,                             },
            { measure: 'el_rupture',          min: 25,                             },
            { measure: 'UL94',                text: 'ПВ‑0'                         },
            { measure: 'gwfi',                min: 960,                            },

            { measure: 'sharpi_intact',       opt: true,  min: 13.5,                          },
            { measure: 'vicat',               opt: true,  min: 140,   demand:'10 Н'           },
            { measure: 'vicat',               opt: true,  min: 100,   demand:'50 Н'           },
            { measure: 'shrinkage_mold',      opt: true,  min: 1.1, max: 1.3                  },
            { measure: 'absorption',          opt: true,  max: 0.18                           },
            { measure: 'modulus_b',           opt: true,  min: 2100,                          },
            { measure: 'tg_hz',               opt: true,  fmt: 'p', max: 3.3*Math.pow(10,-2), },
            { measure: 'el_penetrability',    opt: true, max: 2.4,                            },
            { measure: 'el_surf_resistance',  opt: true, min: 1.2*Math.pow(10, 11),           },
            { measure: 'el_vol_resistance',   opt: true, min: 2*Math.pow(10,11),              },
            { measure: 'track',               opt: true, min: 246,  max: 254,      },
            { measure: 'heat_resistance',     opt: true, max: 2,     demand: '125 °C'         },
        ]
    },//}}}
    {   name:         'mn40',//{{{
        shortname:    'ПП 01060-МН40',
        fullname:     'композиция минералонаполненного полипропилена «Прален» 01060-МН40',
        summary:      'для изготовления поддонов морозильных камер',
        description:
        [
            {
                text: 'повышенная стойкость к механическому воздействию при отрицательной температуре',
            },
            {
                text: 'цвет снежно-белый (с легким синим оттенком), возможен подбор по эталону цвета или CIELab координатам',
            },
        ],
        tuno:        11,
        claims:
        [
            { measure: 'mfi',       min: 6,    demand: '230 °C; 2,16 кг' },
            { measure: 'ash',       min: 40,   max: 43,                  },
            { measure: 'density',   min: 1.22, max: 1.28                 },
            { measure: 'sigma_t',   min: 18,                             },
            { measure: 'epsilon_t', min: 3,                              },

            { measure: 'modulus_b',      opt: true, min: 2400,         },
            { measure: 'shrinkage_mold', opt: true, min: 0.7, max: 1.1 },
            { measure: 'sharpi_intact',  opt: true, min: 15,           },
            { measure: 'sharpi_notched', opt: true, min: 3,            },
            { measure: 'moisture',       opt: true, max: 0.05,         },
        ]
    },//}}}
    {   name:         '01120-mn40',//{{{
        shortname:    'ПП 01120-МН40',
        fullname:     'композиция минералонаполненного полипропилена «Прален» 01120-МН40',
        summary:      'для изготовления различных деталей светоприборов и иной электрики без контакта с токоведущими частями',
        description:
        [
            {
                title: 'серийные цвета',
                text: 'белый и черный',
            },
            {
                text: 'возможен подбор цвета по образцу или CIELab координатам',
            },
        ],
        tuno:         11,
        claims:
        [
            { measure: 'mfi',             min: 10,    demand: '230 °C; 2,16 кг' },
            { measure: 'ash',             min: 40,   max: 43,                   },
            { measure: 'density',         min: 1.22, max: 1.28                  },
            { measure: 'sigma_t',         min: 18,                              },
            { measure: 'epsilon_t',       min: 3,                               },
            { measure: 'gwfi',            min: 650,                             },
            { measure: 'heat_resistance', max: 2,                               },

            { measure: 'modulus_b',      opt: true, min: 2400,         },
            { measure: 'shrinkage_mold', opt: true, min: 0.7, max: 1.1 },
            { measure: 'sharpi_intact',  opt: true, min: 15,           },
            { measure: 'sharpi_notched', opt: true, min: 3,            },
            { measure: 'moisture',       opt: true, max: 0.05,         },
        ]
    },//}}}
    {   name:         '01130-mn40',//{{{
        shortname:    'ПП 01130-МН40',
        fullname:     'композиция минералонаполненного полипропилена «Прален» 01130-МН40',
        summary:      'для изготовления различных деталей техники и предметов быта',
        description:
        [
            {
                text: 'повышенная стойкость к механическому воздействию при отрицательной температуре',
            },
        ],
        tuno:         11,
        claims:
        [
            { measure: 'mfi',       min: 12,   demand: '230 °C; 2,16 кг' },
            { measure: 'ash',       min: 40,   max: 43,                  },
            { measure: 'density',   min: 1.22, max: 1.28                 },
            { measure: 'sigma_t',   min: 18,                             },
            { measure: 'epsilon_t', min: 3,                              },

            { measure: 'modulus_b',      opt: true, min: 2400,         },
            { measure: 'shrinkage_mold', opt: true, min: 0.7, max: 1.1 },
            { measure: 'sharpi_intact',  opt: true, min: 15,           },
            { measure: 'sharpi_notched', opt: true, min: 3,            },
            { measure: 'moisture',       opt: true, max: 0.05,         },
        ]
    },//}}}
    {   name:         'matt_film_white',//{{{
        shortname:    'матированная белая пленка',
        fullname:     'пленка «Прален» полимерная матированная белая',
        summary:      'для изготовления маскировки',
        description:
        [
            {
                text: 'повторяет спектр снега, в том числе опционально при заказе в близком ультрафиолете',
            },
            {
                text: 'высокая матовость, не бликует',
            },
            {
                text: 'содержит термо и свето стабилизаторы',
            },
        ],
        tuno:         9,
        claims:
        [
            { measure: 'thickness',            min: 0.07, max: 0.17,         },
            { measure: 'width',                min: 390, max: 610,           },
            { measure: 'sigma_r_N',            min: 20,                      },
            { measure: 'flammability',         max: 40,                      },
            { measure: 'spectral_reflectance', text: 'утвержденные допуски', },
            { measure: 'gloss',                max: 1.2                      },
            { measure: 'tear_resistance',      min: 5,                       },
        ]
    },//}}}
    {   name:         'matt_film_pe',//{{{
        shortname:    'матированная цветная пленка',
        fullname:     'пленка «Прален» полиэтиленовая матированная цветная',
        summary:      'для изготовления маскировки',
        description:
        [
            {
                title: 'цвета',
                text:  'светло‑зеленый, темно‑зеленый, серо‑зеленый, серо‑желтый, серо‑коричневый, белый',
            },
            {
                text: 'высокая матовость, не бликует',
            },
            {
                text: 'содержит термо и свето стабилизаторы',
            },
            {
                title: 'опционально при заказе',
                text:  'повторяет соответствующий цвету спектр растений или почв, в том числе в инфракрасной области',
            },
            {
                title: 'опционально при заказе',
                text:  'содержит снижающие горючесть антипирены',
            },
        ],
        tuno:         12,
        claims:
        [
            { measure: 'sigma_r',              min: 6.5,                     },
            { measure: 'flammability',         max: 40,                      },
            { measure: 'spectral_reflectance', text: 'утвержденные допуски', },
            { measure: 'gloss',                max: 1.2                      },
            { measure: 'tear_resistance',      min: 4,                       },
        ]
    },//}}}
    {   name:         '153-15',//{{{
        hide:         true,
        shortname:    'ПЭВД 153-15',
        fullname:     'композиция полиэтилена «Прален» 153-15',
        summary:      'для изготовления литьевых и экструзионных термоусаживаемых изделий: кабельных муфт, перчаток, трубок',
        description:
        [
        ],
        tuno:         13,
        claims:
        [
            { measure: 'mfi',        min: 0.3,   demand: '190 °C; 2,16 кг' },
            { measure: 'density',    min: 0.929, max: 0.939,               },
            { measure: 'sigma_r',    min: 14.0,                            },
            { measure: 'epsilon_r',  min: 500,                             },
            { measure: 'el_rupture', min: 30,                              },
        ]
    },//}}}
    {   name:         '113-12',//{{{
        shortname:    'СЭВА 113-12',
        fullname:     'композиция сэвилена «Прален» 113-12',
        summary:      'для изготовления термоусаживаемых изделий: элементов изоляторов, перчаток',
        description:
        [
            {
                text: 'повышенная трекингостойкость',
            },
            {
                text: 'пониженная горючесть',
            },
            {
                title: 'серийные цвета',
                text: 'черный и терракотовый',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
        ],
        tuno:         13,
        claims:
        [
            { measure: 'mfi',       min: 3.0,  demand: '190 °C; 2,16 кг' },
            { measure: 'density',   min: 1.20, max: 1.30,                },
            { measure: 'sigma_r',   min: 7.0,                            },
            { measure: 'epsilon_r', min: 250,                            },
            { measure: 'UL94',      text: 'ПВ‑2'                         },

            { measure: 'ter',       opt: true, text: '1А4,5' },
        ]
    },//}}}
    {   name:         '113-20',//{{{
        shortname:    'СЭВА 113-20',
        fullname:     'композиция сэвилена «Прален» 113-20',
        summary:      'для изготовления термоусаживаемых радиационно сшитых изделий с повышенной, относительно полиэтилена, мягкостью',
        description:
        [
            {
                text: 'допустим прямой контакт с медью — содержит дезактиватор меди',
            },
            {
                text: 'для использования при высоких рабочих температурах',
            },
            {
                text: 'самозатухающая',
            },
        ],
        tuno:         13,
        claims:
        [
            { measure: 'mfi',               min: 4.0,     demand: '190 °C; 2,16 кг' },
            { measure: 'density',           min: 1.04,  max: 1.10,                  },
            { measure: 'sigma_r',           min: 7.0,                               },
            { measure: 'epsilon_r',         min: 300,                               },
            { measure: 'UL94',              text: 'ПГ'                              },
            { measure: 'el_rupture',        min: 30,                                },
            { measure: 'el_vol_resistance', min: Math.pow(10, 13)                   },
        ]
    },//}}}
    {   name:         '117-5',//{{{
        hide:         true,
        shortname:    'СЭВА 117-5',
        fullname:     'композиция сэвилена «Прален» 117-5',
        description:
        [
        ],
        tuno:         13,
        claims:
        [
            { measure: 'mfi',              min: 5.0,  demand: '190 °C; 2,16 кг' },
            { measure: 'moisture',         min: 0.05, max:0.07                  },
            { measure: 'adhesion_peel_pe', min: 40,                             },
        ]
    },//}}}
    {   name:         'pgs',//{{{
        shortname:    'ПГС',
        fullname:     'пленка полиэтиленовая сшивающаяся «Прален» ПГС',
        summary:      'для изготовления футеровки стеклопластиковых труб продуктопроводов',
        description:
        [
            {
                text: 'пероксидно сшивающаяся пленка',
            },
            {
                text: 'стойкая к химически агрессивным средам: концентрированным кислотам и щелочам',
            },
            {
                text: 'стойкая к высоким температурам',
            },
            {
                text: 'изготавливается в виде лент',
            },
            {
                title: 'ширина ленты',
                text: 'до 350 мм',
            },
            {
                title: 'толщина ленты',
                text: 'от 0,07 мм до 0,50 мм',
            },
        ],
        tuno:         14,
        claims:
        [
            { measure: 'sigma_r',   min: 12,    demand: 'в продольном направлении' },
            { measure: 'sigma_r',   min: 10,    demand: 'в поперечном направлении' },
            { measure: 'epsilon_r', min: 300,   demand: 'в продольном направлении' },
            { measure: 'epsilon_r', min: 250,   demand: 'в поперечном направлении' },

            { measure: 'el_vol_resistance',  opt: true, min: Math.pow(10, 12)                                                 },
            { measure: 'el_vol_resistance',  opt: true, min: Math.pow(10, 11), demand: 'после 500 ч при влажности 95%; 40 °C' },
            { measure: 'el_surf_resistance', opt: true, min: Math.pow(10, 13)                                                 },
            { measure: 'gel',                opt: true, min: 60,                                                              },
            { measure: 'absorption',         opt: true,  max:0.05                                                             },
            { measure: 'density',            opt: true,  min: 0.919,  max: 0.929,                                             },
        ]
    },//}}}
    {   name:         'pes',//{{{
        shortname:    'ПЭС',
        fullname:     'пленка полиэтеленовая сшивающаяся «Прален» ПЭС',
        summary:
`для применения в моточных изделиях электротехнического назначения
(в качестве обмотки катушек «сухих» трансформаторов, магнитных пускателей и иных подобных приборов)`,
        description:
        [
            {
                text: 'пероксидно сшивающаяся пленка',
            },
            {
                text: 'стойкая к химически агрессивным средам: концентрированным кислотам и щелочам',
            },
            {
                text: 'стойкая к высоким температурам',
            },
            {
                text: 'изготавливается в виде рукава',
            },
            {
                title: 'ширина рукава',
                text: 'до 700 мм',
            },
            {
                title: 'толщина развернутого рукава',
                text: 'от 0,07 мм до 0,50 мм',
            },
        ],
        tuno:         14,
        claims:
        [
            { measure: 'sigma_r',   min: 11,    demand: 'в продольном направлении' },
            { measure: 'sigma_r',   min: 9.8,   demand: 'в поперечном направлении' },
            { measure: 'epsilon_r', min: 200,   demand: 'в продольном направлении' },
            { measure: 'epsilon_r', min: 250,   demand: 'в поперечном направлении' },

            { measure: 'el_surf_resistance', opt: true, min: Math.pow(10, 13),     },
            { measure: 'gel',                opt: true, min: 60,                   },
            { measure: 'absorption',         opt: true, max:0.02,                  },
            { measure: 'density',            opt: true, min: 0.919,  max: 0.929,   },
            { measure: 'el_rupture',         opt: true, min: 30,                   },
            { measure: 'tg_hz',              opt: true, max: 1 * Math.pow(10, -3), },
            { measure: 'brit_temp',          opt: true, max: -50,                  },

        ]
    },//}}}
    {   name:         'tga',//{{{
        shortname:    'ТГА',
        fullname:     'пленка трудносгораемая антистатическая «Прален» ТГА',
        summary:      'для упаковки изделий с минимизацией риска пожара от искры статического электричества',
        description:
        [
            {
                text: 'изготавливается в виде рукава',
            },
            {
                title: 'ширина рукава',
                text: 'до 700 мм',
            },
            {
                title: 'толщина развернутого рукава',
                text: 'от 0,07 мм до 0,50 мм',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'sigma_r',            min: 10.8,  demand: 'в продольном направлении' },
            { measure: 'sigma_r',            min:  9.8,  demand: 'в поперечном направлении' },
            { measure: 'epsilon_r',          min:  300,  demand: 'в продольном направлении' },
            { measure: 'epsilon_r',          min:  300,  demand: 'в поперечном направлении' },
            { measure: 'el_surf_resistance', max:  2 * Math.pow(10, 11)                     },
            { measure: 'UL94',               text: 'ПВ-2'                                   },

        ]
    },//}}}
    {   name:         'gt',//{{{
        shortname:    'ГТ',
        fullname:     'лента клеевая герметезирующая термоплавкая «Прален» ГТ',
        summary:      'для монтажа термоусаживаемых изделий на полимерные оболочки трубопроводов и кабелей',
        description:
        [
            {
                text: 'неармированная лента, так же есть амированная сеткой — ',
                link: 'gta',
            },
            {
                title: 'ширина',
                text:  '40, 50, 80 и 100 мм',
            },
            {
                title: 'толщина',
                text:  'от 1,8 мм до 4.0 мм',
            },
            {
                text: 'можно использовать для заполнения дефектных участков при ремонте заводского полиэтиленового покрытия труб',
            },
        ],
        tuno:         15,
        claims:
        [
            { measure: 'absorption',       max: 1.5,                                            },
            { measure: 'adhesion_peel_pe', min: 25, demand: 'ПЭНД 273‑83; ПЭ80Б'                },
            { measure: 'adhesion_peel_pe', min: 35, demand: 'радиационно‑модифицированый ПЭВД ' },
        ]
    },//}}}
    {   name:         'gta',//{{{
        shortname:    'ГТА',
        fullname:     'лента клеевая герметезирующая термоплавкая «Прален» ГТА',
        hit:          50,
        summary:      'для монтажа термоусаживаемых изделий на полимерные оболочки трубопроводов и кабелей',
        description:
        [
            {
                text: 'армированная сеткой лента, так же есть неамированная — ',
                link: 'gt',
            },
            {
                title: 'ширина',
                text:  '40, 50, 80 и 100 мм',
            },
            {
                title: 'толщина',
                text:  'от 1,8 мм до 4,0 мм',
            },
            {
                text: 'можно использовать для заполнения дефектных участков при ремонте заводского полиэтиленового покрытия труб',
            },
        ],
        tuno:         15,
        claims:
        [
            { measure: 'absorption',        max: 2.0,                                },
            { measure: 'adhesion_shift_pe', min: 30, demand: 'ПЭНД'                  },
            { measure: 'adhesion_shift_pe', min: 35, demand: 'радиационно‑сшитый ПЭ' },
        ]
    },//}}}
    {   name:         '153-115',//{{{
        shortname:    'ПЭВД 153-115',
        fullname:     'композиция полимерная с пониженной горючестью «Прален» 153-115',
        summary:      'для изготовления защитных оболочек кабелей',
        description:
        [
            {
                text: 'подходит для оптоволокна',
            },
        ],
        tuno:         17,
        claims:
        [
            { measure: 'mfi',        min: 0.3, demand: '190 °C; 2,16 кг'  },
            { measure: 'density',    fmt: '.3f', min: 1.010,  max: 1.015, },
            { measure: 'sigma_r',    min: 12,                             },
            { measure: 'epsilon_r',  min: 400,                            },
            { measure: 'el_rupture', min: 35,                             },
            { measure: 'UL94',       text: 'ПВ‑2'                         },
            { measure: 'moisture',   min: 0.06,  max: 0.08                },

            { measure: 'brit_temp',        opt: true,  max: -60, },
            { measure: 'crack_resistance', opt: true,  min: 500, },
            { measure: 'aging_photo',      opt: true,  min: 600  },
            { measure: 'aging_thermal',    opt: true,  min: 8    },
        ]
    },//}}}
    {   name:         '113-vs',//{{{
        shortname:    'СЭВА 113-ВС',
        fullname:     'композиция полимерная с пониженной горючестью «Прален» 113-ВС',
        summary:      'для изготовления термоусаживаемых радиационносшитых изделий',
        description:
        [
            {
                text: 'повышенная огнестойкость',
            },
            {
                text: 'не содержит галогенов',
            },
            {
                text: 'RoHS2 (2011/65/EU), ТР ЕАЭС 037/2016',
            },
            {
                text: 'меньшаяя плотность по сравнению с галогенсодержащими аналогами',
            },
        ],
        tuno:         17,
        claims:
        [
            { measure: 'mfi',        min: 3.0,  demand: '190 °C; 2,16 кг' },
            { measure: 'density',    min: 1.11, max: 1.14,                },
            { measure: 'sigma_r',    min: 7,                              },
            { measure: 'epsilon_r',  min: 350,                            },
            { measure: 'el_rupture', min: 25,                             },
            { measure: 'UL94',       text: 'ПВ‑0'                         },
            { measure: 'moisture',   min: 0.06, max: 0.08                 },

            { measure: 'brit_temp',        opt: true, max: -60,  },
            { measure: 'crack_resistance', opt: true, min: 1000, },
            { measure: 'aging_photo',      opt: true, min: 600   },
            { measure: 'aging_thermal',    opt: true, min: 8     },
        ]
    },//}}}
    {   name:         'adhesive_01',//{{{
        shortname:    'клей-расплав 01',
        fullname:     'композиция адгезионная «Прален» 01',
        summary:      'для клеевого слоя заводской (базовой) двухслойной или трехслойной изоляции стальных труб',
        description:
        [
            {
                title: 'конструкции',
                text: '№ 1 и № 2 по ГОСТ Р 51164‑2001',
            },
            {
                title: 'конструкции',
                text: '№ 1 и № 2 по ГОСТ 9.602‑2016',
            },
            {
                text: 'может использоваться в качестве клеевого слоя между стеклопластиком и пленкой',
                link: 'pgs',
            },
        ],
        tuno:         18,
        claims:
        [
            { measure: 'mfi',                 min: 1.5, demand: '190 °C; 2,16 кг' },
            { measure: 'adhesion_peel_steel', min: 70,                            },
            { measure: 'moisture',            min: 0.08,                          },
        ]
    },//}}}
    {   name:         'adhesive_03',//{{{
        shortname:    'клей-расплав 03',
        fullname:     'композиция адгезионная «Прален» 03',
        summary:      'для изготовления адгезионных пленок, используемых в производстве комбинированных стеклопластиковых труб и изделий',
        description:
        [
            {
                text: 'может использоваться в качестве клеевого слоя между стеклопластиком и пленкой',
                link: 'pgs',
            },
        ],
        tuno:         18,
        claims:
        [
            { measure: 'mfi',       min: 2.0, demand: '190 °C; 2,16 кг' },
            { measure: 'sigma_r',   min: 7,                             },
            { measure: 'epsilon_r', min: 300,                           },
            { measure: 'moisture',  min: 0.08,                          },

            { measure: 'adhesion_peel_glass', opt: true, min: 30, },
        ]
    },//}}}
    {   name:         'adhesive_05',//{{{
        shortname:    'клей-расплав 05',
        fullname:     'композиция адгезионная «Прален» 05',
        summary:      'для ребросклеивания шпона при изготовлении фанеры',
        description:
        [
            {
                text: 'минимальный запах',
            },
        ],
        tuno:         19,
        claims:
        [
            { measure: 'rab',         min: 89,     max: 93    },
            { measure: 'viscosity_b', min: 12000,  max: 30000 },
        ]
    },//}}}
    {   name:         'adhesive_krt',//{{{
        shortname:    'КРТ',
        fullname:     'клей-расплав «Прален» КРТ',
        summary:      'для герметизации краевых зон термоусаживаемых изделий (кабельных муфт, перчаток, трубок)',
        description:
        [
            {
                text: 'в форме лент или блоков',
            },
            {
                text: 'совместно используется с',
                link: 'pipe_crosslinked',
            },
            {
                text: 'совместно используется с изделиями из',
                link: '113-12',
            },
        ],
        tuno:         19,
        claims:
        [
            { measure: 'rab',              min: 75,   max: 85, },
            { measure: 'density',          min: 0.90, max: 1.0            },
            { measure: 'adhesion_peel_pe', min: 20,   demand: 'ПЭНД'      },
        ]
    },//}}}
    {   name:         'stp',//{{{
        shortname:    'СТП',
        fullname:     'лента термоусаживаемая «Прален» СТП',
        hit:          99,
        summary:
`двухслойная лента для изоляции и защиты от коррозии стальных труб и их сварных стыков
при монтаже трубопровода: водопровода, газопровода, нефтепровода, в том числе с полиэтиленовой и ППУ изоляцией`,
        description:
        [
            {
                text: 'разрешение Госпромнадзора МЧС Республики Беларусь',
                doc:  'Разрешение_Госпромнадзора_СТП_до_01.11.2027.pdf',
            },
            {
                title: 'конструкции',
                text: '№ 8 и № 14 по ГОСТ Р 51164‑2001',
            },
            {
                title: 'конструкция',
                text: '№ 9 по ГОСТ 9.602‑2016',
            },
            {
                title: 'температура эксплуатации',
                text: 'от минус 60 °C до плюс 60 °C',
            },
            {
                text: 'рекомендации по нанесению',
                doc:  'рекомендации_по_нанесению_СТП.pdf',
            },
            {
                title: 'ширина',
                text: '150, 225, 450, 620 мм',
            },
            {
                title: 'толщина',
                text: 'от 1,2 до 2,4 мм',
            },
            {
                text: 'рулоны по 30 метров',
            },
            {
                text: 'возможна порезка на манжеты',
            },
            {
                text: 'часто применяется вместе с',
                link: 'lz',
            },
            {
                text: 'часто применяется вместе с',
                link: 'gta',
            },
        ],
        tuno:         22,
        claims:
        [
            { measure: 'sigma_r',             min: 12.0, demand: 'в продольном направлении'       },
            { measure: 'epsilon_r',           min: 200,                                           },
            { measure: 'shrinkage',           min: 15, max: 50, demand:'в продольном направлении' },
            { measure: 'adhesion_peel_steel', min: 35,                                            },
            { measure: 'adhesion_peel_pe',    min: 35, demand: 'ПЭНД'                             },

            { measure: 'adhesion_peel_steel', opt: true, min: 35,   demand:'после 1000 ч выдержки в воде при 20 °C'  },
            { measure: 'adhesion_peel_steel', opt: true, min: 35,   demand:'после 1000 ч выдержки в воде при 60 °C'  },
            { measure: 'cathode',             opt: true, max: 5                                                      },
            { measure: 'aging_epsilon',       opt: true, max: 25,   demand:'после 1000 ч выдержки в воде при 100 °C' },
            { measure: 'crack_resistance',    opt: true, min: 1000, demand:'50°C'                                    },
        ]
    },//}}}
    {   name:         'lz',//{{{
        shortname:    'ЛЗ',
        fullname:     'лента замковая двухслойная «Прален» ЛЗ',
        summary:      'для замыкания в кольцо термоусаживающихся манжет при изоляции сварных стыков стальных труб',
        description:
        [
            {
                title: 'толщина',
                text: 'от 2,0 до 2,4 мм',
            },
            {
                title: 'ширина',
                text: '100 мм',
            },
            {
                text: 'возможна порезка на замковые пластины',
            },
            {
                title: 'длина пластин',
                text: '150, 225, 450, 620 мм',
            },
            {
                text: 'часто применяется вместе с',
                link: 'stp',
            },
        ],
        tuno:         22,
        claims:
        [
            { measure: 'shrinkage',        max: 10, demand:'в продольном направлении' },
            { measure: 'adhesion_peel_pe', min: 35,                                   },
        ]
    },//}}}
    {   name:         '01-pv2',//{{{
        shortname:    'ПП 01-ПВ2',
        fullname:     'полипропилен с пониженной горючестью «Прален» 01-ПВ2',
        summary:      'для изготовления деталей, контактирующих с токоведущими частями приборов',
        description:
        [
            {
                title: 'серийные цвета',
                text: 'натуральный (неокрашенный), черный, белый',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
        ],
        tuno:         23,
        claims:
        [
            { measure: 'mfi',             min: 12,   demand: '230 °C; 2,16 кг' },
            { measure: 'density',         min: 0.95, max: 1.05,                },
            { measure: 'sigma_r',         min: 29,                             },
            { measure: 'epsilon_r',       min: 15,                             },
            { measure: 'sharpi_intact',   min: 35,                             },
            { measure: 'UL94',            text: 'ПВ‑2'                         },
            { measure: 'gwfi',            min: 850,                            },
            { measure: 'vicat',           min: 95, demand: '50 Н'              },
            { measure: 'heat_resistance', min: 2                               },
        ]
    },//}}}
    {   name:         '02-pv2',//{{{
        shortname:    'ПП 02-ПВ2',
        fullname:     'полипропилен с пониженной горючестью «Прален» 02-ПВ2',
        summary:      'для изготовления гофрированных трубок, контактирующих с проводами, кабелями и токоведущими частями приборов',
        description:
        [
            {
                text: 'чрезвычайно элластичный',
            },
            {
                text: 'повышенная стойкость к отрицательным температурам',
            },
            {
                title: 'серийные цвета',
                text: 'натуральный (неокрашенный), черный, оранжевый',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'mfi',             min: 12,   demand: '230 °C; 2,16 кг' },
            { measure: 'density',         min: 0.95, max: 1.05,                },
            { measure: 'sigma_r',         min: 29,                             },
            { measure: 'epsilon_r',       min: 500,                            },
            { measure: 'sharpi_intact',   text: 'не разбивается',              },
            { measure: 'sharpi_notched',  text: 'не разбивается',              },
            { measure: 'UL94',            text: 'ПВ‑2'                         },
            { measure: 'gwfi',            min: 850,                            },
            { measure: 'vicat',           min: 95, demand: '50 Н'              },
            { measure: 'heat_resistance', min: 2                               },
        ]
    },//}}}
    {   name:         'ob',//{{{
        hide:         true,
        shortname:    'ОБ',
        fullname:     'лента термоусаживающаяся полиэтиленовая «Прален» ОБ',
        summary:      'защитная обертка покрытий трубопроводов на основе битумно-полимерных мастик горячего нанесения',
        description:
        [
            {
                title: 'диаметр трубопровода',
                text: 'до 1420 мм включительно',
            },
            {
                title: 'конструкции нормального типа по ГОСТ 51164‑2001',
                text:  '№ 20, № 21 и № 22',
            },
            {
                title: 'конструкции усиленного типа по ГОСТ 51164‑2001',
                text:  '№ 12 и № 13',
            },
        ],
        tuno:         25,
        claims:
        [
            { measure: 'sigma_r',   min: 12.0, demand:'в продольном направлении'            },
            { measure: 'epsilon_r', min: 200,                                               },
            { measure: 'shrinkage', min: 15,   demand:'в продольном направлении при 140 °C' },

            { measure: 'aging_epsilon', opt: true, max: 10,  demand:'после 1000 ч выдержки в воде при 100 °C' },
            { measure: 'absorption',    opt: true, max: 0.5, demand:'после 1000 ч выдержки в воде при 20 °C'  },
            { measure: 'mushroom',      opt: true, min: 2,                                                    },
            { measure: 'brit_temp',     opt: true, max: -60,                                                  },
            { measure: 'gel',           opt: true, min: 30,                                                   },
        ]
    },//}}}
    {   name:         'sp',//{{{
        hide:          true,
        shortname:    'ПЭВД СП',
        fullname:     'композиция полиэтилена силанольносшиваемого «Прален» СП',
        summary:      'для изготовления защитных оболочек проводов',
        description:
        [
            {
                text: 'используется совместно с',
                link: 'kk',
            },
        ],
        tuno:         26,
        claims:
        [
            { measure: 'mfi',                min: 0.4,  demand: '190 °C; 2,16 кг' },
            { measure: 'density',            min: 0.91, max: 0.95,                },
            { measure: 'sigma_r',            min: 12.5,                           },
            { measure: 'epsilon_r',          min: 200,                            },
            { measure: 'therm_deformation',  max: 175,  demand: '200 °C; 0,2 МПа' },
            { measure: 'therm_def_residual', max: 15,   demand: '200 °C; 0,2 МПа' },

            { measure: 'absorption',       opt: true, max: 1, demand: '336 ч; 85 °C' },
            { measure: 'shrinkage',        opt: true, max: 4, demand: '1 ч; 130 °C'  },
            { measure: 'soot_content',     opt: true, min: 2.5                       },
            { measure: 'press_resistance', opt: true, min: 50, demand: '4 ч; 90 °C'  },
        ]
    },//}}}
    {   name:         'spa',//{{{
        hide:          true,
        shortname:    'ПЭВД СПА',
        fullname:     'композиция полиэтилена силанольносшиваемого «Прален» СПА',
        summary:      'для изготовления защитных оболочек проводов',
        description:
        [
            {
                text: 'используется совместно с',
                link: 'kk',
            },
        ],
        tuno:         26,
        claims:
        [
            { measure: 'mfi',                min: 0.3,  demand: '190 °C; 2,16 кг' },
            { measure: 'density',            min: 0.91, max: 0.95,                },
            { measure: 'sigma_r',            min: 12.5,                           },
            { measure: 'epsilon_r',          min: 200,                            },
            { measure: 'therm_deformation',  max: 175,  demand: '200 °C; 0,2 МПа' },
            { measure: 'therm_def_residual', max: 15,   demand: '200 °C; 0,2 МПа' },

            { measure: 'absorption',       opt: true, max: 1, demand: '336 ч; 85 °C' },
            { measure: 'shrinkage',        opt: true, max: 4, demand: '1 ч; 130 °C'  },
            { measure: 'soot_content',     opt: true, min: 2.5                       },
            { measure: 'press_resistance', opt: true, min: 50, demand: '4 ч; 90 °C'  },
        ]
    },//}}}
    {   name:         'kk',//{{{
        hide:          true,
        shortname:    'ПЭВД КК',
        fullname:     'концентрат катализатора силанольной сшивки «Прален» КК',
        summary:      'для изготовления защитных оболочек проводов',
        description:
        [
            {
                text: 'используется совместно с',
                link: 'sp',
            },
            {
                text: 'используется совместно с',
                link: 'spa',
            },
        ],
        tuno:         26,
        claims:
        [
            { measure: 'mfi',     min: 1.5,  demand: '190 °C; 2,16 кг' },
            { measure: 'density', min: 0.90, max: 0.94,                },
        ]
    },//}}}
    {   name:         'gr',//{{{
        shortname:    'ПП ГР',
        fullname:     'композиция полипропилена «Прален» ГР',
        summary:
`для производства методом литья под давлением тары для хранения и транспортировки грибов, ягод,
а также изготовления деталей конструкционного назначения в машиностроении, электротехнике, строительстве и бытовой технике`,
        description:
        [
            {
                title: 'серийные цвета',
                text:  'синий и черный',
            },
            {
                text: 'возможно изготовление в ином цвете по согласованию с заказчиком',
            },
            {
                text: 'возможно изготовление из вторичного полипропилена',
            },
        ],
        tuno:         28,
        claims:
        [
            { measure: 'mfi',           min: 3.0,  demand: '230 °C; 2,16 кг' },
            { measure: 'ash',           min: 22.5, max: 25.5,                },
            { measure: 'density',       min: 1.07, max: 1.11,                },
            { measure: 'sigma_t',       min: 19.0,                           },
            { measure: 'epsilon_r',     min: 10,                             },
            { measure: 'modulus_b',     min: 1100,                           },
            { measure: 'volatile',      min: 0.20, demand: '105 °C'          },
            { measure: 'volatile',      min: 0.40, demand: '200 °C'          },
            { measure: 'sharpi_intact', fmt: 's',  text: 'не разбивается'    },
        ]
    },//}}}
    {   name:         'eva_pe',//{{{
        shortname:    'СЭВА/ПЭ',
        fullname:     'композиция сэвиленово-полиэтиленовая «Прален» СЭВА/ПЭ',
        summary:      'для изготовления термоусаживаемых изделий: элементов изоляторов, перчаток',
        description:
        [
            {
                text: 'повышенная мягкость по сравнению с полиэтиленом',
            },
            {
                title: 'цвет',
                text:  'черный',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'mfi',       min: 3.0,  demand: '190 °C; 2,16 кг' },
            { measure: 'density',   min: 1.03, max: 1.07,                },
            { measure: 'sigma_r',   min: 8.0,                            },
            { measure: 'epsilon_r', min: 500,                            },
        ]
    },//}}}
    {   name:         'pipe_crosslinked',//{{{
        shortname:    'трубы силанольно-сшитые',
        fullname:     'силанольно-сшитые трубы «Прален»',
        summary:      'для изготовления термоусаживаемых кабельных муфт',
        description:
        [
            {
                text: 'максимальный наружный диаметр — 50 мм',
            },
            {
                text: 'не требуют облучения — химическая сшивка уже произведена',
            },
            {
                text: 'часто применяется вместе с',
                link: 'adhesive_krt',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'epsilon_r', min: 250, },
            { measure: 'gel',       min: 60,  },
            { measure: 'density',   min: 0.90, max: 0.94, },
        ]
    },//}}}
    {   name:         'pipe_tracking',//{{{
        shortname:    'трубы трекингостойкие',
        fullname:     'трекингостойкие трубы «Прален»',
        summary:      'для изготовления термоусаживаемых кабельных муфт путем радиационной сшивки',
        description:
        [
            {
                text: 'максимальный наружный диаметр — 50 мм',
            },
            {
                text: 'изготавливаются из',
                link: '113-12',
            },
            {
                text: 'часто применяется вместе с',
                link: 'adhesive_krt',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'epsilon_r', min: 250, },
        ]
    },//}}}
    {   name:         'pipe_eva_pe',//{{{
        shortname:    'трубы СЭВА/ПЭ',
        fullname:     'сэвиленово-полиэтиленовые трубы «Прален»',
        summary:      'для изготовления термоусаживаемых кабельных муфт путем радиационной сшивки',
        description:
        [
            {
                text: 'максимальный наружный диаметр — 50 мм',
            },
            {
                text: 'изготавливаются из',
                link: 'eva_pe',
            },
            {
                text: 'часто применяется вместе с',
                link: 'adhesive_krt',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'epsilon_r', min: 500, },
        ]
    },//}}}
    {   name:         'pipe_pp',//{{{
        shortname:    'ПП трубы',
        fullname:     'полипропиленовые трубы «Прален»',
        summary:      'для различных применений в промышленности',
        description:
        [
            {
                text: 'максимальный наружный диаметр — 50 мм',
            },
        ],
        tuno:         null,
        claims:
        [
        ]
    },//}}}
    {   name:         'pipe_pp_soldered',//{{{
        shortname:    'ПП трубки запаянные',
        fullname:     'полипропиленовые запаянные трубки «Прален»',
        summary:      'для ограждения термопар от пенополиуретана',
        description:
        [
            {
                text: 'наружный диаметр — 6 мм',
            },
            {
                text: 'ультразвуковая запайка одного из концов',
            },
        ],
        tuno:         null,
        claims:
        [
        ]
    },//}}}
    {   name:         'pipe_pp_channel',//{{{
        shortname:    'ПП каналы',
        fullname:     'полипропиленовые каналы «Прален»',
        summary:      'для холодильников с системой NoFrost',
        description:
        [
            {
                text: 'вариативный угол реза, стандартно — 7 °',
            },
        ],
        tuno:         null,
        claims:
        [
        ]
    },//}}}
    {   name:         'profile_glass',//{{{
        shortname:    'профиль обрамления',
        fullname:     'профиль обрамления «Прален»',
        summary:      'для обрамления стеклополок холодильников',
        description:
        [
            {
                text: 'возможен термоперевод рисунка на поверхность профиля, например металлизированный цвет',
            },
            {
                text: 'возможна высечка концов профиля',
            },
        ],
        tuno:         null,
        claims:
        [
        ]
    },//}}}
    {   name:         'msv',//{{{
        shortname:    'лента-профиль МСВ',
        fullname:     'лента-профиль «Прален» МСВ',
        summary:
`для изготовления манжет стенового ввода,
предназначенных для защиты от повреждения и гидроизоляции ППУ-трубопроводов (пенополиуретан)
при прохождении теплотрассы через железобетонные конструкции (стены, фундаменты строений, пункты ЦПТ и др.)`,
        description:
        [
            {
                text: 'возможно изготовление (пайка) манжет необходимого размера',
            },
        ],
        tuno:         null,
        claims:
        [
        ]
    },//}}}
    {   name:         'antifire',//{{{
        shortname:    'лента противопожарная',
        fullname:     'лента противопожарная терморасширяющаяся «Прален»',
        summary:
`для установки в элементах противопожарных конструкций:
противопожарных дверях, воротах, люках, противодымных клапанах, дверях лифтовых шахт,
огнестойких сейфах, фланцевых соединениях воздуховодов и иных конструкциях,
с целью предотвращения проникновения огня и дыма через проемы, щели и зазоры`,
        description:
        [
            {
                title: 'ширина',
                text:  'от 8 мм до 400 мм',
            },
            {
                title: 'толщина',
                text:  'от 2,0 мм до 4,0 мм',
            },
            {
                text: 'возможно изготовление с адгезионным слоем',
            },
            {
                text: 'возможно изготовление с армирующей сеткой',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'density',         min: 1.2, max: 1.6 },
            { measure: 'sigma_r',         min: 5.0,          },
            { measure: 'flame_expansion', min: 1500,         },
            { measure: 'flame_start',     max: 180,          },
        ]
    },//}}}
    {   name:         '107-61k',//{{{
        shortname:    'ПЭВД 107-61К',
        fullname:     'полиэтилен 107-61К ГОСТ 16336-2013',
        hit:          1,
        summary:      'композиция полиэтилена для кабельной промышленности для изоляции проводов и кабелей',
        description:
        [
            {
                text: 'стойкая к термоокислительному старению',
            },
            {
                text: 'самозатухающая',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'mfi',               min: 2.0, max: 3.0, demand: '190 °C; 2,16 кг' },
            { measure: 'density',           min: 0.960, max: 0.980                        },
            { measure: 'sigma_r',           min: 10.8,                                    },
            { measure: 'sigma_t',           min:  8.8,                                    },
            { measure: 'epsilon_r',         min: 500,                                     },
            { measure: 'UL94',              text: 'ПГ',                                   },
            { measure: 'el_rupture',        opt: true, min: 35,                                      },
            { measure: 'el_penetrability',  opt: true, demand: 'при частоте 1 МГц', max: 2.6, },
            { measure: 'tg_hz',             opt: true, demand: 'при частоте 1 МГц', max: 3 * Math.pow(10, -3), },
            { measure: 'aging_thermal',     opt: true, min: 8, },
            { measure: 'crack_resistance',  opt: true, min: 3, },
            { measure: 'thermal_stability', opt: true, min: 0.5, },
        ]
    },//}}}
    {   name:         '102-57k',//{{{
        hide:         true,
        shortname:    'ПЭВД 102-57К',
        fullname:     'полиэтилен высокого давления 102-57К',
        hit:          1,
        summary:      'для изоляции терморадиационностойких проводов и кабелей',
        description:
        [
            {
                title: 'технологичность',
                text:  'поверхность гладкая, отсутствие пор и пузырей, видимых невооружённым глазом',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'mfi',               min: 0.4, max: 0.7, demand: '190 °C; 2,16 кг' },
            { measure: 'density',           min: 0.91, max: 0.94                          },
            { measure: 'sigma_r',           min: 11.3,                                    },
            { measure: 'sigma_t',           min:  8.9,                                    },
            { measure: 'epsilon_r',         min: 550,                                     },
            { measure: 'el_rupture',        opt: true, min: 40,                                                },
            { measure: 'tg_hz',             opt: true, demand: 'при частоте 1 МГц', max: 7 * Math.pow(10, -3), },
            { measure: 'el_penetrability',  opt: true, demand: 'при частоте 1 МГц', max: 2.4,                  },
            { measure: 'brit_temp',         opt: true,  max: -70,                                              },
        ]
    },//}}}
    {   name:         'color_masterbatch',//{{{
        shortname:    'концентраты красителей',
        fullname:     'концентраты красителей «Прален»',
        hit:          1,
        summary:
`концентраты на основе полипропилена, полиэтилена, сополимера этилена и винилацетата (сэвилена)
для окрашивания полимеров при литье и экструзии`,
        description:
        [
            {
                text: 'двуокись титана',
            },
            {
                text: 'красный железоокисный',
            },
            {
                text: 'синий фталлоцианиновый',
            },
            {
                text: 'ультрамарин',
            },
            {
                text: 'сложные рецептуры смесей пигментов для окрашивания',
                link: 'matt_film_pe',
            },
            {
                text: 'другие пигменты под заказ',
            },
        ],
        tuno:         null,
        claims:
        [
            { measure: 'ash', avg: false, min: 20, max: 80 },
        ]
    },//}}}
]

product.forEach((p) => p.shortname = '«Прален» ' + p.shortname)

module.exports = product
// vim: foldmethod=marker
