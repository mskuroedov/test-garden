//selects
$(document).ready(function () {
    $('.select').select2({width: '100%'})
});

//inputmask scripts
$(document).ready(function () {
    $('[data-inputmask]').inputmask({
        jitMasking: false
    });

    $('input[required]').on('focusout', function () {
        if ($(this).attr('data-inputmask')) {

            if ($(this).inputmask("isComplete")) {
                console.log()
                $(this).parent().addClass('--success')
                if ($(this).parent().hasClass('error')) {
                    $(this).parent().removeClass('error')
                }
            } else {
                $(this).parent().removeClass('--success')
                $(this).parent().addClass('error');
            }
        } else {
            if ($(this).val() === '') {
                $(this).parent().removeClass('--success')
                $(this).parent().addClass('error');
            } else {
                $(this).parent().addClass('--success')
                if ($(this).parent().hasClass('error')) {
                    $(this).parent().removeClass('error')
                }
            }
        }

    });
});