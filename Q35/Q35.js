"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["dog", "cat", "lion"];
for (var i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet:`);
}
for (let j = 0; j < animals.length; j++) {
    console.log(`${animals[j]} makes a great pet`);
}
