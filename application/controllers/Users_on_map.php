<?php  defined('BASEPATH') or die('No direct script access allowed');

class Users_on_map extends MY_Controller{


		function __construct(){
		parent:: __construct();
		 if(!$this->session->userdata('sb_auth'))
			redirect('app/login');	
	}


	function index(){
		$vars['options_users'] = db_to_options($this->Common_model->get_all(),'full_name','id');


		 $this->load->view('admin/template',array_merge([
			'page_title' => 'VIEW USERS ON MAP',
			'view' => 'admin/pages/view_users_on_map_view'
		],$vars));
	}

}