// Objects
// key-value pairs in curly braces

const myObj ={name: "Fayee"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat","sleep", "code"],

    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return "Hello World!"
    },
    action2: function() {
        return `Time for ${this.beverage.morning}`
    },
}
console.log(myObj.name);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["alive"]);
console.log(anotherObj.action())
console.log(anotherObj.action2())


// ..............inheritance.........................//

const vehicle = {
    wheels: 4,
    engine: function() {
        return 'Vrrooom!';
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { return "Whoooosh!"}; //override
console.log(car.engine());
console.log(car.wheels);

 const tesla = Object.create(car);
 console.log(tesla.wheels);
 tesla.engine = function() {return "Shhhhh...."}
 console.log(tesla.engine());
 
// ..............key-value pairs in curly braces.................//
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}`);
}


// .........destructuring objects.........//
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

function sings({ vocal }) {return `${vocals} sings!`};
console.log(sings(band));