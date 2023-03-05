<!DOCTYPE html>
<html lang="en">
<?
    include_once('../config.php')
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자주하는 질문</title>
    <link rel="stylesheet" href="<?=$current_path?>css/frquently_question.css">
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
        <main id="main" class = "frequently_questions">
        <div id="frequently_questions_container">
              <div class="left-box">
                <div class="title">
                  <h1>고객센터</h1>
                </div>
                <div class="frequently_questions_tooltip-box">
                  <ul>
                    <li>
                      <a href="#" title="공지사항">공지사항 
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="자주하는 질문">자주하는 질문
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="1:1 문의">1:1 문의
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="대량주문 문의">대량주문 문의
                        <i></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="frequently_questions_help">
                  <button>
                    <div class="need_help">
                        <a href="#">
                        <p>도움이 필요 하신가요?</p>
                        <p>1:1 문의하기</p>
                      </a>
                    </div>
                    <span>
                      <a href="#">
                        <img src="../../../../img/arrow_member.svg" alt="">
                      </a>
                    </span>
                  </button>
                </div>
              </div>
              <div class="right-box">
                <div class="frequently-title">
                  <h1>
                    자주하는 질문
                    <span>고객님들께서 가장 자주하시는 질문을 모두 모았습니다.</span>
                  </h1>
                </div>
                <div class="frequently-list">
                 <table class="board">
                  <tbody>
                    <tr>
                      <th>번호</td>
                      <th>카테고리</td>
                      <th>제목</td>
                    </tr>
                    <tr>
                      <td>147</td>
                      <td>주문/결제/대량주문</td>
                      <td>구매 영수증은 어떻게 발급 받나요?</td>
                    </tr>
                    <tr>
                      <td>146</td>
                      <td>취소/교환/환불</td>
                      <td>교환(반품) 진행 시, 배송비가 부과 되나요?</td>
                    </tr>
                    <tr>
                      <td>145</td>
                      <td>선물하기</td>
                      <td>선물하기 주문을 취소하고 싶어요</td>
                    </tr>
                    <tr>
                      <td>144</td>
                      <td>포장</td>
                      <td>포장재를 회수하기도 하나요?</td>
                    </tr>
                    <tr>
                      <td>143</td>
                      <td>회원</td>
                      <td>아이디, 비밀번호를 잊어버렸습니다.</td>
                    </tr>
                    <tr>
                      <td>142</td>
                      <td>이벤트/쿠폰/적립금</td>
                      <td>적립금은 언제 지급 되나요?</td>
                    </tr>
                    <tr>
                      <td>141</td>
                      <td>시스템오류</td>
                      <td>컬리앱이 켜지지 않아요</td>
                    </tr>
                    <tr>
                      <td>140</td>
                      <td>서비스 이용</td>
                      <td>이벤트 문자는 오는데, 배송완료문자만 오지 않습니다.</td>
                    </tr>
                    <tr>
                      <td>139</td>
                      <td>취소/교환/환불</td>
                      <td>구매 영수증은 어떻게 발급 받나요?</td>
                    </tr>
                    <tr>
                      <td>138</td>
                      <td>배송</td>
                      <td>상품불량인 경우, 교환(반품) 기준이 궁금합니다.</td>
                    </tr>
                    <tr>
                      <td>137</td>
                      <td>시스템오류</td>
                      <td>IOS 환경에서 컬리APP의 주문내역이 확인되지 않습니다</td>
                    </tr>
                    <tr>
                      <td>136</td>
                      <td>회원</td>
                      <td>(카카오간편 로그인) 카카오톡으로 기존 아이디 연동했는데, 회원정보를 바꾸고 싶어요</td>
                    </tr>
                    <tr>
                      <td>135</td>
                      <td>셀프픽업</td>
                      <td>셀프픽업 상품 구매 후 교환권은 어떤 방식으로 받나요?</td>
                    </tr>
                  </tbody>
                </table>
              </div>              
              </div>
        </div>
        </main>

    <?
    include_once($home_path.'footer.php');
    include_once($home_path.'quick_menu.php');
    ?>
    </div>


    <script src="<?=$home_path?>js/top_modal.js"></script>
    <script src="<?=$home_path?>js/header.js"></script>
    <script src="<?=$home_path?>js/quick_menu.js"></script>
    <script src="<?=$home_path?>js/go_top.js"></script>
</body>

</html>