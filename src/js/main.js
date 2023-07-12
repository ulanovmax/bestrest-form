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
