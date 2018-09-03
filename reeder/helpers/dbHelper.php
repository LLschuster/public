<?php
/*
Funciones de base de datos MMG
*/

function replyCount($topic_id)
{
	$db = new Database;
	$db->query("SELECT id FROM replies 
	WHERE topic_id = :topic");
	$db->bind(':topic', $topic_id);
	$rows = $db->resultset();
	
	//retorna numero de registros o replies
	return $db->rowCount();
}


function getCategories()
{
	$db = new Database;
	$db->query("SELECT * FROM categories ");
	$rows = $db->resultset();
	//retorna numero de registros o replies
	return $rows;
}

function isActive($category)
{
	if (isset($_GET['category']))
	{
		if ($_GET['category']==$category)
		{
			return true;
		} 
		
	}else {
			if ($category==null)
			{
				return true;
			}
			
		}
}

function getNumberRepliesByUser($user_id)
{
	$db = new Database;
	$db->query("SELECT * FROM replies
				WHERE replies.user_id=:user_id");
	$db->bind(':user_id',$user_id);
	$rows = $db->resultset();
	//retorna numero de registros o replies
	return $db->rowCount();
}
?>