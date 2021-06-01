import firebase from '../utils/firebase';
class Usuario {
    constructor(usuario, contraseña, nombre, telefono, cedula) {
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    crearUsuario() {
        let ret = false;
        firebase.auth().createUserWithEmailAndPassword(this.usuario, this.contraseña)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                firebase.database().ref('usuario/' + user.uid).set({
                    nombre: this.nombre,
                    telefono: this.telefono,
                    cedula: this.cedula
                });
                //history.push("/user");
                ret = true;
            })
            .catch((error) => {
                var errorMessage = error.message;
                throw errorMessage;
            });
        return ret;
    }
    static iniciarSesion(usuario, contraseña) {
        console.log(usuario)
        const ret = false;
        firebase.auth().signInWithEmailAndPassword(usuario, contraseña)
            .then(() => {
                ret = true;
            })
            .catch((error) => {
                var errorMessage = error.message;
                throw errorMessage;
            });
        return ret;
    }
    static cerrarSesion() {
        firebase.auth().signOut()
        .catch((error) => {
            alert("Houston, we have a problem");
        });
    }
}
export default Usuario;