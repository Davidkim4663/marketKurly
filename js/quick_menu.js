(function($){
  const quick_menu = {
    init: function(){
      this.quickMenu();
    },
    quickMenu: function(){
      // section2번의 scrolltop 값을 구하는 공식
      // console.log($('#section2 .slide-container').offset().top);
      $(window).scroll(function(){
         if($(window).scrollTop() >= 305){
            $('#quickMenu').addClass('on');
         }else{
            $('#quickMenu').removeClass('on');
         }
      })
  
   }
  }
  quick_menu.init();

})(jQuery);