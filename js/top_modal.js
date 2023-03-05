(function($){
  const top_modal = {
    init: function(){
      this.topModal();
    },
    topModal: function () {
      const $topModalClose = $('#topModal .top-modal-close');
      // 1. 탑 모달 닫기 그리고 쿠키 설정하기 7일 간 안보기
      $topModalClose.on({
         click: function () {
            $('#topModal').stop().fadeOut(0);
            // 날짜 객체 생성
            let newDate = new Date();
            // 7일간 안 보기
            newDate.setDate(newDate.getDate() + 7);
            // 쿠키 설정하기
            document.cookie = `KURLYTOPMODAL=mskurlytopmodal; path=/; expires=${newDate.toUTCString()};`;
      }
    });
   //  2. 쿠키 가져오기
      function getCookie(){
         const cookie = document.cookie.split(';');
         if(document.cookie == '') return;
         let arr = [];
         cookie.map((item,idx)=>{
            arr[idx] = {
               cookieName: item.split('=')[0].trim(),
               cookieValue: item.split('=')[1].trim()
            }
         })
         
         arr.map((item) => {
            if(item.cookieName === 'KURLYTOPMODAL' && item.cookieValue === 'mskurlytopmodal'){
               $('#topModal').stop().fadeOut(0); return;
            }
         })
      }
      getCookie();
   
   }
  }
  top_modal.init();

  
  
})(jQuery);