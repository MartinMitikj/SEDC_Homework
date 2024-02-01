function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("Milk", "Food", true, 50),
    new Product("Bread", "Food", false, 20),
    new Product("Toothpaste", "Personal Care", true, 5),
    new Product("Shampoo", "Personal Care", false, 15),
    new Product("Laptop", "Electronics", true, 20),
    new Product("Headphones", "Electronics", false, 50),
    new Product("T-shirt", "Clothing", true, 30),
    new Product("Jeans", "Clothing", false, 45),
    new Product("Desk Chair", "Furniture", true, 15),
    new Product("Chocolate", "Food", true, 80),
    new Product("Acumulator", "Electronics", false, 100),
    new Product("Pen Set", "Stationery", false, 5),
    new Product("Basketball", "Sports", true, 25),
    new Product("Yoga Mat", "Sports", false, 15),
    new Product("Gardening Gloves", "Outdoor", true, 12),
];

let expensiveFoods = products.filter(product => product.price > 20);

console.log(expensiveFoods);

let foodsOnDiscount = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);

console.log(foodsOnDiscount);

let pricesOfProductsOnDiscount = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);

console.log(pricesOfProductsOnDiscount);

let totalPrice = 0;

pricesOfProductsOnDiscount.forEach(price => {
    totalPrice += price;  
});

console.log(totalPrice);


products.filter(product => !product.hasDiscount)
.map(product => product.name + ": $" + product.price)
.forEach(x => {
    let firstLetter = x[0];
    if (firstLetter === 'A' || firstLetter === 'O' || firstLetter === 'E' 
    ||  firstLetter === 'I' || firstLetter === 'U' || firstLetter === 'Y')
    console.log(x)})
    
    
    
    
    
    // let vowelFoodsOnDiscount = products
    //     .filter(product => !product.hasDiscount)
    //     .map(product => product.name + ": $" + product.price)
    //     .filter(x => {
    //         let firstLetter = x[0];
    //         if (firstLetter === 'A' || firstLetter === 'O' || firstLetter === 'E' 
    //         ||  firstLetter === 'I' || firstLetter === 'U' || firstLetter === 'Y')
    //         return true;
    // })
    




