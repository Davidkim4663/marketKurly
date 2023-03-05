<!DOCTYPE html>
<html lang="en">
<?
    include_once('../config.php')
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>대량주문 문의</title>
    <link rel="stylesheet" href="<?=$current_path?>css/bulk_order.css">
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
        <br><br><br><br><br><br><br><br><br><br>
        <h1 style="font-size: 50px; font-weight: 700; color: blue; text-align:center;">대량주문 문의</h1>
        <br><br><br><br><br><br><br><br><br><br>
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