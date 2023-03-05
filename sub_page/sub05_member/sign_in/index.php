<!DOCTYPE html>
<html lang="en">
<?
    include_once('../config.php')
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="<?=$current_path?>css/sign_in.css">
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
        <main id="main" class ="sign_in">
         <div id="login-box">
          <div class="login-box-container">
             <div class="title">
               <h1>로그인</h1>
             </div>
             <div class="login-info">
              <form action="user-id">
                <input type="text" id = "user-id" name = "user_id" placeholder = "아이디를 입력해주세요" autofocus required>
              </form>
              <form action="user-pw">
                <input type="password" id = "user-pw" name = "user_pw"  placeholder = "비밀번호를 입력해주세요" autofocus required>
              </form>
              
             </div>
             <div class="login_find">
               <span><a href="#" title="sign_in-find">아이디 찾기</a></span>
               <i>|</i>
               <span><a href="#" title="pw_find">비밀번호 찾기</a></span>
             </div>

             
             <div class="btn-box">
              <button class= "login_btn"><a href="#" title="login">로그인</a></button>
              <button class= "sign_up-btn"><a href="#" title="sign-up">회원가입</a></button>
             </div>
          </div>
         </div>
        </main>

    <?
    include_once($home_path.'footer.php');
    ?>
    </div>


    <script src="<?=$home_path?>js/top_modal.js"></script>
    <script src="<?=$home_path?>js/header.js"></script>
</body>

</html>