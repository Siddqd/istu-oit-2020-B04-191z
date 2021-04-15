<?php
require_once 'components/controller.php';

$db = new SQLite3($db_name);

if (isset($_POST['submit'])) {
    $search = "Результаты поиска";
}

//search
if ($search) {
    $title = $search;
    $var = trim($_POST['search_q']);
    if (preg_match("/^([A-Za-zА-Яа-я0-9]+)/", $var)) {
        $query = $var;
        $sql = "SELECT * FROM vtbl WHERE vtbl MATCH '" . $query . "'";
        $db->query($sql);

        $result = $db->query($sql);
        $row = $result->fetchArray();
        if (!$row) {
            $text = '<p>Вы искали: ' . $query . '</p><p>По вашему запросу ничего не найдено.</p>';
            $result = "Ничего не найдено.";
        } else {
            $text = '<p>Вы искали: ' . $query . '</p>';
            $found_pages = [];
            while ($row) {
                if (!in_array($row['v_rowid'], $found_pages)) {
                    $ref .= '<p>Найдено на странице: <a href="?id_page=' . $row['v_rowid'] . '">' . $row['v_col1'] . '</a></p>';
                    $found_pages[$row['v_rowid']] = $row['v_rowid'];
                }
                $row = $result->fetchArray();
            }
            $text .= $ref;
        }
        $query = '';
    } else {
        $text = 'Неверный запрос';
    }

}

$db->close();
require_once 'components/header.php';
require_once 'components/main.php';
require_once 'components/footer.php';
?>