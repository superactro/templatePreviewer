<!DOCTYPE html">

<head>
	<title>Entwurf: Richter und Itschner</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="author" content="Homepage Helden" />
	<link rel="stylesheet" href="css/style.css">
</head>
<body> <?php $dir = 'layouts'; $files = scandir($dir, 0); print("<div id='urls'>"); for($i = 2; $i < count($files); $i++) { print "<span>".$files[$i]."</span>"; } print("</div>");?><div id="loading"> <img src="img/loader.gif" alt="Loading"> <p>Ihr Entwurf wird geladen, bitte warten</p> </div> <nav class="animated bounceIn"> <p id="description">description</p> <p class="layout">layout</p> <a href="http://www.homepage-helden.de"><img id="logo" src="img/logo.png" alt="homepage helden"></a> <a id="prev" href="#"> <img src="img/prev.png" alt="previous"> </a> <a id="next" href="#"> <img src="img/next.png" alt="next"> </a> <a id="toggle" href="#"> <img src="img/down.png" alt="toggle menu"> </a> <div class="tooltip animated bounceIn"> <img src="img/tooltip.png" alt="angle"> <p>Derzeit liegt nur ein Entwurf für Sie vor.</p> </div> </nav> <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> <script src="js/app.js"></script></body></html>