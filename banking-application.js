const menuOptions = "Q: Quit\nW: Withdraw\nD: Deposit\nB: View Balance";

let balance = 0;
let amount;

function promptForNumber() {
  let number = NaN;
  while (isNaN(number)) {
    number = prompt("Please input a number: ");
  };
  return parseFloat(number);
}

function withdrawFromBank(amount) {
  if (amount > balance) {
    alert(`Could not withdraw; requested amount of $${amount} exceeds current balance.`);
  } else {
    balance -= amount;
    alert(`Requested amount of $${amount} withdrawn successfully.`);
  }
}

function depositIntoBank(amount) {
  balance += amount;
  alert(`Successfully deposited $${amount}.`);
}

function viewBalance() {
  alert(`Your current balance is: $${balance}`);
}

function openMenu() {
  let keepLooping = true;
  let userInput;
  while (keepLooping) {
    userInput = prompt(menuOptions + "\n\n" + "Please input a selection");
    switch(userInput) {
      case 'q':
        keepLooping = false;
        break;
      case 'Q':
        keepLooping = false;
        break;
      case 'b':
        viewBalance();
        continue;
      case 'B':
        viewBalance();
        continue;
      case 'd':
        amount = promptForNumber();
        depositIntoBank(amount);
        continue;
      case 'D':
        amount = promptForNumber();
        depositIntoBank(amount);
        continue;
      case 'w':
        amount = promptForNumber();
        withdrawFromBank(amount);
        continue;
      case 'W':
        amount = promptForNumber();
        withdrawFromBank(amount);
        continue;
      default:
        alert(`'${userInput}' was an invalid choice. Please try again.`);
    };
  }
}

const bankTeller = document.getElementById("bank-teller");
bankTeller.addEventListener("click", openMenu);
