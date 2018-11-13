// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
// Use code to add an array of hobbies to your me object
// Use code to delete your age key

let me = {
  age: 27,
  current_location: "Sydney"
}

console.log(me);

me.hobbies = ["bake", "sleep", "watch tv"];

console.log(me);

delete me.age;

console.log(me);

// Iterate through me.hobbies and log each hobby to the screen

for (let values of me.hobbies) {
  console.log(values);
}

// Add another item to the end of the hobbies array

me.hobbies.push("online shopping");

console.log(me.hobbies);

// Delete the first item in the hobbies array ????

delete me.hobbies[0];

console.log(me.hobbies);

// Add a mother key, set its value to an empty object

let key = {

}

// Add name, age and location keys to the mother object

key.name = "Morty";
key.age = "10";

console.log(key);

// Add a print_details function to the me object.


// Call the function to log some details about yourself. I.e. me.print_details() should work
// Note the difference between calling me.print_details and me.print_details()



// const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
// const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
// const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
// const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };
// Use console.log and interpolation to display your campus' street and state from the coder_academy object
// If we use code to delete the state from your campus, will your log of the coder_academy object still work? I.e. did it copy each campus object or does it reference each campus object?
// Research: value vs reference (a common interview question)


// -------------------------------------------------------------------------- //


// Objects should feel familiar. They're just like hashes in Ruby.

// One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects.

// const doggo = {
//   name: 'Edison',
//   breed: 'Groodle',
//   hobbies: ['walks', 'tennis balls', 'bamboozling']
// }

// console.log(doggo.name); // -> Edison

// Another way to refer to a property is using square bracket notation:

// console.log(doggo['name']); // -> Edison
// We can use square bracket notation to dynamically refer to a property:

// const my_property = 'name';
// console.log(doggo[my_property]); // -> Edison