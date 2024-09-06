// JavaScript Document
$(document).ready(function () {
     
// open mypage
     $("#btn_openMenu").on("click", function () {
          $("#sec_Menu").animate({right: "0"}, 100);
     });

     $("#btn_closeMenu").on("click", function () {
          $("#sec_Menu").animate({right: "-100%"}, 100);
     });


});

document.addEventListener('touchmove', function(event) {
     if (event.scale !== undefined && event.scale !== 1) {
         event.preventDefault();
     }
 }, { passive: false }); // for ios