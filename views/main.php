<html>
		<head>
			<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/main.css">

<link rel="stylesheet" href="<?php echo base_url();?>assets/css/w3.css">
<style>
.mySlides {display:none;}
</style>
		</head>
		<body>
       

		<div class="header">
		<img src="img\1.png" width="100" height="100">
		<div class="header-right">
		<h1>आदिवासी विकास विभाग </h1></div>
		</div>
		<img src="img\2.png" width="100" height="100" class="header2">
		<div class="topnav">
		  
		  <a href="<?php echo base_url(); ?>Login">लॉग इन</a>
		  <a class="active" href="<?php echo base_url(); ?>Main">मुख्य पृष्ठ</a>
		</div>

<div class="w3-content w3-section" style="max-width:100%">
  <img class="mySlides" src="img\4.png" style="width:98%" id="img1">
  <img class="mySlides" src="img\3.jpg" style="width:98%" id="img1">
</div>

<script>
var myIndex = 0;
carousel(); 

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}
</script>
		</body>
</html>