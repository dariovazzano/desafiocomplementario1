let nombre = prompt("Ingrese su nombre").toLowerCase();
let apellido = prompt("Ingrese su apellido").toLowerCase();
let edad;
let mensaje;

do{
    edad = parseInt(prompt("Ingrese su edad"));
}
  while(typeof edad != 'number');

  if (edad >= 18){
    mensaje = "puede pasar";
  } else{
    mensaje = "no puede pasar"
  }

alert(`Usted, ${nombre} ${apellido} ${mensaje}`);