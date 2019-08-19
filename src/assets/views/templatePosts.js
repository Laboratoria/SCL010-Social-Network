import {
  connectDB
} from "../js/data-base.js";
import {
  authSignOut
} from "../js/authentication.js";


export const templatePosts = () => {
  let user = firebase.auth().currentUser;

  const containerPosts = document.createElement("div");
  containerPosts.className = "containerPosts";
  //if (user != null) {
   const contentPosts = `

  <div id="wall" class="wall">
<section class="posts" id="posts">        
    </section>

  </div>
  <div id="navegador">

      <section class="buttPuPhOu">
      <div><button class="buttPub" id="publicar">Crear Publicación</button></div>
      <div><button class="buttPho" id="pushPhoto">Sube tu Foto</button></div>
      <div><button class="buttOut" id="signOut">Cerrar Sesión</button></div>

      </section>

  </div>
    

     


    `;
    containerPosts.innerHTML = contentPosts;
    const posts = containerPosts.querySelector("#wall");
    posts.innerHTML = showPosts(posts);
    const buttonPublicar = containerPosts.querySelector("#publicar");
    buttonPublicar.addEventListener("click", () => {
      location.href = "#/newPost"
    });

    const buttonPhoto = containerPosts.querySelector("#pushPhoto");
    buttonPhoto.addEventListener("click", () => {
      location.href = "#/newPhoto"
    });

    const buttonSignOut = containerPosts.querySelector("#signOut");
    buttonSignOut.addEventListener("click", () => {
      authSignOut();
    });

/*  } else {
    M.toast({
      html: 'Por favor realiza login en el sistema'
    })
    location.href = "#/login"
    
  }*/

  return containerPosts;
};


 export const   showPosts = (postsSection) => {
      let database = connectDB();
      let user = firebase.auth().currentUser;
      database.collection('posts').where('autor', "==", user.email).onSnapshot( querySnapshot => {
        postsSection.innerHTML = "";
        if (querySnapshot.empty){
          postsSection.innerHTML = obtenerTemplatePostVacio();

        }else {
          let postHtml = "";
          querySnapshot.forEach( post => {
              postHtml = obtenerPostTemplate(
                post.data().autor,
                post.data().titulo,
                post.data().comentario,
                obtenerFecha(post.data().fecha.toDate())
              ) + postHtml;
          });
         postsSection.innerHTML = postHtml;

        }
      });

      return postsSection;
    }

export const obtenerTemplatePostVacio = () => {
    return `
      <div class="post-titulo">
          <h5>Crea el primer Post a la comunidad</h5>
 
      </div>
  `
  }
  export const obtenerPostTemplate  = ( autor, titulo, comentario, fecha) => {
    const containerArticles = document.createElement("article");
    const contentArticles = `
<div>
                
                <div class="post-descripcion">
                    <p>${comentario}</p>

                </div>
                <div class="post-titulo">

                    <h6><strong>${titulo}</strong></h6>
                </div>
                <div class="post-footer container">
                    <div class="row">
                        <div class="col m6">
                            Fecha: ${fecha}
                        </div>
                        <div class="col m6">
                            Autor: ${autor}
                        </div>        
                    </div>
                </div>
                  <section class="buttons">
      <button class="bLike">Me gusta</button>
      <button class="bComment" id="comment">Comentar</button>
      <button class="bEdit" id="edit">Editar</button>
      <button class="bRemove" id="delete">Eliminar</button>
  </section>
  </div>
    `
    containerArticles.innerHTML = contentArticles;
    const buttonComment = containerArticles.querySelector("#comment");
    buttonComment.addEventListener("click", () => {
     alert("HOla");
    });
    const buttonEdit = containerArticles.querySelector("#edit");
    buttonEdit.addEventListener("click", () => {
      console.log("Editar");
    });
    const buttonDelete = containerArticles.querySelector("#delete");
    buttonDelete.addEventListener("click", () => {
      console.log("Eliminar");
    });

    return containerArticles.innerHTML;
  }

  export const obtenerFecha = (timeStamp) => {    
    const d = new Date(timeStamp)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('/')
  }