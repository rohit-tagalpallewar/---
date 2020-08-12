<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class createSessionDataController extends CI_Controller {

	public function createSession()
	{
		
            $userID = $this->input->post('userID');
            $pass = $this->input->post('pass');

           $postdata = $this->input->post();
            $data = array(
                'userID' =>   $userID,
                'pass' => $pass,
            );
             $this->session->set_userdata(array(
                    'userID' =>  $userID,
                    'pass' => $pass
             ));
             
             
	}
}
