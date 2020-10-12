/*global $,window,document */
$(document).ready(function () {
    "use strict";

    $('.carousel').carousel({
        interval: 4000
    });
});
    //Nice Scroll
    $("body").niceScroll()
//** Start hidden section Features & show when reach to 1000px */
$(window).scroll(function () {
    "use strict";
    var displayFeat = $('.feat'), colorLi = $('.color-option ul li');

    // if ($(window).scrollTop() >= 1100 || $(window).scrollTop() >= 1000) {
    //     displayFeat.fadeIn(600);
    // } else {
    //     displayFeat.fadeOut(1000);
    // }
//****End hidden section Features & show when reach to 1000px ****/

//**Start Show Color Option Div When Click on the Gear */
    $('.gear-check').click(function () {
        $('.color-option').toggle();
    });
//**End Show Color Option Div When Click on the Gear */

//**** Change Color theme on Click *****/
    colorLi
        .eq(0).css('backgroundColor', '#E41817').end()
        .eq(1).css('backgroundColor', '#0895D1').end()
        .eq(2).css('backgroundColor', '#0EE681').end()
        .eq(3).css('backgroundColor', '#F1E31B').end()
        .eq(4).css('backgroundColor', '#BE8CD1');
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
});

/** Scroll To Top */
var scrollButton = $('#scroll-top');
$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 2000) {
        scrollButton.fadeIn(400);
    } else {
        scrollButton.fadeOut(400);
    }
});
scrollButton.click(function () {
    "use strict";
    $('html,body').animate({scrollTop: 0}, 2000);
});
//Loading Screen
$(window).on('load', function () {//الفانكشن دى هتشتغل بعد ما كل حاجه تحمل في الصفحه
    "use strict";
    //Loading Elements
    $(".loading-overlay .sk-cube-grid").fadeOut(3000, function () {
        //show scroll
        $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});
//الكود المختصر
// css من ملف over-flow:hidden لازم امسح
// $(window).on('load',function(){
//   //Loading Elements
//   $(".loading-overlay, .sk-cube-grid").fadeOut(4000)
// });