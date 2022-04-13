// Step One - controller accept request
function getMessage() {

    let msg = document.getElementById("txtmessage").value;

    if (msg != '') {

        msg = msg.toUpperCase();

        const regex = /[^a-z0-9]/gi;
        msg = msg.replace(regex, "");

        let palinObj = reverseMessageB(msg);
        

        displayMessage(palinObj);
    } else {
        alert("You must enter a string");


    }


}

// function reverseMessageA(msg) {
//     let revMessage = "";
//     //decrimenting loop
//     for (let index = msg.length - 1; index >= 0; index--) {

//         let char = msg[index];

//         revMessage += char;

//     }

//     return revMessage;

// }

function reverseMessageB(msg) {

    let revMessage = "";
    revMessage = msg.split("").reverse().join("");


    if (msg == revMessage) {
        revMessage = 'It is a palindrome';

    } else {
        revMessage = 'It is not a palidrome'
    };


    return revMessage;


}

function reverseMessageC(originalWord) {

    let revWord = "";

    let returnObj = {};






    return returnObj
}


// Final Step - view
function displayMessage(palinObj) {

    // <li class="list-group-item">A list item</li>
    element = document.getElementById("results");
    element.innerHTML = `${palinObj.message}` - ``;
}