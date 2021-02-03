function add(num1, num2 = 10) {
    return num1 + num2;
}

const total = add(15);
console.log(total);

function createUser(name, age = 18) {

    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const use = createUser('ami ', 13)
console.log(use);