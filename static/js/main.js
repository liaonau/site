(function($)
{
    "use strict"
    const util =
    {
        numericStringMask: function(str, mask)
        {
            if (!mask) return str
            const numeric = str.replaceAll(/[^\d]/g, '')
            let idx = 0
            const formated = mask.split('').map(el =>
                {
                    if (el === '#')
                    {
                        el = numeric[idx]
                        idx++
                    }
                    return el
                })
            return formated.join('');
        },
    }
    const exes =
    {
        agetostr: function()
        {
            var years = document.getElementsByClassName('year-plural')
            for (let year of years)
            {
                let txt, count = year.innerText % 100
                count >= 5 && count <= 20 ? txt = 'лет' : count = count % 10, count == 1 ? txt = 'год' : (count >= 2 && count <= 4) ? txt = 'года' : txt = 'лет';
                year.innerText = txt
            }
        },
        phone_format: function()
        {
            var phones = document.getElementsByClassName('phone')
            for (let phone of phones)
            {
                let mask = '### (##) ### ## ##'
                if (phone.classList.contains("phone-city"))
                    mask = '### (###) ## ## ##'
                phone.innerText = '+'+util.numericStringMask(phone.innerText, mask)
            }
        },
        spinner: function()
        {
            setTimeout(function()
                {
                    if ($('#spinner').length > 0)
                        $('#spinner').removeClass('show')
                }, 1);
        },
        backtotop: function()
        {
            $('.back-to-top').hide()
            $(window).scroll(function()
                {
                    if ($(this).scrollTop() > 300)
                        $('.back-to-top').fadeIn('slow')
                    else
                        $('.back-to-top').fadeOut('slow')
                })
            $('.back-to-top').click(function()
                {
                    $('html, body').animate({scrollTop: 0}, 1, 'easeInOutExpo')
                    return false
                })
        },
        shadownavbar: function()
        {
            $(window).scroll(function()
            {
                if ($(this).scrollTop() > 300)
                    $('.sticky-top').addClass('shadow')
                else
                    $('.sticky-top').removeClass('shadow')
            })
        },
        modalvideo: function()
        {
            var $videoSrc
            $('.btn-youtube').click(function()
                {
                    $videoSrc = $(this).data("src")
                    $('.btn-youtube').css('display', 'none')
                }
            )
            $('#videoModal').on('shown.bs.modal', function(e)
                {
                    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
                }
            )
            $('#videoModal').on('hide.bs.modal', function(e)
                {
                    $("#video").attr('src', $videoSrc)
                    $('.btn-youtube').css('display', 'block')
                }
            )
        },
        factscounter: function()
        {
            $('[data-toggle="counter-up"]').counterUp(
            {
                delay: 5,
                time:  1500,
            })
        },
        gallery: function()
        {
            let popup_props =
            {
                delegate:    'a',
                type:        'image',
                key:         'image-popup',
                tLoading:    'загружается изображение #%curr%…',
                mainClass:   'mfp-img-mobile',
                closeMarkup: '<button title="Закрыть (Esc)" type="button" class="mfp-close">&#215;</button>',
                gallery:
                {
                    enabled:            true,
                    navigateByImgClick: true,
                    preload:            [0, 1],
                    tPrev:              'Предыдущее',
                    tNext:              'Следующее',
                    tCounter:           '<span class="mfp-counter">%curr% из %total%</span>',
                },
                image:
                {
                    cursor:      'mfp-pointer-cur',//'mfp-zoom-out-cur',
                    verticalFit: true,
                    tError:      '<a href="%url%">изображение</a> не удалось загрузить.'
                },
            }
            $('.popup-gallery').magnificPopup(Object.assign(popup_props, {closeOnContentClick: true}))
            $('.popup-gallery-single').magnificPopup(popup_props)
        },
        copy_click: function()
        {
            $('.copy').on('click', function(e)
                {
                    let a = this.parentElement.getElementsByClassName('copy-source')[0]
                    if (a && typeof a !== 'undefined')
                    {
                        let data = a.href
                        if (typeof data === 'undefined')
                            data = a.innerText
                        else
                            data = data.replace(/^[^:]+:/, '')
                        navigator.clipboard.writeText(data)
                        this.animate(
                            [
                                { transform: "scale(0.5)" },
                                { transform: "scale(1.0)" },
                            ],
                            {
                                duration:   500,
                                iterations: 1,
                            },
                        )
                    }
                })
        },
        apply_settings: function()
        {
            const wow = new WOW(
            {
                boxClass:     'wowreal',
                animateClass: 'animated',
                offset:       0,
                mobile:       true,
                live:         true,
            })
            wow.init()
            let is_wow_started = true

            $('#settingsButton').click(() => $('#settingsButton').hide())

            const changes = function(isInitCall)
            {
                if (Cookies.get('nopin'))
                    $('#navbar').removeClass('sticky-top')
                else
                    $('#navbar').addClass('sticky-top')

                if (Cookies.get('nowow'))
                {
                    $('.wow').removeClass('wowreal')
                    if (is_wow_started && !isInitCall)
                    {
                        wow.resetStyle()
                        wow.stop()
                    }
                    is_wow_started = false
                }
                else
                {
                    $('.wow').addClass('wowreal')
                    if (!is_wow_started && !isInitCall)
                    {
                        wow.start()
                        wow.scrollHandler()
                    }
                    is_wow_started = true
                }

                setTimeout(() => $('#settingsButton').show(), 50)
            }

            $('#settingsModal').on('hidden.bs.modal', function(event)
            {
                if ($('#pinSwitch').is(':checked'))
                    Cookies.remove('nopin')
                else
                    Cookies.set('nopin', 'true')

                if ($('#wowSwitch').is(':checked'))
                    Cookies.remove('nowow')
                else
                    Cookies.set('nowow', 'true')

                changes()
            })

            $('#pinSwitch').prop('checked', Cookies.get('nopin') ? false : true)
            $('#wowSwitch').prop('checked', Cookies.get('nowow') ? false : true)
            changes(true)
        },
        formpost: function()
        {
            $(document).ready(function()
            {
                let info = function(data, clear)
                {
                    if (clear)
                    {
                        $('#name').val(null)
                        $('#email').val(null)
                        $('#subject').val(null)
                        $('#message').val(null)
                    }
                    let toast = $("#toast")
                    $("#toast-text").text(data.responseText)
                    toast.toast(
                    {
                        autohide: true,
                        delay:    1500,
                    })
                    toast.toast('show')
                }

                let frm  = $("form#form")
                frm.submit(function()
                {
                    if (!frm[0].checkValidity())
                        return false
                    let n = $('#name').val()
                    let e = $('#email').val()
                    let s = $('#subject').val()
                    let m = $('#message').val()

                    if (n && e && s && m)
                    {
                        $.ajax(
                        {
                            type: "POST",
                            url: "/mail",
                            data: "name=" + n + "&email=" + e + "&subject=" + s + "&message=" + m,
                            error:   function(data) { info(data, false) },
                            success: function(data) { info(data, true)  },
                        })
                    }
                    return false
                })
            })
        },
        accordition_toggle: function()
        {
            const acc = $('#requisite-toggle')
            const acctg = function()
            {
                acc.toggleClass("active")
                acc.text(acc.hasClass("active") ? "Показать" : "Скрыть")
            }
            acc.click(acctg)
            acctg()
        },
        data_href: function()
        {
            $('*[data-href]').on('click', function()
            {
                $([document.documentElement, document.body]).animate(
                {
                    scrollTop: $($(this).data("href")).offset().top
                }, 1)
            })
        },
    }
    Object.values(exes).map((fn) => fn())
})(jQuery)
