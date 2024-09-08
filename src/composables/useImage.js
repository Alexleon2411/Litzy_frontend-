import { useFirebaseStorage } from "vuefire"
import { ref, computed } from "vue"
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { uid } from "uid"


export default function userImage() {
  const storage = useFirebaseStorage()
  const url = ref('')

  const onFileChange = e => {
    const file = e.target.files[0]
    const fileName = uid() + '.jpg'
    const sRef = storageRef(storage, '/services/' + fileName) // el storage ref es el que contiene la ubicacion donde se van almacenar las imagenes en firebase , esto toma solo dos parametros el primero es el identificador

    //siguiente linea es para subir el archivo
    const uploadTask = uploadBytesResumable(sRef, file) // este upload toma dos parametros tambien, el primero ese la ubicacion del archivo y el segundo es el archivo como tal

    uploadTask.on('state_changed',
      () =>  {},
      (error) => console.log(error),
      () => {
        // en el tercer callback la imagen ya se subio a la base de datos
        // el parametro downloadURL es el que contiene la url de la imagen del producto
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) =>{
            url.value = downloadURL
          })
      }
    )
  }

  const imageUploaded = computed(() => {
    return url.value ? url.value : null
  })

  return {
    onFileChange,
    url,
    imageUploaded,
  }
}
