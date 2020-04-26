window.addEventListener("load", () => {
    const load = document.querySelector(".lds-dual-ring");
    load.classList.add("finish-load");
});

$(function (){
    // Links Add Active Class
    $(".nav-item").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    navText: [
        "<i class='fas fa-chevron-left'>",
        "<i class='fas fa-chevron-right'>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Add Nice Scroll
$(function() {  
    $("html").niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: "none",
        zindex: 99,
        hwacceleration: true,
    });
});

$(function() {  
    var mixer = mixitup('.gallery');
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

    $("#shuffle li").click(function (){
        $(this).addClass("active").siblings().removeClass("active");
    });
});

// Scroll Up
$(document).ready(function(){
    const scrollBtn = $("#scroll-up");
    // On window Scrolling
    $(window).scroll(function(){
        $(this).scrollTop() >= 300 ? scrollBtn.fadeIn(500) : scrollBtn.fadeOut(500);
    });
    scrollBtn.click(function(){
        $("html, body").animate({ scrollTop : 0}, 1000);
    });
});

