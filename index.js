console.log('Calculator');
let screen = document.getElementById('screen');
let screenValue = '';

let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);

        if (buttonText == 'back') {
            screenValue = screen.value.substr(0, screen.value.length - 1);
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        
        else if (buttonText == 'sin') {
            console.log(buttonText);
            
            screenValue = screenValue * Math.PI / 180;
            screen.value = Math.sin(screenValue);
            
        }

        else if (buttonText == 'cos') {
            screenValue = screenValue * Math.PI / 180;
            screen.value = Math.cos(screenValue);
        }

        else if (buttonText == 'tan') {
            screenValue = parseInt(screenValue);
            screenValue = screenValue * Math.PI / 180;
            screen.value = Math.tan(screenValue);
        }

        else if (buttonText == '=') {
                
            screen.value = eval(screen.value);
                    
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

