$('form').on('submit', function (e) {
    e.preventDefault();
    let postData = {}
    $(this).serializeArray().forEach((item) => {
        postData[item['name']] = item['value'];
    });
    console.log({...postData});
    if ($(this).data('success')) {
        let successModal = $(this).data('success')

        $('.modal').modal('hide')
        $(successModal).modal('show');
    }
})
$('.modal .close').on('click', function (e) {
    e.preventDefault();
})