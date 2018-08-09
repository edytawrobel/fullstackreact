// Object destructuring

const person = {
    name: 'Edyta',
    age: 28,
    location: {
        city: 'London',
        direct: 'South'
    }
}

// const name = person.name;
// const age = person.age;

const { name = 'Anonymous', age } = person;

console.log(`I am ${name} and I am ${age} old`)

const { city, direct: direction } = person.location;

if (city && direction ) {
    console.log(`I come from ${city} and the direction is ${direction}`)
}

// Array destructuring
const address = ['201 Fantasy House', '30 Barber Street', 'city']
const [, street, city] = address
console.log(`I live in ${city} on ${street}`)

let item = ['Coffee', '£1.55' ,'£2.50', '£2.75']

const [coffee, small, medium, large] = item;
console.log(`Small ${coffee} costs ${small}`)


console.log('destructure');