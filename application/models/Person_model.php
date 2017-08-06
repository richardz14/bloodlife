<?php defined('BASEPATH') or die('No direct script access allowed');

class Person_model extends CI_Model{

	function count_all_users(){
	
			$query = $this->db->select('count(id) as total_users')
					->get('person_info');

			if($query->num_rows() > 0)
				return $query->row()->total_users;
			
			else
		return false;

			}

			function count_delete_users(){
	
			$query = $this->db->select('count(id) as total_users')
					->get('deleted_users');

			if($query->num_rows() > 0)
				return $query->row()->total_users;
			
			else
		return false;

			}

	}