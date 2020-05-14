<?php include 'count.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ОИТ</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="content-wrapper">
        <div class="side"></div>
        <div class="container">
            <header>
                <a id="logo" href="index.php"><img src="assets/logo_cook.jpg" alt="Логотип"></a>
                <div id="phone">8 (800) 555-35-35</div>
            </header>
            <div class="menu">
                <nav>
                    <div class="nav-link">
                        <a href="#">Салаты</a>
                    </div>
                    <div class="nav-link">
                        <a href="#">Второе</a>
                    </div>
                    <div class="nav-link">
                        <a href="#">Супы</a>
                    </div>
                </nav>
                <div class="burger">
                    <input id="toggle" type="checkbox" />
                    <label class="burger-btn" for="toggle">
                        <span></span>
                    </label>
                    <ul class="burger-box">
                        <li><a class="nav-link" href="#">Салаты</a></li>
                        <li><a class="nav-link" href="#">Второе</a></li>
                        <li><a class="nav-link" href="#">Супы</a></li>
                    </ul>
                </div>
            </div>

            
            <section id="first">
                
                <h1 class="h1">Кулинарные рецепты!</h1>

                <?php
                   include 'connect.php';
                   $query_str = "SELECT * FROM recipients";
                   $query_run = mysqli_query($connect,$query_str);
                   while ($out = mysqli_fetch_array($query_run))
                   {
                        
                      echo "<h3> $out[title]: </h3>";
                      echo "<p>$out[description]<a href=details.php?id=$out[id]>Подробнее</a></p>";
                      echo " <img src=assets/$out[img] alt = '$out[title]'>";
                   }
                ?>
             
                
                
            </section>
            <section id="second">
            	
                
                <p>
                    Рецептов много, самые вкусные рецепты у нас.это просто настоящая находка кулинара. Пошаговые рецепты с фото. Домашние рецепты, которые легко приготовить.  Кулинарные советы как приготовить любое блюдо. Советы что приготовить по любому поводу. Праздничные рецепты на любой праздничный стол. Рецепты для мультиварки. Все заготовки на зиму. Диеты и постный стол. Кулинарные новости и события.
                </p>
            </section>
            <section id="slider">
                <div id="slide_1" class="slide active"></div>
                <div id="slide_2" class="slide"></div>
                <div id="slide_3" class="slide"></div>
                <div id="selectors">
                    <button id="previous">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
            </section>
        </div>
        <div class="side"></div>
    </div>
    <footer>Copyright 2020</footer>

    <script src="main.js"></script>
    <?php include 'showcount.php';?>
</body>
</html>