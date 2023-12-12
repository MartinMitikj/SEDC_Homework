console.log("Hello");



let moneyBalance = 1000

function atm() {
  let choice = parseInt(prompt("1.)Balance 2.)Withdrawn"))

  if (choice === 1) {
    balance()
  }
  else if (choice === 2) {
    makeWithdrawn()
  }
  else {
    alert('Error')
  }
}

atm();

function balance() {
  alert('Your current balance is: ' + moneyBalance);
  atm();
}

function makeWithdrawn() {
  let withdrawn = parseFloat(prompt('How much would you like to withdrawn?'));
  if (isNaN(withdrawn)) {
    alert('Error: please enter a number!');
    makeWithdrawn();
  } 
  else if (moneyBalance -= withdrawn){
    balance()
  }
  else {
    alert('Not enought money')
  }
}

