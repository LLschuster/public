<?php

session_start();

require_once('config/config.php');

require_once('helpers/dbHelper.php');
require_once('helpers/formatHelper.php');
require_once('helpers/systemHelper.php');

 function __autoload($classname)
{
	require_once('libraries/'.$classname .'.php');
}
?>