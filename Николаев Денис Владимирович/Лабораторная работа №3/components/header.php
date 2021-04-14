<!DOCTYPE html>
<html lang="ru">
    <head>
        <title>RESTER</title>
        <meta charset="utf-8"/>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div class="header-container">
                <a class="header-logo" href="#">
                    <img src="images/logo.svg" width="50px" alt="Лого"/>
                </a>    
            </div>
        </header>
        <nav class="navigation">
            <ul class="navigation-list">
                <li class="navigation-item"><a class="navigation-link" href="?id_page=1">Продукция</a></li>
                <li class="navigation-item"><a class="navigation-link" href="?id_page=2">Покупателям</a></li>
                <li class="navigation-item"><a class="navigation-link" href="?id_page=3">Новости</a></li>
                <li class="navigation-item"><a class="navigation-link" href="?id_page=4">О компании</a></li>
                <li class="navigation-item search-form">
                    <form name="search" method="post" action="search.php">
                        <input type="search" name="search_q" required/>
                        <input type="submit" name="submit" value="Поиск"/>
                    </form>
                </li>
            </ul>
        </nav>
        <main>