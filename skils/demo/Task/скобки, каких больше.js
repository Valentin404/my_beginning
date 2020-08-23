let c = '()()()()((((((((((((((((((((((((((((((()))))()()()((((())))))))))))))))))))))()()()()))))))))())()()()))()((()()()()()';



let copyleft = 0;
let  copy = 0;
for (i=0; i<c.length;i++){
 if(c[i] == '('){
     copy++;
 } else if(c[i]==')' ) {
   copyleft++;
 }  
}
if (copyleft < copy){
  console.log('Левых больше')
} else if(copyleft == copy ){
  console.log('Четко вписал')
} else {
  console.log('Правых больше')
}
console.log(copyleft)



let copyr = 0;
for (i=0; i<c.length;i++){
 if(c[i] == '('){
     copyr++;
 } else if(c[i]==')' ) {
   copyr--;
 }  
}
if (copyr < 0){
  console.log('Левых больше')
} else if(0 == copyr ){
  console.log('Четко вписал')
} else {
  console.log('Правых больше')
}