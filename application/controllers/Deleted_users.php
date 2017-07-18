<?php defined('BASEPATH') or die('No direct script access allowed');

class Deleted_users extends MY_Controller{

	function __construct(){
		parent:: __construct();
		 if(!$this->session->userdata('sb_auth'))
			redirect('app/login');	

		$this->load->model('Deleted_model');
	}

	function index(){
		$vars = array();

			$this->table->set_heading('Users ID','Full Name', 'Blood Type','Phone Number 1','Phone Number 2','Location','Date of Birth','Gender','Nickname','Age','Donated/Date','Image','');
			$this->set_table_class('table table-bordered datatable');
			$all_users = $this->Deleted_model->get_all();	

			$data = db_to_tabledata($all_users,[
					'id','full_name','blood_type','phone_number1','phone_number2',
					function ($data){
						$location = $data->location_street.', '.$data->location_brgy.' '.$data->location_purok;
						return $location;
					},function($data){
						$date_birth = date('M/d/y',strtotime($data->bday_month.'-'.$data->bday_day.'-'.$data->bday_year));
						return $date_birth;
					},'gender','nick_name','age',
					function($data){
						$donated = $data->donate_boolean.'/'.$data->date_donated;
						return $donated;
					},function($data){
					return '<img src="data:image/gif;base64,'.$data->image.'" class="img-thumbnail" width="80">';
					},function($data){
						$out =  '
                        <a href="'.site_url('Deleted_users/restore/'.$data->id).'" class="btn btn-xs btn-success confirm-btn" data-confirm-text="Are you sure you want to restore this user?"><span class="fa fa-eye"></span> Restore </a>
                        ';
                        return $out;
					}

				]);	
			$vars['users'] = $this->table->generate($data);

		 $this->load->view('admin/template',array_merge([
			'page_title' => 'DELETED USERS',
			'view' => 'admin/pages/deleted_users_view'
		],$vars));
	}


	function restore($id = 0){

		if ($id > 0) {
				$users = $this->Deleted_model->get($id);	
				//print_r($users);
			foreach ($users as $data) {
				$this->Common_model->insert('person_info',[
					'full_name' => $data->full_name,
					'blood_type' =>  $data->blood_type,
					'email' =>  $data->email,
					'password' =>  $data->password,
					'phone_number1' =>  $data->phone_number1,
					'phone_number2' =>  $data->phone_number2,
					'location_brgy' =>  $data->location_brgy,
					'location_street' =>  $data->location_street,
					'location_purok' =>  $data->location_purok,
					'bday_month' =>  $data->bday_month,
					'gender' =>  $data->gender,
					'bday_day' =>  $data->bday_day,
					'bday_year' =>  $data->bday_year,
					'nick_name' =>  $data->nick_name,
					'donate_boolean' =>  $data->donate_boolean,
					'lat' =>  $data->lat,
					'long' =>  $data->long,	
					'image' =>  $data->image,	
					'age' =>  $data->age,	
					'date_donated' =>  $data->date_donated,	
					'date_created' =>  $data->date_created,			
					]);
			}
			$this->Common_model->delete_deleted($id);
				
			
			//print_r($data);
			//$insert = $this->Common_model->insert('deleted_users',[]);

			message('success','User has been restored successfully');
			redirect('Deleted_users');
		}

	}

}