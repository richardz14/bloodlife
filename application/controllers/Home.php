<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller {

	public function __construct(){
		parent::__construct();

		if(!$this->session->userdata('sb_auth'))
			redirect('app/login');
	}

	public function index(){
		$this->load->view('admin/template',[
			'page_title' => 'Dashboard',
			'view' => 'admin/pages/dashboard'
		]);
	}
}
