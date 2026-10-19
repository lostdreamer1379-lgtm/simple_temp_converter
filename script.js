const convertButton = document.getElementById('convertButton');
const farButton = document.getElementById('fahrenheit');
const celButton = document.getElementById('celsius');
const result = document.getElementById('result');
const tempInput = document.getElementById('temperatureInput');
let temp;

function convert(){
    if(farButton.checked){
        result.textContent = "Converting to Celsius...";
        temp=Number(tempInput.value);
        temp=(temp-32)*5/9;
        result.textContent = `Result: ${temp.toFixed(2)} °C`;
    } else if(celButton.checked){
        result.textContent = "Converting to Fahrenheit...";
        temp=Number(tempInput.value);
        temp=temp*9/5+32;
        result.textContent = `Result: ${temp.toFixed(2)} °F`;
    }
}

convertButton.addEventListener('click', convert);

