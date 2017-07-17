<?php defined('BASEPATH') or die('No direct script access allowed');

// Retrieve settings easily using shorthand function
function lb_settings($settings_name = '', $default = false){
    if($settings_name != ''){
        $ci = get_instance();
        $ci->load->library('LB_Api');
        $value = $ci->lb_api->get_settings($settings_name, $default);
        return $value;
    }
}

// Display validation summary when submitting the form
function show_validation_messages(){
    echo (validation_errors() ? '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h5><strong>Errors found when creating a match : </strong></h5>'.validation_errors().'</div>' : '');
}