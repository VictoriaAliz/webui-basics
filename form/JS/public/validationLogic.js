import {config} from './config.js';
import * as validator from './validator.js';

export function validationLogic(element, inputs) {
    const validationResult = validateElement(element, inputs);
   
    if(validationResult !== true) {
        label.innerHTML = validationResult;
        inputs = disableFollowingInputs(element, inputs);
        button.disabled = true;
    } 
    else {
        label.innerHTML = '';
        const nextInput = inputs[_.indexOf(inputs, element) + 1];
        if(nextInput) { 
            nextInput.disabled = false;
            if(nextInput.value) validationLogic(nextInput, inputs);
        }
        else button.disabled = false; 
    }
}

function validateElement(element, inputs) {
    const inputRules = config[element.id];
    const rulesNumber = inputRules.length - 1;

    for(let i = 0; i <= rulesNumber; i++) {
        let result = checkCurrentRule(element, inputs, inputRules[i]);
        if(result !== true) return result;     
    }
    return true;
}

function checkCurrentRule(element, inputs, inputRule) {
    const rule = inputRule.rule;
    const options = inputRule.options;
    const validatorFunc = validator[rule];

    return (element.id === 'reenter') ? 
       validatorFunc(element.value, inputs[_.indexOf(inputs, element) -1].value, options):
       validatorFunc(element.value, options);
}

function disableFollowingInputs(element, inputs) { 
    return _.map(inputs, function(input) {
        _.indexOf(inputs, input) > _.indexOf(inputs, element) ? input.disabled = true : input.disabled = false;
    })
}