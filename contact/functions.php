<?php

function get_posts() {
    $posts = array();
    foreach($_POST as $key => $value) {
        if(is_array($value)) {
            $posts[$key] = array();
            foreach($value as $key2 => $value2) {
                $posts[$key][$key2] = htmlspecialchars($value2, ENT_QUOTES);
            }
        } else {
            $posts[$key] = htmlspecialchars($value, ENT_QUOTES);
        }
    }
    return $posts;
}

function isEmpty($name) {
    global $args;
    return !(isset($args[$name]) && trim($args[$name]) != '');

}

function isEmptyArray($name, $minimum = 1) {
    global $args;
    return !(isset($args[$name]) && is_array($args[$name]) && count($args[$name]) >= $minimum);
}

function isInvalidMail($name) {
    global $args;
    $maddr = $args[$name];

    return (preg_match('/^[^@]+@[^@]+$/',$maddr) !== 1);
}

function isInvalidTel($name) {
    global $args;
    $tel = $args[$name];

    return !preg_match('/^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/', $tel);
}

function isInvalidTelIncludeHyphen($name) {
    global $args;
    $tel = $args[$name];

    return !preg_match('/^[0-9]{2,4}-[0-9]{2,4}-[0-9]{3,4}$/', $tel);
}

function isInvalidTelExcludeHyphen($name) {
    global $args;
    $tel = $args[$name];

    return !preg_match('/^[0-9]{9,11}$/', $tel);
}

function isInvalidPostalCode($name) {
    global $args;
    $postal = $args[$name];

    return !preg_match('/^[0-9]{3}-?[0-9]{4}$/', $postal);
}

function isInvalidPostalCodeIncludeHyphen($name) {
    global $args;
    $postal = $args[$name];

    return !preg_match('/^[0-9]{3}-[0-9]{4}$/', $postal);
}

function isInvalidPostalCodeExcludeHyphen($name) {
    global $args;
    $postal = $args[$name];

    return !preg_match('/^[0-9]{7}$/', $postal);
}

function isInvalidNum($name) {
    global $args;
    $num = $args[$name];

    return !preg_match('/^[0-9]+$/', $num);
}

function isEmptyFile($name) {
    return !is_uploaded_file($_FILES[$name]['tmp_name']);
}

function isInvalidYear($name) {
    global $args;
    $year = $args[$name];

    return !preg_match('/^[0-9]+$/', $year);
}

function isInvalidMonth($name) {
    global $args;
    $month = $args[$name];

    return ($month < 1 || $month > 12);
}

function isInvalidDay($name) {
    global $args;
    $day = $args[$name];

    return ($day < 1 || $day > 31);
}

function isInvalidZenkakuKana($name) {
    global $args;
    $str = $args[$name];
    return !preg_match('/^[ァ-ヶー]*$/u', $str);
}


function isInvalidZenkakuEisu($name) {
    global $args;
    $str = $args[$name];
    return !preg_match('/^[ａ-ｚＡ-Ｚ０-９]*$/', $str);
}

function isInvalidHankakuEisu($name) {
    global $args;
    $str = $args[$name];
    return !preg_match('/^[a-zA-Z0-9]*$/', $str);
}
