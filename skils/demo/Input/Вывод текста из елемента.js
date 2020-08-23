let inputtext = document.querySelector('.inputtext');
let button = document.querySelector('button');
let div = document.querySelector('.div');

button.onclick = function (){
    //Выполняется после нажатия кнопки
    // console.log(inputtext.value); // value это то что было введено в инпут
   let val = +inputtext.value //+ перед input переобразует стрoку в число
   console.log(val);
   div.innerHTML = val;
   inputtext.value = ''; // очищает поле ввода
}



{/* <input type="text" class="inputtext" value="">
<button>Go</button> */}
{/* <div class="div"></div> */}