
setInterval(function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    var file = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png";
    var randomNum = Math.round(Math.random() * 10000);
 
    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
          document.getElementById('yes_internet').style.visibility = "visible";
          document.getElementById('No_internet').style.visibility = "hidden";
          console.log("connection exist!");
        } else {
          document.getElementById('yes_internet').style.visibility = "hidden";
          document.getElementById('No_internet').style.visibility = "visible";
          console.log("connection doesn't exist!");
        }
      }
    }
},1000);