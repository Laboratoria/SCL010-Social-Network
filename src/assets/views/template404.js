export const template404 = () => {
	authSignOut();
	const containerError = document.createElement("div");
	containerError.className = "containerError";
	const contentError = `
		<p>Error 404</p>
		<br>
		<button><a href="/">Ir Inicio</a></button>

	`;
	containerError.innerHTML = contentError;


	return containerError;
}

export const signOut = () => {
	authSignOut();
}