<?php 
  class InsertDataController extends CI_Controller {


   public function __construct() {
        parent::__construct();
        $this->load->model('InsertDataModel');   
         
    }
    public function checkInsertedData(){
       $year = $this->input->post('year');
        $month = $this->input->post('months');
        $date = $this->input->post('date');
         $insertDataArray = Array(
                'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
        );
      $check_inserted_data= $this->InsertDataModel->CheckInsertedData($insertDataArray);
        if($check_inserted_data)
        {
                     $result = array(
                        'success' => true
                    );
    //$query_res = $this->UpdateDataModel->updateData($data);
        }else{
                    $result = array(
                            'fail' => true
                        );
                  }
        echo json_encode($result);

    }
  public function insertData(){
       // echo $this->input->post('year');
          $rem1_wheat = $this->input->post('rem1_wheat');
        $rem1_rice = $this->input->post('rem1_rice');
        $rem1_mung = $this->input->post('rem1_mung');
        $rem1_chnadal = $this->input->post('rem1_chnadal');
        $rem1_turdal = $this->input->post('rem1_turdal');
        $rem1_btbtidal = $this->input->post('rem1_btbtidal');
        $rem1_uddiddal = $this->input->post('rem1_uddiddal');
        $rem1_srpan = $this->input->post('rem1_srpan');
        $rem1_tikhat = $this->input->post('rem1_tikhat');
        $rem1_hld = $this->input->post('rem1_hld');
        $rem1_jira = $this->input->post('rem1_jira');
        $rem1_masala = $this->input->post('rem1_masala');
        $rem1_salt = $this->input->post('rem1_salt');
        $rem1_shengdana = $this->input->post('rem1_shengdana');
        $rem1_sugar = $this->input->post('rem1_sugar');
        $rem1_fa_oil = $this->input->post('rem1_fa_oil');
        $rem1_matki = $this->input->post('rem1_matki');
        $rem1_barbiti = $this->input->post('rem1_barbiti');
        $rem1_chna = $this->input->post('rem1_chna');
        $rem1_ka_soap = $this->input->post('rem1_ka_soap');
        $rem1_a_soap = $this->input->post('rem1_a_soap');
        $rem1_kho_oil = $this->input->post('rem1_kho_oil');
        $rem1_majan = $this->input->post('rem1_majan');
        $rem1_eggs = $this->input->post('rem1_eggs');
        $rem1_fruits = $this->input->post('rem1_fruits');
        $rem1_mutton = $this->input->post('rem1_mutton');
        $rem1_fist = $this->input->post('rem1_fist');
        $rem1_milk = $this->input->post('rem1_milk');
        $rem1_vegetables1 = $this->input->post('rem1_vegetables1');
        $rem1_vegetables2 = $this->input->post('rem1_vegetables2');
        $rem1_garlic = $this->input->post('rem1_garlic');
        $rem1_onion = $this->input->post('rem1_onion');
        $rem1_pohe = $this->input->post('rem1_pohe');

 
       

        $year = $this->input->post('year');
       
        $month = $this->input->post('months');
        $date = $this->input->post('date');
         $insertDataArray = Array(
                'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
        );
        $data = array(
                'year' => $year,
               'month' =>  $month,
               'date' =>  $date, 
               'wheat' => $rem1_wheat,
               'rice' =>  $rem1_rice ,
               'mugDaal' =>  $rem1_mung ,
               'chnaDaal' =>  $rem1_chnadal ,
               'turDaal' =>  $rem1_turdal ,
               'btbatiDaal' =>  $rem1_btbtidal,
               'ududDaal' =>  $rem1_uddiddal,
               'sarpan' =>  $rem1_srpan ,
               'chiiliPowder' =>  $rem1_tikhat ,
               'turmeric' =>  $rem1_hld ,
               'cumin' =>  $rem1_jira ,
               'spice' =>  $rem1_masala ,
               'salt' =>  $rem1_salt ,
               'pinut' =>  $rem1_shengdana ,
               'sugar' =>  $rem1_sugar ,
               'fa_oil' =>  $rem1_fa_oil ,
               'matki' =>  $rem1_matki,
               'barbiti' =>  $rem1_barbiti,
               'chna' =>  $rem1_chna,
                'clothSoap' => $rem1_ka_soap,
               'BeathSoap' =>  $rem1_a_soap,
               'coconutOil' =>  $rem1_kho_oil ,
               'majan' =>  $rem1_majan ,
               'eggs' =>  $rem1_eggs,
              'fruits' =>   $rem1_fruits,
               'mutton' =>  $rem1_mutton ,
               'fist' =>  $rem1_fist ,
               'milk' =>  $rem1_milk ,
               'vegitables1' =>  $rem1_vegetables1,
               'vegitables2' =>  $rem1_vegetables2,
              'garlic' =>   $rem1_garlic,
              'onion' =>   $rem1_onion,
               'pohe' =>   $rem1_pohe
            
                      );


         $in_wheat = $this->input->post('in_wheat');
        $in_rice = $this->input->post('in_rice');
        $in_mung = $this->input->post('in_mung');
        $in_chnadal = $this->input->post('in_chnadal');
        $in_turdal = $this->input->post('in_turdal');
        $in_btbtidal = $this->input->post('in_btbtidal');
        $in_uddiddal = $this->input->post('in_uddiddal');
        $in_srpan = $this->input->post('in_srpan');
        $in_tikhat = $this->input->post('in_tikhat');
        $in_hld = $this->input->post('in_hld');
        $in_jira = $this->input->post('in_jira');
        $in_masala = $this->input->post('in_masala');
        $in_salt = $this->input->post('in_salt');
        $in_shengdana = $this->input->post('in_shengdana');
        $in_sugar = $this->input->post('in_sugar');
        $in_fa_oil = $this->input->post('in_fa_oil');
        $in_matki = $this->input->post('in_matki');
        $in_barbiti = $this->input->post('in_barbiti');
        $in_chna = $this->input->post('in_chna');
        $in_ka_soap = $this->input->post('in_ka_soap');
        $in_a_soap = $this->input->post('in_a_soap');
        $in_kho_oil = $this->input->post('in_kho_oil');
        $in_majan = $this->input->post('in_majan');
        $in_eggs = $this->input->post('in_eggs');
        $in_fruits = $this->input->post('in_fruits');
        $in_mutton = $this->input->post('in_mutton');
        $in_fist = $this->input->post('in_fist');
        $in_milk = $this->input->post('in_milk');
        $in_vegetables1 = $this->input->post('in_vegetables1');
        $in_vegetables2 = $this->input->post('in_vegetables2');
        $in_garlic = $this->input->post('in_garlic');
        $in_onion = $this->input->post('in_onion');
          $in_pohe = $this->input->post('in_pohe');
       
      
        $income_Data = array(
            'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
            
               'wheat' => $in_wheat,
               'rice' =>  $in_rice ,
               'mugDaal' =>  $in_mung ,
               'chnaDaal' =>  $in_chnadal ,
               'turDaal' =>  $in_turdal ,
               'btbatiDaal' =>  $in_btbtidal,
               'ududDaal' =>  $in_uddiddal,
               'sarpan' =>  $in_srpan ,
               'chiiliPowder' =>  $in_tikhat ,
               'turmeric' =>  $in_hld ,
               'cumin' =>  $in_jira ,
               'spice' =>  $in_masala ,
               'salt' =>  $in_salt ,
               'pinut' =>  $in_shengdana ,
               'sugar' =>  $in_sugar ,
               'fa_oil' =>  $in_fa_oil ,
               'matki' =>  $in_matki,
               'barbiti' =>  $in_barbiti,
               'chna' =>  $in_chna,
                'clothSoap' => $in_ka_soap,
               'BeathSoap' =>  $in_a_soap,
               'coconutOil' =>  $in_kho_oil ,
               'majan' =>  $in_majan ,
               'eggs' =>  $in_eggs,
              'fruits' =>   $in_fruits,
               'mutton' =>  $in_mutton ,
               'fist' =>  $in_fist ,
               'milk' =>  $in_milk ,
               'vegitables1' =>  $in_vegetables1,
               'vegitables2' =>  $in_vegetables2,
              'garlic' =>   $in_garlic,
              'onion' =>   $in_onion,
               'pohe' =>   $in_pohe
             

        );
         $totl1_wheat = $this->input->post('totl1_wheat');

        $totl1_rice = $this->input->post('totl1_rice');
        $totl1_mung = $this->input->post('totl1_mung');
        $totl1_chnadal = $this->input->post('totl1_chnadal');
        $totl1_turdal = $this->input->post('totl1_turdal');
        $totl1_btbtidal = $this->input->post('totl1_btbtidal');
        $totl1_uddiddal = $this->input->post('totl1_uddiddal');
        $totl1_srpan = $this->input->post('totl1_srpan');
        $totl1_tikhat = $this->input->post('totl1_tikhat');
        $totl1_hld = $this->input->post('totl1_hld');
        $totl1_jira = $this->input->post('totl1_jira');
        $totl1_masala = $this->input->post('totl1_masala');
        $totl1_salt = $this->input->post('totl1_salt');
        $totl1_shengdana = $this->input->post('totl1_shengdana');
        $totl1_sugar = $this->input->post('totl1_sugar');
        $totl1_fa_oil = $this->input->post('totl1_fa_oil');
        $totl1_matki = $this->input->post('totl1_matki');
        $totl1_barbiti = $this->input->post('totl1_barbiti');
        $totl1_chna = $this->input->post('totl1_chna');
        $totl1_ka_soap = $this->input->post('totl1_ka_soap');
        $totl1_a_soap = $this->input->post('totl1_a_soap');
        $totl1_kho_oil = $this->input->post('totl1_kho_oil');
        $totl1_majan = $this->input->post('totl1_majan');
        $totl1_eggs = $this->input->post('totl1_eggs');
        $totl1_fruits = $this->input->post('totl1_fruits');
        $totl1_mutton = $this->input->post('totl1_mutton');
        $totl1_fist = $this->input->post('totl1_fist');
        $totl1_milk = $this->input->post('totl1_milk');
        $totl1_vegetables1 = $this->input->post('totl1_vegetables1');
        $totl1_vegetables2 = $this->input->post('totl1_vegetables2');
        $totl1_garlic = $this->input->post('totl1_garlic');
        $totl1_onion = $this->input->post('totl1_onion');
        $totl1_pohe = $this->input->post('totl1_pohe');
       

      
          $total1_data = array(
                        
            'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
          
               'wheat' => $totl1_wheat,
               'rice' =>  $totl1_rice ,
               'mugDaal' =>  $totl1_mung ,
               'chnaDaal' =>  $totl1_chnadal ,
               'turDaal' =>  $totl1_turdal ,
               'btbatiDaal' =>  $totl1_btbtidal,
               'ududDaal' =>  $totl1_uddiddal,
               'sarpan' =>  $totl1_srpan ,
               'chiiliPowder' =>  $totl1_tikhat ,
               'turmeric' =>  $totl1_hld ,
               'cumin' =>  $totl1_jira ,
               'spice' =>  $totl1_masala ,
               'salt' =>  $totl1_salt ,
               'pinut' =>  $totl1_shengdana ,
               'sugar' =>  $totl1_sugar ,
               'fa_oil' =>  $totl1_fa_oil ,
               'matki' =>  $totl1_matki,
               'barbiti' =>  $totl1_barbiti,
               'chna' =>  $totl1_chna,
                'clothSoap' => $totl1_ka_soap,
               'BeathSoap' =>  $totl1_a_soap,
               'coconutOil' =>  $totl1_kho_oil ,
               'majan' =>  $totl1_majan ,
               'eggs' =>  $totl1_eggs,
              'fruits' =>   $totl1_fruits,
               'mutton' =>  $totl1_mutton ,
               'fist' =>  $totl1_fist ,
               'milk' =>  $totl1_milk ,
               'vegitables1' =>  $totl1_vegetables1,
               'vegitables2' =>  $totl1_vegetables2,
              'garlic' =>   $totl1_garlic,
              'onion' =>   $totl1_onion,
              'pohe' =>   $totl1_pohe
             
          );

           $mrng_wheat = $this->input->post('mrng_wheat');
        $mrng_rice = $this->input->post('mrng_rice');
        $mrng_mung = $this->input->post('mrng_mung');
        $mrng_chnadal = $this->input->post('mrng_chnadal');
        $mrng_turdal = $this->input->post('mrng_turdal');
        $mrng_btbtidal = $this->input->post('mrng_btbtidal');
        $mrng_uddiddal = $this->input->post('mrng_uddiddal');
        $mrng_srpan = $this->input->post('mrng_srpan');
        $mrng_tikhat = $this->input->post('mrng_tikhat');
        $mrng_hld = $this->input->post('mrng_hld');
        $mrng_jira = $this->input->post('mrng_jira');
        $mrng_masala = $this->input->post('mrng_masala');
        $mrng_salt = $this->input->post('mrng_salt');
        $mrng_shengdana = $this->input->post('mrng_shengdana');
        $mrng_sugar = $this->input->post('mrng_sugar');
        $mrng_fa_oil = $this->input->post('mrng_fa_oil');
        $mrng_matki = $this->input->post('mrng_matki');
        $mrng_barbiti = $this->input->post('mrng_barbiti');
        $mrng_chna = $this->input->post('mrng_chna');
        $mrng_ka_soap = $this->input->post('mrng_ka_soap');
        $mrng_a_soap = $this->input->post('mrng_a_soap');
        $mrng_kho_oil = $this->input->post('mrng_kho_oil');
        $mrng_majan = $this->input->post('mrng_majan');
        $mrng_eggs = $this->input->post('mrng_eggs');
        $mrng_fruits = $this->input->post('mrng_fruits');
        $mrng_mutton = $this->input->post('mrng_mutton');
        $mrng_fist = $this->input->post('mrng_fist');
        $mrng_milk = $this->input->post('mrng_milk');
        $mrng_vegetables1 = $this->input->post('mrng_vegetables1');
        $mrng_vegetables2 = $this->input->post('mrng_vegetables2');
        $mrng_garlic = $this->input->post('mrng_garlic');
        $mrng_onion = $this->input->post('mrng_onion');

        $mrng_pohe = $this->input->post('mrng_pohe');
        

      
          $morning_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $mrng_wheat,
               'rice' =>  $mrng_rice ,
               'mugDaal' =>  $mrng_mung ,
               'chnaDaal' =>  $mrng_chnadal ,
               'turDaal' =>  $mrng_turdal ,
               'btbatiDaal' =>  $mrng_btbtidal,
               'ududDaal' =>  $mrng_uddiddal,
               'sarpan' =>  $mrng_srpan ,
               'chiiliPowder' =>  $mrng_tikhat ,
               'turmeric' =>  $mrng_hld ,
               'cumin' =>  $mrng_jira ,
               'spice' =>  $mrng_masala ,
               'salt' =>  $mrng_salt ,
               'pinut' =>  $mrng_shengdana ,
               'sugar' =>  $mrng_sugar ,
               'fa_oil' =>  $mrng_fa_oil ,
               'matki' =>  $mrng_matki,
               'barbiti' =>  $mrng_barbiti,
               'chna' =>  $mrng_chna,
                'clothSoap' => $mrng_ka_soap,
               'BeathSoap' =>  $mrng_a_soap,
               'coconutOil' =>  $mrng_kho_oil ,
               'majan' =>  $mrng_majan ,
               'eggs' =>  $mrng_eggs,
              'fruits' =>   $mrng_fruits,
               'mutton' =>  $mrng_mutton ,
               'fist' =>  $mrng_fist ,
               'milk' =>  $mrng_milk ,
               'vegitables1' =>  $mrng_vegetables1,
               'vegitables2' =>  $mrng_vegetables2,
              'garlic' =>   $mrng_garlic,
              'onion' =>   $mrng_onion,    
               'pohe' =>   $mrng_pohe
            
          );
           $evng_wheat = $this->input->post('evng_wheat');

        $evng_rice = $this->input->post('evng_rice');
        
        $evng_mung = $this->input->post('evng_mung');
        $evng_chnadal = $this->input->post('evng_chnadal');
        $evng_turdal = $this->input->post('evng_turdal');
        $evng_btbtidal = $this->input->post('evng_btbtidal');
        $evng_uddiddal = $this->input->post('evng_uddiddal');
        $evng_srpan = $this->input->post('evng_srpan');
        $evng_tikhat = $this->input->post('evng_tikhat');
        $evng_hld = $this->input->post('evng_hld');
        $evng_jira = $this->input->post('evng_jira');
        $evng_masala = $this->input->post('evng_masala');
        $evng_salt = $this->input->post('evng_salt');
        $evng_shengdana = $this->input->post('evng_shengdana');
        $evng_sugar = $this->input->post('evng_sugar');
        $evng_fa_oil = $this->input->post('evng_fa_oil');
        $evng_matki = $this->input->post('evng_matki');
        $evng_barbiti = $this->input->post('evng_barbiti');
        $evng_chna = $this->input->post('evng_chna');
        $evng_ka_soap = $this->input->post('evng_ka_soap');
        $evng_a_soap = $this->input->post('evng_a_soap');
        $evng_kho_oil = $this->input->post('evng_kho_oil');
        $evng_majan = $this->input->post('evng_majan');
        $evng_eggs = $this->input->post('evng_eggs');
        $evng_fruits = $this->input->post('evng_fruits');
        $evng_mutton = $this->input->post('evng_mutton');
        $evng_fist = $this->input->post('evng_fist');
        $evng_milk = $this->input->post('evng_milk');
        $evng_vegetables1 = $this->input->post('evng_vegetables1');
        $evng_vegetables2 = $this->input->post('evng_vegetables2');
        $evng_garlic = $this->input->post('evng_garlic');
        $evng_onion = $this->input->post('evng_onion');

        $evng_pohe = $this->input->post('evng_pohe');

      
          $evening_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $evng_wheat,
               'rice' =>  $evng_rice ,
               'mugDaal' =>  $evng_mung ,
               'chnaDaal' =>  $evng_chnadal ,
               'turDaal' =>  $evng_turdal ,
               'btbatiDaal' =>  $evng_btbtidal,
               'ududDaal' =>  $evng_uddiddal,
               'sarpan' =>  $evng_srpan ,
               'chiiliPowder' =>  $evng_tikhat ,
               'turmeric' =>  $evng_hld ,
               'cumin' =>  $evng_jira ,
               'spice' =>  $evng_masala ,
               'salt' =>  $evng_salt ,
               'pinut' =>  $evng_shengdana ,
               'sugar' =>  $evng_sugar ,
               'fa_oil' =>  $evng_fa_oil ,
               'matki' =>  $evng_matki,
               'barbiti' =>  $evng_barbiti,
               'chna' =>  $evng_chna,
                'clothSoap' => $evng_ka_soap,
               'BeathSoap' =>  $evng_a_soap,
               'coconutOil' =>  $evng_kho_oil ,
               'majan' =>  $evng_majan ,
               'eggs' =>  $evng_eggs,
              'fruits' =>   $evng_fruits,
               'mutton' =>  $evng_mutton ,
               'fist' =>  $evng_fist ,
               'milk' =>  $evng_milk ,
               'vegitables1' =>  $evng_vegetables1,
               'vegitables2' =>  $evng_vegetables2,
              'garlic' =>   $evng_garlic,
              'onion' =>   $evng_onion,
          'pohe' =>   $evng_pohe
              
          );
        $totl2_wheat = $this->input->post('totl2_wheat');
        $totl2_rice = $this->input->post('totl2_rice');
        $totl2_mung = $this->input->post('totl2_mung');
        $totl2_chnadal = $this->input->post('totl2_chnadal');
        $totl2_turdal = $this->input->post('totl2_turdal');
        $totl2_btbtidal = $this->input->post('totl2_btbtidal');
        $totl2_uddiddal = $this->input->post('totl2_uddiddal');
        $totl2_srpan = $this->input->post('totl2_srpan');
        $totl2_tikhat = $this->input->post('totl2_tikhat');
        $totl2_hld = $this->input->post('totl2_hld');
        $totl2_jira = $this->input->post('totl2_jira');
        $totl2_masala = $this->input->post('totl2_masala');
        $totl2_salt = $this->input->post('totl2_salt');
        $totl2_shengdana = $this->input->post('totl2_shengdana');
        $totl2_sugar = $this->input->post('totl2_sugar');
        $totl2_fa_oil = $this->input->post('totl2_fa_oil');
        $totl2_matki = $this->input->post('totl2_matki');
        $totl2_barbiti = $this->input->post('totl2_barbiti');
        $totl2_chna = $this->input->post('totl2_chna');
        $totl2_ka_soap = $this->input->post('totl2_ka_soap');
        $totl2_a_soap = $this->input->post('totl2_a_soap');
        $totl2_kho_oil = $this->input->post('totl2_kho_oil');
        $totl2_majan = $this->input->post('totl2_majan');
        $totl2_eggs = $this->input->post('totl2_eggs');
        $totl2_fruits = $this->input->post('totl2_fruits');
        $totl2_mutton = $this->input->post('totl2_mutton');
        $totl2_fist = $this->input->post('totl2_fist');
        $totl2_milk = $this->input->post('totl2_milk');
        $totl2_vegetables1 = $this->input->post('totl2_vegetables1');
        $totl2_vegetables2 = $this->input->post('totl2_vegetables2');
        $totl2_garlic = $this->input->post('totl2_garlic');
        $totl2_onion = $this->input->post('totl2_onion');

        $totl2_pohe = $this->input->post('totl2_pohe');
       

      
          $total2_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
             
               'wheat' => $totl2_wheat,
               'rice' =>  $totl2_rice ,
               'mugDaal' =>  $totl2_mung ,
               'chnaDaal' =>  $totl2_chnadal ,
               'turDaal' =>  $totl2_turdal ,
               'btbatiDaal' =>  $totl2_btbtidal,
               'ududDaal' =>  $totl2_uddiddal,
               'sarpan' =>  $totl2_srpan ,
               'chiiliPowder' =>  $totl2_tikhat ,
               'turmeric' =>  $totl2_hld ,
               'cumin' =>  $totl2_jira ,
               'spice' =>  $totl2_masala ,
               'salt' =>  $totl2_salt ,
               'pinut' =>  $totl2_shengdana ,
               'sugar' =>  $totl2_sugar ,
               'fa_oil' =>  $totl2_fa_oil ,
               'matki' =>  $totl2_matki,
               'barbiti' =>  $totl2_barbiti,
               'chna' =>  $totl2_chna,
                'clothSoap' => $totl2_ka_soap,
               'BeathSoap' =>  $totl2_a_soap,
               'coconutOil' =>  $totl2_kho_oil ,
               'majan' =>  $totl2_majan ,
               'eggs' =>  $totl2_eggs,
              'fruits' =>   $totl2_fruits,
               'mutton' =>  $totl2_mutton ,
               'fist' =>  $totl2_fist ,
               'milk' =>  $totl2_milk ,
               'vegitables1' =>  $totl2_vegetables1,
               'vegitables2' =>  $totl2_vegetables2,
              'garlic' =>   $totl2_garlic,
              'onion' =>   $totl2_onion,

              'pohe' =>   $totl2_pohe
              
          );
             $rem2_wheat = $this->input->post('rem2_wheat');
        $rem2_rice = $this->input->post('rem2_rice');
        $rem2_mung = $this->input->post('rem2_mung');
        $rem2_chnadal = $this->input->post('rem2_chnadal');
        $rem2_turdal = $this->input->post('rem2_turdal');
        $rem2_btbtidal = $this->input->post('rem2_btbtidal');
        $rem2_uddiddal = $this->input->post('rem2_uddiddal');
        $rem2_srpan = $this->input->post('rem2_srpan');
        $rem2_tikhat = $this->input->post('rem2_tikhat');
        $rem2_hld = $this->input->post('rem2_hld');
        $rem2_jira = $this->input->post('rem2_jira');
        $rem2_masala = $this->input->post('rem2_masala');
        $rem2_salt = $this->input->post('rem2_salt');
        $rem2_shengdana = $this->input->post('rem2_shengdana');
        $rem2_sugar = $this->input->post('rem2_sugar');
        $rem2_fa_oil = $this->input->post('rem2_fa_oli');
        $rem2_matki = $this->input->post('rem2_matki');
        $rem2_barbiti = $this->input->post('rem2_barbiti');
        $rem2_chna = $this->input->post('rem2_chna');
        $rem2_ka_soap = $this->input->post('rem2_ka_soap');
        $rem2_a_soap = $this->input->post('rem2_a_soap');
        $rem2_kho_oil = $this->input->post('rem2_kho_oil');
        $rem2_majan = $this->input->post('rem2_majan');
        $rem2_eggs = $this->input->post('rem2_eggs');
        $rem2_fruits = $this->input->post('rem2_fruits');
        $rem2_mutton = $this->input->post('rem2_mutton');
        $rem2_fist = $this->input->post('rem2_fist');
        $rem2_milk = $this->input->post('rem2_milk');
        $rem2_vegetables1 = $this->input->post('rem2_vegetables1');
        $rem2_vegetables2 = $this->input->post('rem2_vegetables2');
        $rem2_garlic = $this->input->post('rem2_garlic');
        $rem2_onion = $this->input->post('rem2_onion');

        $rem2_pohe = $this->input->post('rem2_pohe');
      

      
          $remaining2_data = array(
                        
              'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $rem2_wheat,
               'rice' =>  $rem2_rice ,
               'mugDaal' =>  $rem2_mung ,
               'chnaDaal' =>  $rem2_chnadal ,
               'turDaal' =>  $rem2_turdal ,
               'btbatiDaal' =>  $rem2_btbtidal,
               'ududDaal' =>  $rem2_uddiddal,
               'sarpan' =>  $rem2_srpan ,
               'chiiliPowder' =>  $rem2_tikhat ,
               'turmeric' =>  $rem2_hld ,
               'cumin' =>  $rem2_jira ,
               'spice' =>  $rem2_masala ,
               'salt' =>  $rem2_salt ,
               'pinut' =>  $rem2_shengdana ,
               'sugar' =>  $rem2_sugar ,
               'fa_oil' => $rem2_fa_oil,
               'matki' =>  $rem2_matki,
               'barbiti' =>  $rem2_barbiti,
               'chna' =>  $rem2_chna,
                'clothSoap' => $rem2_ka_soap,
               'BeathSoap' =>  $rem2_a_soap,
               'coconutOil' =>  $rem2_kho_oil ,
               'majan' =>  $rem2_majan ,
               'eggs' =>  $rem2_eggs,
              'fruits' =>   $rem2_fruits,
               'mutton' =>  $rem2_mutton ,
               'fist' =>  $rem2_fist ,
               'milk' =>  $rem2_milk ,
               'vegitables1' =>  $rem2_vegetables1,
               'vegitables2' =>  $rem2_vegetables2,
              'garlic' =>   $rem2_garlic,
              'onion' =>   $rem2_onion,
              
              'pohe' =>   $rem2_pohe
              
          );
         $attendance = $this->input->post('attendance');
         $oneToFive = $this->input->post('oneToFive');
         $sixToSeven = $this->input->post('sixToSeven');
        

         $totalAttendence = $this->input->post('totalAttendence');
         $primaryAttendenceData= array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
            
               'attendence' => $attendance,
              'classOneToFivePresent' => $oneToFive,
                 'classSixToSevenPresent' => $sixToSeven,
                     
             'total' => $totalAttendence
           );

        $query_res = $this->InsertDataModel->insertData($data);
         $IncomeData = $this->InsertDataModel->insertIncomeData($income_Data);
         $Total1Data = $this->InsertDataModel->insertTotal1Data($total1_data);
         $MorningData = $this->InsertDataModel->insertMorningData($morning_data);
         $EveningData = $this->InsertDataModel->insertEveningData($evening_data);
         $Total2Data = $this->InsertDataModel->insertTotal2Data($total2_data);
         $Remaining2Data = $this->InsertDataModel->insertRemaining2Ddata($remaining2_data);
         $primaryAttendenceData = $this->InsertDataModel->insertPrimaryAttendenceData($primaryAttendenceData);

      if($query_res == true || $IncomeData == true || $Total1Data == true || 
            $MorningData == true || $EveningData == true || $Total2Data == true
         || $Remaining2Data == true ||  $primaryAttendenceData == true){
                 $result = array(
                    'success' => true
                );
         } else{
              $result = array(
                    'fail' => true
                );
         }
        echo json_encode($result);
      }   
      function updateData(){
         $rem1_wheat = $this->input->post('rem1_wheat');
        $rem1_rice = $this->input->post('rem1_rice');
        $rem1_mung = $this->input->post('rem1_mung');
        $rem1_chnadal = $this->input->post('rem1_chnadal');
        $rem1_turdal = $this->input->post('rem1_turdal');
        $rem1_btbtidal = $this->input->post('rem1_btbtidal');
        $rem1_uddiddal = $this->input->post('rem1_uddiddal');
        $rem1_srpan = $this->input->post('rem1_srpan');
        $rem1_tikhat = $this->input->post('rem1_tikhat');
        $rem1_hld = $this->input->post('rem1_hld');
        $rem1_jira = $this->input->post('rem1_jira');
        $rem1_masala = $this->input->post('rem1_masala');
        $rem1_salt = $this->input->post('rem1_salt');
        $rem1_shengdana = $this->input->post('rem1_shengdana');
        $rem1_sugar = $this->input->post('rem1_sugar');
        $rem1_fa_oil = $this->input->post('rem1_fa_oil');
        $rem1_matki = $this->input->post('rem1_matki');
        $rem1_barbiti = $this->input->post('rem1_barbiti');
        $rem1_chna = $this->input->post('rem1_chna');
        $rem1_ka_soap = $this->input->post('rem1_ka_soap');
        $rem1_a_soap = $this->input->post('rem1_a_soap');
        $rem1_kho_oil = $this->input->post('rem1_kho_oil');
        $rem1_majan = $this->input->post('rem1_majan');
        $rem1_eggs = $this->input->post('rem1_eggs');
        $rem1_fruits = $this->input->post('rem1_fruits');
        $rem1_mutton = $this->input->post('rem1_mutton');
        $rem1_fist = $this->input->post('rem1_fist');
        $rem1_milk = $this->input->post('rem1_milk');
        $rem1_vegetables1 = $this->input->post('rem1_vegetables1');
        $rem1_vegetables2 = $this->input->post('rem1_vegetables2');
        $rem1_garlic = $this->input->post('rem1_garlic');
        $rem1_onion = $this->input->post('rem1_onion');
        

        $year = $this->input->post('year');
       
        $month = $this->input->post('months');
        $date = $this->input->post('date');
         $insertDataArray = Array(
                'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
        );
        $data = array(
                'year' => $year,
               'month' =>  $month,
               'date' =>  $date, 
               'wheat' => $rem1_wheat,
               'rice' =>  $rem1_rice ,
               'mugDaal' =>  $rem1_mung ,
               'chnaDaal' =>  $rem1_chnadal ,
               'turDaal' =>  $rem1_turdal ,
               'btbatiDaal' =>  $rem1_btbtidal,
               'ududDaal' =>  $rem1_uddiddal,
               'sarpan' =>  $rem1_srpan ,
               'chiiliPowder' =>  $rem1_tikhat ,
               'turmeric' =>  $rem1_hld ,
               'cumin' =>  $rem1_jira ,
               'spice' =>  $rem1_masala ,
               'salt' =>  $rem1_salt ,
               'pinut' =>  $rem1_shengdana ,
               'sugar' =>  $rem1_sugar ,
               'fa_oil' =>  $rem1_fa_oil ,
               'matki' =>  $rem1_matki,
               'barbiti' =>  $rem1_barbiti,
               'chna' =>  $rem1_chna,
                'clothSoap' => $rem1_ka_soap,
               'BeathSoap' =>  $rem1_a_soap,
               'coconutOil' =>  $rem1_kho_oil ,
               'majan' =>  $rem1_majan ,
               'eggs' =>  $rem1_eggs,
              'fruits' =>   $rem1_fruits,
               'mutton' =>  $rem1_mutton ,
               'fist' =>  $rem1_fist ,
               'milk' =>  $rem1_milk ,
               'vegitables1' =>  $rem1_vegetables1,
               'vegitables2' =>  $rem1_vegetables2,
              'garlic' =>   $rem1_garlic,
              'onion' =>   $rem1_onion
                      );


         $in_wheat = $this->input->post('in_wheat');
        $in_rice = $this->input->post('in_rice');
        $in_mung = $this->input->post('in_mung');
        $in_chnadal = $this->input->post('in_chnadal');
        $in_turdal = $this->input->post('in_turdal');
        $in_btbtidal = $this->input->post('in_btbtidal');
        $in_uddiddal = $this->input->post('in_uddiddal');
        $in_srpan = $this->input->post('in_srpan');
        $in_tikhat = $this->input->post('in_tikhat');
        $in_hld = $this->input->post('in_hld');
        $in_jira = $this->input->post('in_jira');
        $in_masala = $this->input->post('in_masala');
        $in_salt = $this->input->post('in_salt');
        $in_shengdana = $this->input->post('in_shengdana');
        $in_sugar = $this->input->post('in_sugar');
        $in_fa_oil = $this->input->post('in_fa_oil');
        $in_matki = $this->input->post('in_matki');
        $in_barbiti = $this->input->post('in_barbiti');
        $in_chna = $this->input->post('in_chna');
        $in_ka_soap = $this->input->post('in_ka_soap');
        $in_a_soap = $this->input->post('in_a_soap');
        $in_kho_oil = $this->input->post('in_kho_oil');
        $in_majan = $this->input->post('in_majan');
        $in_eggs = $this->input->post('in_eggs');
        $in_fruits = $this->input->post('in_fruits');
        $in_mutton = $this->input->post('in_mutton');
        $in_fist = $this->input->post('in_fist');
        $in_milk = $this->input->post('in_milk');
        $in_vegetables1 = $this->input->post('in_vegetables1');
        $in_vegetables2 = $this->input->post('in_vegetables2');
        $in_garlic = $this->input->post('in_garlic');
        $in_onion = $this->input->post('in_onion');
        
      
        $income_Data = array(
            'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
            
               'wheat' => $in_wheat,
               'rice' =>  $in_rice ,
               'mugDaal' =>  $in_mung ,
               'chnaDaal' =>  $in_chnadal ,
               'turDaal' =>  $in_turdal ,
               'btbatiDaal' =>  $in_btbtidal,
               'ududDaal' =>  $in_uddiddal,
               'sarpan' =>  $in_srpan ,
               'chiiliPowder' =>  $in_tikhat ,
               'turmeric' =>  $in_hld ,
               'cumin' =>  $in_jira ,
               'spice' =>  $in_masala ,
               'salt' =>  $in_salt ,
               'pinut' =>  $in_shengdana ,
               'sugar' =>  $in_sugar ,
               'fa_oil' =>  $in_fa_oil ,
               'matki' =>  $in_matki,
               'barbiti' =>  $in_barbiti,
               'chna' =>  $in_chna,
                'clothSoap' => $in_ka_soap,
               'BeathSoap' =>  $in_a_soap,
               'coconutOil' =>  $in_kho_oil ,
               'majan' =>  $in_majan ,
               'eggs' =>  $in_eggs,
              'fruits' =>   $in_fruits,
               'mutton' =>  $in_mutton ,
               'fist' =>  $in_fist ,
               'milk' =>  $in_milk ,
               'vegitables1' =>  $in_vegetables1,
               'vegitables2' =>  $in_vegetables2,
              'garlic' =>   $in_garlic,
              'onion' =>   $in_onion
            

        );
         $totl1_wheat = $this->input->post('totl1_wheat');
        $totl1_rice = $this->input->post('totl1_rice');
        $totl1_mung = $this->input->post('totl1_mung');
        $totl1_chnadal = $this->input->post('totl1_chnadal');
        $totl1_turdal = $this->input->post('totl1_turdal');
        $totl1_btbtidal = $this->input->post('totl1_btbtidal');
        $totl1_uddiddal = $this->input->post('totl1_uddiddal');
        $totl1_srpan = $this->input->post('totl1_srpan');
        $totl1_tikhat = $this->input->post('totl1_tikhat');
        $totl1_hld = $this->input->post('totl1_hld');
        $totl1_jira = $this->input->post('totl1_jira');
        $totl1_masala = $this->input->post('totl1_masala');
        $totl1_salt = $this->input->post('totl1_salt');
        $totl1_shengdana = $this->input->post('totl1_shengdana');
        $totl1_sugar = $this->input->post('totl1_sugar');
        $totl1_fa_oil = $this->input->post('totl1_fa_oil');
        $totl1_matki = $this->input->post('totl1_matki');
        $totl1_barbiti = $this->input->post('totl1_barbiti');
        $totl1_chna = $this->input->post('totl1_chna');
        $totl1_ka_soap = $this->input->post('totl1_ka_soap');
        $totl1_a_soap = $this->input->post('totl1_a_soap');
        $totl1_kho_oil = $this->input->post('totl1_kho_oil');
        $totl1_majan = $this->input->post('totl1_majan');
        $totl1_eggs = $this->input->post('totl1_eggs');
        $totl1_fruits = $this->input->post('totl1_fruits');
        $totl1_mutton = $this->input->post('totl1_mutton');
        $totl1_fist = $this->input->post('totl1_fist');
        $totl1_milk = $this->input->post('totl1_milk');
        $totl1_vegetables1 = $this->input->post('totl1_vegetables1');
        $totl1_vegetables2 = $this->input->post('totl1_vegetables2');
        $totl1_garlic = $this->input->post('totl1_garlic');
        $totl1_onion = $this->input->post('totl1_onion');
       
      
          $total1_data = array(
                        
            'year' => $year,
               'month' =>  $month,
               'date' =>  $date,
          
               'wheat' => $totl1_wheat,
               'rice' =>  $totl1_rice ,
               'mugDaal' =>  $totl1_mung ,
               'chnaDaal' =>  $totl1_chnadal ,
               'turDaal' =>  $totl1_turdal ,
               'btbatiDaal' =>  $totl1_btbtidal,
               'ududDaal' =>  $totl1_uddiddal,
               'sarpan' =>  $totl1_srpan ,
               'chiiliPowder' =>  $totl1_tikhat ,
               'turmeric' =>  $totl1_hld ,
               'cumin' =>  $totl1_jira ,
               'spice' =>  $totl1_masala ,
               'salt' =>  $totl1_salt ,
               'pinut' =>  $totl1_shengdana ,
               'sugar' =>  $totl1_sugar ,
               'fa_oil' =>  $totl1_fa_oil ,
               'matki' =>  $totl1_matki,
               'barbiti' =>  $totl1_barbiti,
               'chna' =>  $totl1_chna,
                'clothSoap' => $totl1_ka_soap,
               'BeathSoap' =>  $totl1_a_soap,
               'coconutOil' =>  $totl1_kho_oil ,
               'majan' =>  $totl1_majan ,
               'eggs' =>  $totl1_eggs,
              'fruits' =>   $totl1_fruits,
               'mutton' =>  $totl1_mutton ,
               'fist' =>  $totl1_fist ,
               'milk' =>  $totl1_milk ,
               'vegitables1' =>  $totl1_vegetables1,
               'vegitables2' =>  $totl1_vegetables2,
              'garlic' =>   $totl1_garlic,
              'onion' =>   $totl1_onion
             
          );

           $mrng_wheat = $this->input->post('mrng_wheat');
        $mrng_rice = $this->input->post('mrng_rice');
        $mrng_mung = $this->input->post('mrng_mung');
        $mrng_chnadal = $this->input->post('mrng_chnadal');
        $mrng_turdal = $this->input->post('mrng_turdal');
        $mrng_btbtidal = $this->input->post('mrng_btbtidal');
        $mrng_uddiddal = $this->input->post('mrng_uddiddal');
        $mrng_srpan = $this->input->post('mrng_srpan');
        $mrng_tikhat = $this->input->post('mrng_tikhat');
        $mrng_hld = $this->input->post('mrng_hld');
        $mrng_jira = $this->input->post('mrng_jira');
        $mrng_masala = $this->input->post('mrng_masala');
        $mrng_salt = $this->input->post('mrng_salt');
        $mrng_shengdana = $this->input->post('mrng_shengdana');
        $mrng_sugar = $this->input->post('mrng_sugar');
        $mrng_fa_oil = $this->input->post('mrng_fa_oil');
        $mrng_matki = $this->input->post('mrng_matki');
        $mrng_barbiti = $this->input->post('mrng_barbiti');
        $mrng_chna = $this->input->post('mrng_chna');
        $mrng_ka_soap = $this->input->post('mrng_ka_soap');
        $mrng_a_soap = $this->input->post('mrng_a_soap');
        $mrng_kho_oil = $this->input->post('mrng_kho_oil');
        $mrng_majan = $this->input->post('mrng_majan');
        $mrng_eggs = $this->input->post('mrng_eggs');
        $mrng_fruits = $this->input->post('mrng_fruits');
        $mrng_mutton = $this->input->post('mrng_mutton');
        $mrng_fist = $this->input->post('mrng_fist');
        $mrng_milk = $this->input->post('mrng_milk');
        $mrng_vegetables1 = $this->input->post('mrng_vegetables1');
        $mrng_vegetables2 = $this->input->post('mrng_vegetables2');
        $mrng_garlic = $this->input->post('mrng_garlic');
        $mrng_onion = $this->input->post('mrng_onion');
       
      
          $morning_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $mrng_wheat,
               'rice' =>  $mrng_rice ,
               'mugDaal' =>  $mrng_mung ,
               'chnaDaal' =>  $mrng_chnadal ,
               'turDaal' =>  $mrng_turdal ,
               'btbatiDaal' =>  $mrng_btbtidal,
               'ududDaal' =>  $mrng_uddiddal,
               'sarpan' =>  $mrng_srpan ,
               'chiiliPowder' =>  $mrng_tikhat ,
               'turmeric' =>  $mrng_hld ,
               'cumin' =>  $mrng_jira ,
               'spice' =>  $mrng_masala ,
               'salt' =>  $mrng_salt ,
               'pinut' =>  $mrng_shengdana ,
               'sugar' =>  $mrng_sugar ,
               'fa_oil' =>  $mrng_fa_oil ,
               'matki' =>  $mrng_matki,
               'barbiti' =>  $mrng_barbiti,
               'chna' =>  $mrng_chna,
                'clothSoap' => $mrng_ka_soap,
               'BeathSoap' =>  $mrng_a_soap,
               'coconutOil' =>  $mrng_kho_oil ,
               'majan' =>  $mrng_majan ,
               'eggs' =>  $mrng_eggs,
              'fruits' =>   $mrng_fruits,
               'mutton' =>  $mrng_mutton ,
               'fist' =>  $mrng_fist ,
               'milk' =>  $mrng_milk ,
               'vegitables1' =>  $mrng_vegetables1,
               'vegitables2' =>  $mrng_vegetables2,
              'garlic' =>   $mrng_garlic,
              'onion' =>   $mrng_onion
              
          );
           $evng_wheat = $this->input->post('evng_wheat');
        $evng_rice = $this->input->post('evng_rice');
        $evng_mung = $this->input->post('evng_mung');
        $evng_chnadal = $this->input->post('evng_chnadal');
        $evng_turdal = $this->input->post('evng_turdal');
        $evng_btbtidal = $this->input->post('evng_btbtidal');
        $evng_uddiddal = $this->input->post('evng_uddiddal');
        $evng_srpan = $this->input->post('evng_srpan');
        $evng_tikhat = $this->input->post('evng_tikhat');
        $evng_hld = $this->input->post('evng_hld');
        $evng_jira = $this->input->post('evng_jira');
        $evng_masala = $this->input->post('evng_masala');
        $evng_salt = $this->input->post('evng_salt');
        $evng_shengdana = $this->input->post('evng_shengdana');
        $evng_sugar = $this->input->post('evng_sugar');
        $evng_fa_oil = $this->input->post('evng_fa_oil');
        $evng_matki = $this->input->post('evng_matki');
        $evng_barbiti = $this->input->post('evng_barbiti');
        $evng_chna = $this->input->post('evng_chna');
        $evng_ka_soap = $this->input->post('evng_ka_soap');
        $evng_a_soap = $this->input->post('evng_a_soap');
        $evng_kho_oil = $this->input->post('evng_kho_oil');
        $evng_majan = $this->input->post('evng_majan');
        $evng_eggs = $this->input->post('evng_eggs');
        $evng_fruits = $this->input->post('evng_fruits');
        $evng_mutton = $this->input->post('evng_mutton');
        $evng_fist = $this->input->post('evng_fist');
        $evng_milk = $this->input->post('evng_milk');
        $evng_vegetables1 = $this->input->post('evng_vegetables1');
        $evng_vegetables2 = $this->input->post('evng_vegetables2');
        $evng_garlic = $this->input->post('evng_garlic');
        $evng_onion = $this->input->post('evng_onion');
       

      
          $evening_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $evng_wheat,
               'rice' =>  $evng_rice ,
               'mugDaal' =>  $evng_mung ,
               'chnaDaal' =>  $evng_chnadal ,
               'turDaal' =>  $evng_turdal ,
               'btbatiDaal' =>  $evng_btbtidal,
               'ududDaal' =>  $evng_uddiddal,
               'sarpan' =>  $evng_srpan ,
               'chiiliPowder' =>  $evng_tikhat ,
               'turmeric' =>  $evng_hld ,
               'cumin' =>  $evng_jira ,
               'spice' =>  $evng_masala ,
               'salt' =>  $evng_salt ,
               'pinut' =>  $evng_shengdana ,
               'sugar' =>  $evng_sugar ,
               'fa_oil' =>  $evng_fa_oil ,
               'matki' =>  $evng_matki,
               'barbiti' =>  $evng_barbiti,
               'chna' =>  $evng_chna,
                'clothSoap' => $evng_ka_soap,
               'BeathSoap' =>  $evng_a_soap,
               'coconutOil' =>  $evng_kho_oil ,
               'majan' =>  $evng_majan ,
               'eggs' =>  $evng_eggs,
              'fruits' =>   $evng_fruits,
               'mutton' =>  $evng_mutton ,
               'fist' =>  $evng_fist ,
               'milk' =>  $evng_milk ,
               'vegitables1' =>  $evng_vegetables1,
               'vegitables2' =>  $evng_vegetables2,
              'garlic' =>   $evng_garlic,
              'onion' =>   $evng_onion
              
          );
        $totl2_wheat = $this->input->post('totl2_wheat');
        $totl2_rice = $this->input->post('totl2_rice');
        $totl2_mung = $this->input->post('totl2_mung');
        $totl2_chnadal = $this->input->post('totl2_chnadal');
        $totl2_turdal = $this->input->post('totl2_turdal');
        $totl2_btbtidal = $this->input->post('totl2_btbtidal');
        $totl2_uddiddal = $this->input->post('totl2_uddiddal');
        $totl2_srpan = $this->input->post('totl2_srpan');
        $totl2_tikhat = $this->input->post('totl2_tikhat');
        $totl2_hld = $this->input->post('totl2_hld');
        $totl2_jira = $this->input->post('totl2_jira');
        $totl2_masala = $this->input->post('totl2_masala');
        $totl2_salt = $this->input->post('totl2_salt');
        $totl2_shengdana = $this->input->post('totl2_shengdana');
        $totl2_sugar = $this->input->post('totl2_sugar');
        $totl2_fa_oil = $this->input->post('totl2_fa_oil');
        $totl2_matki = $this->input->post('totl2_matki');
        $totl2_barbiti = $this->input->post('totl2_barbiti');
        $totl2_chna = $this->input->post('totl2_chna');
        $totl2_ka_soap = $this->input->post('totl2_ka_soap');
        $totl2_a_soap = $this->input->post('totl2_a_soap');
        $totl2_kho_oil = $this->input->post('totl2_kho_oil');
        $totl2_majan = $this->input->post('totl2_majan');
        $totl2_eggs = $this->input->post('totl2_eggs');
        $totl2_fruits = $this->input->post('totl2_fruits');
        $totl2_mutton = $this->input->post('totl2_mutton');
        $totl2_fist = $this->input->post('totl2_fist');
        $totl2_milk = $this->input->post('totl2_milk');
        $totl2_vegetables1 = $this->input->post('totl2_vegetables1');
        $totl2_vegetables2 = $this->input->post('totl2_vegetables2');
        $totl2_garlic = $this->input->post('totl2_garlic');
        $totl2_onion = $this->input->post('totl2_onion');
       
      
          $total2_data = array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
             
               'wheat' => $totl2_wheat,
               'rice' =>  $totl2_rice ,
               'mugDaal' =>  $totl2_mung ,
               'chnaDaal' =>  $totl2_chnadal ,
               'turDaal' =>  $totl2_turdal ,
               'btbatiDaal' =>  $totl2_btbtidal,
               'ududDaal' =>  $totl2_uddiddal,
               'sarpan' =>  $totl2_srpan ,
               'chiiliPowder' =>  $totl2_tikhat ,
               'turmeric' =>  $totl2_hld ,
               'cumin' =>  $totl2_jira ,
               'spice' =>  $totl2_masala ,
               'salt' =>  $totl2_salt ,
               'pinut' =>  $totl2_shengdana ,
               'sugar' =>  $totl2_sugar ,
               'fa_oil' =>  $totl2_fa_oil ,
               'matki' =>  $totl2_matki,
               'barbiti' =>  $totl2_barbiti,
               'chna' =>  $totl2_chna,
                'clothSoap' => $totl2_ka_soap,
               'BeathSoap' =>  $totl2_a_soap,
               'coconutOil' =>  $totl2_kho_oil ,
               'majan' =>  $totl2_majan ,
               'eggs' =>  $totl2_eggs,
              'fruits' =>   $totl2_fruits,
               'mutton' =>  $totl2_mutton ,
               'fist' =>  $totl2_fist ,
               'milk' =>  $totl2_milk ,
               'vegitables1' =>  $totl2_vegetables1,
               'vegitables2' =>  $totl2_vegetables2,
              'garlic' =>   $totl2_garlic,
              'onion' =>   $totl2_onion
            
          );
             $rem2_wheat = $this->input->post('rem2_wheat');
        $rem2_rice = $this->input->post('rem2_rice');
        $rem2_mung = $this->input->post('rem2_mung');
        $rem2_chnadal = $this->input->post('rem2_chnadal');
        $rem2_turdal = $this->input->post('rem2_turdal');
        $rem2_btbtidal = $this->input->post('rem2_btbtidal');
        $rem2_uddiddal = $this->input->post('rem2_uddiddal');
        $rem2_srpan = $this->input->post('rem2_srpan');
        $rem2_tikhat = $this->input->post('rem2_tikhat');
        $rem2_hld = $this->input->post('rem2_hld');
        $rem2_jira = $this->input->post('rem2_jira');
        $rem2_masala = $this->input->post('rem2_masala');
        $rem2_salt = $this->input->post('rem2_salt');
        $rem2_shengdana = $this->input->post('rem2_shengdana');
        $rem2_sugar = $this->input->post('rem2_sugar');
        $rem2_fa_oil = $this->input->post('rem2_fa_oli');
        $rem2_matki = $this->input->post('rem2_matki');
        $rem2_barbiti = $this->input->post('rem2_barbiti');
        $rem2_chna = $this->input->post('rem2_chna');
        $rem2_ka_soap = $this->input->post('rem2_ka_soap');
        $rem2_a_soap = $this->input->post('rem2_a_soap');
        $rem2_kho_oil = $this->input->post('rem2_kho_oil');
        $rem2_majan = $this->input->post('rem2_majan');
        $rem2_eggs = $this->input->post('rem2_eggs');
        $rem2_fruits = $this->input->post('rem2_fruits');
        $rem2_mutton = $this->input->post('rem2_mutton');
        $rem2_fist = $this->input->post('rem2_fist');
        $rem2_milk = $this->input->post('rem2_milk');
        $rem2_vegetables1 = $this->input->post('rem2_vegetables1');
        $rem2_vegetables2 = $this->input->post('rem2_vegetables2');
        $rem2_garlic = $this->input->post('rem2_garlic');
        $rem2_onion = $this->input->post('rem2_onion');
        

      
          $remaining2_data = array(
                        
              'year' => $year,
              'month' => $month,
               'date' =>  $date,
              
               'wheat' => $rem2_wheat,
               'rice' =>  $rem2_rice ,
               'mugDaal' =>  $rem2_mung ,
               'chnaDaal' =>  $rem2_chnadal ,
               'turDaal' =>  $rem2_turdal ,
               'btbatiDaal' =>  $rem2_btbtidal,
               'ududDaal' =>  $rem2_uddiddal,
               'sarpan' =>  $rem2_srpan ,
               'chiiliPowder' =>  $rem2_tikhat ,
               'turmeric' =>  $rem2_hld ,
               'cumin' =>  $rem2_jira ,
               'spice' =>  $rem2_masala ,
               'salt' =>  $rem2_salt ,
               'pinut' =>  $rem2_shengdana ,
               'sugar' =>  $rem2_sugar ,
               'fa_oil' => $rem2_fa_oil,
               'matki' =>  $rem2_matki,
               'barbiti' =>  $rem2_barbiti,
               'chna' =>  $rem2_chna,
                'clothSoap' => $rem2_ka_soap,
               'BeathSoap' =>  $rem2_a_soap,
               'coconutOil' =>  $rem2_kho_oil ,
               'majan' =>  $rem2_majan ,
               'eggs' =>  $rem2_eggs,
              'fruits' =>   $rem2_fruits,
               'mutton' =>  $rem2_mutton ,
               'fist' =>  $rem2_fist ,
               'milk' =>  $rem2_milk ,
               'vegitables1' =>  $rem2_vegetables1,
               'vegitables2' =>  $rem2_vegetables2,
              'garlic' =>   $rem2_garlic,
              'onion' =>   $rem2_onion
        
          );
         $attendance = $this->input->post('attendance');
         $oneToFive = $this->input->post('oneToFive');
         $sixToSeven = $this->input->post('sixToSeven');
         

         $totalAttendence = $this->input->post('totalAttendence');
         $primaryAttendenceData= array(
                        
           'year' => $year,
              'month' => $month,
               'date' =>  $date,
            
               'attendence' => $attendance,
              'classOneToFivePresent' => $oneToFive,
                 'classSixToSevenPresent' => $sixToSeven,
                 
             'total' => $totalAttendence
           );
          $query_res = $this->InsertDataModel->updateData($data);
          $IncomeData = $this->InsertDataModel->updateIncomeData($income_Data);
          $Total1Data = $this->InsertDataModel->updateTotal1Data($total1_data);
          $MorningData = $this->InsertDataModel->updateMorningData($morning_data);
          $EveningData = $this->InsertDataModel->updateEveningData($evening_data);
          $Total2Data = $this->InsertDataModel->updateTotal2Data($total2_data);
         $Remaining2Data = $this->InsertDataModel->updateRemaining2Ddata($remaining2_data);
          $primaryAttendenceData = $this->InsertDataModel->updatePrimaryAttendenceData($primaryAttendenceData);

          if($query_res == true || $IncomeData == true || $Total1Data == true || 
            $MorningData == true || $EveningData == true || $Total2Data == true
         || $Remaining2Data == true ||  $primaryAttendenceData == true){
                 $result = array(
                    'success' => true
                );
         } else{
              $result = array(
                    'fail' => true
                );
         }
        echo json_encode($result);

      }
    
}








?>

