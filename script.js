let galery = document.querySelectorAll('.album'),
    galeryContain = document.querySelectorAll('.galery-contain');
$(document).ready(function() {
    $('.image-link').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    for(let i=0, x = galery.length; i<=x; i++){
        $(galery[i]).on('click', function(){
            if($(galeryContain).hasClass('media-active')){
                if($(galeryContain[i]).hasClass('media-active')){
                     $(galeryContain[i]).removeClass("media-active");
                }
            }
            else if($(galeryContain).hasClass('media-active')==false){
                $(galeryContain[i]).addClass('media-active')
            };
            });
    }
    $('.about-btn__rus').on('click',function(e){
        $('.about-btn__rus').addClass('about__btn_active');
        $('.about-info__text-rus').show();
        $('.about-info__text-eng').hide();
        $('.about-btn__eng').removeClass('about__btn_active');
    });
    $('.about-btn__eng').on('click',function(e){
        $('.about-btn__eng').addClass('about__btn_active');
        $('.about-info__text-eng').show();
        $('.about-info__text-rus').hide();
        $('.about-btn__rus').removeClass('about__btn_active');
    })
});
 $('.header-nav__btn').on('click', function(){
     $('.header-nav__btn').hide();
     $('.header-nav').slideDown('fast');
 });
$('.header-nav').on('click', function(){
    $('.header-nav').slideUp('fast');
    $('.header-nav__btn').show();
})
