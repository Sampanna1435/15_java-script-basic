# 15_java-script-basic
## 10月26日
  ///event
        //何に何をしたら、どうなる。
        //ボタンにクリックをしたら、アラートでる・
        btn.addEventListener("click", showMessange);
        //event+list

        //閉数を使わない

        //例）「ブラウザで発生する主なイベント」から"resize"（サイズが変更する）タイミングで console に文字が発生するようにします。
        //resizeは、DOM内にはありませんのでwindowで取得します。
        window.addEventListener("resize", function () {
            //ここに処理を書きます。
            console.log("サイズが変わりました。");
