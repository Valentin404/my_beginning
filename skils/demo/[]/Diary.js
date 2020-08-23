var day = "",       // день недели
    text = "",      // Текст
    i = 1,          // счетчик
    arrNotes = [],  // массив заметок
    form = document.dwsForm;

function btnClick() {
    day = form.days.value;
    text = form.message.value;
 
    arrNotes.push("<tr><td>" + i + "</td><td>Заметка на: " + day.bold() + "</td></tr>"
        + "<tr><td></td><td>" + text + "<hr></td></tr>");
    i++;
    form.reset();
}
function prClick() {
    document.getElementById('diary').innerHTML="<table>" + arrNotes.join('') + "</table>";
}


{/* <div class="wrapper">
<h3>Diary</h3>
<form name="dwsForm">
<label>Days weeks</label>
<select name="days">
 <option>Monday</option>
 <option>Tuesday</option>
 <option>Wednesday</option>
 <option>Thursday</option>
 <option>Friday</option>
 <option>Satudey</option>
 <option>Sandey</option>
</select><br><br>
<textarea rows="5" cols="45" name="message"  placeholder="Напишите текст...">
</textarea><br>
<input type="button" value="Отправить" onclick="btnClick()">
<input type="button" value="Распечатать" onclick="prClick()">
</from>
<br>
<div id="diary"></div>
</div> */}