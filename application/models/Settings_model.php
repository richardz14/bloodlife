<?php defined('BASEPATH') or die('No direct script access allowed');

class Settings_model extends CI_Model{
     
    
    function get_all(){
        $query = $this->db->select()->get('system_settings');
        if($query->num_rows() > 0)
            return $query->result();
        
        return array();
    }
    
    // get setting row by id
    function get($setting_id = 0, $default = false){
        if($setting_id > 0){
           $query = $this->db->select()->where('settings_id', $setting_id)->get('system_settings');
            if($query->num_rows() > 0)
                return $query->row(); 
        }
        
        return $default;
    }
    
    // get settings value by setting name
    function get_by_setting_id($setting_name = '', $default = false){
        if($setting_name != ''){
            $query = $this->db->select()->where('settings_name', $setting_name)->get('system_settings');
            if($query->num_rows() > 0)
                return $query->row()->settings_value;
        
        }

        return $default;
    }
}
