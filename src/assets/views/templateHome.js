export const templateHome = () => {
	const containerHome = document.createElement("div");
	containerHome.className = "containerHome";
	const contentHome = `
   <section class="content">
    <strong> <p>Tu Red Social, para compartir información, vivencias, Tips  y todo lo que quieras con mujeres de la Comunidad Tech.</p> </strong>      
   </section>
 <img class="avatar" id="avatar" src="assets/img/avatarNew2.jpg">
    <div class="buttonPpal" id="containerLogin">
      <a href="#/login"class= "buttons"> Iniciar Sesión</a>
    </div>
       <br>
      <div class="buttonPpal" id="containerRegister">
      <a href="#/register" class= "buttons"> Crear Cuenta </a>
    </div>

		`;
	containerHome.innerHTML = contentHome;
	return containerHome;
}
export const signOut = () => {
	authSignOut();
}