/* Select functionality */
import Choices from 'choices.js';

const select = document.querySelector('select');

let loaded = false;

const countries = fetch(
    'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json'
);

countries
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        data.forEach((country) => {
            const opt = document.createElement('option');
            opt.value = country.dial_code;
            opt.innerHTML = country.name;

            select.appendChild(opt);
        });

        loaded = true;

        setUpSelect();
    })
    .catch((error) => console.log(error));

function setUpSelect() {
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

    window.choice = choice;
}

export { select };
