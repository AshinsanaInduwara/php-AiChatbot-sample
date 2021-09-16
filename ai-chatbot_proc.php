<?php
$text = $_POST["text"];

$aiurl = file_get_contents("http://api.brainshop.ai/get?bid=159262&key=HERE-YOUR-API&uid=UID&msg=$text");

$aidecode = json_decode($aiurl);
$rm = $aidecode->cnt;
$aitext = urlencode("$rm");
echo $aitext;
echo $aidecode;
echo $aitext;


