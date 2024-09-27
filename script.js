document.getElementById('registrationForm').addEventListener('submit', function(event){
  event.preventDefault();


const nombre = document.getElementById('nombre').value.trim();
const apellido = document.getElementById('apellido').value.trim();
const correo = document.getElementById('correo').value.trim();
const contraseña = document.getElementById('contraseña').value.trim();
const confirmarContraseña = document.getElementById('confirmarContraseña').value.trim();
const FechadeNacimiento = document.getElementById('FechadeNacimiento').value.trim();
const genero = document.querySelector ('input[name="genero"]:checked');
const intereses =document.querySelectorAll ('input[name="intereses"]:checked');


let message='';

if(!nombre || !apellido || !correo || !contraseña || !FechadeNacimiento || !genero || !intereses){
  message='Todos los campos son obligatorios';

}else if(contraseña!==confirmarContraseña){
  message='Las contraseñas no coinciden';


}else if(intereses.length===0){
  message='Debe seleccional al menos un interes'
}else{
  message='Registro completado con exito';
  document.getElementById('message').style.color='green';
}

document.getElementById('message').textContent=message;


});


