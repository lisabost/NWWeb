$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    //on hover over balloon color change happy birthday's color
    $('.red').hover(function () {
        $('#happy').css('color', 'red');
    }, function () {
        $('#happy').css('color', 'slategray');
    });

    $('.green').hover(function () {
        $('#happy').css('color', 'green');
    }, function () {
        $('#happy').css('color', 'slategray');
    });

    $('.blue').hover(function () {
        $('#happy').css('color', 'blue');
    }, function () {
        $('#happy').css('color', 'slategray');
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //event listener for checkall/uncheckall
    $('#all').on('click', function (e) {
        e.preventDefault();
        $('.form-check-input').prop('checked', true);
        $('.form-check-input').each(function () {
            if ($(this).is(':checked')) {
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')
            }
        });
    });

    $('#none').on('click', function (e) {
        e.preventDefault();
        $('.form-check-input').prop('checked', false)
        $('.form-check-input').each(function () {
            if (!$(this).is(':checked')) {
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            }
        });
    });

    var animations = ["animate__animated animate__bounce", "animate__animated animate__flash", "animate__animated animate__pulse", "animate__animated animate__rubberBand",
        "animate__animated animate__shakeX", "animate__animated animate__shakeY", "animate__animated animate__headShake", "animate__animated animate__swing",
        "animate__animated animate__tada", "animate__animated animate__wobble", "animate__animated animate__jello", "animate__animated animate__heartBeat"];
    var index = Math.floor(Math.random() * animations.length);

    $('#happy').addClass(animations[index]);

    //event handler for toast button
    $('#submit').on('click', function (e) {
        e.preventDefault();

        var colors = $("input[name=color]:checked");

        if (colors.length == 0) {
            $('#toast').toast({ autohide: false }).toast('show');
        }


        
    });


});




