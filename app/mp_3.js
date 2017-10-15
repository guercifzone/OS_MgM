//read file with extantion  mp3 onlie voice file
input.onchange = function(e){
  var sound = document.getElementById('sound');
  sound.src = URL.createObjectURL(this.files[0]);

  sound.onend = function(e) {
    URL.revokeObjectURL(this.src);
  }
}
