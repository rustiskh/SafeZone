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
        autoplay: true,
        autoplaySpeed: 10000,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: false,
        prevArrow:
            '<button type="button" class="slick-prev"><svg width="30" height="55" viewBox="0 0 30 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 27.5121C0.00904655 28.1779 0.266644 28.8163 0.722221 29.3019L25.8429 54.4226C26.331 54.8232 26.9506 55.0279 27.5813 54.9969C28.212 54.966 28.8085 54.7015 29.255 54.255C29.7015 53.8086 29.966 53.212 29.9969 52.5813C30.0279 51.9506 29.8232 51.331 29.4226 50.8429L6.06037 27.5121L29.4226 4.18122C29.8232 3.69313 30.0279 3.0735 29.9969 2.44284C29.966 1.81218 29.7015 1.21558 29.255 0.7691C28.8085 0.32262 28.212 0.0581703 27.5813 0.027195C26.9506 -0.00377655 26.331 0.200939 25.8429 0.601521L0.722221 25.7222C0.266644 26.2079 0.00904655 26.8462 0 27.5121Z" fill="#3EDA2B"/></svg></button>',
        nextArrow:
            '<button type="button" class="slick-next"><svg width="30" height="55" viewBox="0 0 30 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 27.5121C29.991 28.1779 29.7334 28.8163 29.2778 29.3019L4.15708 54.4226C3.669 54.8232 3.04937 55.0279 2.4187 54.9969C1.78804 54.966 1.19145 54.7015 0.744968 54.255C0.298486 53.8086 0.0340383 53.212 0.00306433 52.5813C-0.0279097 51.9506 0.176805 51.331 0.577387 50.8429L23.9396 27.5121L0.577387 4.18122C0.176805 3.69313 -0.0279097 3.0735 0.00306433 2.44284C0.0340383 1.81218 0.298486 1.21558 0.744968 0.7691C1.19145 0.32262 1.78804 0.0581703 2.4187 0.027195C3.04937 -0.00377655 3.669 0.200939 4.15708 0.601521L29.2778 25.7222C29.7334 26.2079 29.991 26.8462 30 27.5121Z" fill="#3EDA2B"/></svg></button>',
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    centerMode: true,
                    infinite: true,
                    // arrows: false,
                    // slidesToShow: 3,
                    // slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
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

