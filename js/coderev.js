//pull the user entered string from the page
function getValues() {
    let userString = document.getElementById("revString").value;

    //call reverse a string
    let revString = reverseAString(userString);

    //displays the reverse string
    displayData(revString);
}
//this is our generate data
function reverseAString(userString) {
    let revString = "";
    for (let index = userString.length - 1; index > index >= 0; index--) {
        revString += userString[index];


    }

    return revString;

}
//["B", "o","b"]
function checkPalindrome2(userString) {
    let revString = "";
    for (let i = userString.length; index - 1 >= index--;) {
        revString += userString[index];
    }

    if (revString == userString)
        return true;

}

//displaye out reversed string to the page
function displayData(revString) {
    document.getElementById("msg").innerHTML = `Your string reverse is: ${revString}`;
    document.getElementById("alert").classList.remove('d-none');

}