import errorMessages from './errorMessages';
import { choice } from './select';

document.addEventListener('DOMContentLoaded', () => {
    const choiceContainer = choice.containerOuter.element;
    const choiceHeader = choice.containerInner.element;

    const inputs = document.querySelectorAll('input');
    const checkbox = document.querySelector('input[type="checkbox"]');

    function addError() {
        const errorLabel = document.createElement('span');
        errorLabel.classList.add('error-select');
        errorLabel.innerHTML = errorMessages.required;

        return errorLabel;
    }

    if (inputs.length) {
        inputs.forEach((input) => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('focusout', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) checkbox.classList.remove('error');
    });

    /* Form validation */
    const mainForm = document.querySelector('form');
    const submitButton = mainForm.querySelector('button[type=submit]');

    $(mainForm).validate({
        errorElement: 'span',
        focusCleanup: true,

        rules: {
            name: {
                required: true,
                maxlength: 16,
                minlength: 2,
            },

            surname: {
                required: true,
                maxlength: 16,
                minlength: 2,
            },

            phone: {
                required: true,
                phoneUS: true,
                digits: true,
            },

            password: {
                minlength: 8,
                required: true,
                passwordCheck: true,
            },

            confirm: {
                required: true,
                equalTo: '#password',
            },
        },

        messages: {
            name: {
                required: errorMessages.required,
                minlength: jQuery.validator.format(
                    'The name must be more than 2 characters'
                ),
            },

            surname: {
                required: errorMessages.required,
                minlength: jQuery.validator.format(
                    'The name must be more than 2 characters'
                ),
            },

            phone: {
                required: errorMessages.required,
            },

            password: {
                required: errorMessages.required,
            },

            confirm: {
                required: errorMessages.required,
                equalTo: jQuery.validator.format(errorMessages.confirm),
            },

            email: {
                email: errorMessages.email,
            },
        },
    });

    jQuery.validator.addMethod(
        'passwordCheck',
        function (value, element) {
            return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/.test(
                value
            );
        },
        'Password must have 1 letter, 1 number and one symbol'
    );

    /* Validate on submit */
    submitButton.addEventListener('click', () => {
        if (!choice.getValue()) {
            choiceHeader.classList.add('error');
            console.log(addError());
            choiceContainer.after(addError());
        } else {
            choiceHeader.classList.remove('error');
            choiceContainer.nextElementSibling.style.display = 'none';
        }

        console.log(checkbox);
        if (!checkbox.checked) {
            checkbox.classList.add('error');
        } else {
            checkbox.classList.remove('error');
        }
    });
});
