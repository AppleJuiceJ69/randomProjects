import {arr} from './randomProjects.js';


// we need to click random project then add one of the random projects onto our console first, then we can put it inside the input
// lets use an object instead of an array.

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

const objLoop = function(){

    let round = arr[Math.round(Math.random() * arr.length)].toUpperCase();
    
    
    textarea.value = round;
}

// problem when i get undefined and try to convert undefined to a string it will give me an error.




button.addEventListener('click', objLoop)


// let's uppercase the first letters of each string in the array

// we can also have a button that loops over each element and then randomly stops and chooses one.
