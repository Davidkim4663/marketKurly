(function($){
  const go_Top = {
    init: function(){
      this.goTop();
    },
    goTop: function(){
      let sec2top = '';  
      try {
          sec2top = $('#section2').offset().top; 
      } catch (e) {
          sec2top = $('#header').offset().top; 
      }

      // 반드시 스크롤 이벤트가 발생 되어야 실행이 된다.
      $(window).scroll(function(){
         if($(window).scrollTop() >= sec2top){
            $('#goTop').addClass('on');
         }else{
            $('#goTop').removeClass('on');
         }
      })
   }
  }
  go_Top.init();

})(jQuery);