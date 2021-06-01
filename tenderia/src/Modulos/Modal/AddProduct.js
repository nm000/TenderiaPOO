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
export default function AddProduct(props) {
    let tienda = null;
    const [open, setOpen] = React.useState(props.open);
    const [product, setProduct] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [units, setUnits] = React.useState('');
    const addProducto = () => {
        if (product !== "" && price !== "" && units !== "") {
            const p = new Producto(product, price, units);
            if (p.addProducto(props.uid) == true) {
                handleClose()
            }
        } else {
            alert("Verifique los datos de su producto porfavor.");
        }
    };
    React.useEffect(() => {
        setOpen(props.open);
        setPrice('')
        setUnits('');
        setProduct('');
    }, [props.open]);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Añadir Producto</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre del producto"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        variant="outlined"
                        label="Precio"
                        fullWidth
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id=""
                        variant="outlined"
                        label="Unidades"
                        fullWidth
                        onChange={(e) => setUnits(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={addProducto} color="primary">
                        Añadir Producto
                    </Button>
                    <Button onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
