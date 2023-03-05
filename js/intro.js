(function ($) {

   let Kurly = {
      init: function () {
         this.section1();
         this.section2();
         this.section4();
         this.section6();
         this.section8();
         this.section10();
      },
      section1: function () {
         // 0. 변수 설정
         let cnt = 0;
         let setId = 0; // 메모리 할당 번호 0으로 초기화

         // 객체 설정
         const $slideWrap = $('#section1 .slide-wrap');
         const $currentPage = $('#section1 .current-page');
         const $slideContainer = $('#section1 .slide-container');
         const $arrow = $('#section1 .arrow');
         const $arrowNextBtn = $('#section1 .arrow-next-btn');
         const $arrowPrevBtn = $('#section1 .arrow-prev-btn');


         // 1. 메인 슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, 'easeInOutExpo', function () {
               if (cnt > 19) { cnt = 0 }
               if (cnt < 0) { cnt = 19 }
               $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0)
            })
            $currentPage.text(cnt + 1 === 21 ? 1 : (cnt + 1 === 0 ? 20 : cnt + 1))
            // console.log($slideWrap.offset().left); 슬라이드 좌우이동 좌표 
         }

         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            mainSlide();
         }

         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            mainSlide();
         }

         // 4. 오토타이머 함수 setinterval / clearinterval
         function autoTimer() {
            clearInterval(setId);
            setId = setInterval(nextCount, 4000); // 4초 대기 (1s = 1000 / 0.5s = 500)

         }

         // 5. 오토타이머 실행
         autoTimer();

         // 6. fade in / fade out - slide-container
         $slideContainer.on({
            click: function (e) {
               e.preventDefault();
            },
            mouseenter: function () {
               clearInterval(setId);
               $arrow.stop().fadeIn(600); // 슬라이드 일시정지
            },
            mouseleave: function () {
               $arrow.stop().fadeOut(600); // 슬라이드 플레이
               autoTimer();
            }
         })

         // 7. 다음 버튼 클릭 이벤트
         $arrowNextBtn.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 8. 이전 버튼 클릭 이벤트
         $arrowPrevBtn.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })

         // 9. 터치 스와이프, 드래그 드롭
         // 슬라이드 컨테이너 영역에서 터치스와이프로 좌우 슬라이드
         // mousedown: 터치 시작 점 / mouseup: 터치 끝 
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left - winW;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })

      },
      section2: function () {
         // 0. 변수 설정
         let cnt = 0;

         // 객체 설정
         const $slideWrap = $('#section2 .slide-wrap');
         const $arrowNext = $('#section2 .arrow-next');
         const $arrowLeft = $('#section2 .arrow-left');
         const $slideContainer = $('#section2 .slide-container');

         // 1. 메인슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, `easeInOutExpo`)
            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300) : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowNext.stop().fadeOut(300) : $arrowNext.stop().fadeIn(300);
         }


         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            if (cnt > 4) { cnt = 4 }
            mainSlide();
         }
         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            if (cnt < 0) { cnt = 0 }
            mainSlide();
         }

         // 4. 다음 클릭 이벤트
         $arrowNext.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 5. 이전 클릭 이벤트
         $arrowLeft.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })
         // 6. 터치스와이프 드래그앤드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left + (winW - conW) / 2;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })
      },
      section4: function () {
         // 0. 변수 설정
         let cnt = 0;

         // 객체 설정
         const $slideWrap = $('#section4 .slide-wrap');
         const $arrowNext = $('#section4 .arrow-next');
         const $arrowLeft = $('#section4 .arrow-left');
         const $slideContainer = $('#section4 .slide-container');

         // 1. 메인슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, `easeInOutExpo`)
            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300) : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowNext.stop().fadeOut(300) : $arrowNext.stop().fadeIn(300);
         }


         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            if (cnt > 4) { cnt = 4 }
            mainSlide();
         }
         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            if (cnt < 0) { cnt = 0 }
            mainSlide();
         }

         // 4. 다음 클릭 이벤트
         $arrowNext.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 5. 이전 클릭 이벤트
         $arrowLeft.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })
         // 6. 터치스와이프 드래그앤드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left + (winW - conW) / 2;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })
      },
      section6: function () {
         // 0. 변수 설정
         let cnt = 0;

         // 객체 설정
         const $slideWrap = $('#section6 .slide-wrap');
         const $arrowNext = $('#section6 .arrow-next');
         const $arrowLeft = $('#section6 .arrow-left');
         const $slideContainer = $('#section6 .slide-container');

         // 1. 메인슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, `easeInOutExpo`)
            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300) : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowNext.stop().fadeOut(300) : $arrowNext.stop().fadeIn(300);
         }


         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            if (cnt > 4) { cnt = 4 }
            mainSlide();
         }
         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            if (cnt < 0) { cnt = 0 }
            mainSlide();
         }

         // 4. 다음 클릭 이벤트
         $arrowNext.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 5. 이전 클릭 이벤트
         $arrowLeft.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })
         // 6. 터치스와이프 드래그앤드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left + (winW - conW) / 2;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })
      },
      section8: function () {
         // 0. 변수 설정
         let cnt = 0;

         // 객체 설정
         const $slideWrap = $('#section8 .slide-wrap');
         const $arrowNext = $('#section8 .arrow-next');
         const $arrowLeft = $('#section8 .arrow-left');
         const $slideContainer = $('#section8 .slide-container');

         // 1. 메인슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, `easeInOutExpo`)
            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300) : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowNext.stop().fadeOut(300) : $arrowNext.stop().fadeIn(300);
         }


         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            if (cnt > 4) { cnt = 4 }
            mainSlide();
         }
         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            if (cnt < 0) { cnt = 0 }
            mainSlide();
         }

         // 4. 다음 클릭 이벤트
         $arrowNext.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 5. 이전 클릭 이벤트
         $arrowLeft.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })
         // 6. 터치스와이프 드래그앤드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left + (winW - conW) / 2;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })
      },
      section10: function () {
         // 0. 변수 설정
         let cnt = 0;

         // 객체 설정
         const $slideWrap = $('#section10 .slide-wrap');
         const $arrowNext = $('#section10 .arrow-next');
         const $arrowLeft = $('#section10 .arrow-left');
         const $slideContainer = $('#section10 .slide-container');

         // 1. 메인슬라이드
         function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, `easeInOutExpo`)
            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300) : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowNext.stop().fadeOut(300) : $arrowNext.stop().fadeIn(300);
         }


         // 2. 다음 카운터 함수
         function nextCount() {
            cnt++;
            if (cnt > 4) { cnt = 4 }
            mainSlide();
         }
         // 3. 이전 카운터 함수
         function prevCount() {
            cnt--;
            if (cnt < 0) { cnt = 0 }
            mainSlide();
         }

         // 4. 다음 클릭 이벤트
         $arrowNext.on({
            click: function (e) {
               e.preventDefault();
               nextCount();
            }
         })

         // 5. 이전 클릭 이벤트
         $arrowLeft.on({
            click: function (e) {
               e.preventDefault();
               prevCount();
            }
         })
         // 6. 터치스와이프 드래그앤드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false; // 마우스 다운 초기화를 기억하는 변수

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();

         $slideContainer.on({
            mousedown: function (e) {
               touchStart = e.clientX;
               mouseDown = true; // 마우스 다운 시작
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               dragStart = e.clientX - $slideWrap.offset().left + (winW - conW) / 2;
            },
            mouseup: function (e) {
               touchEnd = e.clientX;
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
               // 마우스가 영역에서 벗어나 mouseup(마우스의 터치 끝점) 상태가 되었을 때 이벤트가 발생하지 않는다.
               // 해결책 : mouseleave -> 마우스가 영역을 벗어났을 때 mouseUp상태로 간주 한다 
            },
            mouseleave: function (e) {
               touchEnd = e.clientX;
               // 이때, mouseDown 이벤트가 발생 했을 때만 실행 되어야 한다
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               if (touchStart - touchEnd > 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 크면 다음 슬라이드
                  nextCount();
               }
               if (touchStart - touchEnd < 0) {
                  // touchStart, touchEnd의 좌표 값 계산 수 결과값이 0보다 작으면 이전 슬라이드
                  prevCount();
               }
               mouseDown = false;
            },
            mousemove: function (e) {
               // console.log(e);
               if (mouseDown === false) {
                  return; // 마우스다운이 false가 되었을 때 강제 종료
               }
               dragEnd = e.clientX;
               $slideWrap.css({ left: dragEnd - dragStart }); // 드롭 끝점과 시작점의 좌표 값으로 이동거리 계산
            }

         })
      },
   }
   Kurly.init();


})(jQuery);