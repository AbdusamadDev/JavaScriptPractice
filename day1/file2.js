// var sumValues = function (value) {
//     let total = 0;
//     for (let i of value) {
//         total += i;
//     }
//     return total;
// }

// console.log(sumValues([1, 2, 3]));

// var reverseString = function (word) {
//     let reversed = "";
//     let wordLength = word.length
//     for (let index in word) {
//         reversed += word[wordLength - 1 - parseInt(index)];
//     }
//     return reversed;
// }
// console.log(reverseString("wassup"));


// var reverseString = function (word) {
//     let reversed = "";
//     for (let char of word) {
//         reversed = reversed + char;
//     }

//     return reversed;
// }

// console.log(reverseString("wassup"));


// const person1 = {
//     name: "John",
//     age: 25,
//     gender: "male"
// };

// const person2 = {
//     name: "Alice",
//     age: 30,
//     gender: "female"
// };

// // An array containing person objects
// const peopleArray = [person1, person2];

// var printPersonInfo = function (arrayObject) {
//     let newArray = [];
//     for (perObject of arrayObject) {
//         const constructedString = perObject?.name + " is " + perObject?.age + " and is " + perObject?.gender;
//         newArray.push(constructedString)
//     }
//     return newArray;
// }
// console.log(printPersonInfo(peopleArray));

var temperatureChecker = function (temperature) {
    if (typeof temperature != "string") {
        return "Gimme valid data, son of son!!"
    }
    if (temperature < 0) {
        return "Fuck, it is freezing!!!";
    } else if (temperature > 0 && temperature < 10) {
        return "Well, it is cold!";
    } else if (temperature > 10 && temperature < 25) {
        return "Chill out bro, it cool, moderate";
    } else {
        return "Damn, hot like hell!!!";
    }
}