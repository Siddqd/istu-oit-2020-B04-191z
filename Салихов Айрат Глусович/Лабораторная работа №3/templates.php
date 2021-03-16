<!DOCTYPE html>
<?php include 'main.php'; ?>

<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"/>
    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Shippori+Mincho+B1:wght@500&display=swap"
          rel="stylesheet">
    <script src="script.js"></script>


</head>
<body>

<div class="container">

    <div class="container_main_left">
        <div class="container_left_Up"></div>
        <div class="container_left_Down"></div>
    </div>
    <div class="container_main">


        <header>

            <p>SKATEBOY</p>
            <a href="index.html"><img class="logo" src="1.png" alt=""></a>

        </header>


        <main>
            <div class="menu">
                <nav>
                    <div class="nav-link">
                        <a href="">MENU1</a>
                    </div>
                    <div class="nav-link">
                        <a href="">MENU2</a>
                    </div>
                    <div class="nav-link">
                        <a href="">MENU3</a>
                    </div>
                </nav>
            </div>

            <h1><?php
                if ($arr != '') {
                    while ($row = $arr->fetchArray()) {
                    echo $row['heading'];
                    } 
                }else {
                    echo 'Такой страницы не существует';
                }
                ?></h1>


            <div class="info">
                <div class="textInfo">
                    <p><?php

                        if ($arr != '') {
                    while ($row = $arr->fetchArray()) {
                    echo $row['text'];
                    } 
                }else {
                    echo '';
                }
                        ?>
                    </p>
                </div>
            </div>

            <a data-fancybox="gallery"

               href="<?php

               if ($arr != nul) {
                    while ($row = $arr->fetchArray()) {
                    echo $row['img'];
                    } 
                }else {
                    echo '';
                }
               ?>"><img
                        src="<?php
                        if ($arr != nul) {
                    while ($row = $arr->fetchArray()) {
                    echo $row['img'];
                    } 
                }else {
                    echo '';
                }
                        ?>"" style="display: block;margin: 0 auto;" ></a>


        </main>


        <footer style="text-align: center;">Салихов А.Г.</footer>


    </div>

    <div class="container_main_right">
        <div class="container_left_Up"></div>
        <div class="container_left_Down"></div>
    </div>


    <div id="button-up"><img src="2.png" style="height: 80px;
    margin-right: 100px;" alt=""></div>
</div>

</body>
<script>
    $(document).ready(function () {
        var button = $('#button-up');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                button.fadeIn();
            } else {
                button.fadeOut();
            }
        });
        button.on('click', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
</script>
</html>