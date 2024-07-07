let texto = [];

function assignText(element, text) {
    let title = document.querySelector(element);
    title.innerHTML = text;
}
/*Method which input is a text and encrits its message */
function encripting(text) {
    if ((text == null)) {
        assignText('#textoEncriptado', 'No hay texto ingresado');
    } else {
        text = text.replace(/e/g, 'enter').replace(/i/g, 'imes')
            .replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        console.log('Encrypted text:', text);
        texto.push(text);
        assignText('#textoEncriptado', text);
        resetBox();
    }
}
/*Method which input is a text and decripts its message */
function decripting(text) {
    if ((text == null)) {
        assignText('#textoEncriptado', 'No hay texto ingresado');
    } else {
        text = text.replace(/enter/g, 'e').replace(/imes/g, 'i')
        .replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    console.log('Decrypted text:', text);
    assignText('#textoEncriptado', text);
    }
}
/*Method to reset the placeholder and hides the images */
function resetBox() {
    document.querySelector('#title2').innerText = '';
    document.querySelector('#image').style.visibility = 'hidden';

    let inputText = document.querySelector('#textoEncriptar');
    inputText.value = '';
    inputText.placeholder = 'Ingrese su texto aquí';
    // document.querySelector('#desencriptar').setAttribute('disabled', true); // Comentado para que no se deshabilite
}

/*Obtains the encripted text creating a temp 
text in order to copy the text in the user's clipboard */
function copyText() {
    let textoEncriptadoElement = document.getElementById('textoEncriptado');
    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = textoEncriptadoElement.innerText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    let contentSection2 = document.getElementById('contentSection2');
    contentSection2.style.backgroundColor = '#f7ede2'; //establece el nuevo color 
}
/*Method to validate if the input is on capitals or with special characters */
function validate(text, action) {
    let inputElement = document.getElementById('textoEncriptar');
    if (inputElement.value.match(/[A-Z!@#$%^&*(),.?":{}|<>]/)) {
        setInitialConditions();
    } else {
        if (action === 'encriptar') {
            encripting(text);
        } else if (action === 'desencriptar') {
            decripting(text);
        }
    }
}
/*Sets the conditions of the webpage  */
function setInitialConditions() {
    document.getElementById('image').style.visibility = 'visible';
    assignText('#title2', 'Ningún mensaje fue encriptado');
    assignText('#textoEncriptado', 'Ingresa el texto que desees encriptar o desencriptar');
    document.querySelector('.texto1').innerText = 'No se aceptarán mayúsculas ni caracteres especiales.';
    let inputText = document.querySelector('#textoEncriptar');
    inputText.value = ''; 
    inputText.placeholder = 'Ingrese su texto aquí'; 
    contentSection2.style.backgroundColor = '#rgb(243, 206, 161)';
}


