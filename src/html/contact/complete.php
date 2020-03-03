<?php
require 'const.php';
require 'qdmail.php';
require 'functions.php';

$args = get_posts();
$errors = array();
if(isEmpty('kanji-01') || isEmpty('kanji-02')) $errors['kanji'] = '名前は必須項目です';
if(isEmpty('kana-01') || isEmpty('kana-02')) $errors['kana'] = '名前（カタカナ）は必須項目です';
if(isEmpty('company')) $errors['company'] = '会社名は必須項目です';
if(isEmpty('dept')) $errors['dept'] = '部署名は必須項目です';
if(isEmpty('tel')) $errors['tel'] = '電話番号は必須項目です';
if(isInvalidTelExcludeHyphen('tel')) $errors['tel'] = '電話番号を半角数字のみで入力してください';
if(isEmpty('email')) $errors['email'] = 'e-Mailは必須項目です';
if(isInvalidMail('email')) $errors['email'] = '正しいメールアドレスを入力してください';
if(isEmpty('email_confirm')) $errors['email_confirm'] = 'e-Mail（確認）は必須項目です';
if(isInvalidMail('email_confirm')) $errors['email_confirm'] = '正しいメールアドレスを入力してください';
//check email confirm 
if(!isInvalidMail('email_confirm') AND !isInvalidMail('email')){
  if($_POST['email_confirm'] != $_POST['email'])
    $errors['email_confirm'] = 'メールアドレスを確認してください';
}
//end check email

if(isEmpty('message')) $errors['message'] = 'お問い合わせ内容は必須項目です';

#howyouknow
$howyouknow = $_POST['howyouknow'];
if(empty($howyouknow)) $errors['howyouknow'] = '弊社サービスをお知りになった経緯を1つ以上選択してください';
if(!empty($args['howyouknow']) && in_array('その他', $args['howyouknow'])){
 if(isEmpty('howyouknow_other')) $errors['howyouknow_other'] = 'その他の内容をご記入ください';
}
#end howyouknow
if(isEmpty('agree')) $errors['agree'] = '個人情報取扱いについて同意してください';

if(count($errors) > 0){
	include TEMPLATE_PATH.'index.html';
}else{

	// send mail
	$argNames = array('company', 'dept', 'role', 'tel', 'email', 'email_confirm', 'message', 'howyouknow', 'agree', 'kanji-01', 'kanji-02', 'kana-01', 'kana-02', 'howyouknow_other' );
	$rep = $args;
	foreach($argNames as $aname) if(!isset($rep[$aname])) $rep[$aname] = '';
	// send journal
	$subject = REM_SUBJECT;
	$body = REM_BODY;
	$ak = array_keys($rep);
	$av = array_values($rep);
	array_walk($ak, create_function('&$val', '$val = "[".$val."]";'));
    array_walk($av, create_function('&$val', 'if(is_array($val)) { $val = implode(\',\', $val); }'));
    $body = str_replace($ak,$av,$body);

	qd_send_mail(
		'text',
		REM_TO,
		$subject,
		$body,
		REM_FROM
	);

	// send thank you
	$subject = THX_SUBJECT;
	$body = THX_BODY;
	$ak = array_keys($rep);
	$av = array_values($rep);
	array_walk($ak, create_function('&$val', '$val = "[".$val."]";'));
    array_walk($av, create_function('&$val', 'if(is_array($val)) { $val = implode(\',\', $val); }'));

    $body = str_replace($ak,$av,$body);
	// send thankyou
	qd_send_mail(
		'text',
		$args['email'],
		$subject,
		$body,
		THX_FROM
	);
    include TEMPLATE_PATH . 'complete.html';
}