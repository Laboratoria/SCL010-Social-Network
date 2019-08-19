// import { templateAbout } from "./templateAbout";

export const templateConfirmationTxt = () => {
    const containerConfirmationTxt = document.createElement('div');
    //escrir html
    const contentConfirmationTxt = `<h1>A su correo se le envio un correo para verificarlos, de abrir este correo su cuenta estara activa, gracias por preferinos</h1>
                     <button class="button" id="next">Seguir</button> `

    containerConfirmationTxt.innerHTML = contentConfirmationTxt;
    // const btn = containerConfirmationTxt.querySelector('#login-register');
    // btn.addEventListener('click', () =>{
    //     templateAbout()
    //     window.location.hash = '#/about';
    // })

    const btnNext = containerConfirmationTxt.querySelector('#next');
   // evento del botón que llama a la autentificación de google.
    btnNext.addEventListener('click', () => {

    window.location.hash = '';
  });
  return containerConfirmationTxt;
};