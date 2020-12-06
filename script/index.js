function center(){
    document.getElementById("input").style.textAlign = 'center';
}

function left(){
    document.getElementById('input').style.textAlign = 'left';
}

function right(){
    document.getElementById('input').style.textAlign = 'right';
}

function justify(){
    document.getElementById('input').style.textAlign = 'justify';
}

function bold(){
    document.execCommand('bold');
}

function underline(){
    document.execCommand('underline',);
}

function italic(){
    document.execCommand('italic');
}

function undo(){
    document.execCommand('undo')
}

function redo(){
    document.execCommand('redo')
}

function changeColor(){
    var color = document.getElementById('color').value;
    document.execCommand('foreColor',false, color)
}