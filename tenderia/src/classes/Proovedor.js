import firebase from '../utils/firebase';
class Proveedor {
    constructor(name, cel, whatsapp) {
        this.name = name;
        this.cel = cel;
        this.whatsapp = whatsapp;
    }
    addProveedor(uid) {
        var rootRef = firebase.database().ref();
        var storesRef = rootRef.child('local/' + uid + '/proveedores/');
        var newStoreRef = storesRef.push();
        newStoreRef.set({
            name: this.name,
            cel: this.cel,
            whatsapp : this.whatsapp
        });
    }
}
export default Proveedor;