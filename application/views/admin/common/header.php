<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bloodlife Admin | <?=@$page_title?></title>
    <script>var LB_Admin = <?= json_encode(array_merge(['siteurl' => site_url()], 
        (isset($js_vars)? $js_vars : array())));
    ?>;</script>
    <!-- Bootstrap Core CSS -->
    <link href="<?= assets_url()?>css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<?= assets_url()?>css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="<?= assets_url()?>css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<?= assets_url()?>font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!--Fancybox-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css" />
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.13/b-1.2.4/b-flash-1.2.4/b-html5-1.2.4/b-print-1.2.4/r-2.1.1/datatables.min.css"/>
    <link rel="stylesheet" type="text/css" href="<?= assets_url()?>js/plugins/select2/dist/css/select2.min.css">
    <link rel="stylesheet" type="text/css" href="<?= assets_url()?>bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" type="text/css" href="<?= assets_url()?>bower_components/toastr/toastr.min.css">
    <link rel="stylesheet" type="text/css" href="<?= assets_url()?>bower_components/jquery-confirm2/dist/jquery-confirm.min.css">
</head>
<body>
    <div id="wrapper" class="toggled">
        
       