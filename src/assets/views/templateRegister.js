import { templateMainScreen } from "./templateMainScreen.js";
import { templateRegister2 } from "./templateRegister2.js";
// import { template } from "@babel/core";

export const templateRegister = () => {
    const containerRegister = document.createElement('div');
    containerRegister.setAttribute("class","mainClass");
    //escrir html
    const contentRegister = `<h1>Registrar cuenta</h1>
                            <p>Escriba su nombre</p>                            
                            <input class="input" id="name" type= "text">
                            <p>Escriba su apellido</p>
                            <input class="input" id="lastName" type= "text">
                            <div id="buttonContainer">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next">Seguir</button>
                            </div>`
      containerRegister.innerHTML = contentRegister;


  const btnBack = containerRegister.querySelector('#back');
  btnBack.addEventListener('click', () => {
    templateMainScreen();
    window.location.hash = '';
  })

  const btnNext = containerRegister.querySelector('#next');
  btnNext.addEventListener('click', () => {
    localStorage.setItem('name', document.getElementById("name").value);
    localStorage.setItem('lastName', document.getElementById("lastName").value);   
    window.location.hash = '#/register2';
  })

  return containerRegister;
}


