<?php defined('BASEPATH') or die('No direct script access allowed');

class LB_Api{
    
    protected $ci;
    
    function __construct(){
        $this->ci = &get_instance();    
    }
    
    function get_settings($setting_id = '', $default = false){
        if($setting_id != ''){
            $query = $this->ci->db->select('settings_value')->where('settings_name',$setting_id)
                ->get('system_settings');
            if($query->num_rows() > 0)
                return $query->row()->settings_value;
        }
        
        return $default;
    }
}