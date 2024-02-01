const nextButton = document.getElementById("nextButton");
const nextPageTable = document.getElementById("nextPageTable")
let theNumber = 1;
nextButton.addEventListener('click', function () {
    previousButton.disabled = false
    theNumber++;
    fetch(`https://swapi.dev/api/planets/?page=${theNumber}`)
        .then((data) => {
            data.json()
                .then(theResults => {
                    console.log(theResults);
                    nextPageTable.innerHTML = ` <tr>
                    <th>Planet Name</th>
                    <th>Population</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    
                </tr>`
                    for (let theNextItems of theResults.results) {
                        nextPageTable.innerHTML += 
                        `<tr>
                    
                        <td>${theNextItems.name}</td>
                        <td>${theNextItems.population}</td>
                        <td>${theNextItems.climate}</td>
                        <td>${theNextItems.gravity}</td>
                        
                        </tr>`
                    }
                    if (theResults.next === null) {
                        nextButton.disabled = true;
                    }
                })

        })

    nextPageTable.innerHTML = "";
});


const previousPageTable = document.getElementById("previousPageTable")
const previousButton = document.getElementById("previousButton")
previousButton.addEventListener('click', function () {
    theNumber--;
    nextButton.disabled = false;
    fetch(`https://swapi.dev/api/planets/?page=${theNumber}`)
        .then((data) => {
            data.json()
                .then(theResultsMax => {

                    console.log(theResultsMax);
                    nextPageTable.innerHTML += ` <tr>
                    <th>Planet Name</th>
                    <th>Population</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    
                </tr>`
                    for (let previousItems of theResultsMax.results) {
                        nextPageTable.innerHTML += `
                        <tr>
                        <td>${previousItems.name}</td>
                        <td>${previousItems.population}</td>
                        <td>${previousItems.climate}</td>
                        <td>${previousItems.gravity}</td>
                        </tr>
                        `
                    }
                    if (theResultsMax.previous === null) {
                        previousButton.disabled = true;

                    }

                })
        })
    nextPageTable.innerHTML = ""
})