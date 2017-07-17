<?php defined('BASEPATH') or die('No direct script access allowed');

function get_admin_manage_type(){
    $ci = get_instance();
    $info = $ci->session->userdata('admin_manage_type');
    
  
    if($info){
       if($info != 'null')
        return (object)$info; 
    }
        
    
    
    // Return empty object
    return (object)array(
        'slug' => '',
        'type' => '',
        'cat_id' => 0
    );
}