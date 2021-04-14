</main>
        <footer>
            <div class="footer">
                ЗАО «Рестер» &copy; 2021 Все права защищены.
            </div>
        </footer>
        <button class="up-button" type="button">
            ↑<span class="visually-hidden">Наверх</span>
        </button>
        <script src="up-button.js"></script>
        <?php 
            $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            $id_page = $_GET['id_page'];
            if (strcasecmp($url, "site/") == 0 || $id_page == 4) {
                echo ('<script src="slider.js"></script>');
            }
        ?>
    </body>
</html>