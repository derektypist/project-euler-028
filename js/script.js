// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the Input is Valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num> 1500 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 1500.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of the numbers on the diagonals in an ${num} x ${num} spiral is ${spiralDiagonals(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the sum of the numbers on the diagonals in an n by n
    spiral formed in the same way
    spiralDiagonals(101)  returns 692101
    spiralDiagonals(303)  returns 18591725
    spiralDiagonals(505)  returns 85986601
    spiralDiagonals(1001) returns 669171001
*/
function spiralDiagonals(n) {
    let total = 1;

    for (let i=1;i<parseInt(Math.ceil(n/2.0));i++) {
        let odd = 2 * i + 1;
        let even = 2 * i;
        total = total + 4 * odd ** 2 - 6 * even;
    }

    return total;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}