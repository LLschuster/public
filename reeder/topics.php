<?php 
include ("core/ini.php");
?>



<?php
$topic = new Topic();
$template = new Template("template/topics.php");

$category = isset($_GET['category']) ? $_GET['category'] : null;

if (isset($category))
{
	$template->topics = $topic->getTopicsByCategory($category);
} else 
{
	$template->topics = $topic->getAllTopics();
}
 
 
 $template->numberTopics = $topic->getNumberTopics();
 $template->numberUsers = $topic->getNumberUsers();
 $template->numberCategories = $topic->getNumberCategories();
 
 
 echo $template;
?>