<?php  defined('BASEPATH') or die('No direct script access allowed');

class Users_action extends MY_Controller{

			function __construct(){
		parent:: __construct();
		 if(!$this->session->userdata('sb_auth'))
			redirect('app/login');	
	}


	function index(){

		 $this->load->view('admin/template',[
			'page_title' => 'USERS ACTION',
			'view' => 'admin/pages/users_action_view'
		]);
	}

}