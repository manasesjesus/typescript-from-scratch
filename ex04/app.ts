enum Countries {AR, DE, CH, ES, MX = "Mexico", PA= "Panama", SE= "Sweden"};

const person: {
    name: string;
    age: number;
    country: Countries;
    hobbies: string[];
    isMarried: boolean;
    roles: [number, string][];
} = {
    name: "Manasés Jesús",                       // string
    age: 28,                                     // number
    hobbies: ["coding", "traveling", "playing"], // array of strings
    country: Countries.MX,                       // enum
    isMarried: false,                            // boolean
    roles: [[0, "Speaker"], [1, "Author"]]       // array of tuples
};

console.log(person.name + " is from " + person.country);
console.log("His roles are:");
person.roles.forEach((role) => console.log(role[1]));
console.log("and his hobbies are:");
person.hobbies.forEach(hobby => console.log(hobby.toUpperCase()));
