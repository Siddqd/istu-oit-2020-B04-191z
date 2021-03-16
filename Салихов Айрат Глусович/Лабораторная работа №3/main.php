<?php

$heading = $_POST['heading'];
$text = $_POST['text'];
$img = $_POST['img'];
include 'controller.php';
if ($heading != "" && $text != "" && $img != "") {

    addTable($heading, $text, $img);
   
}

$page = $_POST['id'];
if ($page != "") {
    $db = new SQLite3("site.db");

    $sqlCount = "SELECT COUNT(id) AS count FROM site";
    $result1 = $db->query($sqlCount);
    while ($row = $result1->fetchArray()) {
        if ($row['count'] > $page) {
            $arr = getAllById($page);
        } else {
            return '';
        }
    }
}


?>