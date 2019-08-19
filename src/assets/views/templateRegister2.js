
import { handleSignUp } from './../js/auth.js';

export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    containerRegister2.setAttribute("class","mainClass");
    //escrir html
    const contentRegister2 = `<h1>Registrar cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input id="email" class="input" type= "text">
                            <p>Ingrese una contraseña</p>
                             <input type="password" id="password" class="input" type="password">
                             <p>Ingrese nuevamente su contraseña</p>
                             <input id="password1" class="input" type="password">                          
                             <input class="input" id="name" type= "text" hidden="false">
                             <div id="buttonContainer">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next">Seguir</button>
                            </div>`


    containerRegister2.innerHTML = contentRegister2;
    const btnNext = containerRegister2.querySelector('#next')

    btnNext.addEventListener('click', () =>{
       handleSignUp();
    })

    const btnBack = containerRegister2.querySelector('#back');
    btnBack.addEventListener('click', () =>{
        window.location.hash = '#/register';
    })
    return containerRegister2;
}