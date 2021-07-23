import uniqueRandomArray from 'unique-random-array';

const helloWorld = function () {
    console.log('Hello World!');
  }


const randomNumber = function () {
    console.log(uniqueRandomArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
  }


module.exports = {
    
    helloWorld,
    randomNumber
}