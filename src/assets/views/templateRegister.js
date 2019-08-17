import { crearCuentaEmailPass } from "../js/authentication.js";

export const templateRegister = () => {
	const containerRegister = document.createElement("div");
	containerRegister.className = "containerRegister";
	const contentRegister = 

	`
    <div class="container">
	  <form class="signup">
		  <div class="header">
			  <h3>Crear cuenta </h3>
		  </div>
		  <div class="sep"></div>
		  <input type="text" name="nombreContactoReg" id="nombreContactoReg" placeholder="Nombre de Usuario" required>
	      <input type="text" name="emailContactoReg" id="emailContactoReg" placeholder="Correo electronico valido " required>
	      <input type="password" name="passwordReg" id="passwordReg"placeholder="Contraseña" required></input>
	      <button class="button2" id="btnRegistroEmail">Registrarse</button>
	  </form>
  </div>


	`		;

	containerRegister.innerHTML = contentRegister;

	const btnRegistroEmail = containerRegister.querySelector("#btnRegistroEmail");

	btnRegistroEmail.addEventListener("click", () => {
		const nombreReg = document.getElementById("nombreContactoReg").value;
		const emailReg = document.getElementById("emailContactoReg").value;
		const passwordReg = document.getElementById("passwordReg").value;
        let countrylab= document. getElementById("country-laboratoria").value;
	    let numberGeneration= document.getElementById("generation-lab").value;

		crearCuentaEmailPass(emailReg, passwordReg, nombreReg,countrylab,numberGeneration );
	});

	return containerRegister;	
}

