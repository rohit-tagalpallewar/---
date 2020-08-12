
var f = 0;
  
   $('#date').on('change',function(){
    var oneToFive = parseFloat($("input[name='oneToFive']").val());
     var sixToSeven = parseFloat($("input[name='sixToSeven']").val());


     var total_present = oneToFive + sixToSeven;
      $("input[name='totalAttendence']").val(total_present);
     var totalAttendence = parseFloat($("input[name='totalAttendence']").val());

      getMrngBreakfastData(oneToFive,sixToSeven,totalAttendence);
      getEvngBreakfastData(oneToFive,sixToSeven,totalAttendence);
 
      
      
     f=1;
         var date = $("input[name='date']").val();
         var date_selected = new Date(date);

         // var current_datetime = new Date()
   var datesel = ('0' + date_selected.getDate()).slice(-2);
   var date1 =   date_selected.getFullYear() + "-" +   ('0' + (date_selected.getMonth()+1)).slice(-2) + "-" +  ('0' + (date_selected.getDate()-1)).slice(-2);
   // var month = document.getElementById('months');
   // var selected_month = month.value;
   // var year = document.getElementById('year');
   // var selected_year = year.value;
          getHigherSecRemainingData(date1); 
        
   });
  function  getHigherSecRemainingData(date1){
    var date1 = date1;
    // var selected_month = selected_month;
    // var selected_year = selected_year;
    $.ajax({
        url: baseUrl + 'getHSecRemainingDataController/getRemainingData',
        type: 'POST',
        data: {'date1': date1},
        dataType: 'json',
        success: function (data) {
          if (data.result.success)
          {
        var wheat = parseFloat(data.query_res.wheat);
       var rice = parseFloat(data.query_res.rice);
      var mugDaal = parseFloat(data.query_res.mugDaal);
       var chnaDaal = parseFloat(data.query_res.chnaDaal);
      var turDaal = parseFloat(data.query_res.turDaal);
     var btbatiDaal = parseFloat(data.query_res.btbatiDaal);
      var ududDaal = parseFloat(data.query_res.ududDaal);
      var sarpan = parseFloat(data.query_res.sarpan);
      var chiiliPowder=parseFloat(data.query_res.chiiliPowder);
      var turmeric = parseFloat(data.query_res.turmeric);
      var cumin = parseFloat(data.query_res.cumin);
      var spice = parseFloat(data.query_res.spice);
      var salt = parseFloat(data.query_res.salt);
     var pinut =parseFloat(data.query_res.pinut);
      var sugar =parseFloat(data.query_res.sugar);
      var fa_oil =parseFloat(data.query_res.fa_oil);
      var matki = parseFloat(data.query_res.matki);
      var  barbiti  = parseFloat(data.query_res.barbiti);
      var  chna= parseFloat(data.query_res.chna);
      var  clothSoap= parseFloat(data.query_res.clothSoap);
      var  BeathSoap= parseFloat(data.query_res.BeathSoap);
      var  coconutOil= parseFloat(data.query_res.coconutOil);
      var  majan= parseFloat(data.query_res.majan);
      var  eggs= parseFloat(data.query_res.eggs);
      var  fruits= parseFloat(data.query_res.fruits);
      var  mutton= parseFloat(data.query_res.mutton);
      var  fist= parseFloat(data.query_res.fist);
      var  milk= parseFloat(data.query_res.milk);
      var  vegitables1= parseFloat(data.query_res.vegitables1);
      var  vegitables2= parseFloat(data.query_res.vegitables2);
      var  garlic= parseFloat(data.query_res.garlic);
      var  onion= parseFloat(data.query_res.onion);
      var  pohe= parseFloat(data.query_res.pohe);





      $("input[name='rem1_wheat']").val(wheat.toFixed(2));
      $("input[name='rem1_rice']").val(rice.toFixed(2));
      $("input[name='rem1_mung']").val(mugDaal.toFixed(2));
      $("input[name='rem1_chnadal']").val(chnaDaal.toFixed(2));
      $("input[name='rem1_turdal']").val(turDaal.toFixed(2));
      $("input[name='rem1_btbtidal']").val(btbatiDaal.toFixed(2));
      $("input[name='rem1_uddiddal']").val(ududDaal.toFixed(2));
      $("input[name='rem1_srpan']").val(sarpan.toFixed(2));
      $("input[name='rem1_tikhat']").val(chiiliPowder.toFixed(2));
      $("input[name='rem1_hld']").val(turmeric.toFixed(2));
      $("input[name='rem1_jira']").val(cumin.toFixed(2));
      $("input[name='rem1_masala']").val(spice.toFixed(2));
      $("input[name='rem1_salt']").val(salt.toFixed(2));
      $("input[name='rem1_shengdana']").val(pinut.toFixed(2));
      $("input[name='rem1_sugar']").val(sugar.toFixed(2));
      $("input[name='rem1_fa_oil']").val(fa_oil.toFixed(2));
      $("input[name='rem1_matki']").val(matki.toFixed(2));
      $("input[name='rem1_barbiti']").val(barbiti.toFixed(2));
      $("input[name='rem1_chna']").val(chna.toFixed(2));
      $("input[name='rem1_ka_soap']").val(clothSoap.toFixed(2));
      $("input[name='rem1_a_soap']").val(BeathSoap.toFixed(2));
      $("input[name='rem1_kho_oil']").val(coconutOil.toFixed(2));
      $("input[name='rem1_majan']").val(majan.toFixed(2));
      $("input[name='rem1_eggs']").val(eggs.toFixed(2));
      $("input[name='rem1_fruits']").val(fruits.toFixed(2));
      $("input[name='rem1_mutton']").val(mutton.toFixed(2));
      $("input[name='rem1_fist']").val(fist.toFixed(2));
      $("input[name='rem1_milk']").val(milk.toFixed(2));
      $("input[name='rem1_vegetables1']").val(vegitables1.toFixed(2));
      $("input[name='rem1_vegetables2']").val(vegitables2.toFixed(2));
      $("input[name='rem1_garlic']").val(garlic.toFixed(2));
      $("input[name='rem1_onion']").val(onion.toFixed(2));
      $("input[name='rem1_pohe']").val(pohe.toFixed(2));


       var date = $("input[name='date']").val();
         var date_selected = new Date(date);

         // var current_datetime = new Date()
        var datesel = ('0' + date_selected.getDate()).slice(-2);
        if(datesel == '02'){
          totalRemWheat();
   totalRemRice();
   totalRemMungDal();
   totalRemChnaDal();
   totalRemTurDal();
    totalRemBtbatiDal();
   totalRemUdidDal();
   totalRemSarpan();
   totalRemTikhat();
   totalRemHalad();
   totalRemJira();
    totalRemMasala();
    totalRemSalt();
    totalRemShengdana();
   totalRemSugar();
    totalRemFaOil();
   totalRemMataki();
   totalRemBarbiti();
    totalRemChana();
   totalRemKaSoap();
    totalRemASoap();
   totalRemKhoOil();

   totalRemMajan();
   totalRemEggs();
   totalRemFruits();
   totalRemMutton();
   totalRemFist();
    totalRemMilk();
   totalRemVegetables1();
  totalRemVegetables2();
   totalRemGarlic();
   totalRemOnion();
   totalRemPohe();
              rem2FirstWheat();
       rem2FirstRice();
         rem2FirstMung();
        rem2FirstChanDaal();
        rem2FirstTurDaal();
        rem2FirstBtbatiDaal();
        rem2FirstUdidDaal();
        rem2FirstSarpan();
        rem2FirstTikhat();
        rem2FirstHld();
        rem2FirstJira();
        rem2FirstMasala();
        rem2FirstSalt();
        rem2Firstshengdana();
        rem2FirstSugar();
        rem2FirstFaOil();
        rem2FirstMatki();
        rem2FirstBarbiti();
        rem2FirstChna();
        rem2FirstClothSoap();
        rem2FirstBeathSoap();
        rem2FirstCoconutOil();
        rem2FirstManjan();
        rem2FirstEggs();
        rem2FirstFruits();
        rem2FirstMutton();
        rem2FirstFist();
        rem2FirstMilk();
        rem2FirstVegetables1();
        rem2FirstVegetables2();
        rem2FirstGarlic();
        rem2FirstOnion();
        rem2FirstPohe();
        }else{
         totalRemWheat();
   totalRemRice();
   totalRemMungDal();
   totalRemChnaDal();
   totalRemTurDal();
    totalRemBtbatiDal();
   totalRemUdidDal();
   totalRemSarpan();
   totalRemTikhat();
   totalRemHalad();
   totalRemJira();
    totalRemMasala();
    totalRemSalt();
    totalRemShengdana();
   totalRemSugar();
    totalRemFaOil();
   totalRemMataki();
   totalRemBarbiti();
    totalRemChana();
   totalRemKaSoap();
    totalRemASoap();
   totalRemKhoOil();

   totalRemMajan();
   totalRemEggs();
   totalRemFruits();
   totalRemMutton();
   totalRemFist();
    totalRemMilk();
   totalRemVegetables1();
  totalRemVegetables2();
   totalRemGarlic();
   totalRemOnion();
    totalRemPohe();
           rem2Wheat();
       rem2Rice();
         rem2Mung();
        rem2ChanDaal();
        rem2TurDaal();
        rem2BtbatiDaal();
        rem2UdidDaal();
        rem2Sarpan();
        rem2Tikhat();
        rem2Hld();
        rem2Jira();
        rem2Masala();
        rem2Salt();
        rem2shengdana();
        rem2Sugar();
        rem2FaOil();
        rem2Matki();
        rem2Barbiti();
        rem2Chna();
        rem2ClothSoap();
        rem2BeathSoap();
        rem2CoconutOil();
        rem2Manjan();
        rem2Eggs();
        rem2Fruits();
        rem2Mutton();
        rem2Fist();
        rem2Milk();
        rem2Vegetables1();
        rem2Vegetables2();
        rem2Garlic();
        rem2Onion();
        rem2Pohe();
         
        }   
          }else {
            return false;
          }

        }
    });
 
  }



function submitData(){
  var date = $("input[name='date']").val();
 
  if(f == 0){
      alert("Please Select Date");
  }else{
    var formdata = $('#grain_form').serialize();
    var errors = new Array();
      $.ajax({
        url: baseUrl + 'InsertHSecDataController/checkInsertedData',
        type: 'POST',
        data: formdata,
        dataType: 'json',
        success: function (data) {
           if (data.success) {
                var checkTrue = confirm("Do you want to update records?");
               if( checkTrue == true ) {
                  updateData();
               } else {
                  return false;
               }
           }else{
             insertData();
           }
        }
    });
  } 
}




function insertData(){
    var formdata = $('#grain_form').serialize();
    var errors = new Array();

      $.ajax({
        url: baseUrl + 'InsertHSecDataController/insertData',
        type: 'POST',
        data: formdata,
        dataType: 'json',
        success: function(data) {
           if (data.success) {
           	alert("Record inserted");
           }else{
           	alert("Record not inserted");
           }
        }
    });
}
function updateData(){
  var formdata = $('#grain_form').serialize();
    var errors = new Array();

      $.ajax({
        url: baseUrl + 'IsertHigherSecDataController/updateData',
        type: 'POST',
        data: formdata,
        dataType: 'json',
        success: function(data) {
           if (data.success) {
            alert("Record Updated");
           }else{
              return false;
           }
        }
    });
}