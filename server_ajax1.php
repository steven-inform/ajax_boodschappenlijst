<?php
//require_once "database.php";

$naam = $_POST["naam"];
$voornaam = $_POST["voornaam"];

$msgs = Array();
$msgs["eerste"] = "Ik kom van de server!";
$msgs["tweede"] = "Beste $voornaam $naam, Ik ben de tweede lijn!";

//data opslaan in de databank
$sql = "insert into personen SET " .
            " per_voornaam = '$voornaam', " .
            " per_naam = '$naam' " ;
//ExecSQL($sql);

$msgs["sql"] = $sql;

print json_encode($msgs, JSON_PARTIAL_OUTPUT_ON_ERROR );