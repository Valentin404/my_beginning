
function TBRL() {
    var TL=document.getElementById('TL').value;
    var TR=document.getElementById('TR').value;
    var BL=document.getElementById('BL').value;
    var BR=document.getElementById('BR').value;
    var tTL=document.getElementById('tTL');
    var tTR=document.getElementById('tTR');
    var tBL=document.getElementById('tBL');
    var tBR=document.getElementById('tBR');
    
    var block = document.getElementById('block');
    
    tTL.value=TL;
    tTR.value=TR;
    tBL.value=BL;
    tBR.value=BR;

    block.style.borderRadius=TL + 'px ' + TR + 'px ' + BL + 'px ' + BR + 'px ';
 }