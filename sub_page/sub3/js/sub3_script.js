(() => {
  const Obj = {
    init() {
      this.categoryFn();
      this.alProduct();
    },
    categoryFn() {
      const categoryFn = $('#section2 .left .category-btn');
      categoryFn.on({
        click: function (e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).find('svg').toggleClass('on');
        }
      })
    },
    alProduct() {
      // ajax로 바인딩
      $.ajax({
        url: './data/product.json',
        dateType: 'JSON',
        success: function (result) {

          // 정규 표현식
          // 1. 정규 표현식 표현 형식 문법
          // 표현식을 감싸는 기호(슬래쉬로 시작)
          // [] 곽괄호 의미 범위
          // [^] 부정(NOT)
          // {5} 5자
          // {5,} 5자 이상
          // {5,12} 5~12 범위 
          // +  1자이상
          // *   0자이상
          // ?  0자 또는 1자

          const regexpLowerCase1    = /[a-z]/g;        // 영문소문자 a-z
          const regexpLowerCase2    = /^[a-z]{5}$/g;     // 영문소문자 a-z 5자 제한
          const regexpLowerCase3    = /^[a-z]{5,}$/g;     // 영문소문자 a-z  최소 5자 이상 ~
          const regexpLowerCase4    = /^[a-z]{5,10}$/g;     // 영문소문자 a-z 5 ~ 10자로 제한 전체  ^ 시작    $ 끝
          const regexpUpperCase     = /^[A-Z]$/g;     // 영문대문자 a-z
          const regexpUpperLower    = /^[A-Z]$/gi;   // 영문대소문자 A-Z a-z
          const regexpUpperLower2   = /^[a-a]$/gi;   // 영문대소문자 A-Z a-z
          const regexpNumber1       = /^[0-9]$/g;  // 숫자 0 ~ 9 
          const regexpNumber2       = /^[^0-9]$/g;  // 부정 숫자가 아닌것 [] 곽괄호안에 ^ 부정(not)
          const regexpNumber3       = /^[\d]$/g;   // 시작 숫자로시작하고 끝나는것도 숫자 숫자 0 ~ 9 범위
          const regexpNumber4       = /^[^\d]$/g;   // 숫자 부정 0 ~ 9 범위 => 숫자가 아닌것
          const regexpNumber5       = /(\d)/g;   // 그룹지정은 숫자 0 ~ 9 범위 => 숫자
          const regexpNumber6       = /(^\d)/g;   // 그루지정은 시작이 숫자0 ~ 9 범위 => 숫자
          const regexpNumber7       = /^(\d)$/g;   // 숫자 0 ~ 9 범위 => 숫자 문자 숫자 섞인경우 
          const regexpNumber8       = /[\d]/g;   // 숫자 0 ~ 9 그룹 ()()() 전화번호형식, ()()우편번호형식, ()()사업자번호형식
          const regexpNumber9       = /^[\d]$/g;     // 숫자 0 ~ 9 기본숫자

          // 유효성 검증 테스트 test() 사용 => 참(true), 거짓(false)
          // console.log(정규표현식.test('문자열'));
          // console.log(RegExp.test('string'));
          const str1 = 'megaComputer';
          const str2 = 'MEGACOMPUTER';
          const str3 = 'mega Computer';
          // console.log(`RegExp ${regexpLowerCase1}.test(${str1})`, regexpLowerCase1.test(str1));
          // console.log(`RegExp ${regexpLowerCase1}.test(${str2})`, regexpLowerCase1.test(str2));
          // console.log(`RegExp ${regexpLowerCase1}.test(${str3})`, regexpLowerCase1.test(str3));

          // 5자 이내로
          // console.log(`RegExp ${regexpLowerCase2}.test(${str1})`, regexpLowerCase2.test(str1));

          function commaDecimal(value){
            let strValue = value.toString(); // 숫자(number) => 문자열(String) : 타입 형변환
            // console.log('판매가 호출한 숫자: (number)', value);
            // console.log('판매가 호출한 숫자: (string) ', strValue);
            // return value; // 되돌려주기 콤마형식을 만들어서 보내주기 188,100

            // 숫자 3자리 마다 콤마형식 정규표현식으로 만들기
            // 보내온 숫자를 콤마형식으로 변환 하기 치환 replace(정규표현식, '($1), ($2)')
            // 898 
            // 5898 => (5는 시작 숫자1자 이상),(뒤 3자는 숫자)

            // const regExp = /(시작숫자가 1자 이상\d+)(뒷3자리 숫자\d{3})$/g;
            const regExp = /(^\d+)(\d{3})/g; // 4자 이상인 경우 컴마형식
            // 숫자문자열.replace(REGEXP, '$1,$2')
            while(regExp.test(strValue)===true){ // 숫자가 4자리 이상이면 수행
              strValue = strValue.replace(regExp, '$1,$2');
            }
            return strValue;
          }          
          let txt = '';
          result.알뜰쇼핑.map((item) => {
            txt += `<li class="product-gallery">`;
            txt += `  <div class="gap">`;
            txt += `    <div class="img-box">`;
            txt += `        <a href="#">`;
            txt += `            <img src="img/${item.제품이미지}" alt="">`;
            txt += `            <span><img src="img/cart_fill.svg" alt=""></span>`;
            txt += `        </a>`;
            txt += `    </div>`;
            txt += `    <div class="caption-box">`;
            txt += `        <h2>${item.제품명}</h2>`;
            txt += `        <h3>
                                          ${item.할인율 > 0 ? `<em>${Math.round(item.할인율 * 100)}%</em>` : ``}
                                          <strong>${commaDecimal(Math.round(item.정가 * (1 - item.할인율)))}원</strong>
                                      </h3>`;
            txt += `        ${item.할인율 > 0 ? `<h4><s>${commaDecimal(item.정가)}원</s></h4>` : ``}`;
            txt += `    </div>`;
            txt += `  </div>`;
            txt += `</li>`;
          });
          // 출력 바인딩
          $('#section2 .al-product-gallery').append(txt);
        },
        fail: function (error) {
          console.log('실패');
        }
      })
    }
  }
  Obj.init();

})(jQuery);