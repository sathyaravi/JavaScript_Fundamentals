const products = [
    "iPhone",
    "MacBook",
    "iPad",
    "AirPods"
];

//check macbook exists

console.log(products.some(product=>product==="MacBook"));

//finds 

console.log(products.find(product=>product==="iPad"));

//to find the product that starts with i
const newProduct=products.filter(product=>product.charAt(0)==='i');

console.log(newProduct);
