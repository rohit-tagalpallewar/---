<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class logoutController extends CI_Controller {

	public function logout()
	{
		 $this->session->sess_destroy();
		 redirect(base_url('Main'));
	}
}
