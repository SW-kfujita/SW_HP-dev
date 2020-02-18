# 設計

# ディレクトリ
dist
　┗index.html
      style.css
      Main.js
      Img
         ┗xx.jpg
Src
　assets
　　┗Pug
            ┗index.pug
                _include
　　　　　　　　┗header.pug

　　┗scss
　　　　┗project.scss
                 _import
                          ┗_base.scss
                             _Layout.scss
                             _utility.scss
                  _component
                          ┗_button.scss

　　┗ts
            ┗main.ts

　　┗img
            ┗xx.jpg
　
　vender
　　　┗css
                ┗reset.css


命名規則
ケバブケース
「-」　ハイフン　単語をつなぐ場合(right-hand)
「—」　ハイフン*2 utilityの接頭(—red,—bold)
「_」　アンダーバー　形式をつなぐ場合（ly_,js_)
「__」　アンダーバー*2 親子関係（ly_header__menu）

接頭語
Ly- ページ全体のレイアウトに関わるもの
og- 2つ以上のモジュールを含む複合体
Md- 1つ以上のエレメントを含む
El-1つの要素　最小単位

余白　*4px
