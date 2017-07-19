<?php defined('BASEPATH') or die('No direct script access allowed');

class Common_model extends CI_Model{
	

	function insert($table = '', $data = array()){
		$insert = $this->db->insert($table, $data);
		return $this->db->insert_id();
	}

	function update($table = '', $data = array(), $where = array()){
		return $this->db->update($table, $data, $where);
	}

	function delete($user_id){
		$this->db->where('id', $user_id);
		$this->db->delete('person_info');
	}

		function delete_deleted($user_id){
		$this->db->where('id', $user_id);
		$this->db->delete('deleted_users');
	}

		function get_all(){
		$query = $this->db->select()
            ->get('person_info');

		if($query->num_rows() > 0)
			return $query->result();

		return array();
	}	
	
	function get($id = 0){
		if ($id > 0) {
		$query = $this->db->select()
			->where('id',$id)
            ->get('person_info');

		if($query->num_rows() > 0)
			return $query->result();

		return array();
		}

	}	

}