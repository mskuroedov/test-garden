$('form').on('submit', function (e) {
    e.preventDefault();
    let postData = {}
    $(this).serializeArray().forEach((item) => {
        postData[item['name']] = item['value'];
    });

    console.log({...postData});
})
$('.modal .close').on('click', function (e) {
    e.preventDefault();
})
$('.modal form').on('submit', function (e) {
    e.preventDefault();

    let successModal = $(this).data('success')

    $('.modal').modal('hide')
    $(successModal).modal('show');
})