$('#bannerslide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2.2
        },
        600:{
            items:3.2
        },
        1000:{
            items:5
        }
    }
})

$('#testimonialslide, .category-slide, #styleslide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
    responsive:{
        0:{
            items:1.2
        },
        600:{
            items:2.2
        },
        1000:{
            items:3
        }
    }
})



