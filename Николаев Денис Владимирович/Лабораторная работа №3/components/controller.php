<?php
$db_name = "database.db";

if (!file_exists($db_name)) {
    echo ("База отсутвует");
} else {
    $db = new SQLite3($db_name);

    // Переменная для перехода по странцам
    $id_page = $_GET['id_page'];
    settype($id_page, 'integer');
    if (!$id_page) {
        $id_page = 4; //станица по-умолчанию
    }

    $sql = "SELECT * FROM pages WHERE id_page = " . $id_page;
    $result = $db->query($sql);
    $row = $result->fetchArray();

    $title = $row['title_page'];
    $text = $row['text_page'];

    $db->close();
}
?>