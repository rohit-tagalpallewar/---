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
                  
                  var oneToSeven = parseInt(value.classOneToFivePresent) + parseInt(value.classSixToSevenPresent);
                 // $("#totalAttendence").html(oneToSeven);
                  

                   $('#oneToFive').html(OneToFivePresent);
                    $('#sixToSeven').html(sixToSevenPresent);
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
                  // $("#oneToFiveAvg").html((OneToFivePresent/days).toFixed(2));
                  // $("#sixToSevenAvg").html((sixToSevenPresent/days).toFixed(2));
                  // $("#oneToSevenAvg").html((oneToSeven/days).toFixed(2));
                  // $("#grinding_spend").html(oneToSeven*3); 
                   
                   $('#grinding_spend').html(oneToSeven*3);
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
                  // $("#Wheat1").html(oneToFiveWheat);
                  // $("#Wheat2").html(sixToSevenWheat);
                    var oneToSevenWheat = parseInt(oneToFiveWheat) + parseInt(sixToSevenWheat);  
                  // $("#Wheat3").html(oneToSevenWheat);

                   $('#Wheat1').html(oneToFiveWheat);
                   $('#Wheat2').html(sixToSevenWheat);
                   $('#Wheat3').html(oneToSevenWheat);




                var oneToFiverice = oneToFive['rice'];            
                var sixToSixrice = sixToSeven['rice'];
                  // $("#Rice1").html(oneToFiverice);
                  // $("#Rice2").html(sixToSixrice);
                   var oneToSevenrice = parseInt(oneToFiverice) + parseInt(sixToSixrice);  
                  // $("#Rice3").html(oneToSevenrice);

                   $('#Rice1').html(oneToFiverice);
                   $('#Rice2').html(sixToSixrice);
                   $('#Rice3').html(oneToSevenrice);




                   var oneToFivemugDaal = oneToFive['mugDaal'];            
                  var sixToSixmugDaal = sixToSeven['mugDaal'];
                  // $("#MungDaal1").html(oneToFivemugDaal);
                  // $("#MungDaal2").html(sixToSixmugDaal);
                   var oneToSevenmugDaal = parseInt(oneToFivemugDaal) + parseInt(sixToSixmugDaal);  
                  // $("#MungDaal3").html(oneToSevenmugDaal);

                   $('#MungDaal1').html(oneToFivemugDaal);
                   $('#MungDaal2').html(sixToSixmugDaal);
                   $('#MungDaal3').html(oneToSevenmugDaal);



                  var oneToFivechnaDaal = oneToFive['chnaDaal'];            
                  var sixToSixchnaDaal = sixToSeven['chnaDaal'];
                  // $("#chnaDaal1").html(oneToFivechnaDaal);
                  // $("#chnaDaal2").html(sixToSixchnaDaal);
                   var oneToSevenchnaDaal = parseInt(oneToFivechnaDaal) + parseInt(sixToSixchnaDaal);  
                  // $("#chnaDaal3").html(oneToSevenchnaDaal);

                   $('#chnaDaal1').html(oneToFivechnaDaal);
                   $('#chnaDaal2').html(sixToSixchnaDaal);
                   $('#chnaDaal3').html(oneToSevenchnaDaal);



                   var oneToFiveturDaal = oneToFive['turDaal'];            
                  var sixToSixturDaal = sixToSeven['turDaal'];
                  // $("#turDaal1").html(oneToFiveturDaal);
                  // $("#turDaal2").html(sixToSixturDaal);
                   var oneToSeventurDaal = parseInt(oneToFiveturDaal) + parseInt(sixToSixturDaal);  
                  // $("#turDaal3").html(oneToSeventurDaal);
                  
                   $('#turDaal1').html(oneToFiveturDaal);
                   $('#turDaal2').html(sixToSixturDaal);
                   $('#turDaal3').html(oneToSeventurDaal);



                  var oneToFivebtbatiDaal = oneToFive['btbatiDaal'];            
                  var sixToSixbtbatiDaal = sixToSeven['btbatiDaal'];
                  // $("#batbatiDaal1").html(oneToFivebtbatiDaal);
                  // $("#batbatiDaal2").html(sixToSixbtbatiDaal);
                  var oneToSevenbtbatiDaal = parseInt(oneToFivebtbatiDaal) + parseInt(sixToSixbtbatiDaal);  
                  // $("#batbatiDaal3").html(oneToSevenbtbatiDaal);

                   $('#batbatiDaal1').html(oneToFivebtbatiDaal);
                   $('#batbatiDaal2').html(sixToSixbtbatiDaal);
                   $('#batbatiDaal3').html(oneToSevenbtbatiDaal);




                  var oneToFiveududDaall = oneToFive['ududDaal'];            
                  var sixToSixududDaal = sixToSeven['ududDaal'];
                  // $("#udidDaal1").html(oneToFiveududDaall);
                  // $("#udidDaal2").html(sixToSixududDaal);
                   var oneToSevenududDaal = parseInt(oneToFiveududDaall) + parseInt(sixToSixududDaal);  
                  // $("#udidDaal3").html(oneToSevenududDaal);

                   $('#udidDaal1').html(oneToFiveududDaall);
                   $('#udidDaal2').html(sixToSixududDaal);
                   $('#udidDaal3').html(oneToSevenududDaal);



                    var oneToFivesarpan = oneToFive['sarpan'];            
                  var sixToSixsarpan = sixToSeven['sarpan'];
                  // $("#sarpan1").html(oneToFivesarpan);
                  // $("#sarpan2").html(sixToSixsarpan);
                   var oneToSevensarpan = parseInt(oneToFivesarpan) + parseInt(sixToSixsarpan);  
                  // $("#sarpan3").html(oneToSevensarpan);

                   $('#sarpan1').html(oneToFivesarpan);
                   $('#sarpan2').html(sixToSixsarpan);
                   $('#sarpan3').html(oneToSevensarpan);



                   var oneToFivechiiliPowder = oneToFive['chiiliPowder'];            
                  var sixToSixchiiliPowder = sixToSeven['chiiliPowder'];
                  // $("#tikhat1").html(oneToFivechiiliPowder);
                  // $("#tikhat2").html(sixToSixchiiliPowder);
                   var oneToSevenchiiliPowder = parseInt(oneToFivechiiliPowder) + parseInt(sixToSixchiiliPowder);  
                  // $("#tikhat3").html(oneToSevenchiiliPowder);

                   $('#tikhat1').html(oneToFivechiiliPowder);
                   $('#tikhat2').html(sixToSixchiiliPowder);
                   $('#tikhat3').html(oneToSevenchiiliPowder);



                  var oneToFiveturmeric = oneToFive['turmeric'];            
                  var sixToSeventurmeric = sixToSeven['turmeric'];
                  // $("#hld1").html(oneToFiveturmeric);
                  // $("#hld2").html(sixToSeventurmeric);
                  var oneToSeventurmeric = parseInt(oneToFiveturmeric) + parseInt(sixToSeventurmeric);  
                  // $("#hld3").html(oneToSeventurmeric);

                   $('#hld1').html(oneToFiveturmeric);
                   $('#hld2').html(sixToSeventurmeric);
                   $('#hld3').html(oneToSeventurmeric);



                   var oneToFivecumin = oneToFive['cumin'];            
                  var sixToSevencumin = sixToSeven['cumin'];
                  // $("#jira1").html(oneToFivecumin);
                  // $("#jira2").html(sixToSevencumin);
                  var oneToSevencumin = parseInt(oneToFivecumin) + parseInt(sixToSevencumin);  
                  // $("#jira3").html(oneToSevencumin);

                   $('#jira1').html(oneToFivecumin);
                   $('#jira2').html(sixToSevencumin);
                   $('#jira3').html(oneToSevencumin);



                   var oneToFivespice = oneToFive['spice'];            
                  var sixToSevenspice = sixToSeven['spice'];
                  $("#masala1").html(oneToFivespice);
                  $("#masala2").html(sixToSevenspice);
                  var oneToSevenspice = parseInt(oneToFivespice) + parseInt(sixToSevenspice);  
                  $("#masala3").html(oneToSevenspice);

                  var oneToFivesalt = oneToFive['salt'];            
                  var sixToSevensalt = sixToSeven['salt'];
                  $("#salt1").html(oneToFivesalt);
                  $("#salt2").html(sixToSevensalt);
                  var oneToSevensalt = parseInt(oneToFivesalt) + parseInt(sixToSevensalt);  
                  $("#salt3").html(oneToSevensalt);

                  var oneToFivepinut = oneToFive['pinut'];            
                  var sixToSevenpinut = sixToSeven['pinut'];
                  $("#shengdana1").html(oneToFivepinut);
                  $("#shengdana2").html(sixToSevenpinut);
                  var oneToSevenpinut = parseInt(oneToFivepinut) + parseInt(sixToSevenpinut);  
                  $("#shengdana3").html(oneToSevenpinut);

                   var oneToFivesugar = oneToFive['sugar'];            
                  var sixToSevensugar = sixToSeven['sugar'];
                  $("#sugar1").html(oneToFivesugar);
                  $("#sugar2").html(sixToSevensugar);
                  var oneToSevensugar = parseInt(oneToFivesugar) + parseInt(sixToSevensugar);  
                  $("#sugar3").html(oneToSevensugar);

                   var oneToFivefa_oil = oneToFive['fa_oil'];            
                  var sixToSevenfa_oil = sixToSeven['fa_oil'];
                  $("#fa_tel1").html(oneToFivefa_oil);
                  $("#fa_tel2").html(sixToSevenfa_oil);
                  var oneToSevenfa_oil = parseInt(oneToFivefa_oil) + parseInt(sixToSevenfa_oil);  
                  $("#fa_tel3").html(oneToSevenfa_oil);
                 
                   var oneToFivematki = oneToFive['matki'];            
                  var sixToSevenmatki = sixToSeven['matki'];
                  $("#mataki1").html(oneToFivematki);
                  $("#mataki2").html(sixToSevenmatki);
                  var oneToSevenmatki = parseInt(oneToFivematki) + parseInt(sixToSevenmatki);  
                  $("#mataki3").html(oneToSevenmatki);

                    var oneToFivebarbiti = oneToFive['barbiti'];            
                  var sixToSevenbarbiti = sixToSeven['barbiti'];
                  $("#barbiti1").html(oneToFivebarbiti);
                  $("#barbiti2").html(sixToSevenbarbiti);
                  var oneToSevenbarbiti= parseInt(oneToFivebarbiti) + parseInt(sixToSevenbarbiti);  
                  $("#barbiti3").html(oneToSevenbarbiti);
                 
                 
                   var oneToFivechna = oneToFive['chna'];            
                  var sixToSevenchna = sixToSeven['chna'];
                  $("#chna1").html(oneToFivechna);
                  $("#chna2").html(sixToSevenchna);
                  var oneToSevenchna = parseInt(oneToFivechna) + parseInt(sixToSevenchna);  
                  $("#chna3").html(oneToSevenchna);

                    var oneToFiveclothSoap = oneToFive['clothSoap'];            
                  var sixToSevenclothSoap = sixToSeven['clothSoap'];
                  $("#ka_saban1").html(oneToFiveclothSoap);
                  $("#ka_saban2").html(sixToSevenchna);
                  var oneToSevenclothSoap = parseInt(oneToFiveclothSoap) + parseInt(sixToSevenclothSoap);  
                  $("#ka_saban3").html(oneToSevenclothSoap);


                     var oneToFiveBeathSoap = oneToFive['BeathSoap'];            
                  var sixToSevenBeathSoap = sixToSeven['BeathSoap'];
                  $("#aa_saban1").html(oneToFiveBeathSoap);
                  $("#aa_saban2").html(sixToSevenBeathSoap);
                  var oneToSevenBeathSoap = parseInt(oneToFiveBeathSoap) + parseInt(sixToSevenBeathSoap);  
                  $("#aa_saban3").html(oneToSevenBeathSoap);

                  var oneToFivecoconutOil = oneToFive['coconutOil'];            
                  var sixToSevencoconutOil = sixToSeven['coconutOil'];
                  $("#kho_tel1").html(oneToFivecoconutOil);
                  $("#kho_tel2").html(sixToSevencoconutOil);
                  var oneToSevencoconutOil = parseInt(oneToFivecoconutOil) + parseInt(sixToSevencoconutOil);  
                  $("#kho_tel3").html(oneToSevencoconutOil);


                   var oneToFivemajan = oneToFive['majan'];            
                  var sixToSevenmajan = sixToSeven['majan'];
                  $("#manjan1").html(oneToFivemajan);
                  $("#manjan2").html(sixToSevenmajan);
                  var oneToSevenmajan = parseInt(oneToFivemajan) + parseInt(sixToSevenmajan);  
                  $("#manjan3").html(oneToSevenmajan);

                   var oneToFiveggs = oneToFive['eggs'];            
                  var sixToSeveneggs = sixToSeven['eggs'];
                  $("#eggs1").html(oneToFiveggs);
                  $("#eggs2").html(sixToSeveneggs);
                  var oneToSeveneggs = parseInt(oneToFiveggs) + parseInt(sixToSeveneggs);  
                  $("#eggs3").html(oneToSeveneggs);

                  var oneToFivefruits = oneToFive['fruits'];            
                  var sixToSevenfruits = sixToSeven['fruits'];
                  $("#fruits1").html(oneToFivefruits);
                  $("#fruits2").html(sixToSevenfruits);
                  var oneToSevenfruits = parseInt(oneToFivefruits) + parseInt(sixToSevenfruits);  
                  $("#fruits3").html(oneToSevenfruits);

                  $("#eggs3").html(oneToSeveneggs);

                  var oneToFivemutton = oneToFive['mutton'];            
                  var sixToSevenmutton = sixToSeven['mutton'];
                  $("#mutton1").html(oneToFivemutton);
                  $("#mutton2").html(sixToSevenmutton);
                  var oneToSevenmutton = parseInt(oneToFivemutton) + parseInt(sixToSevenmutton);  
                  $("#mutton3").html(oneToSevenmutton);

                   var oneToFivefist = oneToFive['fist'];            
                  var sixToSevenfist = sixToSeven['fist'];
                  $("#fist1").html(oneToFivefist);
                  $("#fist2").html(sixToSevenfist);
                  var oneToSevenfist = parseInt(oneToFivefist) + parseInt(sixToSevenfist);  
                  $("#fist3").html(oneToSevenfist);

                    var oneToFivemilk = oneToFive['milk'];            
                  var sixToSevenmilk = sixToSeven['milk'];
                  $("#milk1").html(oneToFivemilk);
                  $("#milk2").html(sixToSevenmilk);
                  var oneToSevenmilk = parseInt(oneToFivemilk) + parseInt(sixToSevenmilk);  
                  $("#milk3").html(oneToSevenmilk);

                  var oneToFivevegitables1= oneToFive['vegitables1'];            
                  var sixToSevenvegitables1 = sixToSeven['vegitables1'];
                  $("#vegetables1").html(oneToFivevegitables1);
                  $("#vegetables2").html(sixToSevenvegitables1);
                  var oneToSevenvegitables1 = parseInt(oneToFivevegitables1) + parseInt(sixToSevenvegitables1);  
                  $("#vegetables3").html(oneToSevenvegitables1);

                   var oneToFivevegitables11= oneToFive['vegitables2'];            
                  var sixToSevenvegitables12 = sixToSeven['vegitables2'];
                  $("#vegetables11").html(oneToFivevegitables11);
                  $("#vegetables12").html(sixToSevenvegitables12);
                  var oneToSevenvegitables13 = parseInt(oneToFivevegitables11) + parseInt(sixToSevenvegitables12);  
                  $("#vegetables13").html(oneToSevenvegitables13);


                    var oneToFivegarlic = oneToFive['garlic'];            
                  var sixToSevengarlic = sixToSeven['garlic'];
                  $("#garlic1").html(oneToFivegarlic);
                  $("#garlic2").html(sixToSevengarlic);
                  var oneToSevengarlic = parseInt(oneToFivegarlic) + parseInt(sixToSevengarlic);  
                  $("#garlic3").html(oneToSevengarlic);

                   var oneToFiveonion = oneToFive['onion'];            
                  var sixToSevenonion = sixToSeven['onion'];
                  $("#onion1").html(oneToFiveonion);
                  $("#onion2").html(oneToFiveonion);
                  var oneToSevenonion = parseInt(oneToFiveonion) + parseInt(sixToSevenonion);  
                  $("#onion3").html(oneToSevenonion);

                  
                  var totalDaal = oneToSevenmugDaal + oneToSevenchnaDaal + oneToSeventurDaal + oneToSeventurDaal + oneToSevenbtbatiDaal + oneToSevenududDaal;
                  $("#totalDaal").html(totalDaal);

                   var totalSpice = oneToSevenchiiliPowder + oneToSeventurmeric + oneToSevencumin + oneToSevenspice;
                  $("#totalSpice").html(totalDaal);

                  var totalCondiment = oneToSevenmatki + oneToSevenbarbiti + oneToSevenchna ;
                  $("#totalCondiment").html(totalCondiment);

                  var TotalhygieneMaterials = oneToSevenclothSoap + oneToSevenBeathSoap + oneToSevencoconutOil + oneToSevenmajan;
                  $("#TotalhygieneMaterials").html(TotalhygieneMaterials);

                  var totalVegetables = oneToSevenvegitables1 + oneToSevenvegitables13 + oneToSevengarlic + oneToSevenonion;
                  $("#totalVegetables").html(totalVegetables);

        }
    });
}
function goBack(){

        location.href = 'Dashboard';
    }
