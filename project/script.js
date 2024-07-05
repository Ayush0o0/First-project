//fade in eat curious
$(document).ready(function(){  
      
    $(".meat").fadeIn();  
    $("#picture").fadeIn(1000);  
    // $(".yourmind").fadeIn(5000);  
});  
// top navbar hide and show function
var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var banner = $('.nav');
  setTimeout(function(){
    if (st > lastScrollTop){
      banner.addClass('hide');
    } else {
      banner.removeClass('hide');
    }
    lastScrollTop = st;
  }, 100);
});



// bottom bar function
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", { xPercent: -100, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);


gsap.set(".marquee__inner", { xPercent: -50 });


window.addEventListener("scroll", function () {

    if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }


    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1
    });

    currentScroll = window.pageYOffset
});



// $(function () {
//     $('marquee').mouseover(function () {
//         $(this).attr('scrollamount', 10);
//     }).mouseout(function () {
//         $(this).attr('scrollamount', 0);
//     });
// });
// scroller circle
window.onscroll = function () {
    var theta = document.documentElement.scrollTop / 50 % Math.PI;

    document.getElementById('SCROLLER').style.transform = 'rotate(' + theta + 'rad)';
}
// menu slider
function opennav1() {
    document.getElementById("nav1").style.width = "450px";
    document.getElementById("nav1").style.marginLeft = "460px";
    document.getElementById("nav3").style.marginLeft = "460px";
    document.getElementById("nav4").style.marginLeft = "460px";
    document.getElementById("nav5").style.marginLeft = "460px";
    document.getElementById("nav6").style.marginLeft = "460px";
    document.getElementById("nav7").style.marginLeft = "460px";
    document.getElementById("nav8").style.marginLeft = "460px";
    document.getElementById("nav9").style.marginLeft = "460px";
    document.getElementById("nav10").style.marginLeft = "460px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav12").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav1() {
    document.getElementById("nav1").style.width = "450px";
    document.getElementById("nav1").style.marginLeft = "0";
    document.getElementById("nav3").style.marginLeft = "0";
    document.getElementById("nav4").style.marginLeft = "0";
    document.getElementById("nav5").style.marginLeft = "0";
    document.getElementById("nav6").style.marginLeft = "0";
    document.getElementById("nav7").style.marginLeft = "0";
    document.getElementById("nav8").style.marginLeft = "0";
    document.getElementById("nav9").style.marginLeft = "0";
    document.getElementById("nav10").style.marginLeft = "0";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav12").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";

}
function opennav2(){
    document.getElementById("nav3").style.width = "450px";
    document.getElementById("nav3").style.marginLeft = "460px";
    // document.getElementById("nav4").style.marginLeft = "0";
    document.getElementById("nav5").style.marginLeft = "460px";
    document.getElementById("nav6").style.marginLeft = "460px";
    document.getElementById("nav7").style.marginLeft = "460px";
    document.getElementById("nav8").style.marginLeft = "460px";
    document.getElementById("nav9").style.marginLeft = "460px";
    document.getElementById("nav10").style.marginLeft = "460px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav12").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav2(){
    document.getElementById("nav3").style.width = "450px";
    document.getElementById("nav3").style.marginLeft = "0";
    // document.getElementById("nav4").style.marginLeft = "0";
    document.getElementById("nav5").style.marginLeft = "0";
    document.getElementById("nav6").style.marginLeft = "0";
    document.getElementById("nav7").style.marginLeft = "0";
    document.getElementById("nav8").style.marginLeft = "0";
    document.getElementById("nav9").style.marginLeft = "0";
    document.getElementById("nav10").style.marginLeft = "0";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav12").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";
}
function opennav3(){
    document.getElementById("nav5").style.width = "450px";
    document.getElementById("nav5").style.marginLeft = "460px";
    document.getElementById("nav7").style.marginLeft = "460px";
    document.getElementById("nav8").style.marginLeft = "460px";
    document.getElementById("nav9").style.marginLeft = "460px";
    document.getElementById("nav10").style.marginLeft = "460px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav12").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav3(){
    document.getElementById("nav5").style.width = "450px";
    document.getElementById("nav5").style.marginLeft = "0";
    document.getElementById("nav7").style.marginLeft = "0";
    document.getElementById("nav8").style.marginLeft = "0";
    document.getElementById("nav9").style.marginLeft = "0";
    document.getElementById("nav10").style.marginLeft = "0";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav12").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";
}
function opennav4(){
    document.getElementById("nav7").style.width = "450px";
    document.getElementById("nav7").style.marginLeft = "460px";
    document.getElementById("nav9").style.marginLeft = "460px";
    document.getElementById("nav10").style.marginLeft = "460px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav12").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav4(){
    document.getElementById("nav7").style.width = "450px";
    document.getElementById("nav7").style.marginLeft = "0";
    document.getElementById("nav8").style.marginLeft = "0";
    document.getElementById("nav9").style.marginLeft = "0";
    document.getElementById("nav10").style.marginLeft = "0";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav12").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";
}
function opennav5(){
    document.getElementById("nav9").style.width = "450px";
    document.getElementById("nav9").style.marginLeft = "460px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav12").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav5(){
    document.getElementById("nav9").style.width = "450px";
    document.getElementById("nav9").style.marginLeft = "0";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav12").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";
}
function opennav6(){
    document.getElementById("nav11").style.width = "450px";
    document.getElementById("nav11").style.marginLeft = "460px";
    document.getElementById("nav13").style.marginLeft = "460px";
    document.getElementById("nav14").style.marginLeft = "460px";
}
function closenav6(){
    document.getElementById("nav11").style.width = "450px";
    document.getElementById("nav11").style.marginLeft = "0";
    document.getElementById("nav13").style.marginLeft = "0";
    document.getElementById("nav14").style.marginLeft = "0";
}
function opennav7(){
    document.getElementById("nav13").style.width = "450px";
    document.getElementById("nav13").style.marginLeft = "460px";
    
}
function closenav7(){
    document.getElementById("nav13").style.width = "450px";
    document.getElementById("nav13").style.marginLeft = "0";

}

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll !==1080) {
//             $(".nav a").css("color" , "black");  	
//             $(".nav a").css("color" , "white");  	
//         }
        
//         else{
//             $(".nav a").css("color" , "white");
//         }
//     })
//   })