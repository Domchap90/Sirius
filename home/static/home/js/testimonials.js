
    bulmaCarousel.attach('#testimonial_carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        breakpoints: [{
            changePoint: 1023,
            slidesToShow: 1,
            slidesToScroll: 1
        },
        {
            changePoint: 1500,
            slidesToShow: 2,
            slidesToScroll: 0
        }
        ]
    });

    const carouselItems = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < carouselItems.length; i++) {
        console.log("carousel item: ", carouselItems.item(i).classList)
        if (i % 2 == 0) {
            carouselItems.item(i).classList.add("green");
        } else {
            carouselItems.item(i).classList.add("red");
        }
    }
