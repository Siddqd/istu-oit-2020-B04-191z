<!DOCTYPE html>
<?php include 'main.php'; ?>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

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


            <h1>Скейтбординг $</h1>
            <div class="info">

                <img class="imgMain" src="2.jpg" alt="">

                <div class="textInfo">
                    <p>
                        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B5%D0%B9%D1%82%D0%B1%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B3">Скейтбординг</a>
                        — это экстремальный вид спорта, который широко распространён во всех странах мира. Он
                        заключается в передвижении на специальной доске — скейтборде. Кататься можно и в стиле лайт, без
                        преодоления препятствий и выполнения трюков. В таком случае занятие становится полезным
                        развлечением, помогающим улучшить координацию, осанку и просто проводить больше времени на
                        свежем воздухе. Спортивность и определённая доля риса появляются в том случае, если используются
                        специальные трассы для катания, включающие в себя препятствия, или трюки выполняются на рампе. С
                        2017 года скейтбординг включён в олимпийские виды спорта, а в 2020 году на Олимпийских играх,
                        которые пройдут в Токио, спортсмены будут награждать медалями.</p>


                </div>
            </div>
            <h1>Основные стили катания на скейте</h1>

            <ul>
                <li>Флэтленд (от английского «плоская земля») – самый первый стиль, который подразумевает собой катание
                    и выполнение различных трюков на горизонтальной поверхности – асфальте, бетонных плитах.
                </li>
                <br>

                <li>Стрит – как понятно из названия, это стиль уличного катания, при котором основой для трюков
                    становятся всевозможные лестницы, перила, перекрытия, отбойники. В этом стиле на данный момент
                    катаются большинство скейтеров.
                </li>
                <br>

                <li>Фристайл – очень популярный в 70-80 годах стиль, при котором трюки были обязаны выполняться
                    исключительно на одной плоскости.
                </li>
                <br>

                <li>Верт – стиль, зародившийся в 1976 году благодаря команде Z-Boys – из-за засухи они начали кататься и
                    делать трюки на скетборде в пересохших бассейнах. Это стиль трюков на рампе.
                </li>
                <br>

                <li>Парк – продолжатель верта в исполнении трюков на рампе, но теперь уже в специально созданных для
                    этого скейт-парках, где построены специальные рампы для выполнения особо зрелищных и сложных
                    элементов.
                </li>
            </ul>

            <h1>Устройство скейта</h1>
            <div class="tableInfo">

                <table>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Дека</td>
                        <td>Гриптэйп</td>
                        <td>Подвески</td>
                        <td>Колёса</td>
                    </tr>
                    <tr>
                        <td>Описание</td>
                        <td>так называется доска скейтборда, а её загнутые торцы — ноуз, что находится спереди, и тэйл,
                            соответственно, — задняя часть
                        </td>
                        <td>стойкая к износу наждачная бумага, которая клеится на деку сверху и увеличивает сцепление
                            подошв ботинок скейтбордиста с доской
                        </td>
                        <td>крепятся колёса, что должны находиться целиком под декой</td>
                        <td>диаметр, жёсткость, материал изготовления, способ крепления — всё это может быть самым
                            разным и связано с предполагаемой манерой езды и исполнения трюков.
                        </td>
                    </tr>
                </table>

            </div>


            <a data-fancybox="gallery" href="3.jpg"><img src="3.jpg" style="display: block;margin: 0 auto;" alt=""></a>
            <p>Существуют в конструкции ещё и подшипники, но спорно выделение их в автономную часть. Лучше считать их
                составной частью подвески.</p>

            <div class="formPage" style="display: flex;justify-content: center;">
                <button class="open-button" onclick="openForm()">Добавить страницу</button>
            </div>

            


            <div class="form-popup" id="myForm">
                <form method="post" action="http://php/"  class="form-container">


                    <label for="email"><b>Заголовок</b></label>
                    <input type="text" name="heading" placeholder="Введите название заголовка" required>

                    <label for="coment"><b>Текст</b></label>
                    <input type="text" placeholder="Введите текст" name="text" required>

                    <label for="coment"><b>Изображение</b></label>
                    <input type="text" placeholder="Введите ссылку на изображение" name="img" required>

                    <button type="submit" class="btn" >Отправить</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">Отменить</button>
                </form>
            </div>

            <div class="formPage" style="display: flex;justify-content: center;">
            <form class="form-container" method="post" action="templates.php">
                <label>Перейти на страницу</label>
                <input type="text" name="id" placeholder="Введите номер страницы" required>
                
                <button type="submit" class="btn" >Перейти</button>
            </form>
            </div>
           
     
            

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