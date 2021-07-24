import lodash from 'lodash';
//var output = lodash.without([1, 2, 3], 1);
//console.log(output);
// const dogs = [
//   { 'name': 'snickers', 'age': 2, breed : 'King Charles'},
//   { 'name': 'prudence', 'age': 5, breed : 'Poodle'}
// ];

// _.findWhere(dogs, { 'breed': 'King Charles' }); // snickers object

// module.exports = {
//   output: lodash.without([1, 2, 3], 1)
// }


export function output(){
  console.log(lodash.without([1, 2, 3], 1));
};

export function helloWorld(){
  console.log('Hello World!');
};

export class Person{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  whoAmI(){
    console.log("I am "+ this.name + " "+ this.surname);
  }
}