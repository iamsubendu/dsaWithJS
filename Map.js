// Map is a built -in data structure that allows you to
// store key - value pairs, where both the key and the
// value can be of any type.The keys in a Map can be any
// value, including objects and primitive types like strings
// and numbers.
const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
]);
myMap.set('key4', 'value4');
const value = myMap.get('key4');
console.log(value); // 'value4'
myMap.delete('key4');
const numItems = myMap.size;
console.log(numItems); // 3
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}
