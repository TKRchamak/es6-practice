const name = ['name1', 'name2', 'name3', 'name4'];
const age = [12, 15, 18, 45, 68, 98, 56, 25, 23];
const roll = [2, 15, 568, 455, 6558, 9008, 5456, 0025, 1023];

const nameAge = name.concat(age).concat(roll);
const nameAge2 = [...name, ...age, ...roll];

console.log(nameAge2);

const num1 = 1542;
const num2 = 4521;
const num3 = 4586;
const max = Math.max(num1, num2, num3);
const numbers = [4512, 54894, 87952];
const max2 = Math.max(...numbers); //in this line u see this an array is spread by ... //
console.log(max2);