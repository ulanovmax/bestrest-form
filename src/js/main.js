import Choices from 'choices.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');

    if (inputs.length) {
        inputs.forEach((input) => {
            input.addEventListener('focus', () => {
                input.classList.add('focused');
            });

            input.addEventListener('focusout', () => {
                if (!input.value) input.classList.remove('focused');
            });
        });
    }
});

new Choices('select', {
    itemSelectText: '',
    searchEnabled: false,
});
// $('form').validate({
//     rules: {
//         name: {
//             required: true,
//             minlength: 4,
//             maxlength: 16,
//         },
//         pswd: {
//             required: true,
//             minlength: 6,
//             maxlength: 16,
//         },
//     },
//     messages: {
//         login: {
//             required: 'Это поле обязательно для заполнения',
//             minlength: 'Логин должен быть минимум 4 символа',
//             maxlength: 'Максимальное число символов - 16',
//         },
//         pswd: {
//             required: 'Это поле обязательно для заполнения',
//             minlength: 'Пароль должен быть минимум 6 символа',
//             maxlength: 'Пароль должен быть максимум 16 символов',
//         },
//     },
// });
