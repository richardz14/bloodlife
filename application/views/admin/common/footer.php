			
	</div>
    <!-- /#wrapper -->

    <script src="<?= assets_url()?>js/pace.min.js"></script>

    <!-- jQuery -->
    <script src="<?= assets_url()?>js/jquery.js"></script>

    <!--SEVENT-->
    <script src="<?= assets_url()?>js/plugins/sevent/sevent.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<?= assets_url()?>js/bootstrap.min.js"></script>
    <!--Validator-->
    <script src="<?= assets_url()?>bower_components/bootstrap-validator/dist/validator.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="<?= assets_url()?>js/plugins/morris/raphael.min.js"></script>
    <!-- <script src="<?= assets_url()?>js/plugins/morris/morris.min.js"></script> -->
    <!-- <script src="<?= assets_url()?>js/plugins/morris/morris-data.js"></script> -->

    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.13/b-1.2.4/b-flash-1.2.4/b-html5-1.2.4/b-print-1.2.4/r-2.1.1/datatables.min.js"></script>
    <script type="text/javascript" src="<?= assets_url()?>js/plugins/select2/dist/js/select2.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
    <script src="<?= assets_url()?>bower_components/moment/min/moment.min.js"></script>
    <script src="<?= assets_url()?>bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
    <script src="<?= assets_url()?>bower_components/bootstrap-checkbox/dist/js/bootstrap-checkbox.min.js"></script>
    <script src="<?= assets_url()?>bower_components/jquery-confirm2/dist/jquery-confirm.min.js"></script>
    <script src="<?= assets_url()?>js/plugins/jquery-form/jquery.form.min.js"></script>
    <script src="<?= assets_url()?>bower_components/toastr/toastr.min.js"></script>
    <script src="<?= assets_url()?>js/livebets.js" type="text/javascript"></script>
    <script src="<?= assets_url()?>js/admin.js"></script>

    <?php 
    if(isset($custom_js))
        echo $custom_js;
    ?>
</body>
</html>
