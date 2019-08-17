import {
  connectDB
} from "../js/data-base.js";
import {
  authSignOut
} from "../js/authentication.js";
export const templateNewPost = () => {
  var user = firebase.auth().currentUser;
  const containerNewPost = document.createElement("div");
  containerNewPost.className = "containerNewPost";
  //if (user != null) {
    const contentNewPost = `
  <label for="title">Titulo</label>
  <input type="text" id="title"><br>
  <label for="textPost">Post</label>
  <textarea name="textPost " id="textPost" cols="40" rows="10"></textarea>
  <br>

<input type="radio" name="gender" value="male"> Male<br>
<input type="radio" name="gender" value="female"> Female<br>
  <button class="button2" id="publicar">Publicar</button>
  <button class="button2" id="backWall">Volver al Muro</button>


     


    `;
    containerNewPost.innerHTML = contentNewPost;

    const buttonVolver = containerNewPost.querySelector("#backWall");
    buttonVolver.addEventListener("click", () => {
       location.href = "#/posts"
    });

    const buttonPublicar = containerNewPost.querySelector("#publicar");
    buttonPublicar.addEventListener("click", () => {

      const comentario = document.getElementById("title").value;
      const titulo = document.getElementById("textPost").value;
      const autor = "Adriana";

      let database = connectDB();
      database.collection('posts').add({
        uid: user.uid,
        autor: user.email,
        titulo: titulo,
        comentario: comentario,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
      }).then(refDoc => {
        console.log(`Id del post => ${refDoc.id}`);
      }).catch( error => {
        console.log(`Error => ${error}`)
      })
      location.href = "#/posts"
    });

/*  } else {
    M.toast({
      html: 'Por favor realiza login en el sistema'
    })
    location.href = "#/login"
    
  }*/


  return containerNewPost;
};
