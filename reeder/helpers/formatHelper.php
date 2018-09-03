 <?php
 //Funciones de formateo
 
 //formateo de urldecode
 function urlFormat($str) {
	 //los espacios en blanco(\s*) son remplazados por nada. Eliminandolos
	 $str = preg_replace('/\s*/','',$str);
	 //
	 $str = strtolower($str);
	 //convertir a formato de url
	 $str = urlencode($str);
	 //
	 return $str;
 }
 
 //formateo de la fecha
 function formatDate($date)
 {
	 $date = date("F j, Y, g:i A",strtotime($date));
	 return $date;
 }
 ?>