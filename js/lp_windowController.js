state = 'YOKONAGA'

function setScrollstatus(){
    var css = document.getElementById('css');
    if(window.innerWidth >= window.innerHeight){
        state = 'YOKONAGA'
        console.log(state);
        if (state=='TATENAGA'){css.setAttribute('href','./css/lp_horizon.css');}
    }
    else{
        state = 'TATENAGA'
        console.log(state);
        if (state=='YOKONAGA'){css.setAttribute('href','./css/lp_vertical.css');}
        
        
    }
}
window.onload = function(){setScrollstatus();}
window.addEventListener('resize', function(){setScrollstatus();});