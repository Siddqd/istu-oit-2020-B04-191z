<?php
  
  function getAllById($id){
      $db = new SQLite3("site.db");
    $id = SQLite3::escapeString($id);
      $sql = "SELECT * FROM site WHERE id='$id'";
      $sqlCount = "SELECT COUNT(id) AS count FROM site";
      $result1 = $db->query($sqlCount);
      
      $result2 = $db->query($sql);
      return $result2;    

  }
  
  function addTable($heading,$text,$img){
    
       $heading = SQLite3::escapeString($headingd);
       $text = SQLite3::escapeString($text);
       $img = SQLite3::escapeString($img);

      $db = new SQLite3("site.db");
      $sqlInsert = "INSERT INTO site (heading,text,img) VALUES ('$heading' ,'$text', '$img')";
      $db->query($sqlInsert);
  }
?>



