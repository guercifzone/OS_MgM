function showTags(url) {
    var tags = ID3.getAllTags(url);
    console.log(tags);
    document.getElementById('title').textContent = tags.title || "";
    document.getElementById('artist').textContent = tags.artist || "";
    document.getElementById('album').textContent = tags.album || "";

    var image = tags.picture;
    if (image) {
      var base64String = "";
      for (var i = 0; i < image.data.length; i++) {
          base64String += String.fromCharCode(image.data[i]);
      }
      var base64 = "data:" + image.format + ";base64," +
              window.btoa(base64String);
      document.getElementById('cover_url').setAttribute('src',base64);
    } else {
      document.getElementById('cover_url').style.display = "none";
    }
  }