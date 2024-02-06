let div = document.querySelector('div');

async function toDo() {
    fetch('htpps://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
        return response.json()
    })
    .then(myJson => {
        div.innerHTML += `<p>Id : ${myJson.id}</p>`
    })
}
toDo()