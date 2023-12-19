let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
function firstLastName(first, last) {
  let fullName = [];
  for (i = 0; i < first.length; i++) {
    if (i < first.length) {
      fullName.push(`${i + 1}.` + first[i] + " " + last[i]);
    }
  }
  return fullName;
}
console.log(firstLastName(first, last));