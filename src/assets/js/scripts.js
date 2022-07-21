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

function mostrarMenu() {
    let displayMenu = document.getElementById("menu");

    if (getComputedStyle(displayMenu).display == 'none') {
        displayMenu.style.display = 'flex';
    } else {
        displayMenu.style.display = 'none';
    }

}

function mostrarPesquisa() {
    let displayPesquisa = document.getElementById("search-box");

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
function mostrarItens() {
    if (window.innerWidth > 1024) {
        document.getElementById("menu").style.display = 'flex'
        document.getElementById("search-box").style.display = 'flex'
    } else {
        document.getElementById("menu").style.display = 'none'
        document.getElementById("search-box").style.display = 'none'
    }
}

const slides = document.querySelectorAll('[data-js="banner-home"]')
const nextButton = document.querySelector('[data-js="banner_button--next"]')
const prevButton = document.querySelector('[data-js="banner_button--prev"]')

const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0 

const manipulateSlideClasses = correctSlideIndex => {
    slides.forEach(slide => slide.classList.remove('bannerVisibility'))
    slides[currentSlideIndex].classList.add('bannerVisibility')
}

nextButton.addEventListener('click', () => {

    const correctSlideIndex = currentSlideIndex === lastSlideIndex
        ? currentSlideIndex = 0
        : ++currentSlideIndex

    manipulateSlideClasses(correctSlideIndex)
} )

prevButton.addEventListener('click', () => {

    const correctSlideIndex = currentSlideIndex === 0
        ? currentSlideIndex = lastSlideIndex
        : --currentSlideIndex

    manipulateSlideClasses(correctSlideIndex)
})