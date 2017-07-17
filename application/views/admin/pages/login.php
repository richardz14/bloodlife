<div class="col-md-4 col-md-offset-3 col-xs-12">
	<div class="panel panel-default">
	  <div class="panel-heading"><span class="glyphicon glyphicon-lock"></span> Admin Login</div>
	  <div class="panel-body">
	   	<?=form_open(current_url(),'data-toggle="validator" role="form"')?>
	   	<div class="form-group">
	   	<label class="control-label">Username</label>
	   	<input type="text" name="username" class="form-control" required>
	   	<?=form_error('username')?>
	   	<div class="help-block with-errors"></div>
	   	</div>

	   	<div class="form-group">
	   	<label class="control-label">Password</label>
	   	<input type="Password" name="pwd" class="form-control" required>
	   	<?=form_error('pwd')?>
	   	<div class="help-block with-errors"></div>
	   	</div>

	   	<div class="form-group text-center">
	   		<button class="btn btn-info"><span class="glyphicon glyphicon-lock"></span> Login</button>
	   	</div>

	   	<div class="form-group">
	   		 <?= show_alerts(@$alert) ?>
	   	</div>
	   	<?=form_close()?>
	  </div>
	</div>
</div>