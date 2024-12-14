let num1 = 0; 
let num2 = 0;
let iniNumber = 0;
let operation;
let result;
let currentExpression = '';
let otherOperator = false;

const btns = document.querySelectorAll('.btn')
const btns_operator = document.querySelectorAll('button-operator')
const equals = document.querySelector('.button-equal')
const clear = document.querySelector('.button-erase')
let display = document.getElementById('display')

equals.addEventListener('click', equalFunction)

clear.addEventListener('click', ()=>{
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    currentExpression = '';
    otherOperator = false;
})

btns.forEach(btnNumber =>{
btnNumber.addEventListener('click', () =>{
    iniNumber += btnNumber.innerText;
    console.log(btnNumber.innerText)
    display.textContent = iniNumber.slice(1)
    if(operation == undefined){
        num1 += btnNumber.innerText;
        display.textContent = num1;
    }
    else{
        num2 +=btnNumber.innerText;
        display.textContent = num2;
    }
    });
});

btns_operator.forEach(el => {
    el.addEventListener('click', (el) =>{
        if(otherOperator == false){
        handleOperator(el.textContent);
        }
        else{
            equalFunction();
        }
    })
})

function handleOperator(op){
    operation = op;
    if(otherOperator == false){
    otherOperator = true;
    }
}

function calculate(numA, numB, op){

    let numC

    if(op === '+'){
        numC = numA + numB
        num1 = numC;
        num2 = 0;
        operator = '';
        return numC
    }
    if(op == '-'){
        numC = numA - numB
        num1 = numC;
        num2 = 0;
        operator = '';
        return numC
    }
    if(op == '*'){
        numC = numA * numB
        num1 = numC;
        num2 = 0;
        operator = '';
        return numC
    }
    if(op == '/'){
        /*
        if(num2 === 0){
            return 'Error!'
        }*/
        numC = numA / numB
        num1 = numC;
        num2 = 0;
        operator = '';
        return numC
    }

}

function equalFunction(){
    if(num1 == 0 && num2 == 0 && operation == undefined){
        display.textContent = 0 
    }else{
        let num3;
        let num4;
        let ope;
        
        if(num1.includes("+", 0)){
            ope = "+";
            num3 = num1.substring(0, num1.indexOf('+'))
            num4 = num1.slice(num1.indexOf('+') + 1);
        }
        else if(num1.includes("-", 0)){
            ope = "-";
            num3 = num1.substring(0, num1.indexOf('-'))
            num4 = num1.slice(num1.indexOf('-') + 1);
        }
        else if(num1.includes("*", 0)){
            ope = "*";
            num3 = num1.substring(0, num1.indexOf('*'))
            num4 = num1.slice(num1.indexOf('*') + 1);
        }
        else if(num1.includes("/", 0)){
            ope = "/";
            num3 = num1.substring(0, num1.indexOf('/'))
            num4 = num1.slice(num1.indexOf('/') + 1);
        }
        else{
            console.log("Error")
        }

        console.log("num3",num3)
        console.log("num4", num4)
        console.log("ope", ope)

        let total = calculate(parseInt(num3), parseInt(num4), ope)
        console.log(total)
        display.textContent = total
    }
}
