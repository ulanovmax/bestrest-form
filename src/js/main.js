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
});

/* Select functionality */
const select = document.querySelector('select');
const choiceLabel = document.getElementById('choice-label');
const choice = new Choices(select, {
    itemSelectText: '',
    searchEnabled: false,
});

select.addEventListener('showDropdown', () => {
    const choiceHeader = choice.containerInner.element;
    choice.containerOuter.element.parentElement.classList.add('focused');

    if (choice.getValue()) {
        choiceHeader.classList.add('default');
    } else {
        choiceHeader.classList.remove('default');
    }
});

select.addEventListener('hideDropdown', () => {
    choice.containerOuter.element.parentElement.classList.remove('focused');
    console.log(choice);
    if (choice.getValue()) choiceLabel.style.display = 'none';
});

choice.removeActiveItems();

/* Form validation */

$('form').validate({
    rules: {
        name: {
            required: true,
            maxlength: 16,
        },
    },
    messages: {},
});
