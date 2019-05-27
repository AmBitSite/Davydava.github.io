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
            if($(galery[i]).hasClass('media-active')==false){
                for(let i=0, x = galery.length; i<=x; i++){
                    $(galeryContain[i]).slideUp("slow");
                    $(galery[i]).removeClass('media-active');
                };
                $(galeryContain[i]).slideDown("slow");
                $(galery[i]).addClass('media-active');
            }
            else{
                $(galeryContain[i]).slideUp("slow");
                $(galery[i]).removeClass('media-active');
            }
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
    if(window.matchMedia('(max-width: 850px)').matches){
        $('.header-nav__btn').on('click', function(){
            $('.header-nav__btn').hide();
            $('.header-nav').slideDown('fast');
        });
        $('.nav-list__item').on('click', function(){
            $('.header-nav').slideUp('fast');
            $('.header-nav__btn').show();
        })
    };
    $('a[href^="#"]').click(function(){
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('html').animate({scrollTop:destination},1000);
        if(window.matchMedia('(max-width: 850px)').matches){
            $('.header-nav').slideUp('fast');
            $('.header-nav__btn').show();
        }
        return false;
    });
});
let x = document.querySelector('.img__item_active');
 console.log(x.width);
console.log(document.body.clientWidth);

