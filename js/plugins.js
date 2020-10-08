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
//**End hidden section Features & show when reach to 1000px */

//**Start Show Color Option Div When Click on the Gear */
$('.gear-check').click(function(){
  $('.color-option').toggle();
});
//**End Show Color Option Div When Click on the Gear */


});