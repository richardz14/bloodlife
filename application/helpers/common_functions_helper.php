<?php

/*
* Assets URL
*/

function assets_url(){
	return site_url('assets/');
}


function is_nav_active($nav_link = ''){
	if($nav_link == uri_string())
		return true;

	return false;
}

function field_error($field = ''){
	if(form_error($field))
		return ' has-error';
}

function countries_options(){
	$country_array = array("Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Barbuda", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Trty.", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Caicos Islands", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Futuna Islands", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard", "Herzegovina", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen Islands", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Korea (Democratic)", "Kuwait", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "McDonald Islands", "Mexico", "Micronesia", "Miquelon", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "Nevis", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Principe", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre", "Saint Vincent", "Samoa", "San Marino", "Sao Tome", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia", "South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Grenadines", "Timor-Leste", "Tobago", "Togo", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Turks Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "US Minor Outlying Islands", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");

	return $country_array;
}


function dbprefix($table = '', $column = ''){
	$ci = &get_instance();
	return $ci->db->dbprefix($table).'.'.$column;
}

function message($type, $message){
	if($type != '' && $message != ''){
		$ci = get_instance();
		$ci->session->set_flashdata('alert', [
			'type' => $type,
			'message' => $message
		]);
	}
}

function show_alerts($alert = array()){ 
	$ci = get_instance();

	if($ci->session->flashdata('alert'))
		$alert = $ci->session->flashdata('alert');	
	
	if(!empty($alert)){
		$icon = '';
		switch($alert['type']){
			case 'warning': $icon = 'warning-sign'; break;
			case 'danger': $icon = 'remove-sign'; break;
			case 'success': $icon = 'ok-sign'; break;
			case 'info': $icon = 'info-sign'; break;
		}

		echo '<div class="alert alert-'.$alert['type'].'">'.($icon!=''?'<span class="glyphicon glyphicon-'.$icon.'"></span>':'').'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> '.$alert['message'].'</div>';
	}
}

function db_to_tabledata($dbresult = array(), $columns = array()){
	if(!empty($dbresult)){
		$dataset = array();
		foreach($dbresult as $row){
			$data_row = array();
			$row_arr = (array)$row;

			foreach($columns as $column){
				if(is_callable($column)){
					$data_row[] = $column($row);
				}else
					$data_row[] = $row_arr[$column];
			}
			$dataset[] = $data_row;
		}
		return $dataset;
	}
}

// Converts database result to dropdown options
function db_to_options($dbresult = array(), $label = '', $value = ''){
	$options = array();
	if(!empty($dbresult) && $label != '' && $value != ''){
		$options[''] = ' -- SELECT -- ';
		foreach($dbresult as $row){
			$row_arr = (array)$row;
			$options[$row_arr[$value]] = $row_arr[$label];
		}

		return $options;
	}	
}

function nav_active($link_url = ''){
	if($link_url == uri_string())
		return 'class="active"';
}

// Shortened post variable
function _post($varname = ''){
	if($varname != ''){
		$ci = get_instance();
		return $ci->input->post($varname);
	}
}