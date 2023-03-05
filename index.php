<!DOCTYPE html>
<html lang="en">
<?
    include_once('./config.php')
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

    <title>marketKurly</title>
    <link rel="stylesheet" href="<?=$home_path?>css/style.css">
    <script src="<?=$home_path?>js/lib/jquery-3.6.3.min.js"></script>
    <script src="<?=$home_path?>js/lib/jquery.easing.1.3.js"></script>

</head>

<body>
    <!-- wrap -->
    <div id="wrap">
    <?
    include_once($home_path.'top_modal.php');
    include_once($home_path.'header.php');
    include_once($home_path.'main.php');
    include_once($home_path.'footer.php');
    include_once($home_path.'intro_modal.php');
    include_once($home_path.'quick_menu.php');
    include_once($home_path.'go_top.php');
    ?>
    </div>

    <script src="<?=$home_path?>js/top_modal.js"></script>
    <script src="<?=$home_path?>js/header.js"></script>
    <script src="<?=$home_path?>js/intro.js"></script>
    <script src="<?=$home_path?>js/intro_modal.js"></script>
    <script src="<?=$home_path?>js/quick_menu.js"></script>
    <script src="<?=$home_path?>js/go_top.js"></script>
</body>

</html>