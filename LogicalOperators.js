const username="admin";
const password="secret";

if(username==="admin" && password==="secret"){

    console.log("Verification Successful");
}

if(username==="admin" || username==="manager"){
    console.log("Authorized User");
}