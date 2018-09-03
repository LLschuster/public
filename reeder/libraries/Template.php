<?php
/*
Creacion de clase template, para separar la logica de las views
*/
class Template {
	//path a template a utilizar
protected $template;
	//caracteristicas del template
protected $vars = array();


public function __construct($template)
{
	$this->template = $template;
}

public function __get($key)
{
	return $this->vars[$key];
}

public function __set($key, $value)
{
	$this->vars[$key] = $value;
}

//metodo para convertir un objeto a string y poder mostrarlo
public function __toString()
{
	extract($this->vars);
	chdir(dirname($this->template));
	ob_start();
	
	include basename($this->template);
	return ob_get_clean();
}

}
?>