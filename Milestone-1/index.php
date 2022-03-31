<?php

include './database.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./img/icon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./style.css" />
    <title>PHP Dischi</title>
</head>

<body>
    <!-- APP -->
    <div id="app">
        <div class="header">
            <figure class="logo">
                <img src="./img/logo.png" alt="Spotify" />
            </figure>
        </div>
        <div class="main">
            <div class="container">

                <?php

                foreach ($disc as $el) {

                ?>

                    <div class="card">
                        <figure class="card-image">
                            <img src="<?php echo $el['poster']; ?>" alt="<?php echo $el['title']; ?>" />
                        </figure>
                        <h6><?php echo $el['title']; ?></h6>
                        <p><?php echo $el['author']; ?></p>
                        <p><?php echo $el['year']; ?></p>
                    </div>

                <?php

                }

                ?>

            </div>
        </div>
</body>

</html>