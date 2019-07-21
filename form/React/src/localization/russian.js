export const errors = {
    notFilled: 'Не должен быть пустым', 
    notIncludeDot: 'Должен содержать . ',
    notIncludeAt: 'Должен содержать @',
    notIncludeNumber: 'Должен содержать цифру', 
    notIncludeCapitalLetter: 'Должен содержать большую букву',
    notValidLength: (length) => `Должен содержать ${length} символов`,
    notConfirm: `Пароли не совпадают!`
}