// comm
import PersonCollection from "./classes/PersonCollection.js";

// we can also try to provide any property to Person / PersonCollection consturctors
const personOne = { name: "D", dateOfBirth: new Date(), height: 1200 };
const personTwo = { name: "C", dateOfBirth: new Date(), height: 1 };
const personThree = { name: "B", dateOfBirth: new Date(), height: 2123 };
const personFour = { name: "A", dateOfBirth: new Date(), height: 12 };

const collection = new PersonCollection("height");

[personOne, personTwo, personThree, personFour].forEach((p) => collection.add(p));

const removedPerson = collection.remove();

console.log(collection.persons);
console.log(removedPerson);
