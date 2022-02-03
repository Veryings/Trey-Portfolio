function getValues() {
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Attempts to validate data
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumberes()
        let numbers = generateNumbers(startValue, endValue);

        //call DisplayNumbers()
        displayNumbers(numbers);
    } else alert("Input must be integers.");
}

/**
 * Generate numbers from startvalue to the endvalue
 * Logic Function(s)
 */
function generateNumbers(start, end) {

    let numbers = [];

    //We want to execute all numbers from start to end
    for (let index = start; index <= end; index++) {
        numbers.push(index);
    };

    return numbers;
}

/**
 * Determine the even numbers to display in bold
 * Display/View Function
 */
function displayNumbers(numList) {

    let templateRows = "";

    for (let index = 0; index < numList.length; index++) {
        let num = numList[index];

        if (num % 2 == 0) {
            templateRows += `<tr><td class="text-green-strong fw-bold " style="text-align:center">${num}</td></tr>`;
        } else templateRows += `<tr><td class="text-green" style="text-align:center">${num}</td></tr>`;


    }
    document.getElementById("results").innerHTML = templateRows;
}