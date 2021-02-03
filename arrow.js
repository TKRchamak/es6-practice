// const add = function myFun(a, b){
//     return a +b;
// }
const double = a => a * 2;
const add = (a, b) => a + b;
const give5 = () =>10;

const toMath = (a, b) =>{
    const add = a + b;
    const obs = a - b;
    const sum = add * obs;
    return sum;
}
const result = toMath(20, 20);
console.log(result);
const sum = give5();
console.log(sum);
