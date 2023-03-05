(function($){
  const intro_modal = {
    init: function(){
      this.introModal();
    },
    introModal: function () {
      // 닫기
      $('.close-btn').on({
         click: function () {
            $('#introModal').stop().fadeOut(0);
         }
      })
      // 다시는 안 보기
      $('.close-open-none-btn').on({
         click: function () {
            $('#introModal').stop().fadeOut(0);
            // introModal 로컬스토레이지 저장하기
            localStorage.setItem('MSKURLYINTROMODAL', 'mskurlyintromodal');
         }
      })
      // introModal 로컬스토레이지 가져오기
      if (localStorage.getItem('MSKURLYINTROMODAL') !== null) {
         $('#introModal').stop().fadeOut(0);
      } else {
         $('#introModal').stop().fadeIn(0);
      }
   }
  }
  intro_modal.init();

})(jQuery);