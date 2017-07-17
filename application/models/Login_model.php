<?php defined('BASEPATH') or die('No direct script access allowed');

class Login_model extends CI_Model{

	// Retrieve logged in user id
	function get_user_id(){
		if($this->is_user_loggedin())
			return $this->session->userdata('sb_auth')['user_id'];
		
		return 0;
	}

	function get_agent_user_id(){
		if($this->session->userdata('agent_login'))
			return $this->session->userdata('agent_login')['user_id'];

		return 0;
	}
    
    function get_loggedin_agent(){
        if($this->session->userdata('agent_login'))
            return $this->session->userdata('agent_login');
        
        return false;
    }

	function is_user_loggedin(){
		if($this->session->userdata('sb_auth'))
			return true;

		return false;
	}

	function get_user_perms($user_id = 0){
		if($user_id > 0){
			$this->load->model('Permissions_model');

			$query = $this->db->select('role_id')
				->where('account_users.user_id', $user_id)
				->get('account_users');

			if($query->num_rows() > 0)
				return $this->Permissions_model->get_role_permissions($query->row()->role_id);
		}
		return false;
	}

	function authenticate($username, $pwd){
		if($username != '' && $pwd != ''){
			$check = $this->db->select()->where([
				'user_name' => $username,
				'user_pwd' => md5($pwd),
				'x' => 0
			])->get('account_users');

			if($check->num_rows() > 0){
				$row = $check->row();
				// Set sessions
				$this->session->set_userdata('sb_auth',[
					'user_id' => $row->user_id,
					'user_name' => $row->user_name,
					'token' => md5($row->user_name)
				]);

				return true;
			}else
				return false;
			
		}
	}

	function authenticate_agent($username, $pwd){
		if($username != '' && $pwd != ''){
			$check = $this->db->select()->where([
				'agent_username' => $username,
				'agent_pwd' => md5($pwd),
				'status' => 1
			])->get('agent');

			if($check->num_rows() > 0){
				$row = $check->row();
				// Set sessions
				$this->session->set_userdata('agent_login',[
					'user_id' => $row->agent_id,
					'user_name' => $row->agent_username,
					'token' => md5($row->agent_username)
				]);
				return true;
			}else
				return false;

		}

		return false;
	}

	function get_user_by_login($username,$pwd){
		if($username != '' && $pwd != ''){
			$check = $this->db->select('user_id,user_name,role_id')->where([
				'user_name' => $username,
				'user_pwd' => md5($pwd)
			])->get('account_users');

			if($check->num_rows() > 0)
				return $check->row();

		}

		return false;
	}
}