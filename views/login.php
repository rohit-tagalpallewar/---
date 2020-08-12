<html>
<head>
<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/login.css">
<script src="<?php echo base_url(); ?>assets/js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- <script src="<?php echo base_url(); ?>assets/js/popper.js"></script> -->
</head>
<body>
	<form id="login_form">
		<div class="form">	
<div class="login-box">
<h1>लॉग इन</h1>
<div class="textbox">
<input type="text" placeholder="आयडी " name="userID">
</div>
<div class="textbox">
<input type="password" placeholder="पासवर्ड" name="pass">
</div>
<button type='button' class='btn'  onclick="login();">लॉग इन</button>
<a href="Main"><input type="submit" class="btn" value="मागे जा"></a>
</div>
</div>
	</form>

<script>
    var baseUrl = '<?php echo base_url(); ?>';
</script>
   <script src='<?php echo base_url(); ?>assets/js/loginJS.js'></script>
</body>
</html>

