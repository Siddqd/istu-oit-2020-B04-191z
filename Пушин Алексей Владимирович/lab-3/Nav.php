<nav>
	<table>
		<?php		
		$mysqli = new mysqli('localhost', 'root', '', 'shop');
		if (mysqli_connect_errno()) {
   		 echo "Подключение невозможно: ".mysqli_connect_error();
  		}
		$array = array();
  		$result_set = $mysqli->query('SELECT * FROM article');
		while ($row = $result_set->fetch_assoc()) {
			array_push($array, $row['title']);

 		}		
		foreach ($array as $value) {
			$value1 = $value . '.php';
			echo "<tr><td><a href=$value1 class=\"row\">$value</a></td></tr>";
		}		
		$pt = $pt . '.php';  		  
 		$result_set->close();
		$mysqli->close();
		?>					
					
	</table>
</nav>	
