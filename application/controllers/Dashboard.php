<?php defined('BASEPATH') or die('No direct script access allowed');

class Dashboard extends MY_Controller{

	function __construct(){
		parent::__construct();

				if(!$this->session->userdata('sb_auth'))
			redirect('app/login');
		
		$this->load->model('Person_model');
	}


	function index(){ 
			$var =array();
		$var['count_users'] = $this->Person_model->count_all_users();
			$var['deleted_users'] = $this->Person_model->count_delete_users();
	//print_r($all_users);die();

		$this->load->view('admin/template',array_merge([
			'page_title' => 'Dashboard',
			'view' => 'admin/pages/dashboard'
		],$var));
	}
   
    // This is for debugging purposes only
    function debug(){
        
        $this->load->library('email');
        
      
    }
    
	function set_manage_type($cat_id = 0){
		if($cat_id > 0){
            $this->load->model('Category_model');
            $category = $this->Category_model->get($cat_id);
            if($category != false){
              $this->session->set_userdata('admin_manage_type',[
                  'slug' => $category->category_slug,
                  'type' => $category->category_type,
                  'cat_id' => $category->category_id
              ]);   
              redirect('dashboard');
            }
			
		}
	}
}