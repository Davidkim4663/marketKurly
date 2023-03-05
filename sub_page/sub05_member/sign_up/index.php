<!DOCTYPE html>
<html lang="en">
<?
    include_once('../config.php')
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="지금 마켓컬리에서 제공하는 다양한 신상품을 확인해보세요.">
    <meta name="keywords" content="신상, 식단, 닭가슴살, 요리, 치아바타, 레시피, 상차림, 다이어트음식, 이유식, 건강이유식, 뷰티, 화장품">
    <link rel="shortcut icon" href="./img/favicon-16x16.png">
    <link rel="icon" href="./img/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png">
    
    <title>회원가입</title>
    <link rel="stylesheet" href="<?=$current_path?>css/sign_up.css">
    <script src="<?=$home_path?>js/lib/jquery-3.6.3.min.js"></script>
    <script src="<?=$home_path?>js/lib/jquery.easing.1.3.js"></script>

</head>

<body>
    <!-- wrap -->
    <div id="wrap">
    <?
    include_once($home_path.'top_modal.php');
    include_once($home_path.'header.php');
    ?>
        <main id="mainSignUp">
          <section id="signUpsection">
            <div class="container">
              <div class="title">
                <h2>회원가입</h2>
                <span><i>*</i>필수입력사항</span>
              </div>
              <div class="content">
                <form name='signup_form' id='signupForm' method= 'post' action="./sign_up.php">
                    <ul>
                      <li>
                        <div>
                          <em>아이디<i>*</i></em>
                          <input type="text" name='user_id' id='userId' maxlength="16" placeholder='아이디를 입력해주세요'>
                          <button class='id-ok-btn'>중복확인</button>
                        </div>
                        <p class="isError"></p>
                      </li>
                      <li>
                        <div>
                          <em>비밀번호<i>*</i></em>
                          <input type="text" name='user_pw' id='userPw' maxlength="16" placeholder='비밀번호를 입력해주세요'>
                        </div>
                        <p class="isError"></p>
                      </li>
                      <li>
                          <div>
                          <em>비밀번호 확인<i>*</i></em>
                          <input type="text" name='userPw2' id='userPw2' maxlength="16" placeholder='비밀번호를 한번 더 입력해주세요'>
                        </div>
                        <p class="isError"></p>
                      </li>
                      <li>
                        <div>
                          <em>이름<i>*</i></em>
                          <input type="text" name='user_name' id='userName' maxlength="20" placeholder='이름을 입력해주세요'>
                        </div>
                        <p class="isError"></p>
                      </li>
                      <li>
                        <div>
                          <em>이메일<i>*</i></em>
                          <input type="text" name='user_email' id='userEmail' placeholder='예: marketkurly@kurly.com'>
                          <button class='email-ok-btn'>중복확인</button>
                        </div>
                        <p class="isError"></p>
                      </li>

                      <li class='hp hp1'>
                        <div>
                          <em>휴대폰<i>*</i></em>
                          <input type="text" name='user_hp' id='userHp' placeholder='숫자를 입력해주세요'>
                          <!-- disabled=false로 제이쿼리 구현  -->
                          <button class='hp-num-btn' disabled>인증번호 받기</button>
                          <button class='hp-num-btn2'>다른번호 받기</button>
                        </div>
                        <p class="isError"></p>
                      </li>

                      <li class='hp hp2'>
                        <div>                        
                          <input type="text" name='user_num_box' id='userNumBox' placeholder='인증번호를 입력해주세요'>
                          <span class='hp-count'><i class='count-minutes'>02</i>:<i class='count-seconds'>59</i></span>
                          <!-- disabled=false로 제이쿼리 구현  -->
                          <button class='hp-ok-btn' disabled>인증번호 확인</button>
                        </div>
                        <p class="isError"></p>

                      </li>

                      <li class = 'addr addr1'>
                        <div>
                          <em>주소<i>*</i></em>
                          <input type="text" name='' id='' placeholder='주소검색 API'>
                          <button class='addr-research-btn'><img src="./img/ico_search.svg" alt="">재검색</button>
                        </div>                       
                      </li>
                      <li class = 'addr addr2'>
                        <div>
                          <input type="text" name='' id='' placeholder='나머지 주소를 입력 해주세요'>
                        </div>                       
                      </li>
                      <li class = 'addr addr3'>
                        <div>
                          <em>주소<i>*</i></em>
                          <button class='addr-search-btn'><img src="./img/ico_search.svg" alt="">주소검색</button>
                        </div>                       
                      </li>
                      <li class = 'addr addr4'> 
                        <div>
                           <strong>샛별배송</strong>
                           <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>       
                        </div>                       
                      </li>
                      <li class='radio gender'>
                        <div>
                          <em>성별</em>
                          <label for="male"><input type="radio" name="gender" id="male" value="남성">남성</label>
                          <label for="female"><input type="radio" name="gender" id="female" value="여성">여성</label>
                          <label for="none"><input type="radio" name="gender" id="none" value="선택안함">선택안함</label>
                        </div>
                      </li>
                      <li class = 'birth'>
                         <div>
                            <em>생년월일</em>
                            <div >
                              <ul class="birth-box">
                                <li>
                                  <input type="text" name = 'birth_year' id= 'birthYear' placeholder='YYYY'>
                                </li>
                                <li>/</li>
                                <li>
                                  <input type="text" name = 'birth_month' id= 'birthMonth' placeholder='MM'>
                                </li>
                                <li>/</li>
                                <li>
                                  <input type="text" name = 'birth_date' id= 'birthDate' placeholder='DD'>
                                </li>
                              </ul>
                            </div>
                         </div>
                      </li>
                      <li class = 'radio'>
                        <div>
                          <em>추가입력사항</em>
                          <label for="addInput1"><input type="radio" name="addInput" id="addInput1" value="친구초대 추천인 아이디">친구초대 추천인 아이디</label>
                          <label for="addInput2"><input type="radio" name="addInput" id="addInput2" value="참여 이벤트명">참여 이벤트명</label>
                        </div>
                      </li>
                      <li class ='radio add-input'>
                        <div>
                         <input type="text" name='add_input_box' id='addInputBox1' placeholder='추천인 아이디를 입력해 주세요'>
                         <input type="text" name='add_input_box' id='addInputBox2' placeholder='참여 이벤트명을 입력해 주세요.'>
                         <button class='addr-search-btn'>아이디 확인</button>
                        </div>
                      </li>
                      <li class ='radio add-input'>
                        <div>
                           <p class='add-input-p1'>
                            가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                           </p>
                           
                           <p class='add-input-p2'>
                            추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다. <br>
                            가입 이후는 수정이 불가능 합니다. <br>
                            대소문자 및 띄어쓰기에 유의해주세요.
                           </p>
                        </div>
                      </li>
                      <li class ='row-line'>
                         <div>
                           <hr>
                        </div>  
                      </li>
                      <li class = 'survice survice-all'>
                        <div>
                          <em>이용약관 동의<i>*</i></em>
                          <label for="chkAll"><input type="checkbox" name='chk_all' id = 'chkAll' value ='전체 동의합니다'>전체 동의합니다.</label>
                          <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </div>
                      </li>
                      <li class = 'survice '>
                        <div>
                          <label for="chk1"><input type="checkbox" name='chk_1' id = 'chk1' value ='이용약관 동의'>이용약관 동의.</label>
                        </div>
                      </li>

                      <li class = 'survice'>
                        <div>
                          <label for="chk2"><input type="checkbox" name='chk_2' id = 'chk2' value ='개인정보 수집∙이용 동의(필수)'>개인정보 수집∙이용 동의</label><i>(필수)</i>
                        </div>
                      </li>

                      <li class = 'survice'>
                        <div>
                          <label for="chk3"><input type="checkbox" name='chk_3' id = 'chk3' value ='개인정보 수집∙이용 동의(선택)'>개인정보 수집∙이용 동의</label><i>(선택)</i>
                        </div>
                      </li>

                      <li class = 'survice'>
                        <div>
                          <label for="chk4"><input type="checkbox" name='chk_4' id = 'chk4' value ='무료배송, 할인쿠폰 등 혜택/정보 수신 동의'>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><i>(선택)</i>
                        </div>
                      </li>

                      <li class='survice chk56'>
                         <div>
                          <label for="chk5"><input type="checkbox" name='chk_5' id = 'chk5' value ='SNS'>SNS</label>
                          <label for="chk6"><input type="checkbox" name='chk_6' id = 'chk6' value ='이메일'>이메일</label>
                          <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                        </div>
                      </li>

                      <li class = 'survice'>
                        <div>
                          <label for="chk7"><input type="checkbox" name='chk_7' id = 'chk7' value ='본인은 만 14세 이상입니다.'>본인은 만 14세 이상입니다.</label><i>(필수)</i>
                        </div>
                      </li>

                      <li class ='row-line bottom-line'>
                         <div>
                           <hr>
                        </div>  
                      </li>
                      <li class ='button-box'>
                         <div>
                           <button type='submit' class='submit-btn'>가입하기</button>
                         </div>  
                      </li>

                    </ul>

                </form>
              </div>
            </div>
          </section>


        </main>
    <?
    include_once($home_path.'footer.php');
    ?>

          <!-- 이벤트모달 -->
      <div id="formEventModal">
        <div class="wrap">
          <div class="container">
            <div class="message-box">
              <p class="msg">6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</p>
            </div>
            <div class="button-box">
              <button class="msg-modal-close-btn">확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="<?=$current_path?>js/sign_up.js"></script>
    <script src="<?=$home_path?>js/top_modal.js"></script>
    <script src="<?=$home_path?>js/header.js"></script>
</body>

</html>