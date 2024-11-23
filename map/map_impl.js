//crating a map
const myMap = new Map();

//we can create a map by pasiing an array into the map
/*const integers = new Map([
    ["first", 0],
    ["second", 1],
    ["third", 3]
]); */

//inserting objects into the map
myMap.set("id", 101);
myMap.set("perc", 65);
myMap.set("sub", "JavaScript");

//using get() we can get the value of specific key
console.log(myMap.get("perc"));
console.log(myMap.get("id"));
console.log(myMap.get("sub"));

//typeof returns object:
console.log(typeof(myMap));

//instanceof returns boolean
console.log(myMap instanceof Map);

//Map.size
//The size property returns the number of elements in a map:
myMap.size;

//Map.delete()
//The delete() method removes a map element:
myMap.delete("id");

//Map.has()
//The has() method returns true if a key exists in a map:
myMap.has("perc");

// List all entries
let text1 = "";
for (const x of myMap.entries()) {
  text1 += x;
}
console.log(text1);