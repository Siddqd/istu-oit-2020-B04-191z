<?php
if (!isset($_COOKIE['cookie'])) {
    setcookie('cookie', 5, time() + 10);
    $db = new SQLite3('my.db');
    $result_gol = $db->query("SELECT * from articles WHERE id_articles=1");
    $arr = $result_gol->fetchArray();
    $gol_db = $arr['gol_articles'];
    $kol = $arr['kol_articles'];
    $gol = $_POST['gol'];
    /*$gol = htmlspecialchars($gol);*/
    $kol += 1;
    $gol = ($gol + $gol_db);
    $result_articles =  round(($gol / $kol), 2);
    $db->query("UPDATE articles SET gol_articles='$gol' WHERE id_articles = 1");
    $db->query("UPDATE articles SET kol_articles='$kol' WHERE id_articles = 1");
    $db->query("UPDATE articles SET result_articles='$result_articles' WHERE id_articles = 1");
    header("Location: " . $_SERVER["HTTP_REFERER"]);
} else {
    header("Location: " . $_SERVER["HTTP_REFERER"]);
}
