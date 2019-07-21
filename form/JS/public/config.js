const dot = '.';
const at = '@';
const passwordLength = 8;
const capitalLetter = '[A-Z]';
const number = '[0-9]';

import {errors} from './errors.js';

export let config = {
    email: [
        {
            rule: 'notEmpty',
            options: {
                message: errors.empty
            }
        },
        {
            rule: 'containsSymbol',
            options: {
                symbol: `\\${dot}`, 
                message: errors.contains(dot)
            }
        },
        {
            rule: 'containsSymbol',
            options: {
                symbol: at, 
                message: errors.contains(at)
            }
        }
    ], 
    password: [
        {
            rule: 'notEmpty',
            options: {
                message: errors.empty
            }
        },
        {
            rule: 'requiredLength',
            options: {
                min: passwordLength,
                message: errors.length(passwordLength)
            }
        },
        {
            rule: 'containsSymbol',
            options: {
                symbol: capitalLetter, 
                message: errors.contains(capitalLetter)
            }
        },
        {
            rule: 'containsSymbol',
            options: {
                symbol: number, 
                message: errors.contains(number)
            }
        }
    ],
    reenter: [
        {
            rule: 'matchPassword', 
            options: {
                message: errors.match
            }
        }
    ]
}