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