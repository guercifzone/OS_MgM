var imageID=0;
function changeimage(every_seconds){
    //change the image
    if(!imageID){
        document.getElementById("myimage").src="img/background.jpg";
        imageID++;
    }
    else{if(imageID==1){
        document.getElementById("myimage").src="img/background1.jpg";
        imageID++;
    }else{if(imageID==2){
        document.getElementById("myimage").src="img/background2.jpg";
        imageID=0;
    }}}
    //call same function again for x of seconds
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}
