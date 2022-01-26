function palindrome() {
    let userString = document.getElementById("checkPalindrome").value;

    let isPalindrome = checkAPalindrome(userString);
    displayData(userString, isPalindrome);
}

function palindrome2() {
    let userString = document.getElementById("checkPalindrome").value;
    let revString = reverseInput(userString);
    let isPalindrome = checkAnotherPalindrome(userString, revString);
    displayData2(userString, revString, isPalindrome);
}

function checkAPalindrome(userString) {
    let len = userString.length;
    for (let i = 0; i < len / 2; i++) {
        if (userString[i] !== userString[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

//Frank
//knarF
function reverseInput(userString) {
    let revString = "";
    for (let i = userString.length - 1; i <= 0; i--) {
        revString += userString[i];
    }

    return revString;
}

function reverseInput2(userString) {
    let revString = userString.split("").reverse().join("");
    return revString;
}

function checkAnotherPalindrome(userString, revString) {
    if (userString == revString) {
        return true;
    } else {
        return false;
    }
}


function displayData(userString, isPalindrome) {

    if (isPalindrome) {
        document.getElementById("msg").innerHTML = `This is a Palindrome: ${userString}`;
    } else {
        document.getElementById("msg").innerHTML = `This is not a Palindrome: ${userString}`;
    }


    document.getElementById("alert").classList.remove('d-none');
}

function displayData2(userString, revString, isPalindrome) {
    if (isPalindrome) {
        document.getElementById("msg").innerHTML = `This is a Palindrome: ${userString}, reversed is ${revString}`;
    } else {
        document.getElementById("msg").innerHTML = `This is not a Palindrome: ${userString}, reversed is ${revString}`;
    }


    document.getElementById("alert").classList.remove('d-none');
}