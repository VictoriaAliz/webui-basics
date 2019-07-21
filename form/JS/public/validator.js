export function notEmpty (value = '', options = { message: 'Mast not be empty'}) {
    return value.length ? true : options.message;
}

export function containsSymbol (value = '', options = { symbol: 'dafault', message: 'Not contains required symbol'}) {
    return value.match(options.symbol) ? true : options.message;
}

export function requiredLength (value = '', options = { min: 5, message: 'Mast have 5 symbols'}) {
    return value.length >= options.min ? true : options.message;
}

export function matchPassword (firstValue = '', secoundValue = ' ', options = {message: 'Passwords do not match!'}) {
    return firstValue === secoundValue ? true : options.message;
}
