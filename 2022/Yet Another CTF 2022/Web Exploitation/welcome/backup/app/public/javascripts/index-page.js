'use strict';

function setMessage(text, type) {
    var msgType = type || 'warning';
    $('#result').html('' +
        `<div class="alert alert-${msgType} alert-dismissible show" role="alert">\n` +
        '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '    <span aria-hidden="true">&times;</span>\n' +
        '  </button>\n' +
        `  ${text}\n` +
        '</div>'
    );
    $('#form-modal').modal('handleUpdate');
}

const setError = text => setMessage(text, 'danger');
const setSuccess = text => setMessage(text, 'success');

function submitForm(){
    var req = {
        name:       $('#name').val(),
        age:        $('#age').val(),
        affilation: $('#affilation').val(),
        city:       $('#city').val()
    };
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(req)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error(response.error());
        })
        .then(json => {
            if (json.type === 'error') {
                setError(json.description || '');
                return;
            }
            setSuccess(`Ваша заявка принята. Приходите в офис в ближайщий четверг. Адрес вашего офиса: <a href="#" class="alert-link">${json.office}</a>`)
        })
        .catch(error => {
            setError('Произошла неизвестная ошибка, попробуйте ещё раз');
        })
}
