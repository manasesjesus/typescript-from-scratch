enum Countries {AR, DE, CH, ES, MX = "Mexico", PA= "Panama", SE= "Sweden"};

const person = {
    name: "Manasés Jesús",
    age: 27,
    hobbies: ["food", "travel", "series"],
    country: Countries.MX
};

console.log("Hobbies of " + person.name + " are: " + person.hobbies);
console.log("and he is from " + person.country);


