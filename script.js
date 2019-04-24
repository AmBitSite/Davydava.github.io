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
            $(galeryContain).slideUp('slow');
                $(galeryContain[i]).slideToggle('slow');
            });
        }

    
    
    
});