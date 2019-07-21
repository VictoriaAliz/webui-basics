import * as rulesFunctions from './rulesFunctions.js';

const checkCurrentRule = (elementValue, inputRule) => {
    const rule = inputRule.rule;
    const options = inputRule.options;
    const validatorFunc = rulesFunctions[rule];
    const result = validatorFunc(elementValue, options);
    return result;
}
export const validateElement = (elementValue, inputRules) => {
    const rulesNumber = inputRules.length - 1;
    
    for(let i = 0; i <= rulesNumber; i++) {
        let result = checkCurrentRule(elementValue, inputRules[i]);
        if(result) return result;     
    }
    return true;
}

export const rulesNames = {
    notFilled: 'notFilled', 
    notIncludeDot: 'notIncludeDot', 
    notIncludeAt: 'notIncludeAt', 
    notIncludeNumber: 'notIncludeNumber',
    notIncludeCapitalLetter: 'notIncludeCapitalLetter',
    notValidLength: 'notValidLength', 
    notConfirm: 'notConfirm'
}