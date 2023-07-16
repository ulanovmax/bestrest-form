/* Select functionality */
import Choices from 'choices.js';

const select = document.querySelector('select');
const choiceLabel = document.getElementById('choice-label');

const choice = new Choices(select, {
    itemSelectText: '',
    searchEnabled: false,
});

const choiceHeader = choice.containerInner.element;

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

export { choice };
