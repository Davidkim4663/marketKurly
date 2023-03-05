<header id="header">
            <!-- row1 / row2 / row3 -->
            <div class="row1">
                <div class="container">
                    <ul>
                        <li><a href="<?=$sub_path?>sub05_member/sign_up" title="회원가입"><em>회원가입</em></a></li>
                        <li><i>|</i></li>
                        <li><a href="<?=$sub_path?>sub05_member/sign_in" title="로그인">로그인</a></li>
                        <li><i>|</i></li>
                        <li class="top-tooltip-box">
                            <a href="#" title="고객센터" class="service-center-btn">고객센터<img src="<?=$home_path?>img/ico_down_16x10.png"
                                    alt=""></a>
                            <div class="top-tooltip-menu">
                                <ul>
                                    <li><a href="<?=$sub_path?>sub05_member/service_center/notice" title="공지사항">공지사항</a></li>
                                    <li><a href="<?=$sub_path?>sub05_member/service_center/frquently_question" title="자주하는 질문">자주하는 질문</a></li>
                                    <li><a href="<?=$sub_path?>sub05_member/service_center/one_by_one_question" title="1:1문의">1:1 문의</a></li>
                                    <li><a href="<?=$sub_path?>sub05_member/service_center/bulk_order" title="대량주문 문의">대량주문 문의</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row2">
                <div class="container">
                    <!-- left : 마켓컬리 / 뷰티컬리 -->
                    <div class="left">
                        <ul>
                            <!-- home -->
                            <li>
                                <h1>
                                    <a href="<?=$home_path?>" title="마켓컬리">
                                        <img src="<?=$home_path?>img/logo_kurly.svg" alt="">
                                        <span>마켓컬리</span>
                                    </a>
                                </h1>
                            </li>
                            <!-- | -->
                            <li>
                                <i>|</i>
                            </li>
                            <!-- 뷰티컬리 -->
                            <li>
                                <span><a href="#">뷰티컬리<img src="<?=$home_path?>img/n_red.svg" alt=""></a></span>
                            </li>
                        </ul>
                    </div>
                    <!-- center : 검색창 -->
                    <div class="center">
                        <form action="">
                            <div class="search-box">
                                <input type="text" name="search" id="search" placeholder="검색어를 입력 해주세요">
                                <a href="#" title="search-btn"><img src="<?=$home_path?>img/search.svg" alt=""></a>
                            </div>
                        </form>
                    </div>
                    <!-- right : map / header / cart  -->
                    <div class="right">
                        <div class="right-btns map-tooltip-box">
                            <a href="#" title="배송지" class="map-tooltip-btn"><img src="<?=$home_path?>img/map.svg" alt=""></a>
                            <div class="map-tooltip-menu">
                                <ul>
                                    <li>
                                        <em>배송지 등록</em>
                                        <span>구매 가능한 상품을 확인하세요!</span>
                                    </li>
                                    <li>
                                        <button class="login-btn">로그인</button>
                                        <button class="address-search-btn"><img src="<?=$home_path?>img/search_white.png"
                                                alt="">주소검색</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-btns"><a href="#" title="찜한상품"><img src="<?=$home_path?>img/heart.svg" alt=""></a></A></div>
                        <div class="right-btns"><a href="#" title="장바구니"><img src="<?=$home_path?>img/cart.svg" alt=""></a></A></div>
                    </div>
                </div>
            </div>
            <div class="row3">
                <!-- 스크롤탑 값이 100px 이상이면 헤더영역 row3을 고정한다 -->
                <div class="container">
                    <div class="left">
                        <a href="#" title="카테고리"><img src="<?=$home_path?>img/hambar.svg" alt=""></a>
                        <span><a href="#">카테고리</a></span>
                    </div>
                    <div class="center">
                        <ul>
                            <li><a href="<?=$sub_path?>sub1/" class="main-btn" title="신상품">신상품</a></li>
                            <li><a href="<?=$sub_path?>sub2/" class="main-btn" title="베스트">베스트</a></li>
                            <li><a href="<?=$sub_path?>sub3/" class="main-btn" title="알뜰쇼핑">알뜰쇼핑</a></li>
                            <li><a href="<?=$sub_path?>sub4/" class="main-btn" title="특가/혜택">특가/혜택</a></li>
                        </ul>
                    </div>
                    <div class="right">
                        <span>
                            <em>샛별</em><i>·</i><em>택배</em><strong>배송안내</strong>
                        </span>
                    </div>
                </div>
            </div>
</header>