<?php
ini_set('display_errors', '0');

define('TEMPLATE_PATH', dirname(__FILE__) . '/templates/');
define('REM_FROM', 'info@skywill.jp');
define('REM_TO', 'contact@skywill.jp');
define('REM_SUBJECT', 'お問い合わせがありました');
define('REM_BODY', '名前: [kanji-01] [kanji-02]
名前（フリガナ）: [kana-01] [kana-02]
会社名: [company]
部署名: [dept]
役職名: [role]
電話番号: [tel]
e-Mail: [email]
お問い合わせ内容: [message]
どのようにして当社のサービスをお知りになりましたか？: [howyouknow] [howyouknow_other]
');
define('THX_FROM', 'info@skywill.jp');
define('THX_TO', '');
define('THX_SUBJECT', 'お問い合わせを承りました');
define('THX_BODY', '
このたびはお問い合わせいただきありがとうございました。
内容を確認後、弊社からご連絡させていただきます。

______________________________________________

株式会社スカイウイル
〒108-0073　東京都港区三田3-13-16三田43MTビル2F
TEL. 03-5449-6090   FAX. 03-3447-3305
______________________________________________

');