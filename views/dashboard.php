
		<html>
		<head>
			<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/dashboard.css">

			<h1 align='center'>आदिवासी विकास विभाग </h1>
		
			
		</head>
		<body>
       
		<div class="topnav">
		  
		  <a href="<?php echo base_url();?>logoutController/logout">लॉग आऊट</a>
		  <!-- <button class="openbtn" >लॉग आऊट</button> -->
		  
			<div id="mySidebar" class="sidebar">
			  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
			  <hr><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* दैनंदिन आहार योजना *</p><hr>
			  <a href="DailyPr">प्राथमिक विभाग </a>
			  <a href="DailyMa">माध्यमिक विभाग </a>
			  <a href="DailyUm">उच्चमाध्यमिक विभाग </a>
			  <br><br><br><br><br><br>
			  <hr><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* मासिक अहवाल *</p><hr>
			  <a href="MonthlyReportPr">प्राथमिक विभाग </a>
			  <a href="MonthlyReportMa">माध्यमिक विभाग </a>
			  <a href="MonthlyReportUm">उच्चमाध्यमिक विभाग </a>
			</div>

			<div id="main">
			  <button class="openbtn" onclick="openNav()">☰</button>  
			  
			</div>
			
			
		</div>
		
				</div>
			</div>
		
			
		<script>
		function openNav() {
		  document.getElementById("mySidebar").style.width = "250px";
		  document.getElementById("main").style.marginLeft = "250px";
		}

		function closeNav() {
		  document.getElementById("mySidebar").style.width = "0";
		  document.getElementById("main").style.marginLeft= "0";
		}
		</script>

		
		
		</body>
		</html>
		

