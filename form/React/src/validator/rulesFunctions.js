export function notFilled (value = '', options = { message: 'Mast not be empty'}) {
    return !value.length ? options.message : false;
}
export function notIncludeDot (value = '', options = { message: 'Not include .'}) {
    const dot = /\./
    return !value.match(dot) ? options.message : false;
}
export function notIncludeAt (value = '', options = { message: 'Not include @'}) {
    const at = /@/;
    return !value.match(at) ? options.message : false;
}
export function notIncludeCapitalLetter (value = '', options = { message: 'Not include capital letter'}) {
    const capitalLetter = /[A-Z]/;
    return !value.match(capitalLetter) ? options.message : false;
}
export function notIncludeNumber (value = '', options = { message: 'Not include capital letter'}) {
    const number = /[0-9]/;
    return !value.match(number) ? options.message : false;
}
export function notValidLength (value = '', options = { min: 5, message: 'Mast include 5 symbols'}) {
    return !(value.length >= options.min) ? options.message : false;
}
export function notConfirm (value = '',  options = { value: '', message: 'Values not match'}) {
    return !(value === options.value) ? options.message : false;
}
