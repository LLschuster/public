<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    

    <title>Reeder Forum</title>

    <!-- Bootstrap core CSS -->
    <link href="<?php echo base_uri?>template/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php echo base_uri?>template/css/custom.css" rel="stylesheet">
	<!--editor de text0 -->
	<script src="js/ckeditor/ckeditor.js"></script>
  </head>

  <body>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" >Reeder</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="register.php">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="create.php">topics</a>
          </li>
          
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <main role="main" class="container">

      <div class="row">
		<div class="col-md-8">
			<div class="main-col">
				<div class="block">
				 <?php if (isset($_GET['topic'])) : ?>
					<h1 class="pull-left"><?php echo $_GET['topicName'] ;?>  </h1>
					<h4 class="pull-right"> Respuestas </h4>
					<?php else: ?>
					<h1 class="pull-left"><?php echo SITE_NAME; ?> </h1>
					<h4 class="pull-right"> foro de temas variados</h4>
					<?php endif;?>
					<div class="clear-fix"></div>
					<hr>