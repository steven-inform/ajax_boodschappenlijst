<?php
require_once "lib/pdo.php";

$item = htmlentities( $_POST["item"], ENT_QUOTES) ;

$msgs = Array();
$msgs["status"] = "OK";

//data opslaan in de databank
$sql = "insert into items SET " .
            " itm_tekst = '$item' " ;
ExecuteSQL($sql);

print json_encode($msgs, JSON_PARTIAL_OUTPUT_ON_ERROR );