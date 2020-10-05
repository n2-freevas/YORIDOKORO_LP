var en_btn_co = document.querySelectorAll('.en_btn_co');
var fixedparts = document.getElementsByClassName('fixedparts');
var firstcallback = 0;

const option = {
    root:null,
    rootMargin:"-50% 0px",
    threshold:0
};
obs_fixedpart = new IntersectionObserver(fixedpart_vanish,option);
en_btn_co.forEach(box =>{
    obs_fixedpart.observe(box);
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




$(function(){
	$(window).scroll(function (){
        sou_return();
        mordal_close();
		$('.scroll_fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('fadein');
			}
        });
        $('.stamp').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('stamped');
			}
        });
	});
});