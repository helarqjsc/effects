
/* popups */

var nohide = false; var timer_;
$(document).ready(function(){   

  $('.popup').bind('click', function(e) {         
    clearInterval(timer_);
    timer_ = setTimeout(function(){     
    if (nohide == false && popup_show == true) {
        popupHide(); }      
      nohide = false; }, 50); });

  $('body').on('click', '.wpcf7-submit', function(e) {    
    nohide = true;
  });

  $('body').on('click', '.popup .popup_container', function(e) {         
    nohide = true;            
    if (!$(e.target).hasClass('wpcf7-submit') && !$(e.target).hasClass('upload') && !$(e.target).hasClass('file_') && !$(e.target).hasClass('click')) {
      e.preventDefault();
      e.stopPropagation();    
    }
  });
});

var popup_show = false;
function changePopup(popup) {      
  $('.popup').css('z-index', '-1');  
  $(popup).css('z-index','1000').addClass('full-popup');  
  $('.popup_container', popup).show();
}

function popupShow(popup){
  popup_show = true;
  w_ = $(window).width();        
  $('.popup').removeClass('full-popup').css('z-index', '-1').css('overflow-y', 'scroll');          
  $(popup).css('z-index',' 1000').addClass('active-popup');
  $('.popup_container', popup).show();

  $('.popup').removeClass('full-popup').css('overflow-y', 'scroll');          
  $(popup).addClass('active-popup');
  
  $("body").addClass("body-overflow").css('width', w_);

  $("body").addClass("body-overflow");  
  $(".full").css('width', w_);
  $('.popup').css('opacity', 0).css('visibility', 'visible').animate({opacity: 1}, 400);  
}
function popupHide(){            
  $('.body_wrapper').removeClass('blur');
  $('.popup').animate({opacity: 0}, 400, function() {     
    popup_show = false;
    $('.popup').css('visibility', 'hidden').removeClass('full-popup').removeClass('active-popup');
    $('.popup_container').hide();
    $("body").removeClass("body-overflow").css('width', 'auto');
    $(".full").css('width', '100%'); 
  });
  $('.menu').stop(true).animate({opacity: '1'}, 300); 

}


$(function(){    
  $("body").on("click", ".popup_container .popup_close", function(){    
     popupHide();
    return false;
  });
  $("body").on("click", ".popup_container .popup_close_", function(){    
     popupHide();
    return false;
  });  
 $( window ).resize(function() {           
    $("body").css('width', 'auto'); 
 });
});


