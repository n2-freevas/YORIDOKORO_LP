var contents = document.getElementsByClassName('content');
var content_detail_mordal = document.getElementById('content_detail_mordal');
var insert_explain = document.getElementById('insert_explain');
var gray_mask = document.getElementById('gray_mask');
var vanising_mask = document.getElementById('vanising_mask');
var onMordal_content = null;
const content_title =  ['よりどころ相談室',
                        'よりどこZoom',
                        '青春を取り戻そう',
                        'みんなのサードプレイス',
                        'よりどこTube',
                        'お悩みマッチングサービス']
const content_explain =    ['',
                            '',
                            '',
                            '',
                            '',
                            ''];


// 説明文の各種を，デバイス対応にする関数
function insertingText_for_insert_explain(){
    if (gloval_deviceis == 'touch'){insert_explain.insertAdjacentHTML('afterbegin','画像をタップして，内容をみてみましょう！')}
    else if (gloval_deviceis == 'mouse'){insert_explain.insertAdjacentHTML('afterbegin','画像をクリックして，内容をみてみましょう！')}
    else{insert_explain.insertAdjacentHTML('afterbegin','アイコンをチェックして，各種コンテンツの内容をみてください．')}
}

//コンテンツクリック時にモーダルを呼び出す関数 (引数：クリックされたコンテンツ画像のDOM)
function mordal_summon(content){
    // 引数DOMの画像URLを引っ張る
    var content_alt = onMordal_content.getAttribute('alt');
    gray_mask.classList.add('visible');
    vanising_mask.classList.add('visible');
    onMordal_content.classList.add('pickup');
}


function mordal_close(){
    gray_mask.classList.remove('visible');
    vanising_mask.classList.remove('visible');
    onMordal_content.classList.remove('pickup')
}
// コンテンツ画像クリック時にモーダルを呼び出すリスナーを，全コンテンツ画像に適用する関数
function addEvent_forContents(){
    
    if (gloval_deviceis == 'touch'){
        console.log('Touch eventListner insert to contnets')
        for (var i = 0;i<contents.length;i++){
            contents[i].addEventListener('touch',function(e){
                e.preventDefault();
                onMordal_content = this;
                mordal_summon();
            });
        }
    }
    else{
        console.log('Click eventListner insert to contnets')
        for (var i = 0;i<contents.length;i++){
            contents[i].addEventListener('click',function(e){
                e.preventDefault();
                onMordal_content = this;
                mordal_summon();
            });
        }
    }

    // vanising_maskにモーダルを閉じるクラスを追加する．
    vanising_mask.addEventListener('click',function(e){
        e.preventDefault(e);
        mordal_close();
    });
}

addEvent_forContents();
insertingText_for_insert_explain();