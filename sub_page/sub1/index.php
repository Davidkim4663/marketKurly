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

    <title>신상품</title>
    <link rel="stylesheet" href="<?=$current_path?>css/sub1.css">
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
     <main id="main">
        <section id="section1">
            <div class="container">
                <a href="#">
                    <img src="./img/JK71liHJy2FIET2WBLd9VSqCmpL5WPyOA8pZy7gm.png" alt="">
                </a>
            </div>
        </section>
        <section id="section2">
            <div class="container">
                <div class="title">
                    <h2>신상품</h2>
                </div>
                <div class="content">
                    <div class="left">
                        <div class="left-head">
                            <span>필터</span>
                            <span><svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path></svg>초기화</span>
                        </div>
                        <ul>
                            <li>
                                <a href="#" class='category-btn' title='카테고리'><span>카테고리</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                <div class="sub sub1">
                                    <ul>
                                        <li><label for="sub1ChkBtn01"><input type="checkbox" id='sub1ChkBtn01' name='sub1_chk_btn01' value='과일·견과·쌀'>과일·견과·쌀</label><i>27</i></li>
                                        <li><label for="sub1ChkBtn02"><input type="checkbox" id='sub1ChkBtn02' name='sub1_chk_btn02' value='간식·과자·떡'>간식·과자·떡</label><i>19</i></li>
                                        <li><label for="sub1ChkBtn03"><input type="checkbox" id='sub1ChkBtn03' name='sub1_chk_btn03' value='국·반찬·메인요리'>국·반찬·메인요리</label><i>17</i></li>
                                        <li><label for="sub1ChkBtn04"><input type="checkbox" id='sub1ChkBtn04' name='sub1_chk_btn04' value='샐러드·간편식'>샐러드·간편식</label><i>15</i></li>
                                        <li><label for="sub1ChkBtn05"><input type="checkbox" id='sub1ChkBtn05' name='sub1_chk_btn05' value='면·양념·오일'>면·양념·오일</label><i>14</i></li>
                                        <li><label for="sub1ChkBtn06"><input type="checkbox" id='sub1ChkBtn06' name='sub1_chk_btn06' value='헤어·바디·구강'>헤어·바디·구강</label><i>12</i></li>
                                        <li><label for="sub1ChkBtn07"><input type="checkbox" id='sub1ChkBtn07' name='sub1_chk_btn07' value='수산·해산·건어물'>수산·해산·건어물</label><i>11</i></li>
                                        <li><label for="sub1ChkBtn08"><input type="checkbox" id='sub1ChkBtn08' name='sub1_chk_btn08' value='생수·음료·우유·커피'>생수·음료·우유·커피</label><i>10</i></li>
                                        <li><label for="sub1ChkBtn09"><input type="checkbox" id='sub1ChkBtn09' name='sub1_chk_btn09' value='건강식품'>건강식품</label><i>9</i></li>
                                        <li><label for="sub1ChkBtn10"><input type="checkbox" id='sub1ChkBtn10' name='sub1_chk_btn10' value='베이커리·치즈·델리'>베이커리·치즈·델리</label><i>7</i></li>
                                    </ul>
                                    <a href="#" class='category-more-btn' title='카테고리 더보기'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                </div>
                            </li>
                            <li>
                                <a href="#" class='category-btn' title='브랜드'><span>브랜드</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                <div class="sub sub2">
                                    <ul>
                                        <li><label for="sub2ChkBtn01"><input type="checkbox" id='sub2ChkBtn01' name='sub2_chk_btn01' value='고디바'>고디바</label><i>2</i></li>
                                        <li><label for="sub2ChkBtn02"><input type="checkbox" id='sub2ChkBtn02' name='sub2_chk_btn02' value='귤림원'>귤림원</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn03"><input type="checkbox" id='sub2ChkBtn03' name='sub2_chk_btn03' value='네더랜드 팜'>네더랜드 팜</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn04"><input type="checkbox" id='sub2ChkBtn04' name='sub2_chk_btn04' value='도리깨침'>도리깨침</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn05"><input type="checkbox" id='sub2ChkBtn05' name='sub2_chk_btn05' value='디어스킨'>디어스킨</label><i>2</i></li>
                                        <li><label for="sub2ChkBtn06"><input type="checkbox" id='sub2ChkBtn06' name='sub2_chk_btn06' value='루치펠로'>루치펠로</label><i>3</i></li>
                                        <li><label for="sub2ChkBtn07"><input type="checkbox" id='sub2ChkBtn07' name='sub2_chk_btn07' value='리터스포트'>리터스포트</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn08"><input type="checkbox" id='sub2ChkBtn08' name='sub2_chk_btn08' value='마마포레스트'>마마포레스트</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn09"><input type="checkbox" id='sub2ChkBtn09' name='sub2_chk_btn09' value='매일'>매일</label><i>1</i></li>
                                        <li><label for="sub2ChkBtn10"><input type="checkbox" id='sub2ChkBtn10' name='sub2_chk_btn10' value='미시마'>미시마</label><i>2</i></li>
                                    </ul>
                                    <a href="#" class='category-more-btn' title='브랜드 더보기'>브랜드 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                </div>
                            </li>
                            <li>
                                <a href="#" class='category-btn' title='가격'><span>가격</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                <div class="sub sub3">
                                    <ul>
                                        <li><label for="sub3ChkBtn01"><input type="checkbox" id='sub3ChkBtn01' name='sub3_chk_btn01' value='6,478원 미만'>6,478원 미만</label><i>44</i></li>
                                        <li><label for="sub3ChkBtn02"><input type="checkbox" id='sub3ChkBtn02' name='sub3_chk_btn02' value='6,478원 ~ 9,900원'>6,478원 ~ 9,900원</label><i>46</i></li>
                                        <li><label for="sub3ChkBtn03"><input type="checkbox" id='sub3ChkBtn03' name='sub3_chk_btn03' value='9,900원 ~ 15,200원'>9,900원 ~ 15,200원</label><i>44</i></li>
                                        <li><label for="sub3ChkBtn04"><input type="checkbox" id='sub3ChkBtn04' name='sub3_chk_btn04' value='15,200원 이상'>15,200원 이상</label><i>47</i></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" class='category-btn' title='혜택'><span>혜택</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                <div class="sub sub4">
                                    <ul>
                                        <li><label for="sub1ChkBtn01"><input type="checkbox" id='sub1ChkBtn01' name='sub1_chk_btn01' value='할인상품'>할인상품</label><i>94</i></li>
                                        <li><label for="sub1ChkBtn02"><input type="checkbox" id='sub1ChkBtn02' name='sub1_chk_btn02' value='한정수량'>한정수량</label><i>15</i></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" class='category-btn' title='유형'><span>유형</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" class="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                <div class="sub sub5">
                                    <ul>
                                        <li><label for="sub5ChkBtn01"><input type="checkbox" id='sub5ChkBtn01' name='sub5_chk_btn01' value='Kurly Only'>Kurly Only</label><i>38</i></li>
                                        <li><label for="sub5ChkBtn02"><input type="checkbox" id='sub5ChkBtn02' name='sub5_chk_btn02' value='희소가치 프로젝트'>희소가치 프로젝트</label><i>8</i></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="right-head">
                            <span>총 201건</span>
                            <ul>
                                <li>
                                    <a href="#" title="추천순">추천순<svg width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z" stroke="#ccc" stroke-width="1.4"></path><path d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z" fill="#ccc"></path></svg></a>
                                </li>
                                <li>
                                    <i>|</i>
                                </li>
                                <li>
                                    <a href="#" title="신상품순">신상품순</a>
                                </li>
                                <li>
                                    <i>|</i>
                                </li>
                                <li>
                                    <a href="#" title="판매량순">판매량순</a>
                                </li>
                                <li>
                                    <i>|</i>
                                </li>
                                <li>
                                    <a href="#" title="혜택순">혜택순</a>
                                </li>
                                <li>
                                    <i>|</i>
                                </li>
                                <li>
                                    <a href="#" title="낮은 가격순">낮은 가격순</a>
                                </li>
                                <li>
                                    <i>|</i>
                                </li>
                                <li>
                                    <a href="#" title="높은 가격순">높은 가격순</a>
                                </li>
                            </ul>
                        </div>
                         <ul class="new-product-gallery">
                         </ul>
                    </div>
                </div>
            </div>
        </section>


     </main>

    <?
    include_once($home_path.'footer.php');
    include_once($home_path.'quick_menu.php');
    include_once($home_path.'go_top.php');
    ?>
    </div>

    <script src="<?=$current_path?>js/sub1_script.js"></script>
    <script src="<?=$home_path?>js/top_modal.js"></script>
    <script src="<?=$home_path?>js/header.js"></script>
    <script src="<?=$home_path?>js/quick_menu.js"></script>
    <script src="<?=$home_path?>js/go_top.js"></script>
</body>

</html>