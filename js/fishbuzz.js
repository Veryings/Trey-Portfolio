function getValues() {
    //These become fizzNumber and buzzNumber - you get the values the same way, but use them in a different part of the code
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbData = generateData(fizzValue, buzzValue);
        displayData(fbData);

    } else {
        alert("You must use numbers");
    }
}



function generateData(fizzValue, buzzValue) {
    let returnArray = [];
    let isFizz = false;
    let isBuzz = false;
    for (let index = 1; index <= 100; index++) {
        isFizz = (index % fizzValue == 0);
        isBuzz = (index % buzzValue == 0);
        if (isFizz && isBuzz) {
            returnArray.push('FishBuzz');
        } else if (isFizz) {
            returnArray.push('Fish');
        } else if (isBuzz) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(index);
        }
    }
    return returnArray;
}



function displayData(fbData) {
    let contentDiv = document.getElementById("results");
    let content = "";
    //erases data
    contentDiv.innerHTML = "";

    for (let i = 0; i < fbData.length; i++) {
        let dataValue = fbData[i];
        let dataElement = `<div class ="col >${dataValue}">${dataValue}</div>`;
        content += dataElement;
    }
    contentDiv.innerHTML = content;

}