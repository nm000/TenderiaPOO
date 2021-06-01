import firebase from '../utils/firebase';
class Proveedor {
    constructor(name, cel, whatsapp) {
        this.name = name;
        this.cel = cel;
        this.whatsapp = whatsapp;
    }
    addProveedor(uid) {
        var ret = false;
        var rootRef = firebase.database().ref();
        var storesRef = rootRef.child('local/' + uid + '/proveedores/');
        var newStoreRef = storesRef.push();
        if (newStoreRef) {
            newStoreRef.set({
                name: this.name,
                cel: this.cel,
                whatsapp: this.whatsapp
            });
            ret = true;
        }
        return ret;
    }
}
export default Proveedor;