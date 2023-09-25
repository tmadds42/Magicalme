function magazineAnswer(){
  var password = document.getElementById("magazineAnswer");
  var passwordText = password.value;
  if(passwordText=="Forbes"){
    return true;
  }
  alert("WRONG! Try again")
  return false;
}