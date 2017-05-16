const carousel = (node) => {
    $('.slider-big').slick({
        dots: true,
        arrows: false,
        swipeToSlide: true
    });
    $('.slider-mini').slick({
        slidesToShow: 5,
        initialSlide: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 505,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-block').slick({
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1149,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 399,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.slider-category').slick({
        slidesToShow: 6,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1218,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 656,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 472,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
}
export default carousel;
