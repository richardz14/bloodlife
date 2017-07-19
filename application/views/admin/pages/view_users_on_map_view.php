<div class="col-md-12 col-xs-12">
	<div class="panel panel-default">

 <div class="panel-body">

<?=form_open()?>

<div class="col-md-4">
  <div class="form-group">
    <label>Select User to View Map</label>
   <?=form_dropdown('id', $options_users, set_value('id'), 'class="form-control select2" id="id"')?>
  </div>
</div>

<div class="col-md-2"><br/>
 <button class="btn btn-info"><span class="glyphicon glyphicon-search"></span> VIEW </button>
</div>

	<?php if (isset($users_data)):  ?>
		
	<?php //print_r($users_data); 
	foreach ($users_data as $data) { ?>
			
	<div id="map" style="width:100%;height:500px"></div>

	<script>
	function myMap() {
		//  var myCenter = new google.maps.LatLng(10.1799469,122.9068577);
  var myCenter = new google.maps.LatLng(<?php echo $data->lat; ?>,<?php echo $data->long; ?>);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
	}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEUwU0da3wkBheF8GNx6uLOt9VDklyzZ4&callback=myMap"></script>


	<?php } ?>


	
	<?php endif; ?>

<?=form_close()?>
</div>
</div>
</div>


<!--
	api = AIzaSyDEUwU0da3wkBheF8GNx6uLOt9VDklyzZ4
-->


