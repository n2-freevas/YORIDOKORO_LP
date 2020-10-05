var contents = document.getElementsByClassName('content');
var content_detail_mordal = document.getElementById('content_detail_mordal');
var content_detail_mordal_img = document.getElementById('content_detail_mordal_img')
var content_detail_mordal_title = document.getElementById('content_detail_mordal_title');
var content_detail_mordal_text = document.getElementById('content_detail_mordal_text');
var insert_explain = document.getElementById('insert_explain');
var gray_mask = document.getElementById('gray_mask');
var vanising_mask = document.getElementById('vanising_mask');
var onMordal_content = null;
const content_title = {'sv_room':'よりどこルーム',
                        'sv_zoom':'よりどこズーム/オンラインお茶会',
                        'sv_tube':'よりどこTube',
                        'sv_cover':'よりどこアオハル',
                        'sv_third':'よりどこハウス',
                        'sv_matching':'お悩みマッチング'}

const content_explain = {'sv_room':'日頃の不安や悩みを24時間相談可能なオンラインチャットサービス。 「誰にも相談できない。」身近でなくてもオンラインで同じ境遇にいる全国の親御さんと繋がることが出来ます。日頃の悩みやアドバイスなど親御さん同士で共有して頂き、皆さんの心の拠り所となる居場所です。',
                        'sv_zoom':'オンライン通話ツールのzoomを用いたコンテンツでは，お子さん向けの楽しい企画，親御さん向けの講義や座談会が催されます．',
                        'sv_tube':'「子供との関わり」「学校との関わり」「受験」「夫婦関係」「専門分野」などの悩みに対し、専門家やカウンセラー、元不登校児の方の意見をまとめたコミュニティ限定動画を配信しています．',
                        'sv_cover':'自分の人生は自分で選択し、将来一人立ちできる環境を整えています。子ども達が夢や目標を実現する為に、よりどころには様々な経験をした人材を揃えており、話を聞いたり、 実際に体験してみたりすることにより選択肢を増やし、「なりたい自分」を探しだすことが出来ます。また、子どもの「やってみたい」を「できた！」に変える為に、よりどころメンバーによる豊富な人脈から、 様々な業種で職場体験などをすることも可能です。',
                        'sv_third':'大阪の和泉市に「みんなの心の拠り所」通称”よりどこハウス”を創っています。まずは一緒にゲーム大会や映画鑑賞会、お菓子作りパーティーなどを通して、”楽しい”を共有することにより、信頼関係を築きあげていき、今まで家族にも言えなかった心の中の悩みも安心して自然と相談ができるようになります。もちろん親御さんも悩んだときには、いつでも僕たちが待っています。「また帰ってきたい」と心の底から思える居場所です。',
                        'sv_matching':'あああああああああ'}

// 各種の説明文を，デバイス対応にする関数
function insertingText_for_insert_explain(){
    if (gloval_deviceis == 'touch'){insert_explain.insertAdjacentHTML('afterbegin','画像をタップして，内容をみてみましょう！')}
    else if (gloval_deviceis == 'mouse'){insert_explain.insertAdjacentHTML('afterbegin','画像をクリックして，内容をみてみましょう！')}
    else{insert_explain.insertAdjacentHTML('afterbegin','アイコンをチェックして，各種コンテンツの内容をみてください．')}
}

//コンテンツクリック時にモーダルを呼び出す関数 (引数：クリックされたコンテンツ画像のDOM)
function mordal_summon(){
    // 引数DOMの画像URLを引っ張る
    console.log(onMordal_content)
    sv_name = onMordal_content.getAttribute('sv');
    content_detail_mordal_img.setAttribute('src',onMordal_content.children[0].getAttribute('src'));
    content_detail_mordal_title.innerHTML = content_title[sv_name]
    content_detail_mordal_text.innerHTML = content_explain[sv_name]
    gray_mask.classList.add('visible');
    vanising_mask.classList.add('visible');
    content_detail_mordal.classList.add('visible');
    console.log(onMordal_content.getAttribute('src'))
    
    
}


function mordal_close(){
    gray_mask.classList.remove('visible');
    vanising_mask.classList.remove('visible');
    content_detail_mordal.classList.remove('visible');
    
    content_detail_mordal_title.innerHTML = '';
    content_detail_mordal_text.innerHTML = '';
}


// コンテンツ画像クリック時にモーダルを呼び出すリスナーを，全コンテンツ画像に適用する関数
function addEvent_forContents(){
    for (var i = 0;i<contents.length;i++){
        contents[i].addEventListener('click',function(e){
            onMordal_content = this;
            sv_id = onMordal_content.getAttribute('sv');
            emotion = onMordal_content.getAttribute('emotion');
            sou_summon(sv_id,emotion);
            mordal_summon();
        },{ passive: false });
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