function http() {
    var 
       link = prompt('Введите адрес ссылки'),
       text = prompt('Текст ссылки'),
       result = 'Ваша ссылка: <a href="' + link + '">' + text + '</a>',
       paragr = document.getElementsByClassName('p')[0];

  paragr.innerHTML = (result);     
}

{/* <button onclick="http()"></button>
<p class="p"></p> */}