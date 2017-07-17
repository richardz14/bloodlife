<!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
             
                <li>
                <p>     
                 <p title="Information" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Please select a sport category to manage." data-autoshow="true" id="category-popover"></p>
                </p>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <?php 
                        if($this->session->userdata('sb_auth')){
                            echo $this->session->userdata('sb_auth')['user_name'];
                        }
                    ?> <b class="caret"></b></a>
                    <ul class="dropdown-menu">

                        <li>
                            <a href="<?= site_url('app/change-password')?>"><i class="fa fa-fw fa-lock"></i> Change Password</a>
                            <a href="<?=site_url('app/logout')?>"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>


            <?php $this->load->view('admin/nav/sidebar')?>
        </nav>