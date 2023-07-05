const measure =
[
    { name: 'absorption',          fmt: '.2f', text: 'Водопоглощение в холодной воде',                            unit: 'мг'                },
    { name: 'adhesion_peel_glass', fmt:   'd', text: 'Прочность связи при отслаивании от стеклопластика',         unit: 'Н/см'              },
    { name: 'adhesion_peel_pe',    fmt:   'd', text: 'Прочность связи при отслаивании от полиэтилена',            unit: 'Н/см'              },
    { name: 'adhesion_peel_steel', fmt:   'd', text: 'Прочность связи при отслаивании от стали',                  unit: 'Н/см'              },
    { name: 'adhesion_shift_pe',   fmt:   'd', text: 'Прочность клеевого соединения при сдвиге от полиэтилена',   unit: 'Н/см<sup>2</sup>'  },
    { name: 'aging_epsilon',       fmt:   'd', text: 'Изменение относительного удлинения при разрыве',            unit: '%'                 },
    { name: 'aging_photo',         fmt:   'd', text: 'Стойкость к фотоокислительному старению',                   unit: 'ч'                 },
    { name: 'aging_thermal',       fmt:   'd', text: 'Стойкость к термоокислительному старению',                  unit: 'ч'                 },
    { name: 'thermal_stability',   fmt: '.1f', text: 'Термостабильность',                                         unit: 'ч'                 },
    { name: 'ash',                 fmt: '.1f', text: 'Содержание наполнителя',                         avg: true, unit: '%'                 },
    { name: 'brit_temp',           fmt:   'd', text: 'Температура хрупкости',                                     unit: '°C'                },
    { name: 'cathode',             fmt:   'd', text: 'Катодное отслаивание',                                      unit: 'см<sup>2</sup>'    },
    { name: 'crack_resistance',    fmt:   'd', text: 'Стойкость к растрескиванию',                                unit: 'ч'                 },
    { name: 'density',             fmt: '.2f', text: 'Плотность',                                      avg: true, unit: 'г/см<sup>3</sup>'  },
    { name: 'destruction_b',       fmt:   'd', text: 'Разрушающее напряжение при изгибе',                         unit: 'МПа'               },
    { name: 'el_penetrability',    fmt: '.1f', text: 'Диэлектрическая проницаемость',                             unit: ''                  },
    { name: 'el_rupture',          fmt:   'd', text: 'Электрическая прочность при переменном (50 Гц) напряжении', unit: 'кВ/мм'             },
    { name: 'el_surf_resistance',  fmt:   'p', text: 'Удельное поверхностное сопротивление',                      unit: 'Ом'                },
    { name: 'el_vol_resistance',   fmt:   'p', text: 'Удельное объемное сопротивление',                           unit: 'Ом·см'             },
    { name: 'epsilon_r',           fmt:   'd', text: 'Относительное удлинение при разрыве',                       unit: '%'                 },
    { name: 'epsilon_t',           fmt:   'd', text: 'Относительное удлинение на пределе текучести',              unit: '%'                 },
    { name: 'flammability',        fmt:   'd', text: 'Горючесть',                                                 unit: '%·см'              },
    { name: 'gel',                 fmt:   'd', text: 'Содержание гель‑фракции',                                   unit: '%'                 },
    { name: 'gloss',               fmt: '.1f', text: 'Коэффициент блеска поверхности',                            unit: 'единица'           },
    { name: 'gwfi',                fmt:   'd', text: 'Индекс горючести раскаленной проволокой (GWFI)',            unit: '°C'                },
    { name: 'gwit',                fmt:   'd', text: 'Температура воспламенения раскаленной проволокой (GWIT)',   unit: '°C'                },
    { name: 'HDT',                 fmt:   'd', text: 'Температура тепловой деформации',                           unit: '°C'                },
    { name: 'heat_resistance',     fmt:   'd', text: 'Теплостойкость (глубина продавливания)',                    unit: 'мм'                },
    { name: 'mfi',                 fmt: '.1f', text: 'Показатель текучести расплава',                             unit: 'г/10 мин'          },
    { name: 'modulus_b',           fmt:   'd', text: 'Модуль упругости при изгибе',                               unit: 'МПа'               },
    { name: 'modulus_e',           fmt:   'd', text: 'Модуль упругости при растяжении',                           unit: 'МПа'               },
    { name: 'moisture',            fmt: '.2f', text: 'Массовая доля влаги',                                       unit: '%'                 },
    { name: 'mushroom',            fmt:   'd', text: 'Грибостойкость',                                            unit: 'балл'              },
    { name: 'press_resistance',    fmt:   'd', text: 'Стойкость к продавливанию при воздействии температуры',     unit: '%'                 },
    { name: 'rab',                 fmt:   'd', text: 'Температура размягчения методом кольца и шара',  avg: true, unit: '°C'                },
    { name: 'sharpi_intact',       fmt: '.1f', text: 'Ударная вязкость по Шарпи, без надреза',                    unit: 'кДж/м<sup>2</sup>' },
    { name: 'sharpi_notched',      fmt: '.1f', text: 'Ударная вязкость по Шарпи, с надрезом',                     unit: 'кДж/м<sup>2</sup>' },
    { name: 'shrinkage_mold',      fmt: '.1f', text: 'Линейная усадка в форме',                                   unit: '%'                 },
    { name: 'shrinkage',           fmt:   'd', text: 'Усадка',                                                    unit: '%'                 },
    { name: 'sigma_r',             fmt: '.1f', text: 'Прочность при разрыве',                                     unit: 'МПа'               },
    { name: 'sigma_r_N',           fmt:   'd', text: 'Прочность при разрыве в продольном направлении',            unit: 'Н'                 },
    { name: 'sigma_t',             fmt: '.1f', text: 'Предел текучести при растяжении',                           unit: 'МПа'               },
    { name: 'soot_content',        fmt:   'd', text: 'Содержание технического углерода',                          unit: '%'                 },
    { name: 'spectral_reflectance',fmt:   's', text: 'Спектральные коэффициенты отражения',                       unit: ''                  },
    { name: 'tear_resistance',     fmt: '.1f', text: 'Сопротивление к раздиру',                                   unit: 'Н'                 },
    { name: 'ter',                 fmt:   'd', text: 'Трекинго‑эррозионная стойкость',                            unit: 'класс'             },
    { name: 'tg_hz',               fmt:   'p', text: 'Тангенс угла диэлектрических потерь',                       unit: ''                  },
    { name: 'therm_deformation',   fmt:   'd', text: 'Тепловая деформация',                                       unit: '%'                 },
    { name: 'therm_def_residual',  fmt:   'd', text: 'Остаточное относительное удлинение',                        unit: '%'                 },
    { name: 'thickness',           fmt: '.1f', text: 'Толщина',                                                   unit: 'мм'                },
    { name: 'track',               fmt:   'd', text: 'Трекингостойкость',                              avg: true, unit: 'B'                 },
    { name: 'UL94',                fmt:   's', text: 'Стойкость к горению',                                       unit: 'категория'         },
    { name: 'vicat',               fmt:   'd', text: 'Температура размягчения по Вика',                           unit: '°C'                },
    { name: 'viscosity_b',         fmt:   'd', text: 'Вязкость по Брукфильду',                                    unit: 'мПа·с'             },
    { name: 'volatile',            fmt: '.2f', text: 'Массовая доля летучих веществ',                             unit: '%'                 },
    { name: 'width',               fmt:   'd', text: 'Ширина',                                                    unit: 'мм'                },
    { name: 'flame_expansion',     fmt:   'd', text: 'Степень термического расширения',                           unit: '%'                 },
    { name: 'flame_start',         fmt:   'd', text: 'Температура начала температурного расширения',              unit: '°C'                },
]

module.exports = measure
// vim: foldmethod=marker
