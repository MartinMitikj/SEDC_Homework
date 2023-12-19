let array = ["Hello", "there", "students", "of", "SEDC", "!"];
function string(array){
    let result = "";
    for (i = 0;i < array.length;i++) {
        result += array[i] + " ";
    }
    return result;
}
console.log(string(array));