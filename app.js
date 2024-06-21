/* Declare initial variables */
let sortedNumbers = [];
 let maxNumber = parseInt(prompt('Enter the max number of options')); 
 let secretNumber = generateSecretNumber();

 let counter = 1;
/*Assign text in an element */
 function assignText(element, text){
 let title = document.querySelector(element);
 title.innerHTML = text; // innerHTML sets 
 }

 /*Compares the secretNumber with the input */
 function verificarIntentoDeUsuario(){
 let userNumber = parseInt(document.getElementById('valorUser').value);
 console.log(secretNumber);
 if (secretNumber==userNumber) {
    assignText('p',`you found the  ${secretNumber} in  ${counter} ${counter>1 ? 'times ':'time ' }` );
    document.getElementById('reiniciar').removeAttribute('disabled');
}
    else{ // cuando no acierta
        if(userNumber<secretNumber){
            assignText('p',`try again the number is greater than ${userNumber}`);
        }
        else{
            assignText('p',`the number is less than ${userNumber}`);
        }
        counter++;
        resetBox();

    }
    }
/*Resets the input box */
    function resetBox(){
document.querySelector('#valorUser').value = '';
    }
    /*Math function that @return random number from 1-20 */
 function generateSecretNumber(){
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    //if then numbers are already given
if(sortedNumbers.length==maxNumber){
    assignText('p','You finished your options');
}
    //verifies if the number is on the list
    if(sortedNumbers.includes(generatedNumber)){
        return generateSecretNumber(); //recursion in order to verify
    }else{
        sortedNumbers.push(generatedNumber);
    return generatedNumber;
    }

 }
 /*Reset game declaring initial conditions*/ 
function reiniciarJuego(){
    resetBox(); 
    initialConditions();

}
function initialConditions(){
 assignText('h1','Secret Number Game ');
 assignText('p',` Enter a number from 1- ${maxNumber}`);
 secretNumber = generateSecretNumber();
 counter = 1;
 document.querySelector('#reiniciar').setAttribute('disabled',true);

}