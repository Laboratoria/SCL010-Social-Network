export const authCuentaGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(result => {
       $('#avatar').attr('src', result.user.photoURL);
      M.toast({html: 'Bienvenido '+result.user.displayName+ ' te logueaste con Google'})
      location.href = "#/posts"
    }).catch(error => {
      console.error(error.message)
      M.toast({html: 'Error al autenticarse con Google'})
    });
};

export const authEmailPass = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(result => {
    if (result.user.emailVerified) {
      M.toast({html: 'Bienvenido '+result.user.displayName})
      location.href = "#/posts"
    }else {
      M.toast({html: 'Por favor realiza la verificación de la cuenta'})
      firebase.auth().signOut()
    }
  })
  .catch(error =>{
      M.toast({html: "Por favor verifica que tu correo y contraseña sean correctos"})
    });
  
};

export const crearCuentaEmailPass = (email, password, nombres)  =>{
  console.log(email, password, nombres);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result =>{
      result.user.updateProfile({
        displayName: nombres
      })
      const configuracion = {
        url: 'http://localhost:3000'
      }
      result.user.sendEmailVerification(configuracion).catch(error =>{
        console.error(error)
        M.toast({html: error.message})
      })
      firebase.auth().signOut()
      location.href = "#/login"
      M.toast({html: 'Bienvenido '+nombres+' , debes realizar el proceso de verificación'})
    })
    .catch(error =>{
      M.toast({html: error.message})
      M.toast(error.message, 4000)
    });
};

export const authSignOut = () => {
  firebase.auth().signOut();
  location.href = "#/login"
}