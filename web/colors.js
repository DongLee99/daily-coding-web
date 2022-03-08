function setColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
    }
}
var Body = {
    setColor:function bodySetColor(color) {
        document.querySelector('body').style.color = color;
    }
}
function nightDayHandler(self)
{
    var target = document.querySelector('body');
    if (document.querySelector('#night_day').value === 'night') {
        target.style.backgroundColor = 'black';
        Body.setBackgroundColor('black');
        self.value = 'day';
        setColor('powderblue');
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        setColor('blue');
    }
}