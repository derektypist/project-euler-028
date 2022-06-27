# Project Euler 028 - Number Spiral Diagonals

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

    21 22 23 24 25
    20  7  8  9 10
    19  6  1  2 11
    18  5  4  3 12
    17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

The aim is to find the sum of the numbers on the diagonals in an `n` x `n` spiral formed in the same way using HTML Forms and JavaScript.

Information at [Project Euler 028](https://projecteuler.net/problem=28)

## UX

**Getting Started**

Enter a whole number between 2 and 1500 and click on the Submit Button.  The number that is entered is the spiral size.  For example, if you entered 5, the spiral is 5 x 5.  You will see the sum of the diagonals in an `n` by `n` spiral, unless you have made an invalid input.  For example, if you entered 5, you would expect the sum of the numbers on the diagonals in a 5 x 5 spiral to be 101.  Click on the Reset Button to clear the information or to start again.


**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 1500
- Entering a number, but it is not an integer

As a user, I expect the function `spiralDiagonals(101)` to return a number.

As a user, I expect the function `spiralDiagonals(101)` to return 692101.

As a user, I expect the function `spiralDiagonals(303)` to return 18591725.

As a user, I expect the function `spiralDiagonals(505)` to return 85986601.

As a user, I expect the function `spiralDiagonals(1001)` to return 669171001.

**Information Architecture**

The function `spiralDiagonals(n)` returns a number, where `n` is a number between 2 and 1500.  The number `n` is the spiral size.

## Features

Allows the user to enter a number (size of the spiral) as well as getting the sum of the numbers on the diagonals in that spiral size.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-028) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)

