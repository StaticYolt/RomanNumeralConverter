const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {checkUserInput();});
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
})  

const checkUserInput = () => {
    let isValid = true;
    const numVal = numberInput.value;
    if(!numVal || /[^0-9-]/.test(numVal)) {
        result.innerText = "Please enter a valid number";
        isValid = false;
    }
    else if (isValid && numVal < 1) {
        result.innerText = "Please enter a number greater than or equal to 1";
        isValid = false;
    }
    else if(isValid && numVal > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
        isValid = false;
    }
    else {
        result.innerText = convertToRN(parseInt(numVal));
    }
    if(isValid) {
        output.style.borderColor = "#CAC198";
        output.style.color = "#FFF5E6";
        output.style.backgroundColor = "#D32929";
    } else {
        output.style.borderColor = "#D32929";
        output.style.color = "#D32929";
        output.style.backgroundColor = "#FFF5E6";
    }
}

const RNConversionTable = {
    1000:"M",
    900:"CM",
    500:"D",
    400:"CD",
    100:"C",
    90:"XC",
    50:"L",
    40:"XL",
    10:"X",
    9:"IX",
    5:"V",
    4:"IV",
    1:"I"
}
const convertToRN = (num) => {
    if(num <= 0) {
        return "";
    }
    else {
        let floorKey = 1;
        for(const key in RNConversionTable) {
            
            if(num - key >= 0) {
                floorKey = key;
            }
        }
        return RNConversionTable[floorKey] + convertToRN(num - floorKey);
    }
}