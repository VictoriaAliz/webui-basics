import {getPresets} from '../../../configFiles/config';
import {validateElement} from '../../../validator/validator.js'

export function isInvalid(name, value, password = '') {
    const inputRules = getPresets(name);
    inputRules[0].options.value = password;
    return validateElement(value, inputRules);
}
