<?php  defined('BASEPATH') or die('No direct script access allowed');

class Users_action extends MY_Controller{

			function __construct(){
		parent:: __construct();
		 if(!$this->session->userdata('sb_auth'))
			redirect('app/login');	

		$this->load->model('All_users_model');
	}


	function index(){
			$page = array();

			$this->table->set_heading('Full Name', 'Blood Type','Nickname','Action','Date of Action');
			$this->set_table_class('table table-bordered datatable');
			$all_users = $this->All_users_model->get_all_log();	

			$data = db_to_tabledata($all_users,[
					'full_name','blood_type','nickname','action',
					function($row){
						//$date_action = date('M/d/y  H:m:s',strtotime($row->date_action));
						$date_action = $row->date_action;
						return $date_action;

					}
				]);	
			$page['users'] = $this->table->generate($data);


		 $this->load->view('admin/template',array_merge([
			'page_title' => 'USERS ACTION',
			'view' => 'admin/pages/users_action_view'
		],$page));
	}

}