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

<?=form_close()?>
</div>
</div>
</div>
