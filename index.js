const email = window.document.querySelector('#email');
const pass = window.document.querySelector('#password');
const mensaje = window.document.querySelector('#mensaje');
const boton = window.document.querySelector('#boton');
boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue !== '') {
     console.log('email: ' + emailValue);
     console.log('password: ' + passwordValue);
     email.value = '';
     password.value = '';
     email.focus();
      if (emailValue === 'ejemplo@gmail.com' && passwordValue === '123456') {
       mensaje.classList = [];
       mensaje.classList.add('mensaje-oculto');
       console.log('Iniciando sesión....');    
     } else {
       mensaje.classList = [];
       mensaje.classList.add('mensaje-visible');
       console.log('Correo o contraseña incorrectos');    
     }
  } else {
    console.log('Ingresar datos');
  }
}
