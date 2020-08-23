// Список при выборе какого то из представленых елементов выводит его в alert
// function select() {
// var mySelect = document.getElementById('mySelect').selectedIndex;
// var options = document.getElementById('mySelect').options;
// alert('Option selected ' + options[mySelect].text);
// }

//1
// ползунок у которого меняется значение от состояния ползунка
// function range() {
//     var rangevar = document.getElementById('rangeId');
//     var pvar = document.getElementById('pId');
//     pvar.innerHTML = rangevar.value;
// }

// innerHTML = подгрузка параметров

//2
// При  изменении расположения ползунка, меяется его место расположение 
// function range() {
//         var rangevar = document.getElementById('rangeId');
//         var inputId = document.getElementById('inputId');
//         inputId.value = rangevar.value;
//     }


//3

function range() {
            var rangevar = document.getElementById('rangeId');
            var divId = document.getElementById('divId');
            divId.style.width = rangevar.value + 'px';
           
        }