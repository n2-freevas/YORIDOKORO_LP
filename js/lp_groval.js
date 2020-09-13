var gloval_deviceis = 'a'
var windowH = window.innerHeight; // ウィンドウの高さ


/* sou summon's global variants and global fuctions */
var scv = document.getElementsByClassName('sou_click_visible');
var sou_comment = document.getElementById('sou_comment');
var sou_text = document.getElementById('sou_text');
const sou_say = {'sv_room':'よりどこルームだよ',
                'sv_zoom':'よりどこズームだよ',
                'sv_cover':'青春取り戻せな',
                'sv_third':'サードプレイスだよ',
                'sv_tube':'よりどこチューブだよ',
                'sv_matching':'マッチングサービスだよ',
                'sv_sec6':'セクション6だよ',
                'sv_sec4':'セクション４だよ',
                'sv_sec5':'セクション５だよ'
}
const sou_selfie = {'smile':''}
function sou_summon(sv_id){
  
  sou_text.innerHTML = '';
  sou_text.insertAdjacentText('afterbegin',sou_say[sv_id])
  sou_comment.classList.remove('hide');
}
function sou_return(sv_id){
  sou_comment.classList.add('hide');
}

