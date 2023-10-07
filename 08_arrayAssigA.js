const arrayFruits = ["Banana", "orange", "Apple","Mango","Water Melon"];
console.log(arrayFruits);
console.log(`=== first element of given array ====`);
console.log(`The first element of the given array is "${arrayFruits[0]}"`);

console.log(`=== last element of given array ====`);
console.log(`The last element of the given array is "${arrayFruits[arrayFruits.length-1]}"`);

console.log(`==== Removing middle(mango) element from the array === `);
var removeElement = arrayFruits.splice(3,1)
console.log(removeElement);

console.log(`==== insert an element "pineapple" at the last position === `);
var insertAtLast = arrayFruits.push('Pineapple');
console.log(arrayFruits);

console.log(`==== insert an element "Dragon fruit" before water Melon === `);
var insertBeforeMelon = arrayFruits.splice(3,0,"Dragon Fruit")
console.log(arrayFruits);

console.log(`====== Replace an element orange with kivi =====`);
arrayFruits.splice(1,1,"KIWI");
console.log(arrayFruits);

console.log(`==== Log the element starting from 1 to 4 =====`);
console.log(`${arrayFruits.slice(1,5)}`);

console.log(` ===== Log the last three element =====`);
console.log(`The last three element are :${arrayFruits[arrayFruits.length-3]},${arrayFruits[arrayFruits.length-2]},${arrayFruits[arrayFruits.length-1]}`);




