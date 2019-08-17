import {
	authCuentaGoogle,
	authEmailPass,
	authSignOut
} from "../js/authentication.js";
export const templateLogin = () => {
	//authSignOut();
	const containerLogin = document.createElement("div");
	containerLogin.className = "containerLogin";
	const contentLogin = `
	  <div class="container-login">
	  <form class="signup"><a href="index.html"><img src="assets/img/Captura3.JPG" alt="logoComunidad laboratoria"></a>
		  <div class="header">
			  <h3>Logeate</h3>
		  </div>
		  <div class="sep"></div>
		  <input type="email" id="emailSesion" placeholder="Correo electronico" required>
		  <input type="password"  id="passwordSesion" placeholder="Contraseña" required>  
			  <div class="checkboxy">
				  <input name="cecky" id="checky" value="1" type="checkbox"><label class="terms">Acepta los terminos de uso</label>
			  </div>
			  <div class="btn-submit">
			<button class="button2" id="btnInicioEmail">Iniciar Sesión</button>
		  </div>
		  <div class="google-btn">	
		  <button class="button2" id="authGoogle" img src="https://img2.freepng.es/20180324/ote/kisspng-google-logo-g-suite-google-search-chrome-5ab6e608a40b46.8129931915219358806719.jpg">Iniciar con Google</button>
		  </div>	
       <div class="reset-password">
		  <a href="#">¿Olvide mi Contraseña?</a>
	  </div>
	  </form>
  </div>

		`;
	containerLogin.innerHTML = contentLogin;
	const buttonEmailLogin = containerLogin.querySelector("#btnInicioEmail");
	buttonEmailLogin.addEventListener("click", () => {
		const emailSesion = document.getElementById("emailSesion").value;
		const passwordSesion = document.getElementById("passwordSesion").value;
		authEmailPass(emailSesion, passwordSesion);
	});
	const buttonGoogleLogin = containerLogin.querySelector("#authGoogle");
	buttonGoogleLogin.addEventListener("click", () => {
		authCuentaGoogle();
	});
	return containerLogin;
}
export const signOut = () => {
	authSignOut();
}