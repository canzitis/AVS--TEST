const
    inputSurname = document.getElementById('personal-data-input-surname').value,
    inputTel = document.getElementById('personal-data-input-tel').value,
    inputName = document.getElementById('personal-data-input-name').value,
    inputMail = document.getElementById('personal-data-input-mail').value,
    inputMiddleName = document.getElementById('personal-data-input-middle-name').value,
    saveButtonValidate = document.getElementsByClassName('save-button'),
    resetButtonValidate = document.getElementsByClassName('reset-button');




saveButtonValidate[0].addEventListener('click', function () {
    if (inputSurname || inputTel || inputName || inputMail || inputMiddleName === "") {
        document.getElementById('personal-data-input-surname').className = "error"
        document.getElementById('personal-data-input-tel').className = "error"
        document.getElementById('personal-data-input-name').className = "error"
        document.getElementById('personal-data-input-mail').className = "error"
        document.getElementById('personal-data-input-middle-name').className = "error"
    }
});

resetButtonValidate[0].addEventListener('click', function () {
    document.getElementById('personal-data-input-surname').value = '',
        document.getElementById('personal-data-input-tel').value = '';
    document.getElementById('personal-data-input-name').value = '';
    document.getElementById('personal-data-input-mail').value = '';
    document.getElementById('personal-data-input-middle-name').value = '';
});