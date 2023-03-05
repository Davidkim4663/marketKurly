<!DOCTYPE html>
<html lang="en">
<?
    include_once('../config.php')
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항</title>
    <link rel="stylesheet" href="<?=$current_path?>css/notice.css">
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
        <main id="main" class = "notice">
          <div id="notice_container">
              <div class="left-box">
                <div class="title">
                  <h1>고객센터</h1>
                </div>
                <div class="notice_tooltip-box">
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
                <div class="notice_help">
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
                <div class="notice-title">
                  <h1>
                    공지사항
                    <span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span>
                  </h1>
                </div>
                <div class="notice-list">
                 <table class="board">
                  <tbody>
                    <tr>
                      <th>번호</td>
                      <th>제목</td>
                      <th>작성자</td>
                      <th>작성일</td>
                    </tr>
                    <tr>
                      <td>공지</td>
                      <td>[안내] 컬리 소비자 분쟁해결 기준 안내</td>
                      <td>컬리</td>
                      <td>2023.07.27</td>
                    </tr>
                    <tr>
                      <td>1693</td>
                      <td>[안내] 문자 메시지 안내 시스템 점검 (2023.01.29)</td>
                      <td>컬리</td>
                      <td>2023.01.26</td>
                    </tr>
                    <tr>
                      <td>1692</td>
                      <td>[안내] 이메일 서버 점검으로 인한 이메일 전송 지연 안내 (2023.01.25)</td>
                      <td>컬리</td>
                      <td>2023.01.20</td>
                    </tr>
                    <tr>
                      <td>1691</td>
                      <td>[이벤트] 1월 20일 CJ 라이브 구매자 이벤트 당첨자 안내의 건</td>
                      <td>컬리</td>
                      <td>2023.01.19/td>
                    </tr>
                    <tr>
                      <td>1690</td>
                      <td>[이벤트] 1월 19일 강남면옥 구매인증 , 구매왕 이벤트 당첨자 안내의 건</td>
                      <td>컬리</td>
                      <td>2023.01.19</td>
                    </tr>
                    <tr>
                      <td>1689</td>
                      <td>[이벤트] 1월 18일 설화수 라이브방송 구매인증 당첨자 공지의 건</td>
                      <td>컬리</td>
                      <td>2023.01.19</td>
                    </tr>
                    <tr>
                      <td>1687</td>
                      <td>[안내] KT휴대폰결제 시스템 점검 안내 (10/6)</td>
                      <td>컬리</td>
                      <td>2023.01.18</td>
                    </tr>
                    <tr>
                      <td>1686</td>
                      <td>[이벤트] 정관장 라이브방송 구매인증 이벤트 당첨자 안내의 건</td>
                      <td>컬리</td>
                      <td>2023.01.18</td>
                    </tr>
                    <tr>
                      <td>1685</td>
                      <td>[안내] 개인정보처리방침 개정 내용 사전안내</td>
                      <td>컬리</td>
                      <td>2023.01.17</td>
                    </tr>
                    <tr>
                      <td>1684</td>
                      <td>[안내] LGU+ 휴대폰 결제 및 본인확인 서비스 점검 예정 (2023.01.17)</td>
                      <td>컬리</td>
                      <td>2023.01.16</td>
                    </tr>
                    <tr>
                      <td>1683</td>
                      <td>[안내] 설 연휴 배송 일정 안내</td>
                      <td>컬리</td>
                      <td>2023.01.13</td>
                    </tr>
                    <tr>
                      <td>1682</td>
                      <td>[안내] 네이버페이 장애로인한 네이버페이 결제 불가 안내 (장애복구)</td>
                      <td>컬리</td>
                      <td>2023.01.12</td>
                    </tr>
                    <tr>
                      <td>1687</td>
                      <td>[안내] 고객 안내 메시지 지연 발송 안내 (2022.01.06 ~ 01.08)</td>
                      <td>컬리</td>
                      <td>2023.10.10</td>
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
</body>

</html>