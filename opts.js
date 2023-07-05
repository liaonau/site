const opts =
{
    base_url: 'https://npf-pride.by',
    og:
    {
        title_default: 'Прайд — полимерные композиционные материалы «Прален»',
        image_default: '/img/pride/pride.og.jpg',
        image_size:    1280,

        keywords:
        [
            'Прайд', 'Новополоцк', 'Прален', 'Беларусь', 'полимеры',
            'композиционные материалы', 'полиэтилен', 'полипропилен',
            'антикоррозионная защита', 'матированные пленки',
        ],
        description_default: 'Производитель полимерных композитов, антикоррозионной защиты трубопровода, матированных пленок.',
        description_suffix:  ' ООО «Производственная фирма «Прайд». Новополоцк, Беларусь.',
    },

    author: 'Роман Леонов',
    pride:  'ООО «Производственная фирма «Прайд»',
    pralen: '«Прален»',

    tucode: '300042543',

    mail:  'npf_pride@mail.ru',
    phone: '+375214507017',
    phones:
    [
        '+375214507017',
        '+375214525537',
        '+375214527770',
    ],

    address: '211440, ул. Ктаторова, 24А, г. Новополоцк,  Витебская обл., Республика Беларусь',

    hours:
    {
        text:   'Время работы',
        start:  '08:00',
        finish: '16:00',
        phone:  '+375214507339',
    },

    map:
    {
        google_map_embed: 'pb=!1m18!1m12!1m3!1d2257.9923332619005!2d28.622829744654556!3d55.53250280000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c485048563281f%3A0x5af7e0315df3ec7f!2z0J7QntCeIMKr0J_RgNC-0LjQt9Cy0L7QtNGB0YLQstC10L3QvdCw0Y8g0YTQuNGA0LzQsCDCq9Cf0YDQsNC50LTCuw!5e0!3m2!1sru!2sby!4v1679422228257!5m2!1sru!2sby',
        google_map_link:  'AoCn8aGGJ1rtz3RE6',
        yandex_map_link:  'CCUS4LdP3B',
    },

    facts:
    {
        grades:  "50",
        clients: "100",
        powers:  "6000",
    },

    video:
    [
        {
            thumb: 'video1.jpg',
            title: '«Звязда», 06.10.2022',
            src:   "ybrPl-w2o4Q",
            //src:   "xvFZjo5PgG0",
        },
        {
            thumb: 'video2.jpg',
            title: '«Саммит», 26.12.2018',
            src:   "RXhFw53Ohi4",
        },
    ],
}

module.exports = opts
