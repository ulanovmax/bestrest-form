import Choices from 'choices.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');

    if (inputs.length) {
        inputs.forEach((input) => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('focusout', () => {
                if (!input.value)
                    input.parentElement.classList.remove('focused');
            });
        });
    }

    /* Select functionality */
    const select = document.querySelector('select');
    const choiceLabel = document.getElementById('choice-label');
    const choice = new Choices(select, {
        itemSelectText: '',
        searchEnabled: false,
    });

    const choiceHeader = choice.containerInner.element;
    const choiceContainer = choice.containerOuter.element;

    select.addEventListener('showDropdown', () => {
        choice.containerOuter.element.parentElement.classList.add('focused');

        if (choice.getValue()) {
            choiceHeader.classList.add('default');
        } else {
            choiceHeader.classList.remove('default');
        }
    });

    select.addEventListener('hideDropdown', () => {
        choice.containerOuter.element.parentElement.classList.remove('focused');
        if (choice.getValue()) choiceLabel.style.display = 'none';
    });

    choice.removeActiveItems();

    /* Form validation */
    const mainForm = document.querySelector('form');
    const submitButton = mainForm.querySelector('button[type=submit]');

    $(mainForm).validate({
        rules: {
            name: {
                required: true,
                maxlength: 16,
            },

            surname: {
                required: true,
                maxlength: 16,
            },

            phone: {
                required: true,
                phoneUS: true,
                digits: true,
            },

            password: {
                minlength: 8,
                required: true,
            },

            confirm: {
                required: true,
                equalTo: '#password',
            },
        },
    });

    /* Validate select */
    submitButton.addEventListener('click', () => {
        const errorLabel = document.createElement('span');
        errorLabel.classList.add('error-choice');
        errorLabel.innerHTML = 'This field is required.';

        if (!choice.getValue()) {
            choiceHeader.classList.add('error');
            choiceContainer.after(errorLabel);
        } else {
            choiceHeader.classList.remove('error');
            choiceContainer.nextElementSibling.style.display = 'none';
        }
    });
});
