<?php
require 'const.php';
require 'functions.php';

$args = get_posts();
include TEMPLATE_PATH . 'index.html';
