<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->

<div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav side-nav">
        <li <?=nav_active('dashboard')?>>
            <a href="<?=site_url('dashboard')?>"><i class=""></i> Dashboard</a>
        </li>
         <li <?=(nav_active('All_users'))?><?=(nav_active('All_users/edit/'))?>>
        <a href="<?=site_url('All_users')?>">All Users</a>
        </li>
        <li <?=(nav_active('Users_on_map'))?>>
        <a href="<?=site_url('Users_on_map')?>">View User On Map</a></li>
        <li <?=(nav_active('Users_action'))?>>
        <a href="<?=site_url('Users_action')?>">Users Action</a></li>
        <li <?=(nav_active('Deleted_users'))?>>
        <a href="<?=site_url('Deleted_users')?>">Deleted Users</a></li>


      
    </ul>
</div>
<!-- /.navbar-collapse -->