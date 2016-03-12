var txt = document.getElementById("txtb");
txt.addEventListener('keyup', func, false);

function func() {
    var length;//長さ
    var lengthp = 0;//8文字以上か
    var secure = 0;//強度
    var use =0;//使用可能か
    var usem; //使用可能かの表示
    var lower = 0;//小文字判定
    var lowerresult;//小文字の有無の表示
    var upper = 0;//大文字判定
    var upperresult;//大文字の有無の表示
    var symbol = 0;//記号判定
    var symbolresult;//記号の有無の表示
    var num = 0;//数字判定
    var numresult;//数字の有無の判定

    var tex = document.js.tex.value;//inputext読み取り

    //判定
    (function () {
        if(tex.match(/[^!-~]/)){
            usem = "使用不可能";
        }
        else{
            usem = "使用可能";
        }
        if (tex.length >= 8) {
            lengthp = 1;
            length = "適切な長さです";
        }
        else {
            length = "短すぎます";
        }


        if (tex.match(/[a-z]/)) {
            lower = 1;
            lowerresult = "あります";
        }
        else {
            lowerresult = "ありません";
        }

        if (tex.match(/[A-Z]/)) {
            upper = 1;
            upperresult = "あります";
        }
        else {
            upperresult = "ありません";
        }

        if (tex.match(/[!-/]|[:-@]|[[-`]|[{-~]/)) {
            symbol = 1;
            symbolresult = "あります";
        }
        else {
            symbolresult = "ありません";
        }

        if (tex.match(/[0-9]/)) {
            num = 1;
            numresult = "あります";
        }
        else {
            numresult = "ありません";
        }

        secure += lengthp + lower + upper + symbol + num;//強度の確認

        if (secure === 0) {
            secure = "よわすぎる";
        }
        else if (secure === 1) {
            secure = "よわい";
        }
        else if (secure === 2) {
            secure = "ふつう";
        }
        else if (secure === 3) {
            secure = "ややつよい";
        }
        else if (secure === 4) {
            secure = "かなりつよい";
        }
        else if (secure === 5) {
            secure = "つよすぎる";
        }
    })();

    var target = document.getElementById("output");
    target.innerHTML = "使用可能か:"+usem+"<br>文字数:" + length + "<br>数字:" + numresult + "<br>小文字:" + lowerresult + "<br>大文字:" + upperresult + "<br>記号:" + symbolresult + "<br>強度:" + secure;
}
