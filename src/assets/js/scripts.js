const { escapeSelector } = require("jquery");

$(document).ready(function () {

    var isLargeWindow;

    $(window).on('resize', function () {
        isLargeWindow = $(this).width() > 1024;
    });

    var isMediumWindow;

    $(window).on('resize', function () {
        isMediumWindow = $(this).width() > 830;
    });

    $("#inst").click(function () {
        if (isMediumWindow) {
            $("#inst2").css({ "flex-direction": "column", });
            $("#inst2").css('display', 'flex');
        } else {
            $("#inst2").stop().slideToggle();
        }
    })

    $("#depart").click(function () {
        if (isMediumWindow) {
            $("#depart2").css('flex-direction', 'column');
            $("#depart2").css('display', 'flex');
        } else {
            $("#depart2").stop().slideToggle();
        }
    })

    $("#accou").click(function () {
        if (isMediumWindow) {
            $("#accou2").css('flex-direction', 'column');
            $("#accou2").css('display', 'flex');
        } else {
            $("#accou2").stop().slideToggle();
        }
    })

    $("#atend").click(function () {
        if (isMediumWindow) {
            $("#atend2").css('flex-direction', 'column');
            $("#atend2").css('display', 'flex');
        } else {
            $("#atend2").stop().slideToggle();
        }
    })


});

window.addEventListener("resize", mostrarItens)

function mostrarItens() {
    if (window.innerWidth > 1024) {
        document.getElementById("menu").style.display = 'flex'
        document.getElementById("search-box").style.display = 'flex'
    }

}   

window.addEventListener('load', (event) => {

    document.getElementById('menu-icon').addEventListener('click', mostrarMenu)

    function mostrarMenu() {
        let displayMenu = document.getElementById("menu");

        if (getComputedStyle(displayMenu).display == 'none') {
            displayMenu.style.display = 'flex';
        } else {
            displayMenu.style.display = 'none';
        }

    }

    var displayPesquisa = document.getElementById("search-box");
    document.getElementById('search-icon').addEventListener('click', mostrarPesquisa)

    function mostrarPesquisa() {
        if (window.innerWidth < 1024) {
            if (getComputedStyle(displayPesquisa).display == 'none') {
                if (window.innerWidth < 560) {
                    displayPesquisa.style.display = 'flex';
                    document.getElementById("icon-logo").style.display = 'none';
                } else {
                    displayPesquisa.style.display = 'flex';
                }
            } else {
                if (window.innerWidth < 560) {
                    document.getElementById("icon-logo").style.display = 'flex';
                    displayPesquisa.style.display = 'none';
                } else {
                    displayPesquisa.style.display = 'none';
                }
            }
        }
    }


    const slides = document.querySelectorAll('[data-js="banner-home"]')
    document.getElementById("banner_button--next").addEventListener("click", nextSlide)
    document.getElementById("banner_button--prev").addEventListener("click", prevSlide)


    const lastSlideIndex = slides.length - 1
    let currentSlideIndex = 0

    function nextSlide() {

        if (currentSlideIndex === lastSlideIndex) {
            currentSlideIndex = 0
        } else {
            currentSlideIndex++
        }

        slides.forEach(slide => {
            slide.classList.remove('bannerVisibility')
        })

        slides[currentSlideIndex].classList.add('bannerVisibility')

    }

    function prevSlide() {

        if (currentSlideIndex === 0) {
            currentSlideIndex = lastSlideIndex
        } else {
            currentSlideIndex--
        }

        slides.forEach(slide => {
            slide.classList.remove('bannerVisibility')
        })

        slides[currentSlideIndex].classList.add('bannerVisibility')
    }
})