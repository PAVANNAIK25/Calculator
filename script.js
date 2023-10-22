
const num = document.querySelectorAll(".val");
const display = document.querySelector(".display-calc");
const operator = document.querySelectorAll(".operator");


window.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key == "0" || key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9") {
        display.innerHTML += key;
    } else if (key == "+" || key == "-" || key == "%" || key == "*") {
        let lastElement = display.innerHTML.charAt(display.innerHTML.length - 1);
        if ((lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '%' ||
            lastElement === '/') && (key === '+' || key === '-' || key === '*' || key === '%' ||
            key === '/')) {
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1) + key;
        } else{
            display.innerHTML += key;
        }
    } else if (key == "=" || key == "Enter") {
        let op = display.innerHTML;
        let result = eval(op);
        if (result == Infinity || result == undefined) {
            display.innerHTML = "Error";
        } else {
            display.innerHTML = result;
        }
    } else if (key == "Escape") {
        display.innerHTML = "";
    }
})

num.forEach((element) => {
    element.addEventListener('click', function () {
        display.innerHTML += element.textContent;
    })
});

operator.forEach((element, index) => {
    element.addEventListener('click', function(){
        clicked(element,index);
});
});

function allclear() {
    display.innerHTML = "";
}

function clicked(element, index) {
    let lastElement = display.innerHTML.charAt(display.innerHTML.length - 2);
    if ((lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '%' ||
        lastElement === '/') && (element.textContent === '+' || element.textContent === '-' || element.textContent === '*' || element.textContent === '%' ||
            element.textContent === '/')) {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 2) + element.textContent;
    } else {
        if (element.textContent == 'AC') {
            allclear();

        } else if (element.textContent == '+/-') {

            if (Math.sign(display.innerHTML) == 1) {
                display.innerHTML = "-" + display.innerHTML;
            } else if (Math.sign(display.innerHTML) == -1) {
                display.innerHTML = display.innerHTML.substring(1);
            }

        } else if (element.textContent == '=') {
    
            let op = display.innerHTML;
            let result = eval(op);
            if (result == Infinity || result == undefined) {
                display.innerHTML = "Error";
            } else {
                display.innerHTML = result;
            }

        } else if (index == 7) {
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
        }
    }
}
