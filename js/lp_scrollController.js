var en_btn_co = document.querySelectorAll('.en_btn_co');
var sv_sec = document.querySelectorAll('.sv_sec');
var sv_sec_close = document.querySelectorAll('.sv_sec_close');
var fixedparts = document.getElementsByClassName('fixedparts');
var firstcallback = 0;

const option = {
    root:null,
    rootMargin:"-50% 0px",
    threshold:0
};
const option2 = {
    root:null,
    rootMargin:"-20% 0px -80% 0px",
    threshold:0
};


obs_fixedpart = new IntersectionObserver(fixedpart_vanish,option);
obs_sou_summon = new IntersectionObserver(sou_summon_for_scroll,option2);
obs_sou_return = new IntersectionObserver(sou_return_for_scroll,option2);
en_btn_co.forEach(box =>{
    obs_fixedpart.observe(box);
});
sv_sec.forEach(ss=>{
    obs_sou_summon.observe(ss);
});
sv_sec_close.forEach(ssc=>{
    obs_sou_return.observe(ssc)
});




function fixedpart_vanish(entries){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            for (var i=0; i< fixedparts.length; i++){
                fixedparts[i].classList.add('semivanish');
            }
        }
        else{
            for (var i=0; i< fixedparts.length; i++){
                fixedparts[i].classList.remove('semivanish');
            }
        }
    });
}


function sou_summon_for_scroll(entries){
    if (firstcallback > 0){
        entries.forEach(entry =>{       
            sv_id = entry.target.getAttribute('sv');
            sou_summon(sv_id);
        });
    }
    firstcallback = firstcallback + 1;
}

function sou_return_for_scroll(entries){
    entries.forEach(entry =>{       
        sou_return();
    });
}