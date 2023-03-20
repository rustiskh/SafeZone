window.addEventListener("DOMContentLoaded", () => {
    // $(".usage__card-wrapper").slick({
    //     responsive: [
    //         {
    //             breakpoint: 10000,
    //             settings: "unslick",
    //         },
    //         {
    //             breakpoint: 1190,
    //             settings: {
    //                 variableWidth: true,
    //                 centerMode: true,
    //                 arrows: false,
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 // dots: true,
    //                 // adaptiveHeight: true,
    //                 infinite: false,
    //                 // initialSlide: 1
    //             },
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 variableWidth: true,
    //                 centerMode: true,
    //                 arrows: false,
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //                 // adaptiveHeight: true,
    //                 infinite: false,
    //                 // initialSlide: 1
    //             },
    //         },
    //     ],
    // });

    $(".main-slider__wrapper").slick({
        arrows: false,
        // centerMode: true,
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

    });

    $(".game__slider-wrapper").slick({
        arrows: true,
        // centerMode: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: false,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="assets/icons/sliders/icon-slider-arrow-left.svg"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="assets/icons/sliders/icon-slider-arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    centerMode: true,
                    infinite: true,
                    arrows: false,
                    // slidesToShow: 3,
                    // slidesToScroll: 3,
                },
            },
        ]
    });

    $(".game-currency__slider-wrapper").slick({
        arrows: false,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 769,
                settings: "unslick",
            },
        ]
    });

    //слайдеры на странице game-page

    $(".guide-game__wrapper").slick({
        responsive: [
            {
                breakpoint: 10000,
                settings: "unslick",
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: false,
                },
            },
        ],
    });

    $(".game-review__wrapper").slick({
        arrows: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/pages/game/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/pages/game/arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    arrows: false,
                },
            },
        ]
    });

    // Слайдер на странице Статья блога
    $(".other-articles__wrapper").slick({
        arrows: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/pages/game/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/pages/game/arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    arrows: false,
                },
            },
        ]
    });
});

