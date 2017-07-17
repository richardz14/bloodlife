<?php defined('BASEPATH') or die('No direct script access allowed');

class Dashboard extends MY_Controller{

	function __construct(){
		parent::__construct();

		if(!$this->session->userdata('sb_auth'))
			redirect('app/login');
	}


	function index(){ 
		$this->load->view('admin/template',[
			'page_title' => 'Dashboard',
			'view' => 'admin/pages/dashboard'
		]);
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