// A Set is an object that allows you to store unique values
// of any type, whether primitive values or object references.

const mySet = new Set();

// Add values to the set
mySet.add('hello');
mySet.add(42);
mySet.add({ name: 'John', age: 30 });

// Check the size of the set
console.log(mySet.size); // Output: 3

// Check if a value exists in the set
console.log(mySet.has('hello')); // Output: true

// Remove a value from the set
mySet.delete(42);

// Loop through the set
mySet.forEach((value) => {
  console.log(value);
});
