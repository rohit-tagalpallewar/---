
function  getMrngBreakfastData(oneToFive,sixToSeven,totalAttendence)
{
     var oneToFive = oneToFive;
     var  sixToSeven=sixToSeven;
      var totalAttendence=totalAttendence;
      var date1 = $("input[name='date']").val();
      var date_selected = new Date(date1);
      
       var date = ('0' + date_selected.getDate()).slice(-2);
       
      var month =   ('0' + (date_selected.getMonth()+1)).slice(-2);
      
      var year  = parseInt(date_selected.getFullYear());
       
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
       
         if (month == '02'){
          
             if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
             { 
                   // $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));

                    $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                    
             }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
             {
               
                   $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));


             }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27')
                 {
               
                 $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                    //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));                
                 }
         
         }else if(month == '01' || month == '03' ||    month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
            

                if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28' ||  date == '31')
                 { 
              
                     $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

           
                   // $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                 }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29' )
                 {
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                        // $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                
                }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30')
                {
               
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                        //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));
                }






         }else if(month == '04' || month == '06' || month == '09' || month == '11'){
            

                 if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
                 {
                      $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                 }
                 if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
                 {                        
                     $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));
                 }
                 if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30' )
                 {
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                 }

         }
            mMungDal();
                         mChnaDal();
                         mTurDal();
                         mBtbatiDal();
                         mUdidDal();
                         mChana();
                         mBarbiti();
                         mMataki();
                         rem2UdidDaal();
                         rem2BtbatiDaal();
                         rem2TurDaal();
                         rem2ChanDaal();
                         rem2Mung();
                         rem2Chna();
                         rem2Barbiti();
                         rem2Matki();
    }else{
    
        if (month == '02'){
          
             if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
             { 
                   // $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));

                    $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                    
             }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
             {
               
                   $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));


             }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27')
                 {
               
                 $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                    //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));                
                 }
         
         }else if(month == '01' || month == '03' ||    month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
            

                if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28' ||  date == '31')
                 { 
              
                     $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

           
                   // $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                 }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29' )
                 {
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                        // $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                
                }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30')
                {
               
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                        //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));
                }

         }else if(month == '04' || month == '06' || month == '09' || month == '11'){
            

                 if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
                 {
                      $("input[name='mrng_matki']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                 }
                 if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' )
                 {                        
                     $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0.05).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0).toFixed(2));

                    $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));
                 }
                 if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' )
                 {
                         $("input[name='mrng_matki']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_barbiti']").val((totalAttendence*0).toFixed(2));
                    $("input[name='mrng_chna']").val((totalAttendence*0.05).toFixed(2));
                      $("input[name='mrng_mung']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_chnadal']").val((oneToFive*0).toFixed(2));
                    $("input[name='mrng_turdal']").val((oneToFive*0.1).toFixed(2));
                    $("input[name='mrng_btbtidal']").val((oneToFive*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((oneToFive*0).toFixed(2));

                 }

         }
          mMungDal();
                         mChnaDal();
                         mTurDal();
                         mBtbatiDal();
                         mUdidDal();
                         mChana();
                         mBarbiti();
                         mMataki();
                         rem2UdidDaal();
                         rem2BtbatiDaal();
                         rem2TurDaal();
                         rem2ChanDaal();
                         rem2Mung();
                         rem2Chna();
                         rem2Barbiti();
                         rem2Matki();

    }
}
function  getEvngBreakfastData(oneToFive,sixToSeven,totalAttendence)
{
     var oneToFive = oneToFive;
     var  sixToSeven=sixToSeven;
      var totalAttendence=totalAttendence;
      var date1 = $("input[name='date']").val();
      var date_selected = new Date(date1);
      
       var date = ('0' + date_selected.getDate()).slice(-2);
      // var date1 =   date_selected.getFullYear() + "-" +   ('0' + (date_selected.getMonth()+1)).slice(-2) + "-" +  ('0' + date_selected.getDate()).slice(-2);
       
      var month =   ('0' + (date_selected.getMonth()+1)).slice(-2);
      
      var year  = parseInt(date_selected.getFullYear());
       
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
       
         if (month == '02'){
          
             if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
             { 
                 
                     $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                    
             }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
             {
               
                   
                    $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));


             }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27')
                 {
                          $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                        $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                        $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                    //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));                
                 }
         
         }else if(month == '01' || month == '03' ||    month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
            

                if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28' ||  date == '31')
                 { 
              
                       $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

           
                   // $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                 }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29' )
                 {
                       
                        $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                        // $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                
                }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30')
                {
                    $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                        //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));
                }






         }else if(month == '04' || month == '06' || month == '09' || month == '11'){
            

                 if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
                 {
                     $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                 }
                 if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
                 {                        
                      $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));
                 }
                 if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30' )
                 {
                       
                    $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                 }

         }
          mMungDal();
                         mChnaDal();
                         mTurDal();
                         mBtbatiDal();
                         mUdidDal();
                         mChana();
                         mBarbiti();
                         mMataki();
                         rem2UdidDaal();
                         rem2BtbatiDaal();
                         rem2TurDaal();
                         rem2ChanDaal();
                         rem2Mung();
                         rem2Chna();
                         rem2Barbiti();
                         rem2Matki();
    }else{
    
        if (month == '02'){
          
             if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
             { 
                   
                    $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                    
             }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29')
             {
               
                 
                    $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));


             }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27')
                 {
               
                 
                    $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                    //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));                
                 }
         
         }else if(month == '01' || month == '03' ||    month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
            

                if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28' ||  date == '31')
                 { 
              
                     $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

           
                   // $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                 }else if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' ||  date == '29' )
                 {
                         $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                        // $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                
                }else  if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' ||  date == '30')
                {
                   $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                        //$("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));
                }

         }else if(month == '04' || month == '06' || month == '09' || month == '11'){
            

                 if(date == '01' ||  date == '04' || date == '07' ||  date == '10' ||  date == '13' ||  date == '16' ||  date == '19' ||  date == '22' ||  date == '25' ||  date == '28')
                 {
                     $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
                     $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));

                 }
                 if(date == '02' ||  date == '05' || date == '08' ||  date == '11' ||  date == '14' ||  date == '17' ||  date == '20' ||  date == '23' ||  date == '26' )
                 {                        
                     $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                     $("input[name='evng_btbtidal']").val((sixToSeven*0.1).toFixed(2));
                    $("input[name='evng_uddiddal']").val((sixToSeven*0).toFixed(2));
                 }
                 if(date == '03' ||  date == '06' || date == '09' ||  date == '12' ||  date == '15' ||  date == '18' ||  date == '21' ||  date == '24' ||  date == '27' )
                 {
                         $("input[name='evng_chnadal']").val((sixToSeven*0).toFixed(2));
                       $("input[name='evng_btbtidal']").val((sixToSeven*0).toFixed(2));
                       $("input[name='evng_uddiddal']").val((sixToSeven*0.1).toFixed(2));

                 }

         }
                         mMungDal();
                         mChnaDal();
                         mTurDal();
                         mBtbatiDal();
                         mUdidDal();
                         mChana();
                         mBarbiti();
                         mMataki();
                         rem2UdidDaal();
                         rem2BtbatiDaal();
                         rem2TurDaal();
                         rem2ChanDaal();
                         rem2Mung();
                         rem2Chna();
                         rem2Barbiti();
                         rem2Matki();

    }
}


   function oneToFivePresent(){
   
     var oneToFive = parseFloat($("input[name='oneToFive']").val());
     var sixToSeven = parseFloat($("input[name='sixToSeven']").val());
     

       var total_present = oneToFive + sixToSeven;
       $("input[name='totalAttendence']").val(total_present);
       var totalAttendence = $("input[name='totalAttendence']").val();
       getMrngBreakfastData(oneToFive,sixToSeven,totalAttendence);
        $("input[name='mrng_wheat']").val((oneToFive*0.35).toFixed(2));
        $("input[name='mrng_rice']").val((oneToFive*0.1).toFixed(2));

        // $("input[name='mrng_mung']").val((oneToFive*0.1).toFixed(2));
        // $("input[name='mrng_chnadal']").val((totalAttendence*0).toFixed(2));
        // $("input[name='mrng_turdal']").val(((totalAttendence*0.05)/2*0).toFixed(2));
        // $("input[name='mrng_btbtidal']").val(((totalAttendence*0.05)/2*0).toFixed(2));
        $("input[name='mrng_srpan']").val((oneToFive*1).toFixed(2));
        $("input[name='mrng_tikhat']").val((oneToFive*0.01).toFixed(3));
        $("input[name='mrng_hld']").val((oneToFive*0.001).toFixed(3));
        $("input[name='mrng_jira']").val((oneToFive*0.001).toFixed(3));
        $("input[name='mrng_masala']").val((oneToFive*0.008).toFixed(3));
        $("input[name='mrng_salt']").val((oneToFive*0.015).toFixed(3));
        $("input[name='mrng_shengdana']").val((oneToFive*0.025).toFixed(3));
        $("input[name='mrng_sugar']").val((oneToFive*0.02).toFixed(3));
        $("input[name='mrng_fa_oil']").val((oneToFive*0.035).toFixed(2));
          var oneToFiveCal = (oneToFive*0.125)*100;
       $("input[name='mrng_vegetables1']").val(Math.round(oneToFiveCal)/100);
        var sixToSeven = $("input[name='sixToSeven']").val();
       $("input[name='mrng_vegetables2']").val((sixToSeven*0).toFixed(2));
       $("input[name='mrng_garlic']").val((oneToFive*0.01).toFixed(2));
        var mrng_onioncal = (oneToFive*0.015)*100;

       $("input[name='mrng_onion']").val(Math.round(mrng_onioncal)/100);
       var date = $("input[name='date']").val();
         var date_selected = new Date(date);

         // var current_datetime = new Date()
        var datesel = ('0' + date_selected.getDate()).slice(-2);
         if(datesel == '02'){
           mWheat();
          mRice();
         mMungDal();
         mChnaDal();
         mTurDal();
         mBtbatiDal();
         mUdidDal();
         mSarpan();
         mTikhat();
         mHalad();
         mJira();
         mMasala();
         mSalt();
         mShengdana();
         mSugar();
         mFaOil();
         mMataki();
         mBarbiti();
         mChana();
         mKaSoap();
         mKhoOil();
         mMajan();
         mEggs();
         mFruits();
         mMutton();
         mFist();
          mMilk();
          mVegetables1();
          mVegetables2();
          mGarlic();
          mOnion();
          mPohe();
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
           mWheat();
          mRice();
         mMungDal();
         mChnaDal();
         mTurDal();
         mBtbatiDal();
         mUdidDal();
         mSarpan();
         mTikhat();
         mHalad();
         mJira();
         mMasala();
         mSalt();
         mShengdana();
         mSugar();
         mFaOil();
         mMataki();
         mBarbiti();
         mChana();
         mKaSoap();
         mKhoOil();
         mMajan();
         mEggs();
         mFruits();
         mMutton();
         mFist();
          mMilk();
          mVegetables1();
          mVegetables2();
          mGarlic();
          mOnion();
          mPohe();
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
      }
 

   function sixToSevenPresent(){
      var oneToFive = parseFloat($("input[name='oneToFive']").val());
      var sixToSeven = parseFloat($("input[name='sixToSeven']").val());
      var totalAttendence = parseFloat($("input[name='totalAttendence']").val());
      var total_present = oneToFive + sixToSeven;
      $("input[name='totalAttendence']").val(total_present);
       var totalAttendence = parseFloat($("input[name='totalAttendence']").val());
      getEvngBreakfastData(oneToFive,sixToSeven,totalAttendence);
      $("input[name='evng_wheat']").val((sixToSeven*0.35).toFixed(2));    //error in o/p
       $("input[name='evng_rice']").val((sixToSeven*0.1).toFixed(2));
      //  $("input[name='evng_mung']").val((totalAttendence*0).toFixed(2));
      //  $("input[name='evng_chnadal']").val((sixToSeven*0.1).toFixed(2));
      // $("input[name='evng_turdal']").val(((totalAttendence*0.05)/2*0).toFixed(2));
      // $("input[name='evng_btbtidal']").val(((totalAttendence*0.05)/2*0).toFixed(2));
       $("input[name='evng_srpan']").val((1*sixToSeven).toFixed(2));
      $("input[name='evng_tikhat']").val((sixToSeven*0.01).toFixed(3));
       $("input[name='evng_hld']").val((sixToSeven*0.001).toFixed(3));
      $("input[name='evng_jira']").val((sixToSeven*0.001).toFixed(3));
      $("input[name='evng_masala']").val((sixToSeven*0.008).toFixed(3));
       $("input[name='evng_salt']").val((sixToSeven*0.015).toFixed(3));
        $("input[name='evng_shengdana']").val(sixToSeven*0.025);
       $("input[name='evng_sugar']").val((sixToSeven*0.02).toFixed(2));
       $("input[name='evng_fa_oil']").val((sixToSeven*0.035).toFixed(2));
      //  $("input[name='evng_matki']").val((totalAttendence*0).toFixed(2));
      //  $("input[name='evng_barbiti']").val((totalAttendence*0).toFixed(2));
      // $("input[name='evng_chna']").val((totalAttendence*0).toFixed(2));
      $("input[name='evng_vegetables1']").val((oneToFive*0).toFixed(2));
        var sixToSeven = $("input[name='sixToSeven']").val();
        
            var sixToSevenCal = (sixToSeven*0.125)*100;
           $("input[name='evng_vegetables2']").val(Math.round(sixToSevenCal)/100);


      $("input[name='evng_garlic']").val((sixToSeven*0.01).toFixed(2));
       var evng_onionCal = (sixToSeven*0.015)*100;
       $("input[name='evng_onion']").val(Math.round(evng_onionCal)/100);  
      var date = $("input[name='date']").val();
         var date_selected = new Date(date);

         // var current_datetime = new Date()
        var datesel = ('0' + date_selected.getDate()).slice(-2);
         if(datesel == '02'){
           mWheat();
          mRice();
         mMungDal();
         mChnaDal();
         mTurDal();
         mBtbatiDal();
         mUdidDal();
         mSarpan();
         mTikhat();
         mHalad();
         mJira();
         mMasala();
         mSalt();
         mShengdana();
         mSugar();
         mFaOil();
         mMataki();
         mBarbiti();
         mChana();
         mKaSoap();
         mKhoOil();
         mMajan();
         mEggs();
         mFruits();
         mMutton();
         mFist();
          mMilk();
          mVegetables1();
          mVegetables2();
          mGarlic();
          mOnion();
          mPohe();
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
           mWheat();
          mRice();
         mMungDal();
         mChnaDal();
         mTurDal();
         mBtbatiDal();
         mUdidDal();
         mSarpan();
         mTikhat();
         mHalad();
         mJira();
         mMasala();
         mSalt();
         mShengdana();
         mSugar();
         mFaOil();
         mMataki();
         mBarbiti();
         mChana();
         mKaSoap();
         mKhoOil();
         mMajan();
         mEggs();
         mFruits();
         mMutton();
         mFist();
          mMilk();
          mVegetables1();
          mVegetables2();
          mGarlic();
          mOnion();
          mPohe();
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
       
       
    }

    