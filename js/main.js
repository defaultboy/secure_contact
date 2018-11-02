$(document).ready(function(){


    $('.how-to-send-card').addClass('unavailable');

    // steps
    // handle click
    $('.step-list-item').on('click', function(){
        var parent = $(this).closest('.step');
        var option = $(this).attr('data-option');

        // make all how-to-send option unavail
        $('.how-to-send, .how-to-send-card').addClass('unavailable');

        if($(parent).hasClass('active')){
            $(this).not('.selected').addClass('selected');
            $(this).siblings('.step-list-item.selected').removeClass('selected');
            $(parent).next('.step').addClass('active');
            $(parent).next('.step').find('.step-list-item').removeClass('selected');

            console.log(option);
            
            if($(parent).hasClass('step-1')){
                $('.step-3').removeClass('active');
                $('.step-3-list').attr('data-option1', option);

                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#step-2').offset().top
                }, 400);
            }


            if($(parent).hasClass('step-2')){
                var option1 = $('.step-3-list').attr('data-option1');
                var option2 = option;
                
                if(option1 == 1 && option2 == 1){
                    console.log("a1 and b1");
                    $('.how-to-send[data-cardid="secure-drop"], #secure-drop').removeClass('unavailable');
                    $('.how-to-send[data-cardid="encrypted-email"], #encrypted-email').removeClass('unavailable');
                    $('.how-to-send[data-cardid="mobile-messaging"], #mobile-messaging').removeClass('unavailable');
                    $('.how-to-send[data-cardid="phone"], #phone').removeClass('unavailable');
                    $('.how-to-send[data-cardid="post"], #post').removeClass('unavailable');

                } else if(option1 == 1 && option2 == 2){
                    console.log("a1 and b2");
                    $('.how-to-send[data-cardid="secure-drop"], #secure-drop').removeClass('unavailable');
                    $('.how-to-send[data-cardid="encrypted-email"], #encrypted-email').removeClass('unavailable');
                    $('.how-to-send[data-cardid="mobile-messaging"], #mobile-messaging').removeClass('unavailable');
                    $('.how-to-send[data-cardid="secure-ftp"], #secure-ftp').removeClass('unavailable');

                }   else if(option1 == 1 && option2 == 3){
                    console.log("a1 and b3");
                    $('.how-to-send[data-cardid="post"], #post').removeClass('unavailable');

                }   else if(option1 == 2 && option2 == 1){
                    console.log("a2 and b1");
                    $('.how-to-send[data-cardid="secure-drop"], #secure-drop').removeClass('unavailable');
                    $('.how-to-send[data-cardid="encrypted-email"], #encrypted-email').removeClass('unavailable');
                    $('.how-to-send[data-cardid="post"], #post').removeClass('unavailable');

                }   else if(option1 == 2 && option2 == 2){
                    console.log("a2 and b2");
                    $('.how-to-send[data-cardid="secure-drop"], #secure-drop').removeClass('unavailable');
                    $('.how-to-send[data-cardid="encrypted-email"], #encrypted-email').removeClass('unavailable');
                    $('.how-to-send[data-cardid="secure-ftp"], #secure-ftp').removeClass('unavailable');

                }   else if(option1 == 2 && option2 == 3){
                    console.log("a3 and b3");
                    $('.how-to-send[data-cardid="post"], #post').removeClass('unavailable');

                } else {
                    console.log('err');
                }

                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#step-3').offset().top
                }, 400);
                
                
            }
        }


    });

    // How to send scroll to
    $('.how-to-send').on('click', function(){
        var cardId = $(this).attr('data-cardid');

        if($(this).hasClass('unavailable')){
            return false;
        }
        else{
            $([document.documentElement, document.body]).animate({
                scrollTop: $('#' + cardId).offset().top
            }, 400);
        }
    });

    
    // Show more / less
    $('.button-show-more').on('click', function(){
        
        var parentStep = $(this).closest('.step');
        var parent = $(this).parent('.how-to-send-card');
        var buttonText = $(this).text();

        if($(parentStep).hasClass('active')){
            $(parent).toggleClass('more-visible');
            $(this).toggleClass('showing');
            
            if (buttonText == 'Show more'){
                $(this).text('Show less');
            }
            else {
                $(this).text('Show more');       
            }
        }
        

    });


});