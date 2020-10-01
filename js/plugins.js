$(document).ready(function(){
  $('.carousel').carousel({
    interval: 4000
  });
});


$(window).scroll(function(){
  const displayFeat = $('.feat') ;
  if($(window).scrollTop() >= 1100 ){
    displayFeat.fadeIn(600);
    console.log('sdsad')
  }else{
    displayFeat.fadeOut(1000);
  }
});