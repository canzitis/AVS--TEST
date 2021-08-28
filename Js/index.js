const saveButtonValidate = document.getElementsByClassName('save-button'),
    resetButtonValidate = document.getElementsByClassName('reset-button'),
    labelInpyt = document.querySelectorAll('.label-data'),
    inputSurname = document.getElementById('personal-data-input-surname'),
    inputMiddleName = document.getElementById('personal-data-input-middle-name'),
    inputTel = document.getElementById('personal-data-input-tel'),
    inputName = document.getElementById('personal-data-input-name'),
    inputMail = document.getElementById('personal-data-input-mail');





saveButtonValidate[0].addEventListener('click', function () {
    const errData = [inputSurname, inputTel, inputName, inputMail, inputMiddleName]
    const indexLableData = []
    const indexInputData = []


    debugger
    for (let i = 0; i < labelInpyt.length; i++) {
        indexLableData.push(i)
    }

    for (let b = 0; b < errData.length; b++) {
        if (errData[b].value == "") {
            indexInputData.push(b)
            errData[b].className = "error"
        }
    }

    for (let a = 0; a < indexLableData.length; a++) {
        for (let j = 0; j < indexInputData.length; j++) {
            if (indexLableData[a] != indexInputData[j]) {
                labelInpyt[indexInputData[j]].style.color = "red"
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
    }

});