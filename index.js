let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == "×") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "÷") {
            buttonText = "/";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "−") {
            buttonText = "-";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
    screen.value = screenValue;
}