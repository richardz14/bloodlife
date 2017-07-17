<div class="col-md-12 col-xs-12">
	<?= show_alerts(@$alert) ?>
</div>

<?= form_open()?>
<div class="col-md-4 col-xs-12">
    
<div class="form-group">
 <label class="control-label">Current Password</label>
 <input type="password" name="cur_pwd" class="form-control">
 <?=form_error('cur_pwd')?>
</div>

<div class="form-group">
 <label class="control-label">New Password</label>
 <input type="password" name="new_pwd" class="form-control">
 <?=form_error('new_pwd')?>
</div>

<div class="form-group">
 <label class="control-label">Confirm New Password</label>
 <input type="password" name="new_pwd2" class="form-control">
 <?=form_error('new_pwd2')?>
</div>
    
<div class="form-group">
 <button class="btn btn-success" type="submit">Change Password</button>
</div>
    
</div>
<?= form_close()?>