var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

div = document.getElementById("move");
div.style.position = "absolute";
div.style.left = "0px";
div.style.top = "0px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "rgba(255, 254, 254, 0);";
div.style.color = "#f7f7ff";

document.body.appendChild(div);

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);