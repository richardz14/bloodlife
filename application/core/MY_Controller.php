<?php defined('BASEPATH') or die('No direct script access allowed');

class MY_Controller extends CI_Controller{

	function __construct(){
		parent::__construct();
        
        $this->config->load('livebets');        
        if($this->config->item('maintenance_mode')){
            $allow_ips = $this->config->item('allow_maintenance_ip'); 
                 
            if (!empty($_SERVER['HTTP_CLIENT_IP'])){
              $client_ip = $_SERVER['HTTP_CLIENT_IP'];
            }
            elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
            {
              $client_ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
            }
            else
            {
              $client_ip = $_SERVER['REMOTE_ADDR'];
            }
            
            if(in_array(uri_string(),
                        $this->config->item('maintenance_pages')) && !in_array($client_ip, $allow_ips)){
                show_error( $this->config->item('maintenance_message'), 500, 'Oops!');
            }
        }
           
        
        
       // echo $this->config->item('maintenance_mode');
       

		$this->form_validation->set_error_delimiters('<p class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span> ','</p>');

		/* Table Configuration */
		$this->table->set_template(array(
	        'table_open'            => '<br/><table border="0" cellpadding="4" cellspacing="0" class="table table-bordered datatable">',

	        'thead_open'            => '<thead>',
	        'thead_close'           => '</thead>',

	        'heading_row_start'     => '<tr class="active">',
	        'heading_row_end'       => '</tr>',
	        'heading_cell_start'    => '<th>',
	        'heading_cell_end'      => '</th>',

	        'tbody_open'            => '<tbody>',
	        'tbody_close'           => '</tbody>',

	        'row_start'             => '<tr>',
	        'row_end'               => '</tr>',
	        'cell_start'            => '<td>',
	        'cell_end'              => '</td>',

	        'row_alt_start'         => '<tr>',
	        'row_alt_end'           => '</tr>',
	        'cell_alt_start'        => '<td>',
	        'cell_alt_end'          => '</td>',

	        'table_close'           => '</table>'
		));


		
        
        $this->bootstrap();
	}

	function set_table_class($classname = 'table table-bordered datatable'){
		/* Table Configuration */
		$this->table->set_template(array(
	        'table_open'            => '<br/><table border="0" cellpadding="4" cellspacing="0" class="'.$classname.'">',

	        'thead_open'            => '<thead>',
	        'thead_close'           => '</thead>',

	        'heading_row_start'     => '<tr class="active">',
	        'heading_row_end'       => '</tr>',
	        'heading_cell_start'    => '<th>',
	        'heading_cell_end'      => '</th>',

	        'tbody_open'            => '<tbody>',
	        'tbody_close'           => '</tbody>',

	        'row_start'             => '<tr>',
	        'row_end'               => '</tr>',
	        'cell_start'            => '<td>',
	        'cell_end'              => '</td>',

	        'row_alt_start'         => '<tr>',
	        'row_alt_end'           => '</tr>',
	        'cell_alt_start'        => '<td>',
	        'cell_alt_end'          => '</td>',

	        'table_close'           => '</table>'
		));
	}


	function loadJS($js_file = '', $vars = array()){
		if($js_file != ''){
			$custom_js = $this->load->get_var('custom_js');
			$js_vars = (array)$this->load->get_var('js_vars');

			if(!empty($vars))
				$js_vars = array_merge($js_vars, $vars);


			$this->load->vars('custom_js',$custom_js ."\n". '<script src="'. assets_url() . $js_file.'"></script>')->vars('js_vars', $js_vars);
		}
	}
    
    function digest($vars){
        $this->load->vars($vars);
    }
    
    function _view($view = '', $args = array(), $template_type = 'agents'){
		$this->load->view($template_type . '/common/header', $args);
		$this->load->view($template_type . '/'.$view);
		$this->load->view($template_type . '/common/footer');
	}
    
    function bootstrap(){
        $this->load->vars('js_vars',[
            $this->security->get_csrf_token_name() => $this->security->get_csrf_hash(),
            'lb_cstoken_name' => $this->security->get_csrf_token_name()
        ]);
    }
}