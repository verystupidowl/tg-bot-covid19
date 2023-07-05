console.log('!');


const names = ['Lexa', 'Akmal','Tolkach', 'Kirill'];

names.push('Lexa2');
names.unshift('Lexa1');

const firstName = names.shift();
const lastName = names.pop();

console.log('Names:', names.toSorted((a, b) => b.length - a.length), 'firstName:', firstName, 'lastName:', lastName);
console.log(names)