import {rulesNames} from '../validator/validator.js';
import {errors} from '../localization/english';

const passwordLength = 8;

const config = {
    email: [
        {
            rule: rulesNames.notFilled,
            options: {
                message: errors.notFilled
            }
        },
        {
            rule: rulesNames.notIncludeDot,
            options: {
                message: errors.notIncludeDot
            }
        },
        {
            rule: rulesNames.notIncludeAt,
            options: {
                message: errors.notIncludeAt
            }
        }
    ], 
    password: [
        {
            rule: rulesNames.notFilled,
            options: {
                message: errors.notFilled
            }
        },
        {
            rule: rulesNames.notValidLength,
            options: {
                min: passwordLength,
                message: errors.notValidLength(passwordLength)
            }
        },
        {
            rule: rulesNames.notIncludeCapitalLetter,
            options: { 
                message: errors.notIncludeCapitalLetter
            }
        },
        {
            rule: rulesNames.notIncludeNumber,
            options: { 
                message: errors.notIncludeNumber
            }
        }
    ],
    reenter: [
        {
            rule: rulesNames.notConfirm, 
            options: {
                password: '', 
                message: errors.notConfirm
            }
        }
    ]
}

const presets = {
    email: 'email', 
    password: 'password', 
    reenter: 'reenter'
}

export function getPresets(name) {
    return JSON.parse(JSON.stringify(config[presets[name]]))
}