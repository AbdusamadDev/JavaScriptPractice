/**
 * There are 3 types of variable types:
 * var, let, const.
 * var - this type can be changed, can be accessed from everywhere. Gives undefined when calling before declaration
 * let - can be accessed only inside a block where it is declared. can be changed and raises error when calling before declaration
 * const - unlike others, const can not be changed, can only be accessed in block where it is declared and raises error when calling before declaration 
 */

var stringObject = "some string aight?"
var integerObject = 894651
var booleanObject = true + false
var jsonObject = {
    "something": {
        "gives": "another thing"
    },
    "count": 8465
}
var arrayObject = [
    "one", "two", "three", "four"
]
var nullObject = null
var symbolObject = Symbol("a symbol unique key")
console.log(typeof stringObject);
console.log(integerObject);
console.log(booleanObject);
console.log(jsonObject);
console.log(arrayObject);
console.log(nullObject);
console.log(symbolObject);
for (const element in [1, 2, 3]) {
    console.log(element);
  }
  