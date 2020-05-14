<?php
include 'connect.php';
$visitor_ip = $_SERVER['REMMOTE_ADDR'];
$date = date("d-m-y");
echo "$date";

$res = mysqli_query($connect,"SELECT visit_id FROM visits WHERE `date`= '$date'") or die("проблема  подключения к бд ");
  
 if (mysqli_num_rows($res) == 0) 
 {
  	// Очищаем таблицу ips
    mysqli_query($connect, "DELETE FROM `iips`");

    // Заносим в базу IP-адрес текущего посетителя
    mysqli_query($connect, "INSERT INTO `iips` SET `ip_adress`='$visitor_ip'");

    // Заносим в базу дату посещения и устанавливаем кол-во просмотров и уник. посещений в значение 1
    $res_count = mysqli_query($connect, "INSERT INTO `visits` SET `date`='$date', `hosts`=1,`views`=1");

 }  

 // Если посещения сегодня уже были
else
{
    // Проверяем, есть ли уже в базе IP-адрес, с которого происходит обращение
    $current_ip = mysqli_query($connect, "SELECT `ip_id` FROM `iips` WHERE `ip_adress`='$visitor_ip'");

    // Если такой IP-адрес уже сегодня был (т.е. это не уникальный посетитель)
    if (mysqli_num_rows($current_ip) == 1)
    {
        // Добавляем для текущей даты +1 просмотр (хит)
        mysqli_query($connect, "UPDATE `visits` SET `views`=`views`+1 WHERE `date`='$date'");
    }

    // Если сегодня такого IP-адреса еще не было (т.е. это уникальный посетитель)
    else
    {
        // Заносим в базу IP-адрес этого посетителя
        mysqli_query($connect, "INSERT INTO `iips` SET `ip_adress`='$visitor_ip'");

        // Добавляем в базу +1 уникального посетителя (хост) и +1 просмотр (хит)
        mysqli_query($connect, "UPDATE `visits` SET `hosts`=`hosts`+1,`views`=`views`+1 WHERE `date`='$date'");
    }
}             

?>