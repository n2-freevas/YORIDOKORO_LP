state = 'YOKONAGA'

function setScrollstatus(){
    var cssHV = document.getElementById('css');
    if(window.innerWidth >= window.innerHeight){
        if (state!='YOKONAGA'){cssHV.href = './css/lp_horizon.css';}
        state = 'YOKONAGA'
        console.log(state);
    }
    else{
        if (state!='TATENAGA'){cssHV.href = './css/lp_vertical.css';}
        state = 'TATENAGA'
        console.log(state);
    }
}
window.addEventListener('load',function(){setScrollstatus();});
window.addEventListener('resize', function(){setScrollstatus();});