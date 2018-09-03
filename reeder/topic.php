<?php 
include ("core/ini.php");
?>



<?php
$topic = new Topic();
$template = new Template("template/topicos.php");

$user = isset($_GET['user']) ? $_GET['user'] : null;
$topic_id = isset($_GET['topic']) ? $_GET['topic'] : null;

//filtrar por categorias
if (isset($user))
{
	$template->topics = $topic->getRepliesByUser($user);
} 
//filtrar por topico

if (isset($topic_id))
{
	$template->topics = $topic->getTopicById($topic_id);
} 
if (!isset($user) && !isset($topic_id))
{
	$template->topics = $topic->getAllTopics();
}
 
 
 $template->numberTopics = $topic->getNumberTopics();
 $template->numberUsers = $topic->getNumberUsers();
 $template->numberCategories = $topic->getNumberCategories();
  
 
 
 echo $template;
?>