const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 }
];

//filter products whose products price greater than 100



const fproduct=products.filter(product=>product.price>100).map(username=>username.name);

console.log(fproduct);

