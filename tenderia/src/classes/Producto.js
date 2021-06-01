import firebase from '../utils/firebase';
class Producto {
    precio = '';
    nombre = "";
    unidades = "";
    constructor(nombre, precio, unidades) {
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
    static updateProduct(uid, i, price, name, units) {
        let ret = false
        this.precio = price;
        this.nombre = name;
        this.unidades = units;
        console.log(name);
        firebase.database().ref('local/' + uid + '/productos/' + i).set({
            precio: this.precio,
            nombre: this.nombre,
            unidades: this.unidades
        }).then(ret = true);
        return ret;
    }
}
export default Producto;