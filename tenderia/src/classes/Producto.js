import firebase from '../utils/firebase';
class Producto {
    precio = '';
    nombre = "";
    unidades = "";
    constructor(nombre, precio, unidades){
        this.precio = precio;
        this.nombre = nombre;
        this.unidades = unidades;
    }
    addProducto(uid) {
        var ret = false;
        var rootRef = firebase.database().ref();
        var storesRef = rootRef.child('local/' + uid + '/productos/');
        var newStoreRef = storesRef.push();
        if (newStoreRef) {
            newStoreRef.set({
                precio: this.precio,
                nombre: this.nombre,
                unidades: this.unidades
            });
            ret = true;
        }
        return ret;
    }
}
export default Producto;