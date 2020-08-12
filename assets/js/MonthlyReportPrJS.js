var days;
var mrngTotalGrain = new Array();

function showData() {
  var formdata = $('#monthlyReport_form').serialize();
    $.ajax({
        url: baseUrl + "showDataController/showData",
        type: "POST",
        data : formdata,
        dataType: 'json',
        success: function (data) {      
            $.each(data.attendance, function (index, value) {
           
              var OneToFivePresent,sixToSevenPresent;
                  OneToFivePresent = value.classOneToFivePresent;
                  sixToSevenPresent = value.classSixToSevenPresent;
                  if(OneToFivePresent == null){
                   OneToFivePresent  = 0; 
                      $('#oneToFive').html(OneToFivePresent);
                  }else{
                      $('#oneToFive').html(OneToFivePresent);
                  }

                  if(sixToSevenPresent == null){
                     $('#sixToSeven').html(OneToFivePresent);
                   sixToSevenPresent  = 0; 
                  }else{
                      $('#sixToSeven').html(sixToSevenPresent);
                  }
                  var oneToSeven = parseFloat(OneToFivePresent) + parseFloat(sixToSevenPresent);
                  

                    $('#totalAttendence').html(oneToSeven);

                  var optionText = $("#months option:selected").text();
                  if(optionText == 'January')
                  {
                    days = 31;
                  }else if(optionText == 'February'){
                    days = 29;
                  }else if(optionText == 'March'){
                    days = 31;
                  }else if(optionText == 'April'){
                    days = 30;
                  }else if(optionText == 'May'){
                    days = 31;
                  }else if(optionText == 'June'){
                    days = 30;
                  }else if(optionText == 'July'){
                    days = 31;
                  }else if(optionText == 'August'){
                    days = 31;
                  }else if(optionText == 'September'){
                    days = 30;
                  }else if(optionText == 'October'){
                    days = 31;
                  }else if(optionText == 'November'){
                    days = 30;
                  }else if(optionText == 'December'){
                    days = 31;
                  }
                  // $("#oneToFiveAvg").html( (OneToFivePresent/days).toFixed(2));
                  // $("#sixToSevenAvg").html((sixToSevenPresent/days).toFixed(2));
                  // $("#oneToSevenAvg").html((oneToSeven/days).toFixed(2));
                  // $("#grinding_spend").html(oneToSeven*3); 
                   
                   $('#oneToFiveAvg').html((OneToFivePresent/days).toFixed(2));
                   $('#sixToSevenAvg').html((sixToSevenPresent/days).toFixed(2));
                   $('#oneToSevenAvg').html((oneToSeven/days).toFixed(2));



               });
        }
    });
    showGrainData();
}
function showGrainData(){
    var formdata = $('#monthlyReport_form').serialize();
    $.ajax({
        url: baseUrl + "showDataController/showGrainData",
        type: "POST",
        data : formdata,
        dataType: 'json',
        success: function (data) {      
              var oneToFive = data.oneToFive[0];
              var sixToSeven = data.sixToSeven[0];
              var oneToFiveWheat = oneToFive['wheat'];            
              var sixToSevenWheat = sixToSeven['wheat'];
            
               if(oneToFiveWheat == null){
                    oneToFiveWheat = 0;
               }
                if(sixToSevenWheat == null){
                    sixToSevenWheat = 0;
               }
                    var oneToSevenWheat = parseFloat(oneToFiveWheat) + parseFloat(sixToSevenWheat);  
                  $("#grinding_spend").html(parseFloat(oneToSevenWheat*3).toFixed(2));

                   $('#Wheat1').html(parseFloat(oneToFiveWheat).toFixed(2));
                   $('#Wheat2').html(parseFloat(sixToSevenWheat).toFixed(2));
                   $('#Wheat3').html(parseFloat(oneToSevenWheat).toFixed(2));




                var oneToFiverice = oneToFive['rice'];            
                var sixToSixrice = sixToSeven['rice'];
                 if(oneToFiverice == null){
                    oneToFiverice = 0;
                 }
                  if(sixToSixrice == null){
                      sixToSixrice = 0;
                 }
                  // $("#Rice1").html(oneToFiverice);
                  // $("#Rice2").html(sixToSixrice);
                   var oneToSevenrice = parseFloat(oneToFiverice) + parseFloat(sixToSixrice);  
                  // $("#Rice3").html(oneToSevenrice);

                   $('#Rice1').html(parseFloat(oneToFiverice).toFixed(2));
                   $('#Rice2').html(parseFloat(sixToSixrice).toFixed(2));
                   $('#Rice3').html(parseFloat(oneToSevenrice).toFixed(2));




                   var oneToFivemugDaal = oneToFive['mugDaal'];            
                  var sixToSixmugDaal = sixToSeven['mugDaal'];
                  if(oneToFivemugDaal == null){
                    oneToFivemugDaal = 0;
                   }
                    if(sixToSixmugDaal == null){
                        sixToSixmugDaal = 0;
                   }
                  // $("#MungDaal1").html(oneToFivemugDaal);
                  // $("#MungDaal2").html(sixToSixmugDaal);
                   var oneToSevenmugDaal = parseFloat(oneToFivemugDaal) + parseFloat(sixToSixmugDaal);  
                  // $("#MungDaal3").html(oneToSevenmugDaal);

                   $('#MungDaal1').html(parseFloat(oneToFivemugDaal).toFixed(2));
                   $('#MungDaal2').html(parseFloat(sixToSixmugDaal).toFixed(2));
                   $('#MungDaal3').html(parseFloat(oneToSevenmugDaal).toFixed(2));



                  var oneToFivechnaDaal = oneToFive['chnaDaal'];            
                  var sixToSixchnaDaal = sixToSeven['chnaDaal'];
                  if(oneToFivechnaDaal == null){
                    oneToFivechnaDaal = 0;
                   }
                    if(sixToSixchnaDaal == null){
                        sixToSixchnaDaal = 0;
                   }
                  // $("#chnaDaal1").html(oneToFivechnaDaal);
                  // $("#chnaDaal2").html(sixToSixchnaDaal);
                   var oneToSevenchnaDaal = parseFloat(oneToFivechnaDaal) + parseFloat(sixToSixchnaDaal);  
                  // $("#chnaDaal3").html(oneToSevenchnaDaal);

                   $('#chnaDaal1').html(parseFloat(oneToFivechnaDaal).toFixed(2));
                   $('#chnaDaal2').html(parseFloat(sixToSixchnaDaal).toFixed(2));
                   $('#chnaDaal3').html(parseFloat(oneToSevenchnaDaal).toFixed(2));



                   var oneToFiveturDaal = oneToFive['turDaal'];            
                  var sixToSixturDaal = sixToSeven['turDaal'];
                   if(oneToFiveturDaal == null){
                    oneToFiveturDaal = 0;
                   }
                    if(sixToSixturDaal == null){
                        sixToSixturDaal = 0;
                   }
                  // $("#turDaal1").html(oneToFiveturDaal);
                  // $("#turDaal2").html(sixToSixturDaal);
                   var oneToSeventurDaal = parseFloat(oneToFiveturDaal) + parseFloat(sixToSixturDaal);  
                  // $("#turDaal3").html(oneToSeventurDaal);
                  
                   $('#turDaal1').html(parseFloat(oneToFiveturDaal).toFixed(2));
                   $('#turDaal2').html(parseFloat(sixToSixturDaal).toFixed(2));
                   $('#turDaal3').html(parseFloat(oneToSeventurDaal).toFixed(2));



                  var oneToFivebtbatiDaal = oneToFive['btbatiDaal'];            
                  var sixToSixbtbatiDaal = sixToSeven['btbatiDaal'];
                  if(oneToFivebtbatiDaal == null){
                    oneToFivebtbatiDaal = 0;
                   }
                    if(sixToSixbtbatiDaal == null){
                        sixToSixbtbatiDaal = 0;
                   }
                  // $("#batbatiDaal1").html(oneToFivebtbatiDaal);
                  // $("#batbatiDaal2").html(sixToSixbtbatiDaal);
                  var oneToSevenbtbatiDaal = parseFloat(oneToFivebtbatiDaal) + parseFloat(sixToSixbtbatiDaal);  
                  // $("#batbatiDaal3").html(oneToSevenbtbatiDaal);

                   $('#batbatiDaal1').html(parseFloat(oneToFivebtbatiDaal).toFixed(2));
                   $('#batbatiDaal2').html(parseFloat(sixToSixbtbatiDaal).toFixed(2));
                   $('#batbatiDaal3').html(parseFloat(oneToSevenbtbatiDaal).toFixed(2));




                  var oneToFiveududDaall = oneToFive['ududDaal'];            
                  var sixToSixududDaal = sixToSeven['ududDaal'];
                  if(oneToFiveududDaall == null){
                    oneToFiveududDaall = 0;
                   }
                    if(sixToSixududDaal == null){
                        sixToSixududDaal = 0;
                   }
                  // $("#udidDaal1").html(oneToFiveududDaall);
                  // $("#udidDaal2").html(sixToSixududDaal);
                   var oneToSevenududDaal = parseFloat(oneToFiveududDaall) + parseFloat(sixToSixududDaal);  
                  // $("#udidDaal3").html(oneToSevenududDaal);

                   $('#udidDaal1').html(parseFloat(oneToFiveududDaall).toFixed(2));
                   $('#udidDaal2').html(parseFloat(sixToSixududDaal).toFixed(2));
                   $('#udidDaal3').html(parseFloat(oneToSevenududDaal).toFixed(2));

                var totalDall = oneToSevenmugDaal + oneToSevenchnaDaal +  oneToSeventurDaal + oneToSevenbtbatiDaal + oneToSevenududDaal;

                    $("#totalDaal").html(parseFloat(totalDall).toFixed(2));
                   

                    var oneToFivesarpan = oneToFive['sarpan'];            
                  var sixToSixsarpan = sixToSeven['sarpan'];

                  if(oneToFivesarpan == null){
                    oneToFivesarpan = 0;
                   }
                    if(sixToSixsarpan == null){
                        sixToSixsarpan = 0;
                   }
                  // $("#sarpan1").html(oneToFivesarpan);
                  // $("#sarpan2").html(sixToSixsarpan);
                   var oneToSevensarpan = parseFloat(oneToFivesarpan) + parseFloat(sixToSixsarpan);  
                  // $("#sarpan3").html(oneToSevensarpan);

                   $('#sarpan1').html(parseFloat(oneToFivesarpan).toFixed(2));
                   $('#sarpan2').html(parseFloat(sixToSixsarpan).toFixed(2));
                   $('#sarpan3').html(parseFloat(oneToSevensarpan).toFixed(2)); 



                   var oneToFivechiiliPowder = oneToFive['chiiliPowder'];            
                  var sixToSixchiiliPowder = sixToSeven['chiiliPowder'];
                  if(oneToFivechiiliPowder == null){
                    oneToFivechiiliPowder = 0;
                   }
                    if(sixToSixchiiliPowder == null){
                        sixToSixchiiliPowder = 0;
                   }
                  // $("#tikhat1").html(oneToFivechiiliPowder);
                  // $("#tikhat2").html(sixToSixchiiliPowder);
                   var oneToSevenchiiliPowder = parseFloat(oneToFivechiiliPowder) + parseFloat(sixToSixchiiliPowder);  
                  // $("#tikhat3").html(oneToSevenchiiliPowder);

                   $('#tikhat1').html(parseFloat(oneToFivechiiliPowder).toFixed(2));
                   $('#tikhat2').html(parseFloat(sixToSixchiiliPowder).toFixed(2));
                   $('#tikhat3').html(parseFloat(oneToSevenchiiliPowder).toFixed(2));



                  var oneToFiveturmeric = oneToFive['turmeric'];            
                  var sixToSeventurmeric = sixToSeven['turmeric'];
                  if(oneToFiveturmeric == null){
                    oneToFiveturmeric = 0;
                   }
                    if(sixToSeventurmeric == null){
                        sixToSeventurmeric = 0;
                   }
                  // $("#hld1").html(oneToFiveturmeric);
                  // $("#hld2").html(sixToSeventurmeric);
                  var oneToSeventurmeric = parseFloat(oneToFiveturmeric) + parseFloat(sixToSeventurmeric);  
                  // $("#hld3").html(oneToSeventurmeric);

                   $('#hld1').html(parseFloat(oneToFiveturmeric).toFixed(2));
                   $('#hld2').html(parseFloat(sixToSeventurmeric).toFixed(2));
                   $('#hld3').html(parseFloat(oneToSeventurmeric).toFixed(2));



                   var oneToFivecumin = oneToFive['cumin'];            
                  var sixToSevencumin = sixToSeven['cumin'];

                  if(oneToFivecumin == null){
                    oneToFivecumin = 0;
                   }
                    if(sixToSevencumin == null){
                        sixToSevencumin = 0;
                   }
                  // $("#jira1").html(oneToFivecumin);
                  // $("#jira2").html(sixToSevencumin);
                  var oneToSevencumin = parseFloat(oneToFivecumin) + parseFloat(sixToSevencumin);  
                  // $("#jira3").html(oneToSevencumin);

                   $('#jira1').html(parseFloat(oneToFivecumin).toFixed(2));
                   $('#jira2').html(parseFloat(sixToSevencumin).toFixed(2));
                   $('#jira3').html(parseFloat(oneToSevencumin).toFixed(2));



                   var oneToFivespice = oneToFive['spice'];            
                  var sixToSevenspice = sixToSeven['spice'];
                   
                    if(oneToFivespice == null){
                    oneToFivespice = 0;
                   }
                    if(sixToSevenspice == null){
                        sixToSevenspice = 0;
                   }

                  $("#masala1").html(parseFloat(oneToFivespice).toFixed(2));
                  $("#masala2").html(parseFloat(sixToSevenspice).toFixed(2));
                  var oneToSevenspice = parseFloat(oneToFivespice) + parseFloat(sixToSevenspice);  
                  $("#masala3").html(parseFloat(oneToSevenspice).toFixed(2));

 var totalMasala = oneToSevenchiiliPowder + oneToSeventurmeric + oneToSevencumin + oneToSevenspice;
                    $("#totalSpice").html(parseFloat(totalMasala).toFixed(2));

                  var oneToFivesalt = oneToFive['salt'];            
                  var sixToSevensalt = sixToSeven['salt'];

                    if(oneToFivesalt == null){
                    oneToFivesalt = 0;
                   }
                    if(sixToSevensalt == null){
                        sixToSevensalt = 0;
                   }


                  $("#salt1").html(parseFloat(oneToFivesalt).toFixed(2));
                  $("#salt2").html(parseFloat(sixToSevensalt).toFixed(2));
                  var oneToSevensalt = parseFloat(oneToFivesalt) + parseFloat(sixToSevensalt);  
                  $("#salt3").html(parseFloat(oneToSevensalt).toFixed(2));

                  var oneToFivepinut = oneToFive['pinut'];            
                  var sixToSevenpinut = sixToSeven['pinut'];

                    if(oneToFivepinut == null){
                    oneToFivepinut = 0;
                   }
                    if(sixToSevenpinut == null){
                        sixToSevenpinut = 0;
                   }

                  $("#shengdana1").html(parseFloat(oneToFivepinut).toFixed(2));
                  $("#shengdana2").html(parseFloat(sixToSevenpinut).toFixed(2));
                  var oneToSevenpinut = parseFloat(oneToFivepinut) + parseFloat(sixToSevenpinut);  
                  $("#shengdana3").html(parseFloat(oneToSevenpinut).toFixed(2));

                   var oneToFivesugar = oneToFive['sugar'];            
                  var sixToSevensugar = sixToSeven['sugar'];
                  if(oneToFivesugar == null){
                    oneToFivesugar = 0;
                   }
                    if(sixToSevensugar == null){
                        sixToSevensugar = 0;
                   }

                  $("#sugar1").html(parseFloat(oneToFivesugar).toFixed(2));
                  $("#sugar2").html(parseFloat(sixToSevensugar).toFixed(2));
                  var oneToSevensugar = parseFloat(oneToFivesugar) + parseFloat(sixToSevensugar);  
                  $("#sugar3").html(parseFloat(oneToSevensugar).toFixed(2));

                   var oneToFivefa_oil = oneToFive['fa_oil'];            
                  var sixToSevenfa_oil = sixToSeven['fa_oil'];
                   if(oneToFivefa_oil == null){
                    oneToFivefa_oil = 0;
                   }
                    if(sixToSevenfa_oil == null){
                        sixToSevenfa_oil = 0;
                   }

                  $("#fa_tel1").html(parseFloat(oneToFivefa_oil).toFixed(2));
                  $("#fa_tel2").html(parseFloat(sixToSevenfa_oil).toFixed(2));
                  var oneToSevenfa_oil = parseFloat(oneToFivefa_oil) + parseFloat(sixToSevenfa_oil);  
                  $("#fa_tel3").html(parseFloat(oneToSevenfa_oil).toFixed(2));
                 
                   var oneToFivematki = oneToFive['matki'];            
                  var sixToSevenmatki = sixToSeven['matki'];
                    if(oneToFivematki == null){
                    oneToFivematki = 0;
                   }
                    if(sixToSevenmatki == null){
                        sixToSevenmatki = 0;
                   }
                  

                  $("#mataki1").html(parseFloat(oneToFivematki).toFixed(2));
                  $("#mataki2").html(parseFloat(sixToSevenmatki).toFixed(2));
                  var oneToSevenmatki = parseFloat(oneToFivematki) + parseFloat(sixToSevenmatki);  
                  $("#mataki3").html(parseFloat(oneToSevenmatki).toFixed(2));

                    var oneToFivebarbiti = oneToFive['barbiti'];            
                  var sixToSevenbarbiti = sixToSeven['barbiti'];

                    if(oneToFivebarbiti == null){
                    oneToFivebarbiti = 0;
                   }
                    if(sixToSevenbarbiti == null){
                        sixToSevenbarbiti = 0;
                   }
                  

                  $("#barbiti1").html(parseFloat(oneToFivebarbiti).toFixed(2));
                  $("#barbiti2").html(parseFloat(sixToSevenbarbiti).toFixed(2));
                  var oneToSevenbarbiti= parseFloat(oneToFivebarbiti) + parseFloat(sixToSevenbarbiti);  
                  $("#barbiti3").html(parseFloat(oneToSevenbarbiti).toFixed(2));
                 
                 
                   var oneToFivechna = oneToFive['chna'];            
                  var sixToSevenchna = sixToSeven['chna'];

                    if(oneToFivechna == null){
                    oneToFivechna = 0;
                   }
                    if(sixToSevenchna == null){
                        sixToSevenchna = 0;
                   }


                  $("#chna1").html(parseFloat(oneToFivechna).toFixed(2));
                  $("#chna2").html(parseFloat(sixToSevenchna).toFixed(2));
                  var oneToSevenchna = parseFloat(oneToFivechna) + parseFloat(sixToSevenchna);  
                  $("#chna3").html(parseFloat(oneToSevenchna).toFixed(2));


                  var totalCondiment = oneToSevenmatki + oneToSevenbarbiti + oneToSevenchna;
                  $("#totalCondiment").html(parseFloat(totalCondiment).toFixed(2));

                    var oneToFiveclothSoap = oneToFive['clothSoap'];            
                  var sixToSevenclothSoap = sixToSeven['clothSoap'];
                  if(oneToFiveclothSoap == null){
                    oneToFiveclothSoap = 0;
                   }
                    if(sixToSevenclothSoap == null){
                        sixToSevenclothSoap = 0;
                   }

                  $("#ka_saban1").html(parseFloat(oneToFiveclothSoap).toFixed(2));
                  $("#ka_saban2").html(parseFloat(sixToSevenchna).toFixed(2));
                  var oneToSevenclothSoap = parseFloat(oneToFiveclothSoap) + parseFloat(sixToSevenclothSoap);  
                  $("#ka_saban3").html(parseFloat(oneToSevenclothSoap).toFixed(2));


                     var oneToFiveBeathSoap = oneToFive['BeathSoap'];            
                  var sixToSevenBeathSoap = sixToSeven['BeathSoap'];

                     if(oneToFiveBeathSoap == null){
                    oneToFiveBeathSoap = 0;
                   }
                    if(sixToSevenBeathSoap == null){
                        sixToSevenBeathSoap = 0;
                   }

                  $("#aa_saban1").html(parseFloat(oneToFiveBeathSoap).toFixed(2));
                  $("#aa_saban2").html(parseFloat(sixToSevenBeathSoap).toFixed(2));
                  var oneToSevenBeathSoap = parseFloat(oneToFiveBeathSoap) + parseFloat(sixToSevenBeathSoap);  
                  $("#aa_saban3").html(parseFloat(oneToSevenBeathSoap).toFixed(2));

                  var oneToFivecoconutOil = oneToFive['coconutOil'];            
                  var sixToSevencoconutOil = sixToSeven['coconutOil'];

                     if(oneToFivecoconutOil == null){
                    oneToFivecoconutOil = 0;
                   }
                    if(sixToSevencoconutOil == null){
                        sixToSevencoconutOil = 0;
                   }

                  $("#kho_tel1").html(parseFloat(oneToFivecoconutOil).toFixed(2));
                  $("#kho_tel2").html(parseFloat(sixToSevencoconutOil).toFixed(2));
                  var oneToSevencoconutOil = parseFloat(oneToFivecoconutOil) + parseFloat(sixToSevencoconutOil);  
                  $("#kho_tel3").html(parseFloat(oneToSevencoconutOil).toFixed(2));


                   var oneToFivemajan = oneToFive['majan'];            
                  var sixToSevenmajan = sixToSeven['majan'];

                    if(oneToFivemajan == null){
                    oneToFivemajan = 0;
                   }
                    if(sixToSevenmajan == null){
                        sixToSevenmajan = 0;
                   }

                  $("#manjan1").html(parseFloat(oneToFivemajan).toFixed(2));
                  $("#manjan2").html(parseFloat(sixToSevenmajan).toFixed(2));
                  var oneToSevenmajan = parseFloat(oneToFivemajan) + parseFloat(sixToSevenmajan);  
                  $("#manjan3").html(parseFloat(oneToSevenmajan).toFixed(2));

 var totalHyginDAta = oneToSevenclothSoap + oneToSevenBeathSoap + oneToSevencoconutOil + oneToSevenmajan;
                  $("#TotalhygieneMaterials").html(parseFloat(totalHyginDAta).toFixed(2));
                   
                   var oneToFiveggs = oneToFive['eggs'];            
                  var sixToSeveneggs = sixToSeven['eggs'];

                  if(oneToFiveggs == null){
                    oneToFiveggs = 0;
                   }
                    if(sixToSeveneggs == null){
                        sixToSeveneggs = 0;
                   }

                  $("#eggs1").html(parseFloat(oneToFiveggs).toFixed(2));
                  $("#eggs2").html(parseFloat(sixToSeveneggs).toFixed(2));
                  var oneToSeveneggs = parseFloat(oneToFiveggs) + parseFloat(sixToSeveneggs);  
                  $("#eggs3").html(parseFloat(oneToSeveneggs).toFixed(2));

                  var oneToFivefruits = oneToFive['fruits'];            
                  var sixToSevenfruits = sixToSeven['fruits'];

                     if(oneToFivefruits == null){
                    oneToFivefruits = 0;
                   }
                    if(sixToSevenfruits == null){
                        sixToSevenfruits = 0;
                   }

                  $("#fruits1").html(parseFloat(oneToFivefruits).toFixed(2));
                  $("#fruits2").html(parseFloat(sixToSevenfruits).toFixed(2));
                  var oneToSevenfruits = parseFloat(oneToFivefruits) + parseFloat(sixToSevenfruits);  
                  $("#fruits3").html(parseFloat(oneToSevenfruits).toFixed(2));

               

                  var oneToFivemutton = oneToFive['mutton'];            
                  var sixToSevenmutton = sixToSeven['mutton'];
                   if(oneToFivemutton == null){
                    oneToFivemutton = 0;
                   }
                    if(sixToSevenmutton == null){
                        sixToSevenmutton = 0;
                   }

                  $("#mutton1").html(parseFloat(oneToFivemutton).toFixed(2));
                  $("#mutton2").html(parseFloat(sixToSevenmutton).toFixed(2));
                  var oneToSevenmutton = parseFloat(oneToFivemutton) + parseFloat(sixToSevenmutton);  
                  $("#mutton3").html(parseFloat(oneToSevenmutton).toFixed(2));

                   var oneToFivefist = oneToFive['fist'];            
                  var sixToSevenfist = sixToSeven['fist'];
                   if(oneToFivefist == null){
                    oneToFivefist = 0;
                   }
                    if(sixToSevenfist == null){
                        sixToSevenfist = 0;
                   }

                  $("#fist1").html(parseFloat(oneToFivefist).toFixed(2));
                  $("#fist2").html(parseFloat(sixToSevenfist).toFixed(2));
                  var oneToSevenfist = parseFloat(oneToFivefist) + parseFloat(sixToSevenfist);  
                  $("#fist3").html(parseFloat(oneToSevenfist).toFixed(2));

                    var oneToFivemilk = oneToFive['milk'];            
                  var sixToSevenmilk = sixToSeven['milk'];
                    if(oneToFivemilk == null){
                    oneToFivemilk = 0;
                   }
                    if(sixToSevenmilk == null){
                        sixToSevenmilk = 0;
                   }

                  $("#milk1").html(parseFloat(oneToFivemilk).toFixed(2));
                  $("#milk2").html(parseFloat(sixToSevenmilk).toFixed(2));
                  var oneToSevenmilk = parseFloat(oneToFivemilk) + parseFloat(sixToSevenmilk);  
                  $("#milk3").html(parseFloat(oneToSevenmilk).toFixed(2));

                  var oneToFivevegitables1= oneToFive['vegitables1'];            
                  var sixToSevenvegitables1 = sixToSeven['vegitables1'];

                   if(oneToFivevegitables1 == null){
                    oneToFivevegitables1 = 0;
                   }
                    if(sixToSevenvegitables1 == null){
                        sixToSevenvegitables1 = 0;
                   }

                  $("#vegetables1").html(parseFloat(oneToFivevegitables1).toFixed(2));
                  $("#vegetables2").html(parseFloat(sixToSevenvegitables1).toFixed(2));
                  var oneToSevenvegitables1 = parseFloat(oneToFivevegitables1) + parseFloat(sixToSevenvegitables1);  
                  $("#vegetables3").html(parseFloat(oneToSevenvegitables1).toFixed(2));

                   var oneToFivevegitables11= oneToFive['vegitables2'];            
                  var sixToSevenvegitables12 = sixToSeven['vegitables2'];
                
                   if(oneToFivevegitables11 == null){
                    oneToFivevegitables11 = 0;
                   }
                    if(sixToSevenvegitables12 == null){
                        sixToSevenvegitables12 = 0;
                   }


                  $("#vegetables11").html(parseFloat(oneToFivevegitables11).toFixed(2));
                  $("#vegetables12").html(parseFloat(sixToSevenvegitables12).toFixed(2));
                  var oneToSevenvegitables13 = parseFloat(oneToFivevegitables11) + parseFloat(sixToSevenvegitables12);  
                  $("#vegetables13").html(parseFloat(oneToSevenvegitables13).toFixed(2));


                    var oneToFivegarlic = oneToFive['garlic'];            
                  var sixToSevengarlic = sixToSeven['garlic'];
                    if(oneToFivegarlic == null){
                    oneToFivegarlic = 0;
                   }
                    if(sixToSevengarlic == null){
                        sixToSevengarlic = 0;
                   }

                  $("#garlic1").html(parseFloat(oneToFivegarlic).toFixed(2));
                  $("#garlic2").html(parseFloat(sixToSevengarlic).toFixed(2));
                  var oneToSevengarlic = parseFloat(oneToFivegarlic) + parseFloat(sixToSevengarlic);  
                  $("#garlic3").html(parseFloat(oneToSevengarlic).toFixed(2));

                   var oneToFiveonion = oneToFive['onion'];            
                  var sixToSevenonion = sixToSeven['onion'];

                  if(oneToFiveonion == null){
                    oneToFiveonion = 0;
                   }
                    if(sixToSevenonion == null){
                        sixToSevenonion = 0;
                   }

                  $("#onion1").html(parseFloat(oneToFiveonion).toFixed(2));
                  $("#onion2").html(parseFloat(oneToFiveonion).toFixed(2));
                  var oneToSevenonion = parseFloat(oneToFiveonion) + parseFloat(sixToSevenonion);  
                  $("#onion3").html(parseFloat(oneToSevenonion).toFixed(2));

var totalVegetables = oneToSevenvegitables1 + oneToSevenvegitables13 + oneToSevengarlic + oneToSevenonion;
                  $("#totalVegetables").html(parseFloat(totalVegetables).toFixed(2));
                   
             
                   var oneToFivepohe = oneToFive['pohe'];            
                  var sixToSevenpohe = sixToSeven['pohe'];
                   if(oneToFivepohe == null){
                    oneToFivepohe = 0;
                   }
                    if(sixToSevenpohe == null){
                        sixToSevenpohe = 0;
                   }

                  $("#pohe1").html(parseFloat(oneToFivepohe).toFixed(2));
                  $("#pohe2").html(parseFloat(sixToSevenpohe).toFixed(2));
                  var oneToSevenpohe = parseFloat(oneToFivepohe) + parseFloat(sixToSevenpohe);  
                  $("#pohe3").html(parseFloat(oneToSevenpohe).toFixed(2));
                  
                  
               

        }
    });
}

function goBack(){

        location.href = 'Dashboard';
    }
