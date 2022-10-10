<?php

include "head.php";

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="post.css">
    </head>
    <body>
        <div class="kontainer">
            <div class="title">
                <img src="image/profile.png">
                <div class="info">
                    <h4 class="nama"><?php echo $_POST["nama"]; ?></h4>
                    <p class="twitter-handle"><?php echo $_POST["notp"]; ?><br>
                    <?php echo $_POST["jenkel"]; ?>
                    </p>
                </div>
            </div>
            <div class="tweet">
                <p>
                <?php echo $_POST["keluh"]; ?>
                </p>
            </div>
        </div>

    </body>
</html>

<?php

include "foot.php";

?>