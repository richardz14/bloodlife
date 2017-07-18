<?php defined('BASEPATH') or die('No direct script access allowed');

class All_users_model extends CI_Model{


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