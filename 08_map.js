let mapName = new Map();
mapName.set(11,"Jenny");
mapName.set(12,"Bill");
mapName.set("name","Elon");
mapName.set(14,"Stew");
console.log(mapName);

let result = mapName.get('name');
console.log(result);

mapName.set(12,"Prince")
console.log(mapName);
mapName.set(22,"Prince")
console.log(mapName);

console.log(`Total element in MapName is: ${mapName.size}.`);

mapName.delete(12);
console.log(mapName);

console.log(mapName.has(12));
console.log(mapName.has(11));

console.table(mapName);

let toGetKeys = mapName.keys();
console.log(toGetKeys);
let toGetValues = mapName.values();
console.log(toGetValues);
console.log(`===========================================`);
for (const iterator of toGetKeys) {
    console.log(iterator, mapName.get(iterator));
}

for (const iterator of object) {
    
}