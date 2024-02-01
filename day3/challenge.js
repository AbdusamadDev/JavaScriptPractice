function filterIntegers(numberArray) {
    let = newList = [];
    if (typeof numberArray != "object") {
        throw TypeError("Invalid type of data provided");
    }
    for (integer of numberArray) {
        if (typeof integer == "number") {
            newList.push(integer)
        }
    }
    return newList;
};
var solution = filterIntegers([465, "QWeqwe", "89465", 87, 54])

console.log(solution);