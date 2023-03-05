(($, window, document) => {
  const Signup = {
    member: {
      아이디: '', // string
      아이디중복확인: false,

      비밀번호: '', // string;
      비밀번호확인: false, //boolean

      이름: '', // string;

      이메일: '', // string;
      이메일중복확인: false,

      휴대폰: '', // string
      휴대폰인증번호: 0, // number

      분: 2,
      초: 59,
      setId: 0,

      주소: '', // string;

      성별: '', // string;

      생년월일: '', // string;
      추가입력사항: '', // string;
      이용약관동의: [], // <string>;

    },
    init() {
      this.main();
    },
    main() {
      const that = this;
      //  1. 아이디 입력 상자
      // 유효성 검사 1) 특수문자 안됨
      // 유효성 검사 2) 6자 ~ 16자 
      // 유효성 검사 3) 영어 또는 영어와 숫자 조합
      // 유효성 검사 4) 한글 입력 안됨
      // 유효성 검사 5) 같은 문자 3자 이상 입력 안됨
      // 유효성 검사 6) 공백허용 안됨
      $('#userId').on({
        keyup() {
          const regExp1 = /[~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]/g;
          const regExp2 = /.{6,16}/g;
          const regExp3 = /[A-Za-z]+[0-9]/g;
          const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
          const regExp5 = /(.)\1\1/g;
          const regExp6 = /\s/g;

          // 1) 특수문자가 나오면 공백으로 치환
          $(this).val($(this).val().replace(regExp1, ''));
          if (regExp2.test($(this).val()) === false || regExp3.test($(this).val()) === false || regExp4.test($(this).val()) === true || regExp5.test($(this).val()) === true || regExp6.test($(this).val()) === true) {
            $(this).parent().next().addClass('on').text('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
          } else {
            $(this).parent().next().removeClass('on');
            that.member.아이디 = $(this).val();
          }
        }
      });

      // 2. 비밀번호 입력상자
      // 유효성 검사 1) 최소 10자 이상 입력
      // 유효성 검사 2) 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
      // 유효성 검사 3) 한글 입력 안됨
      // 유효성 검사 4) 같은 문자 3자 이상 입력 안됨
      // 유효성 검사 5) 공백허용 안됨
      $('#userPw').on({
        keyup() {
          const regExp1 = /.{10,}/g;
          const regExp2 = /([0-9]+[~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;
          const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
          const regExp4 = /(.)\1\1/g;
          const regExp5 = /\s/g;


          if (regExp1.test($(this).val()) == false || regExp2.test($(this).val()) == false || regExp3.test($(this).val()) === true || regExp4.test($(this).val()) === true || regExp5.test($(this).val()) === true) {
            $(this).parent().next().addClass('on').text("영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합");
          } else {
            $(this).parent().next().removeClass('on');
            that.member.비밀번호 = $(this).val();
          }
        }
      })

      // 3. 비밀번호 확인
      $('#userPw2').on({
        keyup() {
          if ($('#userPw').val() !== $('#userPw2').val()) {
            $(this).parent().next().addClass('on').text("동일한 비밀번호를 입력 해주세요.");
          } else {
            $(this).parent().next().removeClass('on');
            that.member.비밀번호확인 = true;
          }
        }
      });

      // 4. 이름 입력상자
      // 유효성검사 1) 특수문자 X
      // 유효성검사 2) 1 ~ 20지
      // 유효성검사 3) 한글,영어 가능
      // 유효성검사 4) 숫자 입력 안됨
      // 유효성검사 5) 동일 문자 3자 이상 안됨
      // 유효성검사 6) 공백 X
      $('#userName').on({
        keyup() {
          const regExp1 = /[~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]/g;
          const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]{1,20}/;
          const regExp3 = /[0-9\s]/;

          $(this).val($(this).val().replace(regExp1, ''));
          if (regExp2.test($(this).val()) == false || regExp3.test($(this).val()) == true) {
            $(this).parent().next().addClass('on').text('이름을 입력 하세요');
          } else {
            $(this).parent().next().removeClass('on');
            that.member.이름 = $(this).val();
          }
        }
      });

      // 5. 이메일 입력 상자
      // 유효성검사 1) 앞부분: \.(Dot) 1회 사용
      // 유효성검사 2) 앞부분: ( ) \ [ ] " ; : < > , X
      // 유효성검사 3) @뒷부분: ~ - _ . 사용.
      // 유효성검사 4) @뒷부분 미국 맨뒤: 영문 3
      // 유효성검사 5) @뒷부분 미국 제외 맨 뒤 : 영문2
      // 유효성검사 6) @공백 사용 안됨 
      // 유효성검사 7) 한글 사용 안됨

      // ^     @    .영문{2,3} $/g;
      $('#userEmail').on({
        keyup() {
          const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]+[\.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]*@[A-Za-z0-9~\-\.]+\.[A-Za-z]{2,3} $/g;
          const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ\s]/g;
          if ($(this).val() !== '') {
            if (regExp1.test($(this).val()) == false || regExp2.test($(this).val()) == false) {
              $(this).parent().next().addClass('on').text('이메일 형식으로 입력해 주세요.');
            } else {
              $(this).parent().next().removeClass('on');
              that.member.이메일 = $(this).val();
            }
          } else {
            $(this).parent().next().addClass('on').text('이메일을 입력해 주세요.');
          }
        }
      });

      // 6. 휴대폰 번호 입력상자
      $('#userHp').on({
        keyup() {
          if ($(this).val() !== '') {
            if ($(this).val().length >= 1) {
              $('.hp-num-btn').addClass('on').prop('disabled', false);
            } else {
              $('.hp-num-btn').removeClass('on');
            }
          } else {
            $(this).parent().next().addClass('on').text('휴대폰 번호를 입력 해주세요');
          }
        }
      });


      // 7. 타이머 카운트 다운 함수 알고리즘 구현
      // 2분 59초
      function timerCountDown() {
        that.member.setId = setInterval(function () {
          that.member.초--;
          if (that.member.초 < 0) {
            that.member.초 = 59;
            that.member.분--;
            if (that.member.분 < 0) {
              clearInterval(that.member.setId); // 타이머 중지 
              $('#formEventModal').fadeIn(300);
              $('#formEventModal .msg').html('유효 시간이 만료 되었습니다.');
              $('.hp2').removeClass('on');
              that.member.초 = 59;
              that.member.분 = 2;
            }
          }

          // 분, 초가 2자리로 표시 되어야 한다.
          $('.count-minutes').text(that.member.분 < 10 ? `0${that.member.분}` : that.member.분);
          $('.count-seconds').text(that.member.초 < 10 ? `0${that.member.초}` : that.member.초);

        }, 1000)
      }

      // 8. 휴대폰 인증번호 받기 버튼 클릭 이벤트
      // 1) 휴대폰 번호 유효성검사 정규표현식 통과하면 아래 수행
      // 2) 인증번호를 입력 할 상자 우측 버튼을 보이게 한다.
      // 3) 인증번호 전송 6자리
      $('.hp-num-btn').on({
        click(e) {
          e.preventDefault();
          const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;

          if (regExp.test($('#userHp').val()) === false) {
            $('#formEventModal').fadeIn(300);
            $('#formEventModal .msg').html('잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해주세요.');
          } else {
            $('.hp2').addClass('on');
            const randomNum = Math.floor(Math.random() * 900000 + 100000); // 인증번호 6자리
            $('#formEventModal').fadeIn(300);
            $('#formEventModal .msg').html(`인증번호가 발송 되었습니다 ${randomNum}`);
            that.member.휴대폰인증번호 = randomNum;
            timerCountDown();
          }


        }
      })


      // 9. 폼이벤트 모달 닫기 버튼 클릭 이벤트
      $('.msg-modal-close-btn').on({
        click(e) {
          e.preventDefault();
          $('#formEventModal').fadeOut(300);
        }
      });

      // 10. 인증번호 입력상자
      // 1) 1글자 이상 입력되면 버튼 사용 가능
      $('#userNumBox').on({
        keyup() {
          if ($(this).val().length >= 1) {
            $('.hp-ok-btn').addClass('on').prop('disabled', false);
          } else {
            $('.hp-ok-btn').removeClass('on').prop('disabled', true);
          }
        }
      });

      // 11. 인증번호 확인 버튼 클릭 이벤트
      // 1) 전송된 인증번호와 방금 입력된 인증번호 비교
      $('.hp-ok-btn').on({
        click(e) {
          e.preventDefault();
          if (Number($('#userNumBox').val()) === that.member.휴대폰인증번호) {
            $('#formEventModal').fadeIn(300);
            $('#formEventModal .msg').html('인증에 성공 하였습니다.');

            $('.hp-num-btn').addClass('off'); // 인증번호 받기 버튼 숨기기
            $('.hp-num-btn2').addClass('on'); // 다른번호로 인증 버튼 보이기

            $('.hp2').removeClass('on'); // 인증번호 입력상자, 버튼 숨기기
            clearInterval(that.member.setId);
            that.member.초 = 59;
            that.member.분 = 2;


          } else {
            $('#formEventModal').fadeIn(300);
            $('#formEventModal .msg').html('잘못된 인증코드 입니다.');
          }
        }
      });

      // 12. 다른번호 인증
      $('.hp-num-btn2').on({
        click(e) {
          e.preventDefault();
          $('.hp-num-btn').removeClass('off'); // 인증번호 받기 버튼 숨기기
          $('.hp-num-btn2').removeClass('on'); // 다른번호로 인증버튼 보이기
          $('#userHp').val('').focus(); // 다른번호로 인증버튼 보이기
        }
      });

      // 13. 주소검색버튼 클릭 이벤트: 카카오 API
      $('.addr-search-btn').on({
        click() {
          window.open('./popup.html', '_address_search_popup', 'width=530, height=569, top=0, left=0');
        }
      })

    }
  }
  Signup.init();

})(jQuery, window, document);