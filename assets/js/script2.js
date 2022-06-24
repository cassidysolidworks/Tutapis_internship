$(document).ready(function(){
    
const menuBtn = $('.menu-btn');
let menuOpen = false;
menuBtn.click(function() {
    if(!menuOpen){
        menuBtn.addClass('open');
        $('.nav-sm').animate({left: '0px'});
        menuOpen = true;
    }else{
        menuBtn.removeClass('open');
        $('.nav-sm').animate({left: '-300px'});
        menuOpen = false;
    }
})

let sideClose = $('.close');
sideClose.click(function(){
     menuBtn.removeClass('open');
        $('.nav-sm').animate({left: '-300px'});
        menuOpen = false;
})



// // Sticky Navbar

$(window).on('scroll', function (){
    let navigation = $('#navbar');
   if($(document).scrollTop() >= 1){
       navigation.addClass('sticky');
   }else{
       navigation.removeClass('sticky')
   }

// Scroll Top

   if(!($(document).scrollTop() >= $(window).height())){
    $(".scrollup").fadeOut();
   }else{
    $(".scrollup").fadeIn();
   }
});


// let h =$('.navbar').height();
// alert(h)
   


// Banner section 
// let slides = $('.slide');
// const slideArr = slides.toArray();

// let index = 0;


// function sliderfunction(){
//     let currentSlide = slideArr[index];
//     console.log(currentSlide);
//     if(index >= slideArr.length - 1){
//         index = 0;
//     }else{
//         index++;
//     }
// }

// setInterval(sliderfunction, 3000);



// function printme(){
//     let output = $('.output');
//     output.innerHTML += text[index] + "<br>";
//     if(index >= text.length - 1){
//         index = 0;
//     }else{
//         index++;
        
//     }
// }



//Owl Carousel

$("#intern-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: false,
    autoWidth: false,
    items: 3,
    singleItem: true,
    autoplayHoverPause: true,
    smartSpeed: 3000,
    responsive:{
        320:{
            items: 1
        },
        730:{
            items: 2
        },
        1085:{
            items: 3
        }
    }

    // responsive: responsive

});

$("#team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: false,
    autoWidth: false,
    items: 3,
    singleItem: false,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
        320:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
   

});


//FAQs





//App banner
let bannerOverLay = ' <div class="app-banner-overlay w-100">  ' +
'<div class="blinks-left" style="top: 90%; right: 1%; animation-delay: 1s;"></div> ' +
'<div class="blinks-right" style="top: 80%; right: 20%; animation-delay: 2.0s;"></div> ' +
'<div class="blinks-left" style="top: 30%; right: 5%; animation-delay: 2.5s;"></div> ' +
'<div class="blinks-left" style="top: 30%; right: 23%; animation-delay: 3.0s;"></div> ' +
'<div class="blinks-static" style="top: 50%; right: 12%; animation-delay: 3.0s;"></div> ' +

' <div class="blinks-right" style="top: 90%; left: 1%; animation-delay: 1s;"></div> ' +
' <div class="blinks-left" style="top: 80%; left: 20%; animation-delay: 2.0s;"></div> ' +
' <div class="blinks-right" style="top: 30%; left: 5%; animation-delay: 2.5s;"></div> ' +
' <div class="blinks-right" style="top: 30%; left: 23%; animation-delay: 3.0s;"></div> ' +
 '<div class="blinks-static" style="top: 50%; left: 12%; animation-delay: 3.0s;"></div> ' +


'<div class="blinks-right" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-left" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-up" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-down" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-static" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +



'<div class="blinks-right-middle" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-left-middle" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-up-middle" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-down-middle" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +


'<div class="blinks-right-far" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-left-far" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-up-far" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'<div class="blinks-down-far" style="top: 50%; right: 50%; animation-delay: 4s;"></div> ' +
'</div>';

$('.app-banner').html(bannerOverLay);


})
