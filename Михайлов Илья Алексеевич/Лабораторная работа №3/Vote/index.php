<?php
include 'controller.php';
$page = $_GET['page'] ?? 'index';
switch ($page) {
    case 'index':
        $result = $db->query("SELECT * from articles WHERE id_articles=2");
        $row = $result->fetchArray();
        $title = $row['title_articles'];
        $text = $row['text_articles'];
        $imglink = $row['img_articles'];
        include 'templates.php';
        break;
    case 'services':
        $result = $db->query("SELECT * from articles WHERE id_articles=3");
        $row = $result->fetchArray();
        $title = $row['title_articles'];
        $text = $row['text_articles'];
        $imglink = $row['img_articles'];
        include 'templates.php';
        break;
}
