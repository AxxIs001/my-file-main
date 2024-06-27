document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('calculate');
    let displayValue = '';

    function adjustFontSize() {
        const maxFontSize = 80;
        const minFontSize = 20;
        let fontSize = maxFontSize;

        display.style.fontSize = `${fontSize}px`;

        while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
            fontSize -= 5;
            display.style.fontSize = `${fontSize}px`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;

            if (buttonText === 'AC') {
                displayValue = '';
                display.textContent = '0';
            } else if (buttonText === '+/-') {
                if (displayValue) {
                    displayValue = displayValue.startsWith('-') ? displayValue.substring(1) : '-' + displayValue;
                    display.textContent = displayValue;
                }
            } else if (buttonText === '%') {
                displayValue = (parseFloat(displayValue) / 100).toString();
                display.textContent = displayValue;
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue.replace('X', '*')).toString();
                } catch (e) {
                    displayValue = 'Error';
                }
                display.textContent = displayValue;
            } else {
                if (displayValue === 'Error') {
                    displayValue = '';
                }
                displayValue += buttonText;
                display.textContent = displayValue;
            }
            adjustFontSize();
        });
    });
});