var en_button_co = document.querySelectorAll('.en_but_co'); // フェードさせる要素の取得
var en_button_coRect = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var remainder = 200; // ちょっとはみ出させる部分
var entry_button = document.getElementById('entry');
// 要素の位置を取得
for (var i = 0; i < en_button_co.length; i++) {
    en_button_coRect.push(en_button_co[i].getBoundingClientRect());
}

if (gloval_deviceis == 'mouse'){
    window.addEventListener('scroll',function(){
        windowY = window.pageYOffset;
        // 要素が画面の下端にかかったら
        if ((windowY > en_button_coRect[0].top - windowH+remainder)&&(windowY < en_button_coRect[(en_button_co.length)-1].bottom - windowH + remainder)) {
            // .showを付与
            entry_button.classList.add('semivanish');
            //en_button_co[i].classList.add('show');
        }
        else {
            entry_button.classList.remove('semivanish');
            //en_button_co[i].classList.remove('show');
        }
    });
}
