<!DOCTYPE html>
<html>
  <head>
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="vendors/bootstrap/dist/css/bootstrap.css" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="css/AdminLTE.min.css"/>
    <link rel="stylesheet" href="css/skin-purple.css"/>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body class="hold-transition skin-purple sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">

      {% include 'layout/header.swig' %}

      <!-- =============================================== -->

      <!-- Left side column. contains the sidebar -->
      {% include 'layout/leftSideMenu.swig' %}

      <!-- =============================================== -->

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li class="active">Blank page</li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">

        {% block content %}

        {% endblock %}

        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->

      {% include 'layout/footer.swig' %}
    </div>
    <!-- ./wrapper -->

    <!-- jQuery 2.2.3 -->
    <script src="vendors/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap 3.3.6 -->
    <script src="vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- SlimScroll -->
    <!-- <script src="../../plugins/slimScroll/jquery.slimscroll.min.js"></script> -->
    <!-- FastClick -->
    <!-- <script src="../../plugins/fastclick/fastclick.js"></script> -->
    <!-- AdminLTE App -->
    <script src="js/app.min.js"></script>
  </body>
</html>
