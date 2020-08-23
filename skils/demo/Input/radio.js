{/* <div><input type="radio" name="in1">what does </div>
<div><input type="radio" name="in1"> it take </div>
<div><input type="radio" name="in1"> you to get </div>
<div><input type="radio" name="in1"> to home </div> */}

// Тип radio это возможность делать выбранным данным елементом.
// Если поставит inputs одинаковіе именна, при віборе одного, 
// другой будет ожиматся

const in1 = document.querySelectorAll ('input[type="radio"]');
const button = document.querySelector('button');
button.onclick = () => {
  for ( i=0;i<in1.length;i++){
   if (in1[i].checked){
     console.log(in1[i].value)
   }
  }
}
// Выводит в консоль тот, который выбран