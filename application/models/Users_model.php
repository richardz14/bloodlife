<?php defined('BASEPATH') or die('No direct script access allowed');

class Users_model extends CI_Model{

	function get($user_id){
		if($user_id > 0){
			$query = $this->db->select()
				->join('user_roles','user_roles.role_id = account_users.role_id')
				->where('user_id', $user_id)
					->get('account_users');

			if($query->num_rows() > 0)
				return $query->row();
		}

		return false;
	}

	function get_all(){
		$query = $this->db->select()
			->join('user_roles','user_roles.role_id = account_users.role_id')
			->where('account_users.x',0)
				->get('account_users');

		if($query->num_rows() > 0)
			return $query->result();

		return array();
	}


	function create($args = array()){
		if(!empty($args)){
			$insert = $this->db->insert('account_users', $args);

			if($insert)
			return $this->db->insert_id();
		}

		return false;
	}

	function update($user_id = 0,$args = array()){
		if($user_id > 0 && !empty($args)){
			return $this->db->update('account_users', $args, [
				'user_id' => $user_id
			]);
		}
	}



}