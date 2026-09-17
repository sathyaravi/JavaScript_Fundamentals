const browsers = ["chromium", "firefox"];

//add Webkit athe end
browsers.push("Webkit");
console.log(browsers);
//Remove the last browser
browsers.pop();

console.log(browsers);

//add " Safari" at the beginning

browsers.unshift("Safari");

console.log(browsers);

//Remove the first browser

browsers.shift();

console.log(browsers);

