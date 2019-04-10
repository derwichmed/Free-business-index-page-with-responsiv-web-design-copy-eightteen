$(function (){
    isNavBarMenuHidden = true;
    $('body > header .nav_three .menu_icon img').click(function (){
        if(isNavBarMenuHidden){
          $('body > header .nav_three .nav_bar').fadeIn("slow");
          isNavBarMenuHidden = false;
      }
      else{
          $('body > header .nav_three .nav_bar').fadeOut("slow");
          isNavBarMenuHidden = true;
      }
   });
});