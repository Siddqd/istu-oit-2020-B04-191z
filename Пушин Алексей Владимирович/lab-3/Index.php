<!doctype html>
<html>
<head>
	<meta charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php
		$path = $_GET['path'];		
 	?>
	<title>  <?php 	print_r($path) 	?>   </title>
	<link rel="stylesheet" href="Стили.css" type="text/css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="Script.js"></script>	
</head>
<body>
	<div class="wrappen">
		<?php
		$path = $_GET['path'];		
  		$pt;		

  		$mysqli = new mysqli('localhost', 'root', '', 'shop');
		if (mysqli_connect_errno()) {
   		 echo "Подключение невозможно: ".mysqli_connect_error();
  		}
  		$result_set = $mysqli->query('SELECT * FROM article');
		while ($row = $result_set->fetch_assoc()) {		  
		  if($path == $row['title']){
			$pt = $row['text'];
		  }		
 		}

		$pt = $pt . '.php';  		  
 		$result_set->close();
		$mysqli->close();
		?>
					
		<?php
			include ('leftSide.php');
			include ('rightSide.php');
 		?>
		<div class="content">
		<?php			
			include ('header.php');
			include ('nav.php');
			echo($pt);
			include ('footer.php'); 
 		?>
		</div>	
		<div ID = "toTop" > ^ Наверх </div>
	</div>	
</body>
</html>
