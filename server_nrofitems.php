<?php
require_once "lib/pdo.php";

$msgs = Array();
$msgs["status"] = "OK";

//tellen in de databank
$sql = "select count(*) as aantal from items" ;
$data = GetData($sql);

$msgs["aantal"] = $data[0]["aantal"];

print json_encode($msgs, JSON_PARTIAL_OUTPUT_ON_ERROR );