<?php $this->load->view('admin/common/header');?>

<?php $this->load->view('admin/nav/top');?>

	<div id="page-wrapper">
	    <div class="container-fluid">

	    <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    <!--menu toggle button -->
                    <?=@$page_title?> <small><?=@$page_sub?></small>
                </h1>
                <!-- <ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> Dashboard
                    </li>
                </ol> -->
            </div>
        </div>

		<?php $this->load->view( $view );?>

		</div>
	    <!-- /.container-fluid -->
	</div>
	<!-- /#page-wrapper -->		

<?php $this->load->view('admin/common/footer');?>   