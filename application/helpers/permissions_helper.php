<?php 

/*
* Check if user can access the page
*/
function has_page_permission($perm_slugs = '', $user_id = 0){
	if($perm_slugs != ''){
		$perm_array = explode(',', $perm_slugs);
		$ci = get_instance();
		$ci->load->model('Permissions_model')
		->model('Login_model');

		if($ci->Login_model->is_user_loggedin()){

			// if user_id isnt specified use the current user id in the session
			if($user_id == 0)
				$user_id = $ci->Login_model->get_user_id();

			$permissions = $ci->Login_model->get_user_perms($user_id);

			$has_permission = false;
			foreach($perm_array as $perm_slug){
				if(isset($permissions['page-'.$perm_slug]))
					$has_permission = true;
			}
			
			return $has_permission;
		}

		return false;
	}
}

/*
* Check if user can do action
*/
function has_action_permission($perm_slugs = '', $user_id = 0){
	if($perm_slugs != ''){
		$perm_array = explode(',', $perm_slugs);
		$ci = get_instance();
		$ci->load->model('Permissions_model')
		->model('Login_model');

		if($ci->Login_model->is_user_loggedin()){

			if($user_id == 0)
				$user_id = $ci->Login_model->get_user_id();

			$permissions = $ci->Login_model->get_user_perms($user_id);

			$has_permission = false;
			foreach($perm_array as $perm_slug){
				if(isset($permissions['action-'.$perm_slug]))
					$has_permission = true;
			}
			
			return $has_permission;
		}

		return false;

	}
}