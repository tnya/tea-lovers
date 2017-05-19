var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var address = document.getElementById('address').value;

document.getElementById('suscribirse').addEventListener('click', function(){
  if(name == null || name == nombre.length == 0 || name == ""){
      alert("Debe ingresar su nombre");
  }else if(email == null || email == email.length == 0 || email == ""){
      alert("Debe ingresar email");
  }else if(address) == null || address == address.length == 0 || address == ""){
      alert("Debe ingresar una direccion");
  }else{
    alert("Muchas gracias por suscribirse");
  }
});