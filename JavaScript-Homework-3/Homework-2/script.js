console.log("Hello");


function calculateAge(humanAge) {
  let dogYears = 7 * humanAge;
  console.log(`Your dog is ${dogYears} years old in dog years`);
  return humanAge
}

calculateAge(5);
calculateAge(10);

function calculateAge1(dogAge) {
  let humanYears = dogAge / 7;
  console.log(`Your dog is ${humanYears} years old in human years`);
  return dogAge
}

calculateAge1(35)
calculateAge1(70)