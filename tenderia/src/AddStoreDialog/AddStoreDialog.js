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
import Local from '../classes/Local';
import Ciudades from '../classes/Ciudades';
import { AuthContext } from '../utils/Auth.js';
export default function AddStoreDialog() {
    let tienda = null;
    const user = React.useContext(AuthContext);
    const [open, setOpen] = React.useState(true);
    const [localName, setLocalName] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [ciudad, setCiudad] = React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const addTienda = () => {
        if (direccion != "" && localName != "") {
            tienda = new Local(localName, direccion, ciudad);
            if (tienda.addLocal(user.currentUser.uid)) {
                setOpen(false);
                window.location.reload()
            };
        } else {
            alert("Verifique los datos de su tienda porfavor.");
        }
    };

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Cuentanos más sobre tu tienda:</DialogTitle>
                <DialogContent>
                    <DialogContentText>Hemos visto que no tienes una tienda registrada, ingrese los datos de su tienda para continuar</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre de tu tienda"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setLocalName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        variant="outlined"
                        label="Direccion"
                        fullWidth
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                    <Select
                        native
                        id="ciudades"
                        value=""
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setCiudad(e.target.value)}
                    >
                        {
                        Ciudades.map(ciudad =>
                            <option key={ciudad} value={ciudad}>{ciudad}</option>
                        )
                    }
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={addTienda} color="primary">
                        Añadir Tienda
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
