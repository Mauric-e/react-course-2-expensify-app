// OBJECT DISTRUCTION

// 
// 

// const person = {
//     name: 'Maurice',
//     age: 24,
//     location: {
//         city: 'Accra',
//         temp: 30
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Maurice'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// 
// 
// 
// 
// ARRAY DESTRUCTURING 
// 

// const address = ['Racecourse House No 2F225', 'Lapaz-Racecourse', 'Accra', '00233'];

// const [, city, state = 'Greater Accra'] = address;

// console.log(`You're in ${city}  ${state}`);

const item = ['coffee (iced)', '$2.00', '$3.00', '$2.75', ];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);


