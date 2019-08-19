import {
  showPost
} from './../js/auth.js';

export const templateProfile = () => {

  return new Promise(function(resolve, reject) {
    showPost()
    .then(posts => {
      const containerProfile = document.createElement('div');
      posts.forEach((doc) => {
        let fullName = doc.data().fullName;
        let post = doc.data().post;
        let date=doc.data().timestamp.toDate();
        const contentPost = document.createElement('div');
        contentPost.innerHTML =`
                          <div class = "postBlock"> 
                          <h5>
                           <p id="fullname"></p>
                           <p id="date"></p>
                          </h5>
                           <p id="post"></p>
                           </div>
                           `;
        contentPost.querySelector("#fullname").innerHTML = fullName;
        let month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        let dateCreate= (date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear());
        
        contentPost.querySelector("#date").innerHTML = dateCreate;
        contentPost.querySelector("#post").innerHTML = post;
        containerProfile.appendChild(contentPost);

      });
      const contentProfile = document.createElement('div');
      contentProfile.innerHTML =` 
      <p id="post"></p>
      <button class="button" id="back">Volver</button>
      `;
      // pasar el contenido al div
      containerProfile.appendChild(contentProfile);

      const btnBack = containerProfile.querySelector('#back');
      btnBack.addEventListener('click', () => {
        window.location.hash = '#/wall';
      });

      resolve(containerProfile);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });  
  })  
 
}