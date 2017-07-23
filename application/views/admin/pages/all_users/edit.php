<?=form_open()?>

<div class="col-md-12 col-xs-12">
	<?= show_alerts(@$alert) ?>
</div>

<?php show_validation_messages() ?>

<?php if(isset($user_info)): ?>
	<?php foreach ($user_info as $data) { ?>
<div class="form-group">
 <label>Latitude</label>
 <input type="number" name="lat" id="lat" class="form-control" value="<?= $data->lat ?>" step="any">
 <?=form_error('lat')?>
</div>

<div class="form-group">
 <label>Longitude</label>
 <input type="number" name="long" id="long" class="form-control" value="<?= $data->long ?>" step="any">
 <?=form_error('long')?>
</div>

<input class="btn btn-sm btn-success" type="submit" name="update" value="Update">
<br>
	<br><div id="map" style="width:100%;height:490px"></div>

	<script>
	function myMap() {
	  var myCenter = new google.maps.LatLng(<?php echo $data->lat; ?>,<?php echo $data->long; ?>);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});

  			 google.maps.event.addListener(map, 'click', function (e) {
                //alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
               document.getElementById("lat").value = e.latLng.lat();
                 document.getElementById("long").value = e.latLng.lng();	
            });
  marker.setMap(map);
	}
	//onClick="window.location.href='<?=site_url('Users_on_map')?>'"
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEUwU0da3wkBheF8GNx6uLOt9VDklyzZ4&callback=myMap"></script>



	<?php }  ?>

<?php endif; ?>

<?=form_close()?>


<style type="text/css">
    input[type=number]::-webkit-inner-spin-button, 
 input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>

