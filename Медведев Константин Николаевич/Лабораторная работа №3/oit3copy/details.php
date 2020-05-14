<?php include 'count.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ОИТ</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    

    <div id="content-wrapper">
        <div class="side"></div>
        <div class="container">
            <header>
                <a id="logo" href="index.php"><img src="../assets/logo_cook.jpg" alt="Логотип"></a>
                <div id="phone">8 (800) 555-35-35</div>
            </header>
            

            <section id="first">
            <?php
                include 'connect.php';
                $id = $_GET['id'];
                

                $query_str = "SELECT * FROM recipients WHERE id = '$id'";
                $query_run = mysqli_query($connect,$query_str);
                
                while ($out = mysqli_fetch_array($query_run))

                {   
                   
                    echo "<h3> $out[title]:</h3>";
                    echo "<img src= assets/$out[img] alt = '$out[title]'>";
                    echo "<p>$out[description] </p>";
                }

            ?>
            </section>
            <section id="second">
                <h3> Продукты:</h3>
                
                <ul>
                    <?php
                        include 'connect.php';
                        $id = $_GET['id'];

                        $query_str = "SELECT product FROM ing WHERE id = '$id'";
                        $query_run = mysqli_query($connect,$query_str);
                        while ($out = mysqli_fetch_array($query_run,MYSQLI_ASSOC))
                        {   
                           
                           $res = $out['product'];
                           $res_arr = explode("\n", $res);
                           foreach ($res_arr as  $value) {
                             echo "<li>$value</li>";
                           }
                        }
                    ?>
                </ul>   
                <h3>Пошаговый рецепт:</h3>   
                <ol>
                    <?php
                        include 'connect.php';
                        $id = $_GET['id'];

                        $query_str = "SELECT steps FROM ing WHERE id = '$id'";
                        $query_run = mysqli_query($connect,$query_str);
                        while ($out = mysqli_fetch_array($query_run,MYSQLI_ASSOC))
                        {   
                           
                           $res = $out['steps'];
                           $res_arr = explode(";", $res);
                           foreach ($res_arr as  $value) {
                             echo "<li>$value</li>";
                           }
                        }
                    ?>
                </ol>
            </section>
            
        </div>
        <div class="side"></div>
    </div>
    <footer>Copyright 2020</footer>

    <script src="main.js"></script>
    <?php include 'showcount.php';?>
</body>
</html>                
               
                
            
                        
                        

                        
                         
                                
                           
                            
                        
               
                