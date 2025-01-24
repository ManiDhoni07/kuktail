$('#bannerslide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayTimeout:2000,
    slideTransition: 'linear',
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
    nav:true,
    autoplay:false,
    responsive:{
        0:{
            items:1.2,
            nav:false
        },
        600:{
            items:2.2
        },
        1000:{
            items:3
        }
    }
})


document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.querySelector("[data-bs-toggle='offcanvas']");
    let offcanvasElement = document.getElementById("navbarNav");

    offcanvasElement.addEventListener("hide.bs.offcanvas", function () {
        toggleButton.classList.remove("active"); 
    });

    offcanvasElement.addEventListener("show.bs.offcanvas", function () {
        toggleButton.classList.add("active"); 
    });


    let lastScrollTop = 0;
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 150) {
            header.classList.remove("sticky");
        } else if (scrollTop < lastScrollTop && scrollTop > 150) {
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }

        lastScrollTop = scrollTop;
    });
});



