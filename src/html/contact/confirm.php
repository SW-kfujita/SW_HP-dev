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

if(count($errors) > 0) {
    include TEMPLATE_PATH.'index.html';
} else {
    include TEMPLATE_PATH.'confirm.html';
}