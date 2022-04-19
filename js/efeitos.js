$(document).ready(function() {
    // função de colocar o header ou a barra fixa
    // função de colocar o header ou a barra fixa
    $(window).scroll(function() {
        if ($(this).scrollTop() > 158) {
            $('header').each(function() {
                $(this).addClass("header_fixo")
            });
            $('.barra-fixa').each(function() {
                $(this).addClass("fixo")
            });
        } else {
            $('header').each(function() {
                $(this).removeClass("header_fixo")
            });
            $('.barra-fixa').each(function() {
                $(this).removeClass("fixo")
            });
        };
    });
    $(window).scroll();

    // Inicia os Efeitos de rolagem.
    // Inicia os Efeitos de rolagem.
    AOS.init();

    // Header fixo.
    // Header fixo.
    $(window).scroll(function() {
        if ($(this).scrollTop() > 171) {
            $('.header').each(function() {
                $(this).addClass(".header_fixo")
            })
        } else {
            $('.header').each(function() {
                $(this).removeClass(".header_fixo")
            })
        };
    });
    $(window).scroll();

    // Scroll
    // Scroll
    $(function() {
        // Select all links with hashes
        $('a[href*="#"].scroll, a[href*="#"].scroll2')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });


        if (window.location.href.indexOf("#autoscroll-in-") > -1) {
            hrefScroll = window.location.href;
            hrefScroll = hrefScroll.replace("#autoscroll-in-", "#");
            hrefScroll = hrefScroll.substr(hrefScroll.indexOf("#"), hrefScroll.length);
            if (document.querySelectorAll("a[href='" + hrefScroll + "']").length) {
                document.querySelectorAll("a[href='" + hrefScroll + "']")[0].click();
            }
        }


    });
    var hrefScroll;
});