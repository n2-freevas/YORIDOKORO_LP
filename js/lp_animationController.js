
function handleTouchMove(event) {
        event.preventDefault();
}

window.onload = function(){
window.setTimeout(()=>{


        
        var first_comment = document.getElementById('first_comment');
        var opening = document.getElementById('opening');
        var logo_popin = document.getElementById('logo_popin');
        var logo_p = document.getElementsByClassName('logo_p');
        var lding = document.getElementById('lding');
        //var unpink = document.getElementsByClassName('unpink');
        //var pink = document.getElementsByClassName('pink');
        
        // ロゴの灰色部分が飛翔するシーン
        for(var i=0; i<logo_p.length;i++){
                logo_p[i].classList.add('jump');
                logo_p[i].classList.add('stop');}
        lding.classList.add('fadeout');

        //for (var i=0; i < unpink.length; i++){unpink[i].classList.add('jump');}
        //for (var i=0; i < pink.length; i++){pink[i].classList.add('stop');}
        
        // 「心」と背景がフェードする
        window.setTimeout(()=>{
                opening.classList.add('fadeout');
        },2000);
        window.setTimeout(()=>{
                opening.classList.add('disp_none');
                logo_popin.classList.add('disp_none');
        },2500);
        window.setTimeout(()=>{
                first_comment.classList.add('fadein');
        },3000);
        //スクロール復帰
        document.removeEventListener('scroll', handleTouchMove, { passive: false });
},3000);
}

//スクロール禁止
document.addEventListener('scroll', handleTouchMove, { passive: false });
    

