<!DOCTYPE html>
<?php
// Date in the past
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

// always modified
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");

// HTTP/1.1
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

// HTTP/1.0
header("Pragma: no-cache");
?>
<html>
<head>
    <title>Entwurf:</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="Homepage Helden" name="author">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <?php $dir = 'layouts'; $files = scandir($dir, 0); print("<div id='urls'>"); for($i = 2; $i < count($files); $i++) { print "<span>".$files[$i]."</span>"; } print("</div>");?>

    <div id="loading">
        <img alt="Loading" src="img/loader.gif">

        <p>Ihr Entwurf wird geladen, bitte warten</p>
    </div>

    <nav class="animated bounceIn">
        <p id="description">description</p>

        <p class="layout">layout</p><a href=
        "http://www.homepage-helden.de"><img alt="homepage helden" id="logo"
        src="img/logo.png"></a> <a href="#" id="prev"><img alt="previous" src=
        "img/prev.png"></a> <a href="#" id="next"><img alt="next" src=
        "img/next.png"></a> <a href="#" id="toggle"><img alt="toggle menu" src=
        "img/down.png"></a>

        <div class="tooltip animated bounceIn">
            <img alt="angle" src="img/tooltip.png">

            <p>Derzeit liegt nur ein Entwurf für Sie vor.</p>
        </div>
    </nav>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> 
	
	<script src="js/app.js"></script>
</body>
</html>