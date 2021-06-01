import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Autocomplete } from '@material-ui/lab';
import { Select } from '@material-ui/core';
import Producto from '../../classes/Producto.js';
import { MenuItem } from "@material-ui/core";
import firebase from '../../utils/firebase';
export default function UpdateProduct(props) {
    let tienda = null;
    const [open, setOpen] = React.useState(props.open);
    const [product, setProduct] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [units, setUnits] = React.useState('');
    const addProducto = () => {
        if (product !== "" && price !== "" && units !== "") {
            if (Producto.updateProduct(props.uid, props.i, price, product, units) == true) {
                handleClose()
            }
        } else {
            alert("Verifique los datos de su producto porfavor.");
        }
    };
    React.useEffect(() => {
        console.log(props.uid);
        console.log(props.i)
        firebase.database().ref('local/' + props.uid + '/productos/' + props.i).get().then(function (snapshot) {
            setPrice(snapshot.val().precio)
            setUnits(snapshot.val().unidades);
            setProduct(snapshot.val().nombre);
            console.log(snapshot.val().nombre)
        }).catch(function (error) {
            console.error(error);
        });
        setOpen(props.open);
    }, [props.open]);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Actualizar Producto</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        variant="outlined"
                        value={product}
                        fullWidth
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        variant="outlined"
                        value={price}
                        fullWidth
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id=""
                        variant="outlined"
                        value={units}
                        fullWidth
                        onChange={(e) => setUnits(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={addProducto} color="primary">
                        Actualizar Producto
                    </Button>
                    <Button onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
