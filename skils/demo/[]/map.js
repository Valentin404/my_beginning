let a = [1, 2, 6];
let b = []
a[5] = 7; 
delete a[5];

for (var i = 0; i < a.length; i++){
    b[i] = a[i] * 2;
}
// console.log(a);
// console.log(b);

// let b = a.map(function(currentValue, index, array) {
//     return который будет попадать в масив B
// });
// x - Имя переменной
// y - index
// z - ссылка на масив который используется (а)
let c = a.map(function(x, y, z) {
    // console.log(y);
    return x *2;
});
console.log(c);

