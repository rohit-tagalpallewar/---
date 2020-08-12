<?php
defined('BASEPATH') OR exit('No direct script access allowed');

 

class getHSecRemainingDataController extends CI_Controller {
public function __construct() {
        parent::__construct();
        $this->load->model('getHigherSecRemainingDataModel');   
         
    }
	public function getRemainingData()
	{
		$date1 = $this->input->post('date1');
		// $selected_month = $this->input->post('selected_month');
		// $selected_year = $this->input->post('selected_year');

			//echo "dc".$date1;
		  $data = array(
            'date' => $date1
        	);
		  $res['query_res'] = $this->getHigherSecRemainingDataModel->getRemainingData($data); 
		 if($res['query_res']){
		   $res['result'] = array(
 		     "success" => true
		     );
		 }else {
		  
		   $res['result'] = array(
 		     "fail" => true
		     );
		 }
            echo json_encode($res);
	}
}
