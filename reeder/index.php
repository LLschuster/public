<?php 
include ("core/ini.php");
?>



<?php
$topic = new Topic;

$template = new Template("template/frontPage.php");
 
 
 //variables
 
 $template->topics = $topic->getAllTopics();
 $template->numberTopics = $topic->getNumberTopics();
 $template->numberUsers = $topic->getNumberUsers();
 $template->numberCategories = $topic->getNumberCategories();
 //mostrar view
 echo $template;
?>