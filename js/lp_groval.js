var gloval_deviceis = 'a'
var windowH = window.innerHeight; // ウィンドウの高さ


/* sou summon's global variants and global fuctions */
var scv = document.getElementsByClassName('sou_click_visible');
var sou_comment = document.getElementById('sou_comment');
var sou_text = document.getElementById('sou_text');
var sou_img = document.getElementById('sou_img');
const sou_say = {'sv_room':'よりどこルームだよ',
                'sv_zoom':'よりどこズームだよ',
                'sv_cover':'青春取り戻せな',
                'sv_third':'サードプレイスだよ',
                'sv_tube':'よりどこチューブだよ',
                'sv_matching':'マッチングサービスだよ',
                'sv_sec6':'セクション6だよ',
                'sv_sec4':'セクション４だよ'
}
const sou_selfie = {'smile':'./img/lp/sou_selfie/smile.png',
                    'idea':'./img/lp/sou_selfie/idea.png',
                    'think':'./img/lp/sou_selfie/think.png',
                    'thumbsup':'./img/lp/sou_selfie/thumbsup.png',
                    'thumbsup2':'./img/lp/sou_selfie/thumbsup2.png',
                    'find':'./img/lp/sou_selfie/find.png',
                    'baseball':'./img/lp/sou_selfie/baseball.png',
                    'game':'./img/lp/sou_selfie/game.png'}
function sou_summon(sv_id,emotion='smile'){
  console.log(emotion)
  
  sou_text.innerHTML = '';
  sou_text.insertAdjacentText('afterbegin',sou_say[sv_id])
  sou_img.setAttribute('src',sou_selfie[emotion]);
  sou_comment.classList.remove('hide');

}
function sou_return(sv_id){
  sou_comment.classList.add('hide');
}

