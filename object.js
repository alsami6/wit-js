const mySym = Symbol("key1")

const jsUser = {
    name: "Sami",
    "fullName": "Al Sami",
    [mySym]: "key1",
    age: 18,
    location: "Dhaka",
    email: "alsami1209@gmail.com",
    inLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

console.log(jsUser[mySym]);




// +++++++++++++++++++++++++++++


