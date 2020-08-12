<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/Daily.css">
<script src="<?php echo base_url(); ?>assets/js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="<?php echo base_url(); ?>assets/js/popper.js"></script>
</head>
<body onload='getCurrentDate();'>
<h1>माध्यमिक विभाग - दैनंदिन आहार योजना</h1>

<form id="grain_form">
   
<table border="1" id="customers">
  <tr>
    <th>दिनांक</th>
    <th><select name="months" id="months">
  <option>January</option>
  <option>February </option>
  <option> March</option>
  <option>April</option>
  <option> May</option>
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
</select></th> 
    <th></th>
	<th>गहू</th>
	<th>तांदूळ</th>
	<th>मुंगडाळ<input type="text" size="5"></th>
	<th>चणाडाळ<input type="text" size="5"></th>
	<th>तूरडाळ<input type="text" size="5"></th>
	<th>बटबटीडाळ<input type="text" size="5"></th>
	<th>उडीदडाळ<input type="text" size="5"></th>
	<th>सरपण</th>
	<th>तिखट</th>
	<th>हळद</th>
	<th>जिरा</th>
	<th>मसाला</th>
	<th>मीठ</th>
	<th>शेंगदाण</th>
	<th>साखर</th>
	<th>फ.तेल</th>
	<th>मटकी<input type="text" size="5"></th>
	<th>बरबीटी<input type="text" size="5"></th>
	<th>चना<input type="text" size="5"></th>
	<th>क.साबण</th>
	<th>अं.साबण</th>
	<th>खो.तेल</th>
	<th>मजन</th>
	<th>अंडी</th>
	<th>फळे</th>
	<th>मटण</th>
	<th>फिष्ट</th>
	<th>दूध</th>
	<th>भाजीपाला<input type="text" size="5"></th>
	<th>भाजीपाला<input type="text" size="5"></th>
	<th>लसुण</th>
	<th>कांदे</th>
	<th>पोहे<input type="text" size="5"></th>
	<th>अधीक्षक</th>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td>शिल्लक</td>
	<td><input type="text" size="3" name="rem1_wheat" onchange="totalRemWheat();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_rice" onchange="totalRemRice();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_mung" onchange="totalRemMungDal();" value="0.0"></td>
	<td><input type="text" size="4" name="rem1_chnadal" onchange="totalRemChnaDal();" value="0.0"></td>
	<td><input type="text" size="4" name="rem1_turdal" onchange="totalRemTurDal();" value="0.0"></td>
	<td><input type="text" size="7" name="rem1_btbtidal"  onchange="totalRemBtbatiDal();" value="0.0"></td>
	<td><input type="text" size="7" name="rem1_uddiddal"  onchange="totalRemUdidDal();" value="0.0"></td>
	<td><input type="text" size="6" name="rem1_srpan" onchange="totalRemSarpan();" value="0.0" ></td>
	<td><input type="text" size="3" name="rem1_tikhat" onchange="totalRemTikhat();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_hld" onchange="totalRemHalad();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_jira" onchange="totalRemJira();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_masala" onchange="totalRemMasala();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_salt" onchange="totalRemSalt();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_shengdana" onchange="totalRemShengdana();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_sugar" onchange="totalRemSugar();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_fa_oil" onchange="totalRemFaOil();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_matki" onchange="totalRemMataki();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_barbiti" onchange="totalRemBarbiti();" value="0.0"> </td>
	<td><input type="text" size="3"  name="rem1_chna" onchange="totalRemChana();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_ka_soap" onchange="totalRemKaSoap();" value="0.0"></td>
	<td><input type="text" size="5"  name="rem1_a_soap" onchange="totalRemASoap();" value="0.0"></td>
	<td><input type="text" size="5" name="rem1_kho_oil" onchange="totalRemKhoOil();" value="0.0"></td>

	<td><input type="text" size="3" name="rem1_majan" onchange="totalRemMajan();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_eggs" onchange="totalRemEggs();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_fruits" onchange="totalRemFruits();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_mutton" onchange="totalRemMutton();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_fist" onchange="totalRemFist();" value="0.0"></td>
	<td><input type="text" size="3"  name="rem1_milk" onchange="totalRemMilk();" value="0.0"></td>
	<td><input type="text" size="6" name="rem1_vegetables1" onchange="totalRemVegetables1();" value="0.0"></td>
	<td><input type="text" size="6" name="rem1_vegetables2" onchange="totalRemVegetables2();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_garlic" onchange="totalRemGarlic();" value="0.0"></td>
	<td><input type="text" size="3" name="rem1_onion" onchange="totalRemOnion();" value="0.0"></td>
    
  <td><input type="text" size="3" name="rem1_pohe" onchange="totalRemPohe();" value="0.0"></td>
	<td rowspan="8"></td>
	
	<td></td>
  </tr>
  
 <!--1st day-->
	
<tr>
    <td rowspan="7"><input type="date"  name="date"  id="date"></td>
  </tr>
  <tr>
	<td></td>
	<td>	आवक</td>
	<td><input type="text" size="3" name="in_wheat" onchange="totalInWheat();" value="0.0"></td>
	<td><input type="text" size="3" name="in_rice" onchange="totalInRice();" value="0.0"></td>
	<td><input type="text" size="3" name="in_mung" onchange="totalInMungDal();" value="0.0"></td>
	<td><input type="text" size="4" name="in_chnadal" onchange="totalInChnaDal();" value="0.0"></td>
	<td><input type="text" size="4" name="in_turdal" onchange="totalInTurDal();" value="0.0"></td>
	<td><input type="text" size="7" name="in_btbtidal" value="0.0" onchange="totalInBtbatiDal();"></td>
	<td><input type="text" size="7" name="in_uddiddal" onchange="totalInUdidDal();" value="0.0"></td>
	<td><input type="text" size="6" name="in_srpan" onchange="totalInSarpan();" value="0.0"></td>
	<td><input type="text" size="3" name="in_tikhat" onchange="totalInTikhat();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_hld" onchange="totalInHalad();" value="0.0"></td>
	<td><input type="text" size="3" name="in_jira" onchange="totalInJira();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_masala" onchange="totalInMasala();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_salt" onchange="totalInSalt();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_shengdana" onchange="totalInShengdana();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_sugar" onchange="totalInSugar();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_fa_oil" onchange="totalInFaOil();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_matki" onchange="totalInMataki();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_barbiti" onchange="totalInBarbiti();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_chna" onchange="totalInChana();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_ka_soap" onchange="totalInKaSoap();" value="0.0"></td>
	<td><input type="text" size="5"  name="in_a_soap" onchange="totalInASoap();" value="0.0"></td>
	<td><input type="text" size="5" name="in_kho_oil" onchange="totalInKhoOil();" value="0.0"></td>
	<td><input type="text" size="3" name="in_majan" onchange="totalInMajan();" value="0.0"></td>
	<td><input type="text" size="3" name="in_eggs" onchange="totalInEggs();" value="0.0"></td>
	<td><input type="text" size="3" name="in_fruits" onchange="totalInFruits();" value="0.0"></td>
	<td><input type="text" size="3" name="in_mutton" onchange="totalInMutton();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_fist" onchange="totalInFist();" value="0.0"></td>
	<td><input type="text" size="3"  name="in_milk" onchange="totalInMilk();" value="0.0"></td>
	<td><input type="text" size="6" name="in_vegetables1" onchange="totalInVegetables1();" value="0.0"></td>
	<td><input type="text" size="6" name="in_vegetables2" onchange="totalInVegetables2();" value="0.0"></td>
	<td><input type="text" size="3" name="in_garlic" onchange="totalInGarlic();" value="0.0"></td>
	<td><input type="text" size="3" name="in_onion" onchange="totalInOnion();" value="0.0"></td>
    
    <td><input type="text" size="3" name="in_pohe" onchange="totalInPohe();" value="0.0"></td>

	<td rowspan="6"></td>
  </tr>
  <tr>
	<td>पट <input type="text" size="3" name="attendance" value="0.0"></td>
	<td>एकूण</td>
	<td><input type="text" size="3" name="totl1_wheat" value="0.0" onchange ="totl1Wheat();"></td>
	<td><input type="text" size="3" name="totl1_rice" value="0.0" onchange="totl1Rice();"></td>
	<td><input type="text" size="3" name="totl1_mung" value="0.0" onchange="totl1Mung();"></td>
	<td><input type="text" size="4" name="totl1_chnadal" value="0.0" onchange="totl1Chnadaal();"></td>
	<td><input type="text" size="4" name="totl1_turdal" value="0.0" onchange="totl1Turdal();"></td>
	<td><input type="text" size="7" name="totl1_btbtidal" value="0.0" onchange ="totl1BtbatiDaal();"></td>
	<td><input type="text" size="7" name="totl1_uddiddal" value="0.0" onchange ="totl1UdidDaal();"></td>
	<td><input type="text" size="6" name="totl1_srpan" value="0.0" onchange="totl1Sarpan();"></td>
	<td><input type="text" size="3" name="totl1_tikhat" value="0.0" onchange="totl1Tikhat();"></td>
	<td><input type="text" size="3"  name="totl1_hld" value="0.0" onchange="totl1Hld();"></td>
	<td><input type="text" size="3" name="totl1_jira" value="0.0" onchange="totl1Jira();"></td>
	<td><input type="text" size="3"  name="totl1_masala" value="0.0" onchange ="totl1Masala();"></td>
	<td><input type="text" size="3"  name="totl1_salt" value="0.0" onchange ="totl1Salt();"></td>
	<td><input type="text" size="3"  name="totl1_shengdana" value="0.0" onchange ="totl1Shendana();"></td>
	<td><input type="text" size="3"  name="totl1_sugar" value="0.0" onchange="totl1Sugar();"></td>
	<td><input type="text" size="3"  name="totl1_fa_oil" value="0.0" onchange ="totl1_fa_oil();"></td>
	<td><input type="text" size="3"  name="totl1_matki" value="0.0" onchange ="totl1Mataki();"></td>
	<td><input type="text" size="3"  name="totl1_barbiti" value="0.0" onchange ="totl1Barbiti();"></td>
	<td><input type="text" size="3"  name="totl1_chna" value="0.0" onchange ="totl1Chna();"></td>
	<td><input type="text" size="3"  name="totl1_ka_soap" value="0.0" onchange ="totl1_ka_soap();"></td>
	<td><input type="text" size="5"  name="totl1_a_soap" value="0.0" onchange ="totl1_a_soap();"></td>
	<td><input type="text" size="5" name="totl1_kho_oil" value="0.0" onchange ="totl1_kho_oil();"></td>

	<td><input type="text" size="3" name="totl1_majan" value="0.0" onchange ="totl1_majan();"></td>
	<td><input type="text" size="3" name="totl1_eggs" value="0.0" onchange ="totl1Eggs();"></td>
	<td><input type="text" size="3" name="totl1_fruits" value="0.0" onchange ="totl1Fruits();"></td>
	<td><input type="text" size="3" name="totl1_mutton" value="0.0" onchange ="totl1Mutton();"></td>
	<td><input type="text" size="3"  name="totl1_fist" value="0.0" onchange ="totl1Fist();"></td>
	<td><input type="text" size="3"  name="totl1_milk" value="0.0" onchange ="totl1Milk();"></td>
	<td><input type="text" size="6" name="totl1_vegetables1" value="0.0" onchange="totl1Veg1();"></td>
	<td><input type="text" size="6" name="totl1_vegetables2" value="0.0" onchange="totl1Veg2();"></td>
	<td><input type="text" size="3" name="totl1_garlic" value="0.0" onchange ="totl1Garlic();"></td>
	<td><input type="text" size="3" name="totl1_onion" value="0.0" onchange="totl1Onion();"></td>
    <td><input type="text" size="3" name="totl1_pohe" value="0.0" onchange="totlPohe ();"></td>

  </tr>
  <tr>
	<td> 8 <input type="text" size="3" name="oneToFive" value="0" onchange="oneToFivePresent();"></td>
	<td>सकाळ</td>
	<td><input type="text" size="3" name="mrng_wheat" value="0.0" onchange="mWheat();"></td>
	<td><input type="text" size="3" name="mrng_rice" value="0.0" onchange="mRice();"></td>
	<td><input type="text" size="3" name="mrng_mung" value="0.0" onchange="mMungDal();"></td>
	<td><input type="text" size="4" name="mrng_chnadal" value="0.0" onchange="mChnaDal();"></td>
	<td><input type="text" size="4" name="mrng_turdal" value="0.0" onchange="mTurDal();"></td>
	<td><input type="text" size="7" name="mrng_btbtidal" value="0.0" onchange="mBtbatiDal();"></td>
	<td><input type="text" size="7" name="mrng_uddiddal" value="0.0" onchange="mUdidDal();"></td>
	<td><input type="text" size="6" name="mrng_srpan" value="0.0" onchange="mSarpan();"></td>
	<td><input type="text" size="3" name="mrng_tikhat" value="0.0" onchange="mTikhat();"></td>
	<td><input type="text" size="3"  name="mrng_hld"value="0.0" onchange="mHalad();"></td>
	<td><input type="text" size="3" name="mrng_jira"value="0.0" onchange="mJira();"></td>
	<td><input type="text" size="3"  name="mrng_masala"value="0.0" onchange="mMasala();"></td>
	<td><input type="text" size="3"  name="mrng_salt"value="0.0" onchange="mSalt();"></td>
	<td><input type="text" size="3"  name="mrng_shengdana"value="0.0" onchange="mShengdana();"></td>
	<td><input type="text" size="3"  name="mrng_sugar"value="0.0" onchange="mSugar();"></td>
	<td><input type="text" size="3"  name="mrng_fa_oil"value="0.0" onchange="mFaOil();"></td>
	<td><input type="text" size="3"  name="mrng_matki"value="0.0" onchange="mMataki();"></td>
	<td><input type="text" size="3"  name="mrng_barbiti" value="0.0" onchange="mBarbiti();"></td>
	<td><input type="text" size="3"  name="mrng_chna" value="0.0" onchange="mChana();"></td>
	<td><input type="text" size="3"  name="mrng_ka_soap" value="0.0" onchange="mKaSoap();"></td>
	<td><input type="text" size="5"  name="mrng_a_soap" value="0.0" onchange="mASoap();"></td>
	<td><input type="text" size="5" name="mrng_kho_oil" value="0.0" onchange="mKhoOil();"></td>
	<td><input type="text" size="3" name="mrng_majan" value="0.0" onchange="mMajan();"></td>
	<td><input type="text" size="3" name="mrng_eggs" value="0.0" onchange="mEggs();"></td>
	<td><input type="text" size="3" name="mrng_fruits" value="0.0" onchange="mFruits();"></td>
	<td><input type="text" size="3" name="mrng_mutton" value="0.0" onchange="mMutton();"></td>
	<td><input type="text" size="3"  name="mrng_fist" value="0.0" onchange="mFist();"></td>
	<td><input type="text" size="3"  name="mrng_milk" value="0.0" onchange="mMilk();"></td>
	<td><input type="text" size="6" name="mrng_vegetables1" value="0.0" onchange="mVegetables1();"></td>
	<td><input type="text" size="6" name="mrng_vegetables2" value="0.0" onchange="mVegetables2();"></td>
	<td><input type="text" size="3" name="mrng_garlic" value="0.0" onchange="mGarlic();"></td>
	<td><input type="text" size="3" name="mrng_onion" value="0.0" onchange="mOnion();"></td>
    <td><input type="text" size="3" name="mrng_pohe" value="0.0" onchange="mPohe();"></td>

  </tr>
  <tr>
	<td>9ते10  <input type="text" size="3" name="sixToSeven"value="0" onchange="sixToSevenPresent();" value='0'></td>
	<td>	संध्या</td>
	<td><input type="text" size="3" name="evng_wheat" value="0.0" onchange="eWheat();"></td>
	<td><input type="text" size="3" name="evng_rice" value="0.0" onchange="eRice();"></td>
	<td><input type="text" size="3" name="evng_mung" value="0.0" onchange="eMungDal();"></td>
	<td><input type="text" size="4" name="evng_chnadal" value="0.0" onchange="eChnaDal();"></td>
	<td><input type="text" size="4" name="evng_turdal" value="0.0" onchange="eTurDal();"></td>
	<td><input type="text" size="7" name="evng_btbtidal" value="0.0" onchange="eBtbatiDal();"></td>
	<td><input type="text" size="7" name="evng_uddiddal" value="0.0" onchange="eUdidDal();"></td>
	<td><input type="text" size="6" name="evng_srpan" value="0.0" onchange="eSarpan();"></td>
	<td><input type="text" size="3" name="evng_tikhat" value="0.0" onchange="eTikhat();"></td>
	<td><input type="text" size="3"  name="evng_hld" value="0.0" onchange="eHalad();"></td>
	<td><input type="text" size="3" name="evng_jira" value="0.0" onchange="eJira();"></td>
	<td><input type="text" size="3"  name="evng_masala" value="0.0" onchange="eMasala();"></td>
	<td><input type="text" size="3"  name="evng_salt" value="0.0" onchange="eSalt();"></td>
	<td><input type="text" size="3"  name="evng_shengdana" value="0.0" onchange="eShengdana();"></td>
	<td><input type="text" size="3"  name="evng_sugar" value="0.0" onchange="eSugar();"></td>
	<td><input type="text" size="3"  name="evng_fa_oil" value="0.0" onchange="eFaOil();"></td>
	<td><input type="text" size="3"  name="evng_matki" value="0.0" onchange="eMataki();"></td>
	<td><input type="text" size="3"  name="evng_barbiti" value="0.0" onchange="eBarbiti();"></td>
	<td><input type="text" size="3"  name="evng_chna" value="0.0" onchange="eChana();"></td>
	<td><input type="text" size="3"  name="evng_ka_soap" value="0.0" onchange="eKaSoap();"></td>
	<td><input type="text" size="5"  name="evng_a_soap" value="0.0" onchange="eASoap();"></td>
	<td><input type="text" size="5" name="evng_kho_oil" value="0.0" onchange="eKhoOil();"></td>
	<td><input type="text" size="3" name="evng_majan" value="0.0" onchange="eMajan();"></td>
	<td><input type="text" size="3" name="evng_eggs" value="0.0" onchange="eEggs();"></td>
	<td><input type="text" size="3" name="evng_fruits" value="0.0" onchange="eFruits();"></td>
	<td><input type="text" size="3" name="evng_mutton" value="0.0" onchange="eMutton();"></td>
	<td><input type="text" size="3"  name="evng_fist" value="0.0" onchange="eFist();"></td>
	<td><input type="text" size="3"  name="evng_milk" value="0.0" onchange="eMilk();"></td>
	<td><input type="text" size="6" name="evng_vegetables1" value="0.0" onchange="eVegetables1();"></td>
	<td><input type="text" size="6" name="evng_vegetables2"  value="0.0" onchange="eVegetables2();"></td>
	<td><input type="text" size="3" name="evng_garlic" value="0.0" onchange="eGarlic();"></td>
	<td><input type="text" size="3" name="evng_onion" value="0.0" onchange="eOnion();"></td>
    <td><input type="text" size="3" name="evng_pohe" value="0.0" onchange="ePohe();"></td>

	</tr>
	<tr>
	<td rowspan="2">एकूण हजर  <input type="text" size="3" name="totalAttendence" value="0"></td>
	<td>एकूण</td>
	<td><input type="text" size="3" name="totl2_wheat" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_rice" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_mung" value="0.0"></td>
	<td><input type="text" size="4" name="totl2_chnadal" value="0.0"></td>
	<td><input type="text" size="4" name="totl2_turdal" value="0.0"></td>
	<td><input type="text" size="7" name="totl2_btbtidal" value="0.0"></td>
	<td><input type="text" size="7" name="totl2_uddiddal" value="0.0"></td>
	<td><input type="text" size="6" name="totl2_srpan" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_tikhat" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_hld" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_jira" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_masala" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_salt" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_shengdana" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_sugar" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_fa_oil" value="0.0" ></td>
	<td><input type="text" size="3"  name="totl2_matki" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_barbiti" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_chna" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_ka_soap" value="0.0"></td>
	<td><input type="text" size="5"  name="totl2_a_soap" value="0.0"></td>
	<td><input type="text" size="5" name="totl2_kho_oil" value="0.0"></td>

	<td><input type="text" size="3" name="totl2_majan" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_eggs" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_fruits" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_mutton" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_fist" value="0.0"></td>
	<td><input type="text" size="3"  name="totl2_milk" value="0.0"></td>
	<td><input type="text" size="6" name="totl2_vegetables1" value="0.0"></td>
	<td><input type="text" size="6" name="totl2_vegetables2" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_garlic" value="0.0"></td>
	<td><input type="text" size="3" name="totl2_onion" value="0.0"></td>
    <td><input type="text" size="3" name="totl2_pohe" value="0.0"></td>
  </tr>
  <tr>
  <td>शिल्लक</td>
  <td><input type="text" size="3" name="rem2_wheat" value="0.0"></td>
	<td><input type="text" size="3" name="rem2_rice" value="0.0"></td>
	<td><input type="text" size="3" name="rem2_mung" value="0.0"></td>
	<td><input type="text" size="4" name="rem2_chnadal" value="0.0"></td>
	<td><input type="text" size="4" name="rem2_turdal" value="0.0"></td>
	<td><input type="text" size="7" name="rem2_btbtidal" value="0.0"></td>
	<td><input type="text" size="7" name="rem2_uddiddal"value="0.0"></td>
	<td><input type="text" size="6" name="rem2_srpan" value="0.0"></td>
	<td><input type="text" size="3" name="rem2_tikhat" value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_hld" value="0.0"></td>
	<td><input type="text" size="3" name="rem2_jira" value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_masala" value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_salt"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_shengdana"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_sugar"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_fa_oli"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_matki" value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_barbiti" value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_chna"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_ka_soap"  value="0.0"></td>
	<td><input type="text" size="5"  name="rem2_a_soap"  value="0.0"></td>
	<td><input type="text" size="5" name="rem2_kho_oil"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_majan"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_eggs"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_fruits"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_mutton"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_fist"  value="0.0"></td>
	<td><input type="text" size="3"  name="rem2_milk"  value="0.0"></td>
	<td><input type="text" size="6" name="rem2_vegetables1"  value="0.0"></td>
	<td><input type="text" size="6" name="rem2_vegetables2"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_garlic"  value="0.0"></td>
	<td><input type="text" size="3" name="rem2_onion"  value="0.0"></td>
    <td><input type="text" size="3" name="rem2_pohe"  value="0.0"></td>

  </tr>
  
  <tr>
	<td colspan="37">
<button type='button' class='btn'  onclick="submitData();">जमा करा</button>&nbsp;
	<button type='button' class='btn'  onclick="goBack();">मागे जा</button></td>
 
  </tr>
  
</table>
</form>
<script>
    var baseUrl = '<?php echo base_url(); ?>';
</script>
<script type="text/javascript" src='<?php echo base_url(); ?>assets/js/totalGrainJS.js'></script>
<script type="text/javascript" src='<?php echo base_url(); ?>assets/js/secondaryDataJS.js'></script>
<script type="text/javascript" src='<?php echo base_url(); ?>assets/js/seconadryCalJS.js'></script>


</body>
</html>
