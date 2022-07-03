$(document).ready(function () {
    alert(1)
    $('.select').select2({width: '100%'})
    $('.select').on('select2:close', function () {
        if (!!$(this).select2('data')[0].id) {
            $(this).next().addClass('valid')
        }
    })

    $('[data-inputmask]').inputmask({
        jitMasking: false
    });

    //input validations
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