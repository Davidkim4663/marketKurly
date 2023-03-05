(function($){
  const header = {
    init: function(){
      this.header();
    },
    header: function () {
      const $topToolTipMenu = $('#header .top-tooltip-menu');
      const $serviceCenterBtn = $('#header .service-center-btn');
      const $topTooltipBox = $('#header .top-tooltip-box');
      const $mapTooltipMenu = $('#header .map-tooltip-menu');
      const $mapTooltipBtn = $('#header .map-tooltip-btn');
      const $mapTooltipBox = $('#header .map-tooltip-box');

      $serviceCenterBtn.on({
         mouseenter: function () {
            $topToolTipMenu.show();
         }
      })

      $topTooltipBox.on({
         mouseleave: function () {
            $topToolTipMenu.hide();
         }
      })
      $mapTooltipBtn.on({
         mouseenter: function () {
            $mapTooltipMenu.show();
         }
      })
      $mapTooltipBox.on({
         mouseleave: function () {
            $mapTooltipMenu.hide();
         }
      })
      
      $(window).scroll(function(){
         if($(window).scrollTop() >= 100){
            $('#header .row3').addClass('on');
         }else{
            $('#header .row3').removeClass('on');
         }
      })
   }
  }
  header.init();

})(jQuery);