let numbers = 20;
function looping(numbers) {
    for (let i = 1; i <= numbers; i++) {
        if (i % 2 == 0) {
            console.log(i +"\n");
        } else {
            console.log(i +" ");
        }
    }
}
looping(numbers);
