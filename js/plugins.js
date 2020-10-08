$(document).ready(function(){
  $('.carousel').carousel({
    interval: 4000
  });
});

//**Start hidden section Features & show when reach to 1000px */
$(window).scroll(function(){
  const displayFeat = $('.feat') ;
  if($(window).scrollTop() >= 1100 ){
    displayFeat.fadeIn(600);
  }else{
    displayFeat.fadeOut(1000);
  }
//****End hidden section Features & show when reach to 1000px ****/

//**Start Show Color Option Div When Click on the Gear */
$('.gear-check').click(function(){
  $('.color-option').toggle();
});
//**End Show Color Option Div When Click on the Gear */

//**** Change Color theme on Click *****/
var colorLi = $('.color-option ul li');
colorLi
  .eq(0).css('backgroundColor','#E41817').end()
  .eq(1).css('backgroundColor','#0895D1').end()
  .eq(2).css('backgroundColor','#0EE681').end()
  .eq(3).css('backgroundColor','#F1E31B').end()
  .eq(4).css('backgroundColor','#BE8CD1');

  colorLi.click(function(){
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    //console.log()
  });


});