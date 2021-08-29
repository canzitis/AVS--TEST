const saveButtonValidate = document.getElementsByClassName('save-button'),
    resetButtonValidate = document.getElementsByClassName('reset-button'),
    errorText = document.querySelectorAll('.error-text'),
    errorTextPass = document.querySelectorAll('.error-text-pass'),
    labelInpyt = document.querySelectorAll('.label-data'),
    inputSurname = document.getElementById('personal-data-input-surname'),
    inputMiddleName = document.getElementById('personal-data-input-middle-name'),
    inputTel = document.getElementById('personal-data-input-tel'),
    inputName = document.getElementById('personal-data-input-name'),
    inputMail = document.getElementById('personal-data-input-mail'),

    passLogin = document.getElementById('pass-login'),
    passLoginRepeat = document.getElementById('pass-login-repeat'),
    labelPass = document.querySelectorAll('.label-data-pass'),
    savePassButton = document.getElementsByClassName('button-save-pass'),
    resetPassButton = document.getElementsByClassName('button-reset-pass');





saveButtonValidate[0].addEventListener('click', function () {
    const errData = [inputSurname, inputTel, inputName, inputMail, inputMiddleName]
    const indexLableData = []
    const indexInputData = []

    for (let i = 0; i < labelInpyt.length; i++) {
        indexLableData.push(i)
    }

    for (let i = 0; i < errData.length; i++) {
        if (errData[i].value == "") {
            indexInputData.push(i)
            errData[i].className = "error"
        }
    }

    for (let i = 0; i < indexLableData.length; i++) {
        for (let a = 0; a < indexInputData.length; a++) {
            if (indexLableData[i] != indexInputData[a]) {
                labelInpyt[indexInputData[a]].style.color = "red"
                errorText[indexInputData[a]].style.display = 'inline'
            }
        }

    }


});


resetButtonValidate[0].addEventListener('click', function () {
    inputSurname.value = ''
    inputTel.value = ''
    inputName.value = ''
    inputMail.value = ''
    inputMiddleName.value = ''

    inputSurname.className = "personal-data-input"
    inputMiddleName.className = "personal-data-input"
    inputTel.className = "personal-data-input"
    inputName.className = "personal-data-input"
    inputMail.className = "personal-data-input"






    for (let i = 0; i < labelInpyt.length; i++) {
        labelInpyt[i].style.color = "#999999"
        errorText[i].style.display = 'none'
    }

});




savePassButton[0].addEventListener('click', function () {
    const errDataPass = [passLogin, passLoginRepeat]
    const indexLablPasseData = []
    const indexInputPassData = []

    debugger

    for (let i = 0; i < labelPass.length; i++) {
        indexLablPasseData.push(i)
    }

    for (let i = 0; i < errDataPass.length; i++) {
        if (errDataPass[i].value == "") {
            indexInputPassData.push(i)
            errDataPass[i].className = "error"
        }
    }

    for (let i = 0; i < indexLablPasseData.length; i++) {
        for (let a = 0; a < indexInputPassData.length; a++) {
            if (indexLablPasseData[i] != indexInputPassData[a]) {
                labelPass[indexInputPassData[a]].style.color = "red"
                errorTextPass[indexInputPassData[a]].style.display = 'inline'
            }
        }

    }

});


resetPassButton[0].addEventListener('click', function () {
    passLogin.value = ''
    passLoginRepeat.value = ''


    passLogin.className = "pass-login"
    passLoginRepeat.className = "pass-login-repeat"


    for (let i = 0; i < labelInpyt.length; i++) {
        labelPass[i].style.color = "#999999"
        errorTextPass[i].style.display = 'none'
    }

});