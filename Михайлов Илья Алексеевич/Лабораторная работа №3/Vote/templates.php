<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <title>Drive</title>
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div class="logo">
                <a href="?page=index" class="logo-name">
                    <img src="img/Drive.png" class="logo-name-img">
                    <span class="logo-name-text">Ремонт автомобилей!</span>
                </a>
            </div>
            <button id="btn_modal_window" class="btn_modal_style">Записаться</button>
            <div id="my_modal" class="modal">
                <div class="modal_content">
                    <p class="modal_content_text">Записаться на ремонт</p>
                    <input name="email" type="email" placeholder="E-mail" class="input">
                    <textarea name="comment" placeholder="Коментарий" class="textarea"></textarea>
                    <div class="qwerw">
                        <button id="q" class="qq">Записаться</button>
                        <button id="w" class="ww">Отмена</button>
                    </div>
                </div>
            </div>
            <nav class="menu">
                <a href="?page=index" class="menu-item">Главная</a>
                <a href="?page=services" class="menu-item">Услуги</a>
                <a href="?page=contacts" class="menu-item">Контакты</a>
            </nav>
            <div class="header_burger">
                <span></span>
            </div>
        </header>
        <article class="article_box">
            <h1 class="article_header"><?php echo "$title" ?></h1>
            <img class="article_img" src=<?php echo "$imglink" ?>>
            <p class="article_text">
                <?php echo "$text" ?>
        </article>
        <h1 class="article_header">Оцените наш сайт (проголосовать можно один раз)</h1>
        <h1 class="article_header">
            <?php
            $result_gol = $db->query("SELECT * FROM articles WHERE id_articles = 1");
            $arr = $result_gol->fetchArray();
            $result_articles = $arr['result_articles'];
            echo "Результат голосования = $result_articles";
            ?>
        </h1>
        <form name="vote" action="vote.php" method="POST">
            Выберите оценку:<br>
            <input name="gol" type="radio" value="5" required>5<br>
            <input name="gol" type="radio" value="4" required>4<br>
            <input name="gol" type="radio" value="3" required>3<br>
            <input name="gol" type="radio" value="2" required>2<br>
            <input name="gol" type="radio" value="1" required>1<br>
            <input type="submit" value="Отправить">
        </form>
    </div>
    <footer class="footer">
        Copyright 2021
    </footer>
    <script src="js/script.js"></script>
</body>

</html>