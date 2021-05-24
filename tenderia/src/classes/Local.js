import firebase from '../utils/firebase';
import Ciudades from './Ciudades';
class Local {
    nombre = "";
    direccion = "";
    ciudad = "";
    constructor(nombre, direccion, ciudad) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._ciudad = ciudad;
    }
    addLocal(uid){
        let ret = false;
        firebase.database().ref('local/' + uid).set({
            nombre: this._nombre,
            direccion: this._direccion,
            ciudad: this._ciudad
        }).then(
            ret = true
        );
        return ret;
    }
    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get ciudad() {
        return this._ciudad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set ciudad(ciudad){
        this._ciudad = ciudad;
    }
}
export default Local;