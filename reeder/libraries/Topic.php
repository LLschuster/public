<?php

class Topic 
{
	private $db;
	
	public function __construct()
	{
		$this->db = new Database();
	}
	
	public function getAllTopics()
	{
		$this->db->query("SELECT topics.*, users.username, users.avatar, categories.name FROM topics
							INNER JOIN users
							ON topics.user_id = users.id
							INNER JOIN categories
							ON topics.category_id = categories.id
							ORDER BY date_created DESC"  );
	//results
	$results = $this->db->resultset();
	
	return $results;
	}
	public function getNumberTopics()
	{
		$this->db->query("SELECT * FROM topics");
		$results = $this->db->resultset();
		return $this->db->rowCount();
	}
	
	public function getNumberCategories()
	{
		$this->db->query("SELECT * FROM categories");
		$results = $this->db->resultset();
		return $this->db->rowCount();
	}
	public function getNumberUsers()
	{
		$this->db->query("SELECT * FROM users");
		$results = $this->db->resultset();
		return $this->db->rowCount();
	}
	
	public function getTopicsByCategory($cat)
	{
		$this->db->query("SELECT topics.*, users.username, users.avatar, categories.name FROM topics
							INNER JOIN users
							ON topics.user_id = users.id
							INNER JOIN categories
							ON topics.category_id = categories.id
							WHERE topics.category_id = :cat
							ORDER BY date_created DESC"  );
	//results
	$this->db->bind(':cat',$cat);
	$results = $this->db->resultset();
	
	return $results;
	}
	function getTopicById($topic_id)
	{
		$this->db->query("SELECT  users.username, users.avatar, replies.* FROM replies
							INNER JOIN users
							ON replies.user_id = users.id
							WHERE replies.topic_id=:topic_id
							ORDER BY date_created DESC"  );
	//results
	$this->db->bind(':topic_id',$topic_id);
	$results = $this->db->resultset();
	
	return $results;
	}
	
	function getRepliesByUser($user)
	{
			$this->db->query("SELECT  users.username, users.avatar, replies.* FROM replies
							INNER JOIN users
							ON replies.user_id = users.id
							WHERE replies.user_id=:user_id
							ORDER BY date_created DESC"  );
	//results
	$this->db->bind(':user_id',$user);
	$results = $this->db->resultset();
	
	return $results;
	}
}