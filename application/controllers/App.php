<?php  defined('BASEPATH') or die('No direct script access allowed');

class App extends MY_Controller{

	function __construct(){
		parent::__construct();
		$this->load->model('Login_model');
	}

	function index(){}

	function setup(){
		/*$this->db->insert('account_users',[
			'user_name' => 'admin',
			'role_id' => 1,
			'user_pwd' => md5('A123456789')
		]);
		redirect('app/login');*/
	}
    
    function change_password(){
        $page_vars = array();
        if(!$this->session->userdata('sb_auth'))
			redirect('app/login');
        
        
        $this->form_validation->set_rules('cur_pwd','Current Password','required|trim')
            ->set_rules('new_pwd','New Password','required|trim')
            ->set_rules('new_pwd2','Confirm Password','required|matches[new_pwd]|trim');
        
        if($this->form_validation->run()){
            $cur_pwd = $this->input->post('cur_pwd');
            $new_pwd = $this->input->post('new_pwd');
            $new_pwd2 = $this->input->post('new_pwd2');
            
            $this->load->model('Security_model');
                
            $user_id = $this->session->userdata('sb_auth')['user_id'];
            $change_pwd = $this->Security_model->change_password($user_id, $cur_pwd, $new_pwd);
            
            if($change_pwd){
                message('success','Password was successfully changed.');
                redirect(current_url());
            }else{
                message('danger','Failed to update password. Current password is invalid.');
            }
        }
        
        $this->load->view('admin/template',[
			'page_title' => 'Change Password',
			'view' => 'admin/pages/app/change-password'
		]);
    }


	function login(){
		$page_vars = array();

		if($this->session->userdata('sb_auth'))
			redirect('dashboard');

		$this->form_validation->set_rules('username','Username','required|trim')
		->set_rules('pwd','Password','required|trim');

		if($this->form_validation->run()){
			$username = $this->input->post('username');
			$pwd = $this->input->post('pwd');

			$check = $this->Login_model->authenticate($username, $pwd);

			if($check)
				redirect('dashboard');
			else
				message('danger','Invalid username/password!');
		}

		/* View */
		$page_vars['page_title'] = 'Login';
		$this->load->view('admin/common/header', $page_vars);
		$this->load->view('admin/pages/login');
		$this->load->view('admin/common/footer');
	}

	function logout(){
		$this->session->sess_destroy();
		redirect('app/login');
	}
}