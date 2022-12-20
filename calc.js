const display = document.getElementById('calc__screen-output');
const buttons = Array.from(document.getElementsByTagName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                let exp = display.innerText;
                exp = exp.replace(/x/g, '*');
                try {
                    display.innerText = eval(exp);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
});