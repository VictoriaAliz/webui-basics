import {validationLogic} from './validationLogic.js';

main();

function main() {
    const [...inputs] = document.getElementsByTagName('input'); 
    _.forEach(inputs, element => element.addEventListener('blur', handleBlur));  

    function handleBlur(event) {
        let element = document.getElementById(event.target.id);
        element.removeEventListener('blur', handleBlur);
        element.addEventListener('input', handleInput);
        validationLogic(element, inputs);
    }
    
    function handleInput(event) {
        let element = document.getElementById(event.target.id);
        validationLogic(element, inputs);
    }    
}

