var contents = document.getElementsByClassName('content');
var content_detail_mordal = document.getElementById('content_detail_mordal');
var content_detail_mordal_title = document.getElementById('content_detail_mordal_title');
var content_detail_mordal_text = document.getElementById('content_detail_mordal_text');
var insert_explain = document.getElementById('insert_explain');
var gray_mask = document.getElementById('gray_mask');
var vanising_mask = document.getElementById('vanising_mask');
var onMordal_content = null;



// 各種の説明文を，デバイス対応にする関数
function insertingText_for_insert_explain(){
    if (gloval_deviceis == 'touch'){insert_explain.insertAdjacentHTML('afterbegin','画像をタップして，内容をみてみましょう！')}
    else if (gloval_deviceis == 'mouse'){insert_explain.insertAdjacentHTML('afterbegin','画像をクリックして，内容をみてみましょう！')}
    else{insert_explain.insertAdjacentHTML('afterbegin','アイコンをチェックして，各種コンテンツの内容をみてください．')}
}

//コンテンツクリック時にモーダルを呼び出す関数 (引数：クリックされたコンテンツ画像のDOM)
function mordal_summon(){
    // 引数DOMの画像URLを引っ張る
    var content_alt = onMordal_content.getAttribute('alt');
    gray_mask.classList.add('visible');
    vanising_mask.classList.add('visible');
    content_detail_mordal.classList.add('visible');
    onMordal_content.classList.add('pickup');
    content_detail_mordal_title.innerHTML = onMordal_content.getAttribute('alt');
    content_detail_mordal_text.innerHTML = onMordal_content.getAttribute('alttwo');

}


function mordal_close(){
    gray_mask.classList.remove('visible');
    vanising_mask.classList.remove('visible');
    content_detail_mordal.classList.remove('visible');
    onMordal_content.classList.remove('pickup');
    window.setTimeout(()=>{
        content_detail_mordal_title.innerHTML = '';
        content_detail_mordal_text.innerHTML = '';},
    1000)
}


// コンテンツ画像クリック時にモーダルを呼び出すリスナーを，全コンテンツ画像に適用する関数
function addEvent_forContents(){
    
    if (gloval_deviceis == 'touch'){
        console.log('Touch eventListner insert to contnets');
        for (var i = 0;i<contents.length;i++){
            contents[i].addEventListener('touchstart',function(e){
                onMordal_content = this;
                sv_id = onMordal_content.getAttribute('sv');
                emotion = onMordal_content.getAttribute('emotion');
                sou_summon(sv_id,emotion);
            },{ passive: false });
        }
    }
    else{
        console.log('Click eventListner insert to contnets');
        for (var i = 0;i<contents.length;i++){
            contents[i].addEventListener('click',function(e){
                onMordal_content = this;
                sv_id = onMordal_content.getAttribute('sv');
                emotion = onMordal_content.getAttribute('emotion');
                sou_summon(sv_id,emotion);
            },{ passive: false });
        }
    }

    // vanising_maskにモーダルを閉じるクラスを追加する．
    vanising_mask.addEventListener('click',function(e){
        e.preventDefault(e);
        mordal_close();
        sou_return();
    });
}

addEvent_forContents();
insertingText_for_insert_explain();