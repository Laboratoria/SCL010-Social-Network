
export const templateUploadPhoto = () => {
  let user = firebase.auth().currentUser;

  const containerUpload = document.createElement("div");
  containerUpload.className = "containerUpload";
  //if (user != null) {
   const contentUpload = `

<div id="filesubmit">
  <input type="file" class="file-select" accept="image/*"/>
  <button class="file-submit">SUBMIT</button>
</div>

<div id="photos">

</div>


  <button class="button2" id="backWall">Volver al Muro</button>

    `;
    containerUpload.innerHTML = contentUpload;
    const buttonFile = containerUpload.querySelector(".file-submit");
    const photos = containerUpload.querySelector("#photos");

    buttonFile.addEventListener("click", () => {
    const file = document.querySelector('.file-select').files[0];
      handleFileUploadChange(file)
      showPhotoList();
    });

        const buttonVolver = containerUpload.querySelector("#backWall");
    buttonVolver.addEventListener("click", () => {
       location.href = "#/posts"
    });


//document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);

  return containerUpload;

};



export const handleFileUploadChange = (file) => {
  let user = firebase.auth().currentUser;
const ref = firebase.storage().ref();
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(user.email+"/"+name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);


  })
  .catch(console.error);
};

export const showPhotoList = () => {
  let user = firebase.auth().currentUser;
  const storageRef = firebase.storage().ref();
  var listRef = storageRef.child(user.email);
  // Find all the prefixes and items.
listRef.listAll().then(function(res) {
  res.prefixes.forEach(function(folderRef) {
    console.log(folderRef.url)
    // All the prefixes under listRef.
    // You may call listAll() recursively on them.

  });
  res.items.forEach(function(itemRef) {
    // All the items under listRef.
    console.log(itemRef)
  });
}).catch(function(error) {
  // Uh-oh, an error occurred!
});


}