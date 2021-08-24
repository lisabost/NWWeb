$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        //get data-product and data-discount elements
        var name = $(this).data("product");
        var discount = $(this).data("discount");

        //update spans with product name and discount code information
        $('#productName').text(name);
        $('#code').text(discount);

        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).on('keydown', function(e) {
    if (e.keyCode == 27) {
        $('#toast').toast('dispose');
    }
})

