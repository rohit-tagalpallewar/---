function  getCurrentDate()
  {

   var date_selected = new Date();
   var datesel = ('0' + date_selected.getDate()).slice(-2);
   var date1 =   date_selected.getFullYear() + "-" +   ('0' + (date_selected.getMonth()+1)).slice(-2) + "-" +  ('0' + (date_selected.getDate()-1)).slice(-2);
     $("input[name='date']").val(date1);
  }

 function rem2FirstWheat(){
     var rem1_wheat = parseFloat($("input[name='rem1_wheat']").val());
      $("input[name='rem1_wheat']").val(rem1_wheat.toFixed(2));
      var totl2_wheat = parseFloat($("input[name='totl2_wheat']").val());
      $("input[name='totl2_wheat']").val(totl2_wheat.toFixed(2));
     var total_wheat = rem1_wheat - totl2_wheat ;
      $("input[name='rem2_wheat']").val(total_wheat.toFixed(2));

  }
     function  rem2FirstRice(){
     var rem1_rice = parseFloat($("input[name='rem1_rice']").val());
      $("input[name='rem1_rice']").val(rem1_rice.toFixed(2));
      var totl2_rice = parseFloat($("input[name='totl2_rice']").val());
      $("input[name='totl2_rice']").val(totl2_rice.toFixed(2));
     var total_rice = rem1_rice - totl2_rice ;
      $("input[name='rem2_rice']").val(total_rice.toFixed(2));
    
     }
       function  rem2FirstMung(){
       var rem1_mung = parseFloat($("input[name='rem1_mung']").val());
      $("input[name='rem1_mung']").val(rem1_mung.toFixed(2));
      var totl2_mung = parseFloat($("input[name='totl2_mung']").val());
      $("input[name='totl2_mung']").val(totl2_mung.toFixed(2));
     var total_mung = rem1_mung - totl2_mung ;
      $("input[name='rem2_mung']").val(total_mung.toFixed(2));
    
         }
     
    function    rem2FirstChanDaal(){
        	 var rem1_chnadal = parseFloat($("input[name='rem1_chnadal']").val());
      $("input[name='rem1_chnadal']").val(rem1_chnadal.toFixed(2));
      var totl2_chnadal = parseFloat($("input[name='totl2_chnadal']").val());
      $("input[name='totl2_chnadal']").val(totl2_chnadal.toFixed(2));
     var total_chnadall = rem1_chnadal - totl2_chnadal;
      $("input[name='rem2_chnadal']").val(total_chnadall.toFixed(2));
    
        }
      function  rem2FirstTurDaal(){
	        	 var rem1_turdal = parseFloat($("input[name='rem1_turdal']").val());
	      $("input[name='rem1_turdal']").val(rem1_turdal.toFixed(2));
	      var totl2_turdal = parseFloat($("input[name='totl2_turdal']").val());
	      $("input[name='totl2_turdal']").val(totl2_turdal.toFixed(2));
	     var total_turdall = rem1_turdal - totl2_turdal;
	      $("input[name='rem2_turdal']").val(total_turdall.toFixed(2));
	    
        }
     function   rem2FirstBtbatiDaal(){
        		   	 var rem1_btbtidal = parseFloat($("input[name='rem1_btbtidal']").val());
	      $("input[name='rem1_btbtidal']").val(rem1_btbtidal.toFixed(2));
	      var totl2_btbtidal = parseFloat($("input[name='totl2_btbtidal']").val());
	      $("input[name='totl2_btbtidal']").val(totl2_btbtidal.toFixed(2));
	     var total_btbatidall = rem1_btbtidal - totl2_btbtidal;
	      $("input[name='rem2_btbtidal']").val(total_btbatidall.toFixed(2));
	 
        }
      function  rem2FirstUdidDaal(){
       	 var rem1_uddiddal = parseFloat($("input[name='rem1_uddiddal']").val());
	      $("input[name='rem1_uddiddal']").val(rem1_uddiddal.toFixed(2));
	      var totl2_btbtidal = parseFloat($("input[name='totl2_btbtidal']").val());
	      $("input[name='totl2_btbtidal']").val(totl2_btbtidal.toFixed(2));
	     var total_udiddall = rem1_uddiddal - totl2_btbtidal;
	      $("input[name='rem2_uddiddal']").val(total_udiddall.toFixed(2));
	 
        }
        function rem2FirstSarpan(){
        	 var rem1_uddiddal = parseFloat($("input[name='rem1_uddiddal']").val());
	      $("input[name='rem1_uddiddal']").val(rem1_uddiddal.toFixed(2));
	      var totl2_btbtidal = parseFloat($("input[name='totl2_btbtidal']").val());
	      $("input[name='totl2_btbtidal']").val(totl2_btbtidal.toFixed(2));
	     var total_udiddall = rem1_uddiddal - totl2_btbtidal;
	      $("input[name='rem2_uddiddal']").val(total_udiddall.toFixed(2));
	 
        }
        function rem2FirstTikhat(){
          var rem1_tikhat = parseFloat($("input[name='rem1_tikhat']").val());
	      $("input[name='rem1_tikhat']").val(rem1_tikhat.toFixed(2));
	      var totl2_tikhat = parseFloat($("input[name='totl2_tikhat']").val());
	      $("input[name='totl2_tikhat']").val(totl2_tikhat.toFixed(2));
	     var total_tikhat = rem1_tikhat - totl2_tikhat;
	      $("input[name='rem2_tikhat']").val(total_tikhat.toFixed(2));
	 
        }
        function rem2FirstHld(){
          var rem1_hld = parseFloat($("input[name='rem1_hld']").val());
	      $("input[name='rem1_hld']").val(rem1_hld.toFixed(2));
	      var totl2_hld = parseFloat($("input[name='totl2_hld']").val());
	      $("input[name='totl2_hld']").val(totl2_hld.toFixed(2));
	     var total_hld = rem1_hld - totl2_hld;
	      $("input[name='rem2_hld']").val(total_hld.toFixed(2));
	 
        }
        function rem2FirstJira(){
          var rem1_jira = parseFloat($("input[name='rem1_jira']").val());
	      $("input[name='rem1_jira']").val(rem1_jira.toFixed(2));
	      var totl2_jira = parseFloat($("input[name='totl2_jira']").val());
	      $("input[name='totl2_jira']").val(totl2_jira.toFixed(2));
	     var total_jira = rem1_jira - totl2_jira;
	      $("input[name='rem2_jira']").val(total_jira.toFixed(2));
        }
        function  rem2FirstMasala(){
        	 var rem1_masala = parseFloat($("input[name='rem1_masala']").val());
	      $("input[name='rem1_masala']").val(rem1_masala.toFixed(2));
	      var totl2_masala = parseFloat($("input[name='totl2_masala']").val());
	      $("input[name='totl2_masala']").val(totl2_masala.toFixed(2));
	     var total_masala = rem1_masala - totl2_masala;
	      $("input[name='rem2_masala']").val(total_masala.toFixed(2));
        }
         function rem2FirstSalt(){
         	 var rem1_salt = parseFloat($("input[name='rem1_salt']").val());
	      $("input[name='rem1_salt']").val(rem1_salt.toFixed(2));
	      var totl2_salt = parseFloat($("input[name='totl2_salt']").val());
	      $("input[name='totl2_salt']").val(totl2_salt.toFixed(2));
	     var total_salt = rem1_salt - totl2_salt;
	      $("input[name='rem2_salt']").val(total_salt.toFixed(2));
         }
        function rem2Firstshengdana(){
           var rem1_shengdana = parseFloat($("input[name='rem1_shengdana']").val());
	      $("input[name='rem1_shengdana']").val(rem1_shengdana.toFixed(2));
	      var totl2_shengdana = parseFloat($("input[name='totl2_shengdana']").val());
	      $("input[name='totl2_shengdana']").val(totl2_shengdana.toFixed(2));
	     var total_shengdana = rem1_shengdana - totl2_shengdana;
	      $("input[name='rem2_shengdana']").val(total_shengdana.toFixed(2));
        }
        function rem2FirstSugar(){
        	var rem1_sugar = parseFloat($("input[name='rem1_sugar']").val());
	      $("input[name='rem1_sugar']").val(rem1_sugar.toFixed(2));
	      var totl2_sugar = parseFloat($("input[name='totl2_sugar']").val());
	      $("input[name='totl2_sugar']").val(totl2_sugar.toFixed(2));
	     var total_sugar = rem1_sugar - totl2_sugar;
	      $("input[name='rem2_sugar']").val(total_sugar.toFixed(2));
        
        }
        function rem2FirstFaOil(){
        	var rem1_fa_oil = parseFloat($("input[name='rem1_fa_oil']").val());
	      $("input[name='rem1_fa_oil']").val(rem1_fa_oil.toFixed(2));
	      var totl2_fa_oil = parseFloat($("input[name='totl2_fa_oil']").val());
	      $("input[name='totl2_fa_oil']").val(totl2_fa_oil.toFixed(2));
	     var total_fa_oil = rem1_fa_oil - totl2_fa_oil;
	      $("input[name='rem2_fa_oli']").val(total_fa_oil.toFixed(2));
        
        }
        function rem2FirstMatki(){
         var rem1_matki = parseFloat($("input[name='rem1_matki']").val());
	      $("input[name='rem1_matki']").val(rem1_matki.toFixed(2));
	      var totl2_matki = parseFloat($("input[name='totl2_matki']").val());
	      $("input[name='totl2_matki']").val(totl2_matki.toFixed(2));
	     var total_matki = rem1_matki - totl2_matki;
	      $("input[name='rem2_matki']").val(total_matki.toFixed(2));
        
        }
        function rem2FirstBarbiti(){
        	  var rem1_barbiti = parseFloat($("input[name='rem1_barbiti']").val());
	      $("input[name='rem1_barbiti']").val(rem1_barbiti.toFixed(2));
	      var totl2_barbiti = parseFloat($("input[name='totl2_barbiti']").val());
	      $("input[name='totl2_barbiti']").val(totl2_barbiti.toFixed(2));
	     var total_barbiti = rem1_barbiti - totl2_barbiti;
	      $("input[name='rem2_barbiti']").val(total_barbiti.toFixed(2));
        
        }
        function rem2FirstChna(){
        	 var rem1_chna = parseFloat($("input[name='rem1_chna']").val());
	      $("input[name='rem1_chna']").val(rem1_chna.toFixed(2));
	      var totl2_chna = parseFloat($("input[name='totl2_chna']").val());
	      $("input[name='totl2_chna']").val(totl2_chna.toFixed(2));
	     var total_chna = rem1_chna - totl2_chna;
	      $("input[name='rem2_chna']").val(total_chna.toFixed(2));
        
        }
        function rem2FirstClothSoap(){
        	 var rem1_ka_soap = parseFloat($("input[name='rem1_ka_soap']").val());
	      $("input[name='rem1_ka_soap']").val(rem1_ka_soap.toFixed(2));
	      var totl2_ka_soap = parseFloat($("input[name='totl2_ka_soap']").val());
	      $("input[name='totl2_ka_soap']").val(totl2_ka_soap.toFixed(2));
	     var total_ka_soap = rem1_ka_soap - totl2_ka_soap;
	      $("input[name='rem2_ka_soap']").val(total_ka_soap.toFixed(2));
        
        }
        function rem2FirstBeathSoap(){
        		 var rem1_a_soap = parseFloat($("input[name='rem1_a_soap']").val());
	      $("input[name='rem1_a_soap']").val(rem1_a_soap.toFixed(2));
	      var totl2_a_soap = parseFloat($("input[name='totl2_a_soap']").val());
	      $("input[name='totl2_a_soap']").val(totl2_a_soap.toFixed(2));
	     var total_a_soap = rem1_a_soap - totl2_a_soap;
	      $("input[name='rem2_a_soap']").val(total_a_soap.toFixed(2));
        
        }
        function rem2FirstCoconutOil(){
        	 var rem1_kho_oil = parseFloat($("input[name='rem1_kho_oil']").val());
	      $("input[name='rem1_kho_oil']").val(rem1_kho_oil.toFixed(2));
	      var totl2_kho_oil = parseFloat($("input[name='totl2_kho_oil']").val());
	      $("input[name='totl2_kho_oil']").val(totl2_kho_oil.toFixed(2));
	     var total_kho_oil = rem1_kho_oil - totl2_kho_oil;
	      $("input[name='rem2_kho_oil']").val(total_kho_oil.toFixed(2));
       
        }
        function rem2FirstManjan(){
        	 var rem1_majan = parseFloat($("input[name='rem1_majan']").val());
	      $("input[name='rem1_majan']").val(rem1_majan.toFixed(2));
	      var totl2_majan = parseFloat($("input[name='totl2_majan']").val());
	      $("input[name='totl2_majan']").val(totl2_majan.toFixed(2));
	     var total_majan = rem1_majan - totl2_majan;
	      $("input[name='rem2_majan']").val(total_majan.toFixed(2));
       
        }
        function rem2FirstEggs(){
        	 var rem1_eggs = parseFloat($("input[name='rem1_eggs']").val());
	      $("input[name='rem1_eggs']").val(rem1_eggs.toFixed(2));
	      var totl2_eggs = parseFloat($("input[name='totl2_eggs']").val());
	      $("input[name='totl2_eggs']").val(totl2_eggs.toFixed(2));
	     var total_eggs = rem1_eggs - totl2_eggs;
	      $("input[name='rem2_eggs']").val(total_eggs.toFixed(2));
       
        }
        function rem2FirstFruits(){
        	 var rem1_fruits = parseFloat($("input[name='rem1_fruits']").val());
	      $("input[name='rem1_fruits']").val(rem1_fruits.toFixed(2));
	      var totl2_fruits = parseFloat($("input[name='totl2_fruits']").val());
	      $("input[name='totl2_fruits']").val(totl2_fruits.toFixed(2));
	     var total_fruits = rem1_fruits - totl2_fruits;
	      $("input[name='rem2_fruits']").val(total_fruits.toFixed(2));
       
        }
        function rem2FirstMutton(){
        		 var rem1_mutton = parseFloat($("input[name='rem1_mutton']").val());
	      $("input[name='rem1_mutton']").val(rem1_mutton.toFixed(2));
	      var totl2_mutton = parseFloat($("input[name='totl2_mutton']").val());
	      $("input[name='totl2_mutton']").val(totl2_mutton.toFixed(2));
	     var total_mutton = rem1_mutton - totl2_mutton;
	      $("input[name='rem2_mutton']").val(total_mutton.toFixed(2));
       
        }
        function rem2FirstFist(){
        	 var rem1_fist = parseFloat($("input[name='rem1_fist']").val());
	      $("input[name='rem1_fist']").val(rem1_fist.toFixed(2));
	      var totl2_fist = parseFloat($("input[name='totl2_fist']").val());
	      $("input[name='totl2_fist']").val(totl2_fist.toFixed(2));
	     var total_fist = rem1_fist - totl2_fist;
	      $("input[name='rem2_fist']").val(total_fist.toFixed(2));
       
        }
        function rem2FirstMilk(){
        		 var rem1_milk = parseFloat($("input[name='rem1_milk']").val());
	      $("input[name='rem1_milk']").val(rem1_milk.toFixed(2));
	      var totl2_milk = parseFloat($("input[name='totl2_milk']").val());
	      $("input[name='totl2_milk']").val(totl2_milk.toFixed(2));
	     var total_milk = rem1_milk - totl2_milk;
	      $("input[name='rem2_milk']").val(total_milk.toFixed(2));
       
        }
        function rem2FirstVegetables1(){
        		 var rem1_vegetables1 = parseFloat($("input[name='rem1_vegetables1']").val());
	      $("input[name='rem1_vegetables1']").val(rem1_vegetables1.toFixed(2));
	      var totl2_vegetables1 = parseFloat($("input[name='totl2_vegetables1']").val());
	      $("input[name='totl2_vegetables1']").val(totl2_vegetables1.toFixed(2));
	     var total_veg1 = rem1_vegetables1 - totl2_vegetables1;
	      $("input[name='rem2_vegetables1']").val(total_veg1.toFixed(2));
        
        }
        function rem2Vegetables2(){
        	 var rem1_vegetables2 = parseFloat($("input[name='rem1_vegetables2']").val());
	      $("input[name='rem1_vegetables2']").val(rem1_vegetables2.toFixed(2));
	      var totl2_vegetables2 = parseFloat($("input[name='totl2_vegetables2']").val());
	      $("input[name='totl2_vegetables2']").val(totl2_vegetables2.toFixed(2));
	     var total_vegetables2 = rem1_vegetables2 - totl2_vegetables2;
	      $("input[name='rem2_vegetables2']").val(total_vegetables2.toFixed(2));
        
        }
        function rem2FirstGarlic(){
          var rem1_garlic = parseFloat($("input[name='rem1_garlic']").val());
	      $("input[name='rem1_garlic']").val(rem1_garlic.toFixed(2));
	      var totl2_garlic = parseFloat($("input[name='totl2_garlic']").val());
	      $("input[name='totl2_garlic']").val(totl2_garlic.toFixed(2));
	     var total_garlic = rem1_garlic - totl2_garlic;
	      $("input[name='rem2_garlic']").val(total_garlic.toFixed(2));
        
        }
        function rem2FirstOnion(){
        	    var rem1_onion = parseFloat($("input[name='rem1_onion']").val());
	      $("input[name='rem1_onion']").val(rem1_onion.toFixed(2));
	      var totl2_onion = parseFloat($("input[name='totl2_onion']").val());
	      $("input[name='totl2_onion']").val(totl2_onion.toFixed(2));
	     var total_onion = rem1_onion - totl2_onion;
	      $("input[name='rem2_onion']").val(total_onion.toFixed(2));
        
        }
        function rem2FirstPohe(){
        	    var rem1_pohe = parseFloat($("input[name='rem1_pohe']").val());
	      $("input[name='rem1_pohe']").val(rem1_pohe.toFixed(2));
	      var totl2_pohe = parseFloat($("input[name='totl2_pohe']").val());
	      $("input[name='totl2_pohe']").val(totl2_pohe.toFixed(2));
	     var total_pohe = rem1_pohe - totl2_pohe;
	      $("input[name='rem2_pohe']").val(total_pohe.toFixed(2));
        
        }

 function totalRemWheat(){
 	
 	 	 var rem1_wheat = parseFloat($("input[name='rem1_wheat']").val());
 	 	  $("input[name='rem1_wheat']").val(rem1_wheat.toFixed(2));
		  var in_wheat = parseFloat($("input[name='in_wheat']").val());
 	 	  $("input[name='in_wheat']").val(in_wheat.toFixed(2));
 		 var total_wheat = rem1_wheat + in_wheat;
 	 	  $("input[name='totl1_wheat']").val(total_wheat.toFixed(2));
 	 	   rem2Wheat();
	   
		
 }
  function totalInWheat(){
	  	    totalRemWheat();
 }

  function totalInRice(){
		  var rem1_rice = parseFloat($("input[name='rem1_rice']").val());
 	 	  $("input[name='rem1_rice']").val(rem1_rice.toFixed(2));
		  var in_rice = parseFloat($("input[name='in_rice']").val());
 	 	  $("input[name='in_rice']").val(in_rice.toFixed(2));
 		 var total_rice = rem1_rice + in_rice;
 	 	  $("input[name='totl1_rice']").val(total_rice.toFixed(2));
 	 	   
 	 	  rem2Rice();
 }
   function totalRemRice(){
		 totalInRice();
 }
 
   function totalInMungDal(){
		   var rem1_mung = parseFloat($("input[name='rem1_mung']").val());
 	 	  $("input[name='rem1_mung']").val(rem1_mung.toFixed(2));
		  var in_mung = parseFloat($("input[name='in_mung']").val());
 	 	  $("input[name='in_mung']").val(in_mung.toFixed(2));
 		 var total_mungdal = rem1_mung + in_mung;
 	 	  $("input[name='totl1_mung']").val(total_mungdal.toFixed(2));
           rem2Mung();

 }

 
   function totalRemMungDal(){
		 totalInMungDal();
	 }
    function totalRemChnaDal(){

		   var rem1_chnadal = parseFloat($("input[name='rem1_chnadal']").val());
 	 	  $("input[name='rem1_chnadal']").val(rem1_chnadal.toFixed(2));
		  var in_chnadal = parseFloat($("input[name='in_chnadal']").val());
 	 	  $("input[name='in_chnadal']").val(in_chnadal.toFixed(2));
 		 var total_chnadal = rem1_chnadal + in_chnadal;
 	 	  $("input[name='totl1_chnadal']").val(total_chnadal.toFixed(2));
		rem2ChanDaal();

 }
function totalInChnaDal(){
	totalRemChnaDal();
}
 function totalInTurDal(){
		    var rem1_turdal = parseFloat($("input[name='rem1_turdal']").val());
 	 	  $("input[name='rem1_turdal']").val(rem1_turdal.toFixed(2));
		  var in_turdal = parseFloat($("input[name='in_turdal']").val());
 	 	  $("input[name='in_turdal']").val(in_turdal.toFixed(2));
 		 var total_turdal = rem1_turdal + in_turdal;
 	 	  $("input[name='totl1_turdal']").val(total_turdal.toFixed(2));
		rem2TurDaal();

 }
  function totalRemTurDal(){
		   totalInTurDal();
 }
 function totalRemBtbatiDal(){
 	var rem1_btbtidal = parseFloat($("input[name='rem1_btbtidal']").val());
 	 	  $("input[name='rem1_btbtidal']").val(rem1_btbtidal.toFixed(2));
		  var in_btbtidal = parseFloat($("input[name='in_btbtidal']").val());
 	 	  $("input[name='in_btbtidal']").val(in_btbtidal.toFixed(2));
 		 var total_btbtidal = rem1_btbtidal + in_btbtidal;
 	 	  $("input[name='totl1_btbtidal']").val(total_btbtidal.toFixed(2));
		rem2BtbatiDaal();

 }
  function totalInBtbatiDal(){
 	totalRemBtbatiDal();
 }
   function totalRemUdidDal(){
 	var rem1_uddiddal = parseFloat($("input[name='rem1_uddiddal']").val());
 	 	  $("input[name='rem1_uddiddal']").val(rem1_uddiddal.toFixed(2));
		  var in_uddiddal = parseFloat($("input[name='in_uddiddal']").val());
 	 	  $("input[name='in_uddiddal']").val(in_uddiddal.toFixed(2));
 		 var total_udiddal = rem1_uddiddal + in_uddiddal;
 	 	  $("input[name='totl1_uddiddal']").val(total_udiddal.toFixed(2));
		rem2UdidDaal();

 }

   function totalInUdidDal(){
 			totalRemUdidDal();
    }
    
    function oneToFivePresent(){
 	var oneToFive = parseFloat($("input[name='oneToFive']").val());
		  var sixToSeven = parseFloat($("input[name='sixToSeven']").val());
 		 var total_present = oneToFive + sixToSeven;
 	 	  $("input[name='totalAttendence']").val(total_present);
 	 	
 	 	  //total2Wheat();
 }

   function sixToSevenPresent(){
 			oneToFivePresent();
 		
 	 	  //total2Wheat();

    }
  
    //   function total2Wheat(){
      	
		  // var mrng_wheat = parseFloat($("input[name='mrng_wheat']").val());
		  // var evng_wheat = parseFloat($("input[name='evng_wheat']").val());
		  // var total2_wheat = mrng_wheat + evng_wheat;
 	 	//   $("input[name='totl2_wheat']").val(total2_wheat.toFixed(2));

    // }

	function totalRemSarpan(){
 	var rem1_srpan = parseFloat($("input[name='rem1_srpan']").val());
 	 	  $("input[name='rem1_srpan']").val(rem1_srpan.toFixed(2));
		  var in_srpan = parseFloat($("input[name='in_srpan']").val());
 	 	  $("input[name='in_srpan']").val(in_srpan.toFixed(2));
 		 var totl1_srpan = rem1_srpan + in_srpan;
 	 	  $("input[name='totl1_srpan']").val(totl1_srpan.toFixed(2));
		rem2Sarpan();

 }
  function totalInSarpan(){
 			totalRemSarpan();
    }
	
function totalRemTikhat(){
 	var rem1_tikhat = parseFloat($("input[name='rem1_tikhat']").val());
 	 	  $("input[name='rem1_tikhat']").val(rem1_tikhat.toFixed(2));
		  var in_tikhat = parseFloat($("input[name='in_tikhat']").val());
 	 	  $("input[name='in_tikhat']").val(in_tikhat.toFixed(2));
 		 var totl1_tikhat = rem1_tikhat + in_tikhat;
 	 	  $("input[name='totl1_tikhat']").val(totl1_tikhat.toFixed(2));
		rem2Tikhat();

 }
  function totalInTikhat(){
 			totalRemTikhat();
    }
 
	
function totalRemHalad(){
 	var rem1_hld = parseFloat($("input[name='rem1_hld']").val());
 	 	  $("input[name='rem1_hld']").val(rem1_hld.toFixed(2));
	var in_hld = parseFloat($("input[name='in_hld']").val());
 	 	  $("input[name='in_hld']").val(in_hld.toFixed(2));
 	 var totl1_hld = rem1_hld + in_hld;
 	 	  $("input[name='totl1_hld']").val(totl1_hld.toFixed(2));
		rem2Hld();

 }
  function totalInHalad(){
 			totalRemHalad();
    }

	
function totalRemJira(){
 	var rem1_jira = parseFloat($("input[name='rem1_jira']").val());
 	 	  $("input[name='rem1_jira']").val(rem1_jira.toFixed(2));
	var in_jira = parseFloat($("input[name='in_jira']").val());
 	 	  $("input[name='in_jira']").val(in_jira.toFixed(2));
 	 var totl1_jira = rem1_jira + in_jira;
 	 	  $("input[name='totl1_jira']").val(totl1_jira.toFixed(2));
		rem2Jira();

 }
  function totalInJira(){
 			totalRemJira();
    }

	
function totalRemMasala(){
 	var rem1_masala = parseFloat($("input[name='rem1_masala']").val());
 	 	  $("input[name='rem1_masala']").val(rem1_masala.toFixed(2));
	var in_masala = parseFloat($("input[name='in_masala']").val());
 	 	  $("input[name='in_masala']").val(in_masala.toFixed(2));
 	var totl1_masala = rem1_masala + in_masala;
 	 	  $("input[name='totl1_masala']").val(totl1_masala.toFixed(2));
		rem2Masala();

 }
  function totalInMasala(){
 			totalRemMasala();
    }
 	
function totalRemSalt(){
 	var rem1_salt = parseFloat($("input[name='rem1_salt']").val());
 	 	  $("input[name='rem1_salt']").val(rem1_salt.toFixed(2));
	var in_salt = parseFloat($("input[name='in_salt']").val());
 	 	  $("input[name='in_salt']").val(in_salt.toFixed(2));
 	var totl1_salt = rem1_salt + in_salt;
 	 	  $("input[name='totl1_salt']").val(totl1_salt.toFixed(2));
		rem2Salt();

 }
  function totalInSalt(){
 			totalRemSalt();
    }
 	
function totalRemShengdana(){
 	var rem1_shengdana = parseFloat($("input[name='rem1_shengdana']").val());
 	 	  $("input[name='rem1_shengdana']").val(rem1_shengdana.toFixed(2));
	var in_shengdana = parseFloat($("input[name='in_shengdana']").val());
 	 	  $("input[name='in_shengdana']").val(in_shengdana.toFixed(2));
 	var totl1_shengdana = rem1_shengdana + in_shengdana;
 	 	  $("input[name='totl1_shengdana']").val(totl1_shengdana.toFixed(2));
		rem2shengdana();

 }
  function totalInShengdana(){
 			totalRemShengdana();
    }
	
function totalRemSugar(){
 	var rem1_sugar = parseFloat($("input[name='rem1_sugar']").val());
 	 	  $("input[name='rem1_sugar']").val(rem1_sugar.toFixed(2));
	var in_sugar = parseFloat($("input[name='in_sugar']").val());
 	 	  $("input[name='in_sugar']").val(in_sugar.toFixed(2));
 	var totl1_sugar = rem1_sugar + in_sugar;
 	 	  $("input[name='totl1_sugar']").val(totl1_sugar.toFixed(2));
		rem2Sugar();

 }
  function totalInSugar(){
 			totalRemSugar();
    }
	
function totalRemFaOil(){
 	var rem1_fa_oil = parseFloat($("input[name='rem1_fa_oil']").val());
 	 	  $("input[name='rem1_fa_oil']").val(rem1_fa_oil.toFixed(2));
	var in_fa_oil = parseFloat($("input[name='in_fa_oil']").val());
 	 	  $("input[name='in_fa_oil']").val(in_fa_oil.toFixed(2));
 	var totl1_fa_oil = rem1_fa_oil + in_fa_oil;
 	 	  $("input[name='totl1_fa_oil']").val(totl1_fa_oil.toFixed(2));
 	 	  rem2FaOil();
 }
  function totalInFaOil(){
 			totalRemFaOil();
    }
	
function totalRemMataki(){
 	var rem1_matki = parseFloat($("input[name='rem1_matki']").val());
 	 	  $("input[name='rem1_matki']").val(rem1_matki.toFixed(2));
	var in_matki = parseFloat($("input[name='in_matki']").val());
 	 	  $("input[name='in_matki']").val(in_matki.toFixed(2));
 	var totl1_matki = rem1_matki + in_matki;
 	 	  $("input[name='totl1_matki']").val(totl1_matki.toFixed(2));
 	 	  	rem2Matki();
 }
  function totalInMataki(){
 			totalRemMataki();   
}
function totalRemBarbiti(){
 	var rem1_barbiti = parseFloat($("input[name='rem1_barbiti']").val());
 	 	  $("input[name='rem1_barbiti']").val(rem1_barbiti.toFixed(2));
	var in_barbiti = parseFloat($("input[name='in_barbiti']").val());
 	 	  $("input[name='in_barbiti']").val(in_barbiti.toFixed(2));
 	var totl1_barbiti = rem1_barbiti + in_barbiti;
 	 	  $("input[name='totl1_barbiti']").val(totl1_barbiti.toFixed(2));
		rem2Barbiti();

 }
function totalInBarbiti(){
 			totalRemBarbiti();
}

function totalRemChana(){
 	var rem1_chna = parseFloat($("input[name='rem1_chna']").val());
 	 	  $("input[name='rem1_chna']").val(rem1_chna.toFixed(2));
	var in_chna = parseFloat($("input[name='in_chna']").val());
 	 	  $("input[name='in_chna']").val(in_chna.toFixed(2));
 	var totl1_chna = rem1_chna + in_chna;
 	 	  $("input[name='totl1_chna']").val(totl1_chna.toFixed(2));
		rem2Chna();

 }
function totalInChana(){
 			totalRemChana();
}

function totalRemKaSoap(){
 	var rem1_ka_soap = parseFloat($("input[name='rem1_ka_soap']").val());
 	 	  $("input[name='rem1_ka_soap']").val(rem1_ka_soap.toFixed(2));
	var in_ka_soap = parseFloat($("input[name='in_ka_soap']").val());
 	 	  $("input[name='in_ka_soap']").val(in_ka_soap.toFixed(2));
 	var totl1_ka_soap = rem1_ka_soap + in_ka_soap;
 	 	  $("input[name='totl1_ka_soap']").val(totl1_ka_soap.toFixed(2));
		rem2ClothSoap();

 }
function totalInKaSoap(){
 			totalRemKaSoap();
}

function totalRemASoap(){
 	var rem1_a_soap = parseFloat($("input[name='rem1_a_soap']").val());
 	 	  $("input[name='rem1_a_soap']").val(rem1_a_soap.toFixed(2));
	var in_a_soap = parseFloat($("input[name='in_a_soap']").val());
 	 	  $("input[name='in_a_soap']").val(in_a_soap.toFixed(2));
 	var totl1_a_soap = rem1_a_soap + in_a_soap;
 	 	  $("input[name='totl1_a_soap']").val(totl1_a_soap.toFixed(2));
		rem2BeathSoap();

 }
function totalInASoap(){
 			totalRemASoap();
}

function totalRemKhoOil(){
 	var rem1_kho_oil = parseFloat($("input[name='rem1_kho_oil']").val());
 	 	  $("input[name='rem1_kho_oil']").val(rem1_kho_oil.toFixed(2));
	var in_kho_oil = parseFloat($("input[name='in_kho_oil']").val());
 	 	  $("input[name='in_kho_oil']").val(in_kho_oil.toFixed(2));
 	var totl1_kho_oil = rem1_kho_oil + in_kho_oil;
 	 	  $("input[name='totl1_kho_oil']").val(totl1_kho_oil.toFixed(2));
		rem2CoconutOil();

 }
function totalInKhoOil(){
 			totalRemKhoOil();
}

function totalRemMajan(){
 	var rem1_majan = parseFloat($("input[name='rem1_majan']").val());
 	 	  $("input[name='rem1_majan']").val(rem1_majan.toFixed(2));
	var in_majan = parseFloat($("input[name='in_majan']").val());
 	 	  $("input[name='in_majan']").val(in_majan.toFixed(2));
 	var totl1_majan = rem1_majan + in_majan;
 	 	  $("input[name='totl1_majan']").val(totl1_majan.toFixed(2));
		rem2Manjan();

 }
function totalInMajan(){
 			totalRemMajan();
}

function totalRemEggs(){
 	var rem1_eggs = parseFloat($("input[name='rem1_eggs']").val());
 	 	  $("input[name='rem1_eggs']").val(rem1_eggs.toFixed(2));
	var in_eggs = parseFloat($("input[name='in_eggs']").val());
 	 	  $("input[name='in_eggs']").val(in_eggs.toFixed(2));
 	var totl1_eggs = rem1_eggs + in_eggs;
 	 	  $("input[name='totl1_eggs']").val(totl1_eggs.toFixed(2));
		rem2Eggs();

 }
function totalInEggs(){
 			totalRemEggs();
}
function totalRemFruits(){
 	var rem1_fruits = parseFloat($("input[name='rem1_fruits']").val());
 	 	  $("input[name='rem1_fruits']").val(rem1_fruits.toFixed(2));
	var in_fruits = parseFloat($("input[name='in_fruits']").val());
 	 	  $("input[name='in_fruits']").val(in_fruits.toFixed(2));
 	var totl1_fruits = rem1_fruits + in_fruits;
 	 	  $("input[name='totl1_fruits']").val(totl1_fruits.toFixed(2));
		rem2Fruits();

 }
function totalInFruits(){
 			totalRemFruits();
}

function totalRemMutton(){
 	var rem1_mutton = parseFloat($("input[name='rem1_mutton']").val());
 	 	  $("input[name='rem1_mutton']").val(rem1_mutton.toFixed(2));
	var in_mutton = parseFloat($("input[name='in_mutton']").val());
 	 	  $("input[name='in_mutton']").val(in_mutton.toFixed(2));
 	var totl1_mutton = rem1_mutton + in_mutton;
 	 	  $("input[name='totl1_mutton']").val(totl1_mutton.toFixed(2));
 	 	  rem2Mutton();
		
 }
function totalInMutton(){
 			totalRemMutton();
}

function totalRemFist(){
 	var rem1_fist = parseFloat($("input[name='rem1_fist']").val());
 	 	  $("input[name='rem1_fist']").val(rem1_fist.toFixed(2));
	var in_fist = parseFloat($("input[name='in_fist']").val());
 	 	  $("input[name='in_fist']").val(in_fist.toFixed(2));
 	var totl1_fist = rem1_fist + in_fist;
 	 	  $("input[name='totl1_fist']").val(totl1_fist.toFixed(2));
 	 	  rem2Fist();
		
 }
function totalInFist(){
 			totalRemFist();
}

function totalRemMilk(){
 	var rem1_milk = parseFloat($("input[name='rem1_milk']").val());
 	 	  $("input[name='rem1_milk']").val(rem1_milk.toFixed(2));
	var in_milk = parseFloat($("input[name='in_milk']").val());
 	 	  $("input[name='in_milk']").val(in_milk.toFixed(2));
 	var totl1_milk = rem1_milk + in_milk;
 	 	  $("input[name='totl1_milk']").val(totl1_milk.toFixed(2));
 	 	  rem2Milk();
		
 }
function totalInMilk(){
 			totalRemMilk();
}

function totalRemVegetables1(){
 	var rem1_vegetables1 = parseFloat($("input[name='rem1_vegetables1']").val());
 	 	  $("input[name='rem1_vegetables1']").val(rem1_vegetables1.toFixed(2));
	var in_vegetables1 = parseFloat($("input[name='in_vegetables1']").val());
 	 	  $("input[name='in_vegetables1']").val(in_vegetables1.toFixed(2));
 	var totl1_vegetables1 = rem1_vegetables1 + in_vegetables1;
 	 	  $("input[name='totl1_vegetables1']").val(totl1_vegetables1.toFixed(2));
 	 	  rem2Vegetables1();
	
 }
function totalInVegetables1(){
 			totalRemVegetables1();
}


function totalRemVegetables2(){
 	var rem1_vegetables2 = parseFloat($("input[name='rem1_vegetables2']").val());
 	 	  $("input[name='rem1_vegetables2']").val(rem1_vegetables2.toFixed(2));
	var in_vegetables2 = parseFloat($("input[name='in_vegetables2']").val());
 	 	  $("input[name='in_vegetables2']").val(in_vegetables2.toFixed(2));
 	var totl1_vegetables2 = rem1_vegetables2 + in_vegetables2;
 	 	  $("input[name='totl1_vegetables2']").val(totl1_vegetables2.toFixed(2));
 	 	  	rem2Vegetables2();
 }
function totalInVegetables2(){
 			totalRemVegetables2();
}

function totalRemGarlic(){
 	var rem1_garlic = parseFloat($("input[name='rem1_garlic']").val());
 	 	  $("input[name='rem1_garlic']").val(rem1_garlic.toFixed(2));
	var in_garlic = parseFloat($("input[name='in_garlic']").val());
 	 	  $("input[name='in_garlic']").val(in_garlic.toFixed(2));
 	var totl1_garlic = rem1_garlic + in_garlic;
 	 	  $("input[name='totl1_garlic']").val(totl1_garlic.toFixed(2));
		rem2Garlic();

 }
function totalInGarlic(){
 			totalRemGarlic();
}


function totalRemOnion(){
 	var rem1_onion = parseFloat($("input[name='rem1_onion']").val());
 	 	  $("input[name='rem1_onion']").val(rem1_onion.toFixed(2));
	var in_onion = parseFloat($("input[name='in_onion']").val());
 	 	  $("input[name='in_onion']").val(in_onion.toFixed(2));
 	var totl1_onion = rem1_onion + in_onion;
 	 	  $("input[name='totl1_onion']").val(totl1_onion.toFixed(2));
		rem2Onion();

 }
function totalInOnion(){
 			totalRemOnion();
}

function totalRemPohe(){
 	var rem1_pohe = parseFloat($("input[name='rem1_pohe']").val());
 	 	  $("input[name='rem1_pohe']").val(rem1_pohe.toFixed(2));
	var in_pohe = parseFloat($("input[name='in_pohe']").val());
 	 	  $("input[name='in_pohe']").val(in_pohe.toFixed(2));
 	var totl1_pohe = rem1_pohe + in_pohe;
 	 	  $("input[name='totl1_pohe']").val(totl1_pohe.toFixed(2));
        rem2Pohe();
 	 	  
 }
function totalInPohe(){
 			totalRemPohe();
}


//MOrning & Evening Calculation
function mWheat(){
 	 	 var mrng_wheat = parseFloat($("input[name='mrng_wheat']").val());
 	 	  $("input[name='mrng_wheat']").val(mrng_wheat.toFixed(2));
		  var evng_wheat = parseFloat($("input[name='evng_wheat']").val());
 	 	  $("input[name='evng_wheat']").val(evng_wheat.toFixed(2));
 		 var totl2_wheat = mrng_wheat + evng_wheat;
 	 	  $("input[name='totl2_wheat']").val(totl2_wheat.toFixed(2));
 }
 function eWheat(){
	mWheat();
 }
 
 function mRice(){
 	 	 var mrng_rice = parseFloat($("input[name='mrng_rice']").val());
 	 	  $("input[name='mrng_rice']").val(mrng_rice.toFixed(2));
		  var evng_rice = parseFloat($("input[name='evng_rice']").val());
 	 	  $("input[name='evng_rice']").val(evng_rice.toFixed(2));
 		 var totl2_rice = mrng_rice + evng_rice;
 	 	  $("input[name='totl2_rice']").val(totl2_rice.toFixed(2));
 }
 function eRice(){
	mRice();
 }
	function mMungDal(){
		
		var mrng_mung = parseFloat($("input[name='mrng_mung']").val());
		$("input[name='mrng_mung']").val(mrng_mung.toFixed(2));
		var evng_mung = parseFloat($("input[name='evng_mung']").val());
		$("input[name='evng_mung']").val(evng_mung.toFixed(2));
		var totl2_mung = mrng_mung + evng_mung;
		$("input[name='totl2_mung']").val(totl2_mung.toFixed(2));
	}
	function eMungDal(){
		mMungDal();
	}
    function mChnaDal(){
		var mrng_chnadal = parseFloat($("input[name='mrng_chnadal']").val());
 	 	$("input[name='mrng_chnadal']").val(mrng_chnadal.toFixed(2));
		var evng_chnadal = parseFloat($("input[name='evng_chnadal']").val());
 	 	$("input[name='evng_chnadal']").val(evng_chnadal.toFixed(2));
 		var totl2_chnadal = mrng_chnadal + evng_chnadal;
 	 	$("input[name='totl2_chnadal']").val(totl2_chnadal.toFixed(2));
	}
	function eChnaDal(){
		mChnaDal();
	}
	function mTurDal(){
		    var mrng_turdal = parseFloat($("input[name='mrng_turdal']").val());
 	 	  $("input[name='mrng_turdal']").val(mrng_turdal.toFixed(2));
		  var evng_turdal = parseFloat($("input[name='evng_turdal']").val());
 	 	  $("input[name='evng_turdal']").val(evng_turdal.toFixed(2));
 		 var totl2_turdal = mrng_turdal + evng_turdal;
 	 	  $("input[name='totl2_turdal']").val(totl2_turdal.toFixed(2));
 }
  function eTurDal(){
		   mTurDal();
 }
 function mBtbatiDal(){
 	var mrng_btbtidal = parseFloat($("input[name='mrng_btbtidal']").val());
 	 	  $("input[name='mrng_btbtidal']").val(mrng_btbtidal.toFixed(2));
		  var evng_btbtidal = parseFloat($("input[name='evng_btbtidal']").val());
 	 	  $("input[name='evng_btbtidal']").val(evng_btbtidal.toFixed(2));
 		 var totl2_btbtidal = mrng_btbtidal + evng_btbtidal;
 	 	  $("input[name='totl2_btbtidal']").val(totl2_btbtidal.toFixed(2));
 }
  function eBtbatiDal(){
 	mBtbatiDal();
 }
 
   function mUdidDal(){
 	var mrng_uddiddal = parseFloat($("input[name='mrng_uddiddal']").val());
 	 	  $("input[name='mrng_uddiddal']").val(mrng_uddiddal.toFixed(2));
		  var evng_uddiddal = parseFloat($("input[name='evng_uddiddal']").val());
 	 	  $("input[name='evng_uddiddal']").val(evng_uddiddal.toFixed(2));
 		 var totl2_uddiddal = mrng_uddiddal + evng_uddiddal;
 	 	  $("input[name='totl2_uddiddal']").val(totl2_uddiddal.toFixed(2));
 }

   function eUdidDal(){
 			mUdidDal();
    }
	
	function mSarpan(){
 	var mrng_srpan = parseFloat($("input[name='mrng_srpan']").val());
 	 	  $("input[name='mrng_srpan']").val(mrng_srpan.toFixed(2));
		  var evng_srpan = parseFloat($("input[name='evng_srpan']").val());
 	 	  $("input[name='evng_srpan']").val(evng_srpan.toFixed(2));
 		 var totl2_srpan = mrng_srpan + evng_srpan;
 	 	  $("input[name='totl2_srpan']").val(totl2_srpan.toFixed(2));
 }
  function eSarpan(){
 			mSarpan();
    }
	
function mTikhat(){
 	var mrng_tikhat = parseFloat($("input[name='mrng_tikhat']").val());
 	 	  $("input[name='mrng_tikhat']").val(mrng_tikhat.toFixed(2));
		  var evng_tikhat = parseFloat($("input[name='evng_tikhat']").val());
 	 	  $("input[name='evng_tikhat']").val(evng_tikhat.toFixed(2));
 		 var totl2_tikhat = mrng_tikhat + evng_tikhat;
 	 	  $("input[name='totl2_tikhat']").val(totl2_tikhat.toFixed(2));
 }
  function eTikhat(){
 			mTikhat();
    }
 	
function mHalad(){
 	var mrng_hld = parseFloat($("input[name='mrng_hld']").val());
 	 	  $("input[name='mrng_hld']").val(mrng_hld.toFixed(3));
	var evng_hld = parseFloat($("input[name='evng_hld']").val());
 	 	  $("input[name='evng_hld']").val(evng_hld.toFixed(3));
 	 var totl2_hld = mrng_hld + evng_hld;
 	 	  $("input[name='totl2_hld']").val(totl2_hld.toFixed(3));
 }
  function eHalad(){
 			mHalad();
    }

	
function mJira(){
 	var mrng_jira = parseFloat($("input[name='mrng_jira']").val());
 	 	  $("input[name='mrng_jira']").val(mrng_jira.toFixed(3));
	var evng_jira = parseFloat($("input[name='evng_jira']").val());
 	 	  $("input[name='evng_jira']").val(evng_jira.toFixed(3));
 	 var totl2_jira = mrng_jira + evng_jira;
 	 	  $("input[name='totl2_jira']").val(totl2_jira.toFixed(3));
 }
  function eJira(){
 			mJira();
    }

	
function mMasala(){

 	var mrng_masala = parseFloat($("input[name='mrng_masala']").val());
 	 	  $("input[name='mrng_masala']").val(mrng_masala.toFixed(3));
	var evng_masala = parseFloat($("input[name='evng_masala']").val());
 	 	  $("input[name='evng_masala']").val(evng_masala.toFixed(3));
 	var totl2_masala = mrng_masala + evng_masala;
 	 	  $("input[name='totl2_masala']").val(totl2_masala.toFixed(3));
 }
  function eMasala(){
 			mMasala();
    }
 	
function mSalt(){
 	var mrng_salt = parseFloat($("input[name='mrng_salt']").val());
 	 	  $("input[name='mrng_salt']").val(mrng_salt.toFixed(3));
	var evng_salt = parseFloat($("input[name='evng_salt']").val());
 	 	  $("input[name='evng_salt']").val(evng_salt.toFixed(3));
 	var totl2_salt = mrng_salt + evng_salt;
 	 	  $("input[name='totl2_salt']").val(totl2_salt.toFixed(3));
 }
  function eSalt(){
 			mSalt();
    }
 	
function mShengdana(){
 	var mrng_shengdana = parseFloat($("input[name='mrng_shengdana']").val());
 	 	  $("input[name='mrng_shengdana']").val(mrng_shengdana.toFixed(3));
	var evng_shengdana = parseFloat($("input[name='evng_shengdana']").val());
 	 	  $("input[name='evng_shengdana']").val(evng_shengdana.toFixed(3));
 	var totl2_shengdana = mrng_shengdana + evng_shengdana;
 	 	  $("input[name='totl2_shengdana']").val(totl2_shengdana.toFixed(3));
 }
  function eShengdana(){
 			mShengdana();
    }
	
function mSugar(){
 	var mrng_sugar = parseFloat($("input[name='mrng_sugar']").val());
 	 	  $("input[name='mrng_sugar']").val(mrng_sugar.toFixed(3));
	var evng_sugar = parseFloat($("input[name='evng_sugar']").val());
 	 	  $("input[name='evng_sugar']").val(evng_sugar.toFixed(3));
 	var totl2_sugar = mrng_sugar + evng_sugar;
 	 	  $("input[name='totl2_sugar']").val(totl2_sugar.toFixed(3));
 }
  function eSugar(){
 			mSugar();
    }
	
function mFaOil(){
 	var mrng_fa_oil = parseFloat($("input[name='mrng_fa_oil']").val());
 	 	  $("input[name='mrng_fa_oil']").val(mrng_fa_oil.toFixed(2));
	var evng_fa_oil = parseFloat($("input[name='evng_fa_oil']").val());
 	 	  $("input[name='evng_fa_oil']").val(evng_fa_oil.toFixed(2));
 	var totl2_fa_oil = mrng_fa_oil + evng_fa_oil;
 	 	  $("input[name='totl2_fa_oil']").val(totl2_fa_oil.toFixed(2));
 }
  function eFaOil(){
 			mFaOil();
    }
	
function mMataki(){
 	var mrng_matki = parseFloat($("input[name='mrng_matki']").val());
 	 	  $("input[name='mrng_matki']").val(mrng_matki.toFixed(2));
	var evng_matki = parseFloat($("input[name='evng_matki']").val());
 	 	  $("input[name='evng_matki']").val(evng_matki.toFixed(2));
 	var totl2_matki = mrng_matki + evng_matki;
 	 	  $("input[name='totl2_matki']").val(totl2_matki.toFixed(2));
 }
  function eMataki(){
 			mMataki();   
}

function mBarbiti(){
 	var mrng_barbiti = parseFloat($("input[name='mrng_barbiti']").val());
 	 	  $("input[name='mrng_barbiti']").val(mrng_barbiti.toFixed(2));
	var evng_barbiti = parseFloat($("input[name='evng_barbiti']").val());
 	 	  $("input[name='evng_barbiti']").val(evng_barbiti.toFixed(2));
 	var totl2_barbiti = mrng_barbiti + evng_barbiti;
 	 	  $("input[name='totl2_barbiti']").val(totl2_barbiti.toFixed(2));
 }
function eBarbiti(){
 			mBarbiti();
}

function mChana(){
 	var mrng_chna = parseFloat($("input[name='mrng_chna']").val());
 	 	  $("input[name='mrng_chna']").val(mrng_chna.toFixed(2));
	var evng_chna = parseFloat($("input[name='evng_chna']").val());
 	 	  $("input[name='evng_chna']").val(evng_chna.toFixed(2));
 	var totl2_chna = mrng_chna + evng_chna;
 	 	  $("input[name='totl2_chna']").val(totl2_chna.toFixed(2));
 }
function eChana(){
 			mChana();
}

function mKaSoap(){
 	var mrng_ka_soap = parseInt($("input[name='mrng_ka_soap']").val());
 	 	//  $("input[name='mrng_ka_soap']").val(mrng_ka_soap.toFixed(2));
	var evng_ka_soap = parseInt($("input[name='evng_ka_soap']").val());
 	 	//  $("input[name='evng_ka_soap']").val(evng_ka_soap.toFixed(2));
 	var totl2_ka_soap = mrng_ka_soap + evng_ka_soap;
 	 	  $("input[name='totl2_ka_soap']").val(totl2_ka_soap);
 	 	  rem2ClothSoap();
 }
function eKaSoap(){
 			mKaSoap();
}

function mASoap(){
 	var mrng_a_soap = parseInt($("input[name='mrng_a_soap']").val());
 	 	  //$("input[name='mrng_a_soap']").val(mrng_a_soap.toFixed(2));
	var evng_a_soap = parseInt($("input[name='evng_a_soap']").val());
 	 	 // $("input[name='evng_a_soap']").val(evng_a_soap.toFixed(2));
 	var totl2_a_soap = mrng_a_soap + evng_a_soap;
 	 	  $("input[name='totl2_a_soap']").val(totl2_a_soap);
 	 	  rem2BeathSoap();
 }
function eASoap(){
 			mASoap();
}

function mKhoOil(){
 	var mrng_kho_oil = parseInt($("input[name='mrng_kho_oil']").val());
 	 	//  $("input[name='mrng_kho_oil']").val(mrng_kho_oil.toFixed(2));
	var evng_kho_oil = parseInt($("input[name='evng_kho_oil']").val());
 	 	//  $("input[name='evng_kho_oil']").val(evng_kho_oil.toFixed(2));
 	var totl2_kho_oil = mrng_kho_oil + evng_kho_oil;
 	 	  $("input[name='totl2_kho_oil']").val(totl2_kho_oil);
 	 	  rem2CoconutOil();
 }
function eKhoOil(){
 			mKhoOil();
}

function mMajan(){
 	var mrng_majan = parseInt($("input[name='mrng_majan']").val());
 	 	//  $("input[name='mrng_majan']").val(mrng_majan.toFixed(2));
	var evng_majan = parseInt($("input[name='evng_majan']").val());
 	 	 // $("input[name='evng_majan']").val(evng_majan.toFixed(2));
 	var totl2_majan = mrng_majan + evng_majan;
 	 	  $("input[name='totl2_majan']").val(totl2_majan);
 	 	  rem2Manjan();
 }
function eMajan(){
 			mMajan();
}

function mEggs(){
 	var mrng_eggs = parseInt($("input[name='mrng_eggs']").val());
 	 	//  $("input[name='mrng_eggs']").val(mrng_eggs.toFixed(2));
	var evng_eggs = parseInt($("input[name='evng_eggs']").val());
 	 	 // $("input[name='evng_eggs']").val(evng_eggs.toFixed(2));
 	var totl2_eggs = mrng_eggs + evng_eggs;
 	 	  $("input[name='totl2_eggs']").val(totl2_eggs);
 	 	  rem2Eggs();
 }
function eEggs(){
 			mEggs();
}
function mFruits(){
 	var mrng_fruits = parseInt($("input[name='mrng_fruits']").val());
 	 	//  $("input[name='mrng_fruits']").val(mrng_fruits.toFixed(2));
	var evng_fruits = parseInt($("input[name='evng_fruits']").val());
 	 	//  $("input[name='evng_fruits']").val(evng_fruits.toFixed(2));
 	var totl2_fruits = mrng_fruits + evng_fruits;
 	 	  $("input[name='totl2_fruits']").val(totl2_fruits);
 	 	  rem2Fruits();
 }
function eFruits(){
 			mFruits();
}

function mMutton(){
 	var mrng_mutton = parseInt($("input[name='mrng_mutton']").val());
 	 	//  $("input[name='mrng_mutton']").val(mrng_mutton.toFixed(2));
	var evng_mutton = parseInt($("input[name='evng_mutton']").val());
 	 	//  $("input[name='evng_mutton']").val(evng_mutton.toFixed(2));
 	var totl2_mutton = mrng_mutton + evng_mutton;
 	 	  $("input[name='totl2_mutton']").val(totl2_mutton);
 	 	  rem2Mutton();
 }
function eMutton(){
 			mMutton();
}

function mFist(){
 	var mrng_fist = parseInt($("input[name='mrng_fist']").val());
 	 	 // $("input[name='mrng_fist']").val(mrng_fist.toFixed(2));
	var evng_fist = parseInt($("input[name='evng_fist']").val());
 	 	 // $("input[name='evng_fist']").val(evng_fist.toFixed(2));
 	var totl2_fist = mrng_fist + evng_fist;
 	 	  $("input[name='totl2_fist']").val(totl2_fist);
 	 	  rem2Fist();
 }
function eFist(){
 			mFist();
}

function mMilk(){
 	var mrng_milk = parseInt($("input[name='mrng_milk']").val());
 	 	//  $("input[name='mrng_milk']").val(mrng_milk.toFixed(2));
	var evng_milk = parseInt($("input[name='evng_milk']").val());
 	 	//  $("input[name='evng_milk']").val(evng_milk.toFixed(2));
 	var totl2_milk = mrng_milk + evng_milk;
 	 	  $("input[name='totl2_milk']").val(totl2_milk);
 	 	  rem2Milk();
 }
function eMilk(){
 			mMilk();
}

function mVegetables1(){
 	var mrng_vegetables1 = parseFloat($("input[name='mrng_vegetables1']").val());
 	 	  $("input[name='mrng_vegetables1']").val(mrng_vegetables1.toFixed(2));
	var evng_vegetables1 = parseFloat($("input[name='evng_vegetables1']").val());
 	 	  $("input[name='evng_vegetables1']").val(evng_vegetables1.toFixed(2));
 	var totl2_vegetables1 = mrng_vegetables1 + evng_vegetables1;
 	 	  $("input[name='totl2_vegetables1']").val(totl2_vegetables1.toFixed(2));
 }
function eVegetables1(){
 			mVegetables1();
}

function mVegetables2(){
 	var mrng_vegetables2 = parseFloat($("input[name='mrng_vegetables2']").val());
 	 	  $("input[name='mrng_vegetables2']").val(mrng_vegetables2.toFixed(2));
	var evng_vegetables2 = parseFloat($("input[name='evng_vegetables2']").val());
 	 	  $("input[name='evng_vegetables2']").val(evng_vegetables2.toFixed(2));
 	var totl2_vegetables2 = mrng_vegetables2 + evng_vegetables2;
 	 	  $("input[name='totl2_vegetables2']").val(totl2_vegetables2.toFixed(2));
 }
function eVegetables2(){
 			mVegetables2();
}

function mGarlic(){
 	var mrng_garlic = parseFloat($("input[name='mrng_garlic']").val());
 	 	  $("input[name='mrng_garlic']").val(mrng_garlic.toFixed(2));
	var evng_garlic = parseFloat($("input[name='evng_garlic']").val());
 	 	  $("input[name='evng_garlic']").val(evng_garlic.toFixed(2));
 	var totl2_garlic = mrng_garlic + evng_garlic;
 	 	  $("input[name='totl2_garlic']").val(totl2_garlic.toFixed(2));
 }
function eGarlic(){
 			mGarlic();
}

function mOnion(){
 	var mrng_onion = parseFloat($("input[name='mrng_onion']").val());
 	 	  $("input[name='mrng_onion']").val(mrng_onion.toFixed(2));
	var evng_onion = parseFloat($("input[name='evng_onion']").val());
 	 	  $("input[name='evng_onion']").val(evng_onion.toFixed(2));
 	var totl2_onion = mrng_onion + evng_onion;
 	 	  $("input[name='totl2_onion']").val(totl2_onion.toFixed(2));
 }
function eOnion(){
 			mOnion();
}
function mPohe(){
 	var mrng_pohe = parseFloat($("input[name='mrng_pohe']").val());
 	 	  $("input[name='mrng_pohe']").val(mrng_pohe.toFixed(2));
	var evng_pohe = parseFloat($("input[name='evng_pohe']").val());
 	 	  $("input[name='evng_pohe']").val(evng_pohe.toFixed(2));
 	var totl2_pohe = mrng_pohe + evng_pohe;
 	 	  $("input[name='totl2_pohe']").val(totl2_pohe.toFixed(2));
 	 	  rem2Pohe();
 }
function ePohe(){
	mPohe();
}

  function rem2Wheat(){
    
		  var totl1_wheat = parseFloat($("input[name='totl1_wheat']").val());
		  var totl2_wheat = parseFloat($("input[name='totl2_wheat']").val());
		  var rem2_wheat = totl1_wheat - totl2_wheat;
 	 	  $("input[name='rem2_wheat']").val(rem2_wheat.toFixed(2));
 	 	  //alert(totl2_wheat);
    }
    function rem2Rice(){
    
		  var totl1_rice = parseFloat($("input[name='totl1_rice']").val());
		  var totl2_rice = parseFloat($("input[name='totl2_rice']").val());
		  var rem2_rice = totl1_rice - totl2_rice;
 	 	  $("input[name='rem2_rice']").val(rem2_rice.toFixed(2));
    }
     function rem2Mung(){
    
		  var totl1_mung = parseFloat($("input[name='totl1_mung']").val());
		  var totl2_mung = parseFloat($("input[name='totl2_mung']").val());
		  var rem2_mung = totl1_mung - totl2_mung;
 	 	  $("input[name='rem2_mung']").val(rem2_mung.toFixed(2));
    }
function rem2ChanDaal(){
    
		  var totl1_chnadal = parseFloat($("input[name='totl1_chnadal']").val());
		  var totl2_chnadal = parseFloat($("input[name='totl2_chnadal']").val());
		  var rem2_chnaDaal = totl1_chnadal - totl2_chnadal;
 	 	  $("input[name='rem2_chnadal']").val(rem2_chnaDaal.toFixed(2));
    }
 
     function rem2TurDaal(){
    
		  var totl1_turdal = parseFloat($("input[name='totl1_turdal']").val());
		  var totl2_turdal = parseFloat($("input[name='totl2_turdal']").val());
		  var rem2_turDaal = totl1_turdal - totl2_turdal;
 	 	  $("input[name='rem2_turdal']").val(rem2_turDaal.toFixed(2));
    }
     function rem2BtbatiDaal(){
    
		  var totl1_btbtidal = parseFloat($("input[name='totl1_btbtidal']").val());
		  var totl2_btbtidal = parseFloat($("input[name='totl2_btbtidal']").val());
		  var rem2_btbatiDaal = totl1_btbtidal - totl2_btbtidal;
 	 	  $("input[name='rem2_btbtidal']").val(rem2_btbatiDaal.toFixed(2));
    }
     function rem2UdidDaal(){
    
		  var totl1_uddiddal = parseFloat($("input[name='totl1_uddiddal']").val());
		  var totl2_uddiddal = parseFloat($("input[name='totl2_uddiddal']").val());
		  var rem2_btbatiDaal = totl1_uddiddal - totl2_uddiddal;
 	 	  $("input[name='rem2_uddiddal']").val(rem2_btbatiDaal.toFixed(2));
    }

  function rem2Sarpan(){
    
		  var totl1_srpan = parseFloat($("input[name='totl1_srpan']").val());
		  var totl2_srpan = parseFloat($("input[name='totl2_srpan']").val());
		  var rem2_srpan = totl1_srpan - totl2_srpan;
 	 	  $("input[name='rem2_srpan']").val(rem2_srpan.toFixed(2));
    }
     function rem2Tikhat(){
    
		  var totl1_tikhat = parseFloat($("input[name='totl1_tikhat']").val());
		  var totl2_tikhat = parseFloat($("input[name='totl2_tikhat']").val());
		  var rem2_tikhat = totl1_tikhat - totl2_tikhat;
 	 	  $("input[name='rem2_tikhat']").val(rem2_tikhat.toFixed(2));
    }

  function rem2Hld(){
    
		  var totl1_hld = parseFloat($("input[name='totl1_hld']").val());
		  var totl2_hld = parseFloat($("input[name='totl2_hld']").val());
		  var rem2_hld = totl1_hld - totl2_hld;
 	 	  $("input[name='rem2_hld']").val(rem2_hld.toFixed(2));
    }

 function rem2Jira(){
    
		  var totl1_jira = parseFloat($("input[name='totl1_jira']").val());
		  var totl2_jira = parseFloat($("input[name='totl2_jira']").val());
		  var rem2_jira = totl1_jira - totl2_jira;
 	 	  $("input[name='rem2_jira']").val(rem2_jira.toFixed(2));
    }
     function rem2Masala(){
    
		  var totl1_masala = parseFloat($("input[name='totl1_masala']").val());
		  var totl2_masala = parseFloat($("input[name='totl2_masala']").val());
		  var rem2_masala = totl1_masala - totl2_masala;
 	 	  $("input[name='rem2_masala']").val(rem2_masala.toFixed(2));
    }
       function rem2Salt(){
    
		  var totl1_salt = parseFloat($("input[name='totl1_salt']").val());
		  var totl2_salt = parseFloat($("input[name='totl2_salt']").val());
		  var rem2_salt = totl1_salt - totl2_salt;
 	 	  $("input[name='rem2_salt']").val(rem2_salt.toFixed(2));
    }
    function rem2shengdana(){
    
		  var totl1_shengdana = parseFloat($("input[name='totl1_shengdana']").val());
		  var totl2_shengdana = parseFloat($("input[name='totl2_shengdana']").val());
		  var rem2_shengdana = totl1_shengdana - totl2_shengdana;
 	 	  $("input[name='rem2_shengdana']").val(rem2_shengdana.toFixed(2));
    }
    function rem2Sugar(){
    
		  var totl1_sugar = parseFloat($("input[name='totl1_sugar']").val());
		  var totl2_sugar = parseFloat($("input[name='totl2_sugar']").val());
		  var rem2_sugar = totl1_sugar - totl2_sugar;
 	 	  $("input[name='rem2_sugar']").val(rem2_sugar.toFixed(2));
    }
     function rem2FaOil(){
    
		  var totl1_fa_oil = parseFloat($("input[name='totl1_fa_oil']").val());
		  var totl2_fa_oil = parseFloat($("input[name='totl2_fa_oil']").val());
		  var rem2_fa_oli = totl1_fa_oil - totl2_fa_oil;
 	 	  $("input[name='rem2_fa_oli']").val(rem2_fa_oli.toFixed(2));
    }
     function rem2Matki(){
    
		  var totl1_matki = parseFloat($("input[name='totl1_matki']").val());
		  var totl2_matki = parseFloat($("input[name='totl2_matki']").val());
		  var rem2_matki = totl1_matki - totl2_matki;
 	 	  $("input[name='rem2_matki']").val(rem2_matki.toFixed(2));
    }
     function rem2Barbiti(){
    
		  var totl1_barbiti = parseFloat($("input[name='totl1_barbiti']").val());
		  var totl2_barbiti = parseFloat($("input[name='totl2_barbiti']").val());
		  var rem2_barbiti = totl1_barbiti - totl2_barbiti;
 	 	  $("input[name='rem2_barbiti']").val(rem2_barbiti.toFixed(2));
    }
    function rem2Chna(){
    
		  var totl1_chna = parseFloat($("input[name='totl1_chna']").val());
		  var totl2_chna = parseFloat($("input[name='totl2_chna']").val());
		  var rem2_chna = totl1_chna - totl2_chna;
 	 	  $("input[name='rem2_chna']").val(rem2_chna.toFixed(2));
    }
     function rem2ClothSoap(){
    
		  var totl1_ka_soap = parseFloat($("input[name='totl1_ka_soap']").val());
		  var totl2_ka_soap = parseFloat($("input[name='totl2_ka_soap']").val());
		  var rem2_ka_soap = totl1_ka_soap - totl2_ka_soap;
 	 	  $("input[name='rem2_ka_soap']").val(rem2_ka_soap.toFixed(2));
    }
     function rem2BeathSoap(){
    
		  var totl1_a_soap = parseFloat($("input[name='totl1_a_soap']").val());
		  var totl2_a_soap = parseFloat($("input[name='totl2_a_soap']").val());
		  var rem2_a_soap = totl1_a_soap - totl2_a_soap;
 	 	  $("input[name='rem2_a_soap']").val(rem2_a_soap.toFixed(2));
    }
    function rem2CoconutOil(){
    
		  var totl1_kho_oil = parseFloat($("input[name='totl1_kho_oil']").val());
		  var totl2_kho_oil = parseFloat($("input[name='totl2_kho_oil']").val());
		  var rem2_kho_oil = totl1_kho_oil - totl2_kho_oil;
 	 	  $("input[name='rem2_kho_oil']").val(rem2_kho_oil.toFixed(2));
    }
         function rem2Manjan(){
    
		  var totl1_majan = parseFloat($("input[name='totl1_majan']").val());
		  var totl2_majan = parseFloat($("input[name='totl2_majan']").val());
		  var rem2_majan = totl1_majan - totl2_majan;
 	 	  $("input[name='rem2_majan']").val(rem2_majan.toFixed(2));
    }
    function rem2Eggs(){
    
		  var totl1_eggs = parseFloat($("input[name='totl1_eggs']").val());
		  var totl2_eggs = parseFloat($("input[name='totl2_eggs']").val());
		  var rem2_eggs = totl1_eggs - totl2_eggs;
 	 	  $("input[name='rem2_eggs']").val(rem2_eggs.toFixed(2));
    }
      function rem2Fruits(){
    
		  var totl1_fruits = parseFloat($("input[name='totl1_fruits']").val());
		  var totl2_fruits = parseFloat($("input[name='totl2_fruits']").val());
		  var rem2_fruits = totl1_fruits - totl2_fruits;
 	 	  $("input[name='rem2_fruits']").val(rem2_fruits.toFixed(2));
    }
     function rem2Mutton(){
    
		  var totl1_mutton = parseFloat($("input[name='totl1_mutton']").val());
		  var totl2_mutton = parseFloat($("input[name='totl2_mutton']").val());
		  var rem2_mutton = totl1_mutton - totl2_mutton;
 	 	  $("input[name='rem2_mutton']").val(rem2_mutton.toFixed(2));
    }
    function rem2Fist(){
    
		  var totl1_fist = parseFloat($("input[name='totl1_fist']").val());
		  var totl2_fist = parseFloat($("input[name='totl2_fist']").val());
		  var rem2_fist = totl1_fist - totl2_fist;
 	 	  $("input[name='rem2_fist']").val(rem2_fist.toFixed(2));
    }
     function rem2Milk(){
    
		  var totl1_milk = parseFloat($("input[name='totl1_milk']").val());
		  var totl2_milk = parseFloat($("input[name='totl2_milk']").val());
		  var rem2_milk = totl1_milk - totl2_milk;
 	 	  $("input[name='rem2_milk']").val(rem2_milk.toFixed(2));
    }
        function rem2Vegetables1(){
    
		  var totl1_vegetables1 = parseFloat($("input[name='totl1_vegetables1']").val());
		  var totl2_vegetables1 = parseFloat($("input[name='totl2_vegetables1']").val());
		  var rem2_vegetables1 = totl1_vegetables1 - totl2_vegetables1;
 	 	  $("input[name='rem2_vegetables1']").val(rem2_vegetables1.toFixed(2));
    }
     function rem2Vegetables2(){
    
		  var totl1_vegetables2 = parseFloat($("input[name='totl1_vegetables2']").val());
		  var totl2_vegetables2 = parseFloat($("input[name='totl2_vegetables2']").val());
		  var rem2_vegetables2 = totl1_vegetables2 - totl2_vegetables2;
 	 	  $("input[name='rem2_vegetables2']").val(rem2_vegetables2.toFixed(2));
    }
       function rem2Garlic(){
    
		  var totl1_garlic = parseFloat($("input[name='totl1_garlic']").val());
		  var totl2_garlic = parseFloat($("input[name='totl2_garlic']").val());
		  var rem2_garlic = totl1_garlic - totl2_garlic;
 	 	  $("input[name='rem2_garlic']").val(rem2_garlic.toFixed(2));
    }
     function rem2Onion(){
    
		  var totl1_onion = parseFloat($("input[name='totl1_onion']").val());
		  var totl2_onion = parseFloat($("input[name='totl2_onion']").val());
		  var rem2_onion = totl1_onion - totl2_onion;
 	 	  $("input[name='rem2_onion']").val(rem2_onion.toFixed(2));
    }
    function rem2Pohe(){
    
		  var totl1_pohe = parseFloat($("input[name='totl1_pohe']").val());
		  var totl2_pohe = parseFloat($("input[name='totl2_pohe']").val());
		  var rem2_pohe = totl1_pohe - totl2_pohe;
 	 	  $("input[name='rem2_pohe']").val(rem2_pohe.toFixed(2));
 	 	

    }

    function goBack(){

        location.href = 'Dashboard';
    }
 function   totl1Wheat()
 {
  
	   rem2Wheat();
  
}
function  totl1Rice()
{
  
   rem2Rice();
  
}
function  totl1Mung()
{
    rem2Mung();
}
function  totl1Chnadaal()
{
  
rem2ChanDaal();
}
function totl1Turdal()
{
  rem2TurDaal();
  
}
function  totl1BtbatiDaal()
{
rem2BtbatiDaal();
}
function  totl1UdidDaal()
{
rem2UdidDaal();
}
function  totl1Sarpan()
{
    rem2Sarpan();
}
function  totl1Tikhat()
{
     rem2Tikhat();
}
function  totl1Hld()
{
  
rem2Hld();
  
}

function totl1Jira()
{
rem2Jira();
  
  
}
function  totl1Masala()
{
  rem2Masala();
  
  
}
function totl1Salt()
{
  
rem2Salt();
  
}
function  totl1Shendana()
{
rem2shengdana();
  
}
function  totl1Sugar()
{
  
rem2Sugar();
  
}
function totl1_fa_oil()
{
  
rem2FaOil();
  
}
function totl1Mataki()
{
  
rem2Matki();
  
  
}
function  totl1Barbiti()
{
  
rem2Barbiti();
  
}
function  totl1Chna()
{
rem2Chna();
}
function  totl1_ka_soap()
{
   rem2ClothSoap();  
}
function totl1_a_soap()
{
    rem2BeathSoap();  
}
function  totl1_kho_oil()
{
         rem2CoconutOil();

}
function  totl1_majan()
{
         rem2Manjan();

}
function totl1Eggs()
{
           rem2Eggs();
}
function  totl1Fruits()
{
           rem2Fruits();
}
function  totl1Mutton()
{
  
           rem2Mutton();

}
function  totl1Fist ()
{
         rem2Fist();

}
function  totl1Milk()
{
        rem2Milk();
      } 
function  totl1Veg1()
{
  
  rem2Vegetables1();
        
}
function  totl1Veg2()
{
  rem2Vegetables2();
        
}
function totl1Garlic()
{
  rem2Garlic();

      
}
function totl1Onion()
{
      rem2Onion();
}
function totlPohe()
{
  rem2Pohe();
}
