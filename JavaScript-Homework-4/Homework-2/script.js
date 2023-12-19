let numbers = [4, 5, 15, 23, 34];
function sum(numbers) {
    result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function validateNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            alert("Error");
            return false;
        }
    }
    console.log(sum(numbers));
    return true;
}
console.log(validateNumber(numbers))