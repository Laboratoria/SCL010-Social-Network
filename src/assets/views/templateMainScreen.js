import { loginGoogle } from './../js/auth.js';
import { templateLogin } from "./templateLogin.js";
import { templateRegister } from './templateRegister.js'

//vista principal en donde tentra que elegir que accion quiere tomar
export const templateMainScreen = () => {
    // creamos div que contendrá la plantilla
    const containerMainScreen = document.createElement('div');
    containerMainScreen.setAttribute("class","mainClass");
    // creamos el contenido del MainScreen
    const contentMainScreen = ` 
        <img width=120 height=120>
        <h4>Vive la vida y olvida tu edad</h4>
    <button class="button" id="google">Iniciar Sesión con Google</button>
    <button class="button" id="login">Iniciar Sesión</button>
    <button class="button" id="register">Registrar Cuenta</button>`;

  

    // pasar el contenido al div
    containerMainScreen.innerHTML = contentMainScreen;
    
    // boton para logiarse a la pagina
    const btnLogin = containerMainScreen.querySelector('#login');
    btnLogin.addEventListener('click', () => {
        templateLogin();
        window.location.hash = '#/login';
    })

    // boton para registarse a la pagina
    const btnRegister = containerMainScreen.querySelector('#register');
    btnRegister.addEventListener('click', () => {
        templateRegister();
        window.location.hash = '#/register';
    })

    // boton para logiarse a la pagina pro google
    const btnGoogle = containerMainScreen.querySelector('#google');
    btnGoogle.addEventListener('click', () => {

        loginGoogle();
    })
    return containerMainScreen;
  }
