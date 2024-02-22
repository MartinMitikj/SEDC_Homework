const table = document.getElementById("table");
const filterType = document.getElementById("filterType");
const filterBrand = document.getElementById("filterBrand");
const filterModel = document.getElementById("filterModel");
const filterDoors = document.getElementById("filterDoors");
const filterGasType = document.getElementById("filterGasType");
const filterColor = document.getElementById("filterColor");
const filterHorsepower = document.getElementById("filterHorsepower");
const searchBtn = document.getElementById("searchBtn");
const filterIsNew = document.getElementById("filterIsNew");
const filterIsOld = document.getElementById("filterIsOld");
const resetBtn = document.getElementById("resetBtn");

let cars = [];

function fetchData() {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cars = data;
      createTable();
    });
}
fetchData();
function createTable(filteredCars = cars) {
  let rows = "";
  if (filteredCars.length === 0) {
    rows = `<td><h2>NO DATA FOUND!!!</h2></td>`;
  } else {
    filteredCars.forEach((car) => {
      rows += `<tr >
        <td style="border:1px solid black">${car.type}</td>
        <td style="border:1px solid black">${car.brand}</td>
        <td style="border:1px solid black">${car.model}</td>
        <td style="border:1px solid black">${car.doors}</td>
        <td style="border:1px solid black">${car.gasType}</td>
        <td style="border:1px solid black">${car.color}</td>
        <td style="border:1px solid black">${car.isNew}</td>
        <td style="border:1px solid black">${car.horsepower}</td>
      </tr>`;
    });
  }

  table.innerHTML = `
    <table>
      <tr>
        <th style="border:3px solid black">Type</th>
        <th style="border:3px solid black">Brand</th>
        <th style="border:3px solid black">Model</th>
        <th style="border:3px solid black">Doors</th>
        <th style="border:3px solid black">Gas Type</th>
        <th style="border:3px solid black">Color</th>
        <th style="border:3px solid black">Is it New</th>
        <th style="border:3px solid black">Horsepower</th>
      </tr>
      ${rows}
    </table>`;
}

searchBtn.addEventListener("click", function filterTable() {
  let filteredCars = cars;

  if (filterType.value !== "") {
    filteredCars = filteredCars.filter((car) => car.type === filterType.value);
  }

  if (filterBrand.value !== "") {
    filteredCars = filteredCars.filter(
      (car) => car.brand === filterBrand.value
    );
  }
  if (filterModel.value !== "") {
    const partModel = filterModel.value.toLowerCase();
    filteredCars = filteredCars.filter((car) =>
      car.model.toLowerCase().includes(partModel)
    );
  }

  if (filterGasType.value !== "") {
    filteredCars = filteredCars.filter(
      (car) => car.gasType === filterGasType.value
    );
  }
  if (filterColor.value !== "") {
    const partialColor = filterColor.value.toLowerCase();
    filteredCars = filteredCars.filter((car) =>
      car.color.toLowerCase().includes(partialColor)
    );
  }

  if (filterDoors.value !== "") {
    filteredCars = filteredCars.filter((car) => car.doors == filterDoors.value);
  }
  if (filterIsNew.checked || filterIsOld.checked) {
    if (filterIsNew.checked) {
      filteredCars = filteredCars.filter((car) => car.isNew === true);
    } else {
      filteredCars = filteredCars.filter((car) => car.isNew !== true);
    }
  }

  filteredCars = filteredCars.filter(
    (car) => car.horsepower >= filterHorsepower.value
  );

  createTable(filteredCars);
});
resetBtn.addEventListener("click", function resetBtn() {
  createTable();
});