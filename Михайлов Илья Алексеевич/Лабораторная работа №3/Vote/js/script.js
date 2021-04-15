$(document).ready(function() {
   $('.btn_modal_style').click(function() {
      $('.modal').show();
      $('.qq').click(function() {
         $('.modal').hide();
      });
      $('.ww').click(function() {
         $('.modal').hide();
      });
   });
});

$(document).ready(function() {
   $('.header_burger').click(function() {
       $('.header_burger').toggleClass('open_menu');
       $('.menu').toggleClass('open_menu');
   });
});