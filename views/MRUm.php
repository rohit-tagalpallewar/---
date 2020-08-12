<html>
<head>
<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/MR.css">
<script src="<?php echo base_url(); ?>assets/js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>assets/js/popper.js"></script>

</head>
<body>
	<form id="monthlyReport_form">

<h1><center>माध्यमिक विभाग - मासिक अहवाल<center></h1>
<center><select name="months" id="months">
  <option>January</option>
  <option>February</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>August</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
</select>
<select name="year" id="year">
   <option>2001</option>
  <option>2002</option>
  <option>2003</option>
  <option>2004</option>
  <option>2005</option>
  <option>2006</option>
  <option>2007</option>
  <option>2008</option>
  <option>2009</option>
  <option>2010</option>
  <option>2011</option>
  <option>2012</option>
  <option>2013</option>
  <option>2014</option>
  <option>2015</option>
  <option>2016</option>
  <option>2017</option>
  <option>2018</option>
  <option>2019</option>
  <option>2020</option>
</select>
</center><center>
	<button type='button' class='btn'  onclick="showData();">शोधा</button>&nbsp;
	<button type='button' class='btn'  onclick="goBack();">मागे जा</button>
  <button  type='button' class='btn'  onclick="exportTableToExcel('customers')">Generate Excel File</button>
</center>
<hr><table border="1" id="customers" align="center">
<tr>
  <th></th>
  <th>11 एकुन हजर</th>
  <th>12 एकुन हजर</th>
  <th>11 ते 12 एकुन हजर</th>
</tr>
 <tr>

  <td></td>
  <td id="oneToFive"></td>
  <td id="sixToSeven"></td>
  <td id="totalAttendence"></td>

  <!-- <td></td>
  <td id="oneToFive"></td>
  <td  id="sixToSeven"></td>
  <td id="totalAttendence"></td> -->
</tr>


<tr>
  <th></th>
  <th>11 सरासरी</th>
  <th>12 सरासरी</th>
  <th>11 ते 12 सरासरी</th>
</tr>
<tr>
    <td></td>
  <td id="oneToFiveAvg"></td>
  <td id="sixToSevenAvg"></td>
  <td id="oneToSevenAvg"></td>
  <!-- <td  id="oneToFiveAvg"></td>
  <td  id="sixToSevenAvg"></td>
  <td  id="oneToSevenAvg"></td> -->
</tr>

<tr>
  <td></td>
  <th>एकूण खर्च (11)</th>
  <th>एकूण खर्च (12)</th>
  <th>एकूण खर्च (11ते12)</th>
</tr>
<tr>
  <th>गहू</th>
  <td id="Wheat1"></td>
  <td id="Wheat2"></td>
  <td id="Wheat3"></td>
</tr>
<tr>
  <th>तांदूळ</th>
  <td id="Rice1"></td>
  <td id="Rice2"></td>
  <td id="Rice3"></td>
</tr>
<tr>
  <th>मुंगडाळ</th>
  <td id="MungDaal1"></td>
  <td id="MungDaal2"></td>
  <td id="MungDaal3"></td>
</tr>
<tr>
  <th>चणाडाळ</th>
  <td id="chnaDaal1"></td>
  <td id="chnaDaal2"></td>
  <td id="chnaDaal3"></td>
</tr>
<tr>
  <th>तूरडाळ</th>
  <td id="turDaal1"></td>
  <td id="turDaal2"> </td>
  <td id="turDaal3"></td>
</tr>
<tr>
  <th>बटबटीडाळ</td>
  <td id="batbatiDaal1"></td>
  <td id="batbatiDaal2"></td>
  <td id="batbatiDaal3"></td>
</tr>
<tr>
  <th>उडीदडाळ</th>
  <td id="udidDaal1"></td>
  <td id="udidDaal2"></td>
  <td id="udidDaal3"></td>
</tr>
<tr>
  <th>सरपण</th>
  <td id="sarpan1"></td>
  <td id="sarpan2"></td>
  <td id="sarpan3"></td>
</tr>
<tr>
  <th>तिखट</th>
  <td id="tikhat1"></td>
  <td id="tikhat2"></td>
  <td id="tikhat3"></td>
</tr>
<tr>
  <th>हळद</th>
  <td id="hld1"></td>
  <td id="hld2"></td>
  <td id="hld3"></td>
</tr>
<tr>
  <th>जिरा</th>
  <td id="jira1"></td>
  <td id="jira2"></td>
  <td  id="jira3"></td>
</tr>
<tr>
  <th>मसाला</th>
  <td  id="masala1"></td>
  <td id="masala2"></td>
  <td id="masala3"></td>
</tr>
<tr>
  <th>मीठ</th>
  <td id="salt1"></td>
  <td id="salt2"></td>
  <td id="salt3"></td>
</tr>
<tr>
  <th>शेंगदाण</th>
  <td id="shengdana1"></td>
  <td  id="shengdana2"></td>
  <td  id="shengdana3"></td>
</tr>
<tr>
  <th>साखर</th>
  <td  id="sugar1"></td>
  <td id="sugar2"></td>
  <td id="sugar3"></td>
</tr> 
<tr>
  <th>फ.तेल</th>
  <td id="fa_tel1"></td>
  <td id="fa_tel2"></td>
  <td id="fa_tel3"></td>
</tr>
<tr>
  <th>मटकी</th>
  <td id="mataki1"></td>
  <td id="mataki2"></td>
  <td id="mataki3"></td>
</tr>
<tr>
  <th>बरबीटी</th>
  <td id="barbiti1"></td>
  <td id="barbiti2"></td>
  <td id="barbiti3"></td>
</tr>
<tr>
  <th>चना</th>
  <td id="chna1"></td>
  <td id="chna2"></td>
  <td id="chna3"></td>
</tr>
<tr>
  <th>क.साबण</th>
  <td id="ka_saban1"></td>
  <td id="ka_saban2"></td>
  <td id="ka_saban3"></td>
</tr>
<tr>
  <th>अं.साबण</th>
  <td id="aa_saban1"></td>
  <td id="aa_saban2"></td>
  <td id="aa_saban3"></td>
</tr>
<tr>
  <th>खो.तेल</th>
  <td id="kho_tel1"></td>
  <td id="kho_tel2"></td>
  <td id="kho_tel3"></td>
</tr>
<tr>
  <th>मजन</th>
  <td id="manjan1"></td>
  <td id="manjan2"></td>
  <td id="manjan3"></td>
</tr>
<tr>
  <th>अंडी</th>
  <td id="eggs1"></td>
  <td id="eggs2"></td>
  <td id="eggs3"></td>
</tr>
<tr>
  <th>फळे</</th>
  <td id="fruits1"></td>
  <td id="fruits2"></td>
  <td id="fruits3"></td>
</tr>
<tr>
  <th>मटण</th>
  <td id="mutton1"></td>
  <td id="mutton2"></td>
  <td id="mutton3"></td>
</tr>
<tr>
  <th>फिष्ट</th>
  <td  id="fist1"></td>
  <td id="fist2"></td>
  <td id="fist3"></td>
</tr>
 
<tr>
  <th>दूध</th>
  <td id="milk1"></td>
  <td id="milk2"></td>
  <td id="milk3"></td>
</tr>
<tr>
  <th>भाजीपाला</th>
  <td id="vegetables1"></td>
  <td id="vegetables2"></td>
  <td id="vegetables3"></td>
</tr>
<tr>
  <th>भाजीपाला</th>
  <td id="vegetables11"></td>
  <td id="vegetables12"></td>
  <td id="vegetables13"></td>
</tr>
<tr>
  <th>लसुण</th>
  <td id="garlic1"></td>
  <td id="garlic2"></td>
  <td id="garlic3"></td>
</tr>
<tr>
  <th>कांदे</th>
  <td id="onion1"></td>
  <td  id="onion2"></td>
  <td  id="onion3"></td>
</tr>
<tr>
  <th>पोहे</th>
  <td id="pohe1"></td>
  <td id="pohe2"></td>
  <td id="pohe3"></td>
</tr>
<tr><td>दळण खर्च</td> <td id="grinding_spend"></td></tr>
  <tr><td>एकूण दाळी</td> <td id="totalDaal"></td></tr>
  <tr><td>एकूण मसाला</td> <td id="totalSpice"></td> </tr>
  <tr><td>उसळ एकूण</td> <td id="totalCondiment"></td></tr>
  <tr><td>स्वच्छता साहित्य</td>  <td id="TotalhygieneMaterials"></td> </tr>
  <tr><td>एकूण भाजीपाला</td>  <td id="totalVegetables"></td></tr>

</table>


</form>
<script type="text/javascript">
    function exportTableToExcel(tableID, fileid = ''){
        var data = $("#oneToFive").html();
  if(data == ''){
      alert("No data Available");
  }else{
     
    var downloadLink;
    var year,month;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file id
    month = $("#months option:selected").text();
    year = $("#year option:selected").text();


    fileid = fileid?fileid+'.xls':'HigherSecondary-MonthlyReport-'+month+'-'+year+'.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, fileid);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file id
        downloadLink.download = fileid;
        
        //triggering the function
        downloadLink.click();
    }
  }

     
}
</script>

</body>
<script>
    var baseUrl = '<?php echo base_url(); ?>';
</script>


<script type="text/javascript" src='<?php echo base_url(); ?>assets/js/MonthlyReportHigherSecJS.js'></script>
</html>
	
