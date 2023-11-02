## 10月19日

- コレクション（配列）
- 繰り返し処理（for文）
    - 配列を使った複数要素の追加
    - 要素の創出

```html
<h1>人気フルーツ一覧</h1>
<ul id="fruitslist" class="listbox__list"></ul>
<script>
  //ulの中に果物を一度にliで入れたい。
  //配列fruitsを宣言・値を代入
  const fruits = ["りんご", "もも", "バナナ"];

  //バナナがほしい
  console.log(fruits[2]);

  //ulをJavaScript空間に引きずり込む
  const element = document.querySelector("#fruitslist");
  console.log(element);

  //fruitsの要素数文だけfor文で回す
  for(let i = 0; i < fruits.length; i++){
    //liを創出する
    const lilast = document.createElement("li");
    //liに値（果物→配列fruitsの中にある）を代入
    console.log(fruits[i]); //りんご・もも・バナナが取れる。
    //創出したliの内容に果物を代入
    lilast.textContent = fruits[i];
    //element(※ul)の中の最後に追加
    element.appendChild(lilast);
  }
</script>
```


## 10月12日

- リテラルと演算子
- 文字列の連結
- 変数と定数
- 複合代入演算子
- document.オブジェクトとDOMの途中まで

### 文字列の計算

```js
//文字列の連結
console.log("ABC" + "DEF"); //文字列 + 文字列
console.log("円周率は" + 3.14 + "です。"); //文字列 + 数値
console.log("計算結果：" + 123 + 456); //文字列 +　数値の計算
console.log(123 + 456 + "となりました。") //数値の計算 + 文字列
console.log("計算結果：" + (123 + 456)); //文字列 +　(数値の計算)
console.log("2" - 1); //文字列 - 数値
console.log("2" * 3); //文字列 - 数値
console.log("2" / 4); //文字列 - 数値
```

### 変数の宣言

```js
let a; //変数の宣言　//ES6 = 2015
a = 10; //値の代入（数値型）
console.log(a);

a = "Hello"; //値の再代入（文字列型）
console.log(a);

//let a = "World";
//変数の宣言と代入を同時に行っています。さらに再宣言なので、エラーとなります。
```

### 定数の宣言

```js
//定数の宣言・代入
const PI = 3.14;
console.log(PI);

//再代入
//PI = 3.1415926535;
//const PI;
```


### 複合代入演算子とインクリメント

変数に 1 足す場合と 1 引く場合、さらに次のように簡素化することができます。

```js
let n = 5;
n = n + 2;
console.log(n); //7

let n2 = 5;
n2 += 2; //複合代入演算子 n2 = n2 + 2と同じ。
console.log(n2);

//インクリメント
let n3 = 5;
n3++; //インクリメント 1足す
console.log(n3); //6
```

## sample7-7

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sample7-7</title>
  </head>
  <body>
    <h1>果物の種類</h1>
    <ul id="fruitslist" class="listbox__list">
      <li>りんご</li>
      <li>みかん</li>
      <li>バナナ</li>
      <!-- <li>メロン</li> -->
    </ul>
    <!--リストを操作するDOM操作のスクリプト-->
    <script>
    //メロンを加えたい。
    //ul要素を取り入れる。
    const element = document.querySelector("ul");
    console.log(element);

    //selectorってCSSのセレクターなので、
    const element2 = document.querySelector("#fruitslist");
    console.log(element2);

    //classもいける？→いける！
    const element3 = document.querySelector(".listbox__list");
    console.log(element3);

    //新しい要素を作るli
    const lilast = document.createElement("li");
    console.dir(lilast); //dirに変更。オブジェクトの中身が見れる。
    lilast.textContent = "メロン";
    console.log(lilast);
    </script>
  </body>
</html>
```

HTMLの要素の取得について基本は、document.querySelector(セレクタ)とdocument.querySelectorAll(セレクタ)で良い。


## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。