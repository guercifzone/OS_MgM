<<<<<<< HEAD


function myTime(){
    'use strict';
    var hours = new Date().getHours(),
        minites = new Date().getMinutes(),
        day = new Date().getDate(),
        month = new Date().getMonth() + 1,
        year = new Date().getFullYear();

    if (minites < 10) {
        minites = "0" + minites;
    }
    if (month < 10) {
        month = "0" + month;
    }

    document.getElementById('date').textContent = 
        hours + ":" + minites + " ~ " + day + "/" + month + "/" + year;
}

window.onload = function(){
    'use strict';
    setInterval(myTime,1000);
};

document.getElementById('start').onclick = function(){
    'use strict';
    document.getElementById('startMenu').classList.toggle('hide');
};
=======
var hours = new Date().getHours(),
    minites = new Date().getMinutes(),
    day = new Date().getDay(),
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear(),
    box = document.getElementById('date');

window.onload = function(){
    'use strict';
    box.textContent = day + "/" + month + "/" + year;
}
>>>>>>> a0b719a8296f92dceb3d231e12528a225704b0b0
