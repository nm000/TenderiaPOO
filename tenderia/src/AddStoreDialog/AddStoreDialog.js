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

export default function AddStoreDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        variant="outlined"
                        label="Direccion"
                        fullWidth
                    />
                    <Select
                        native
                        id="ciudades"
                        value=""
                        variant="outlined"
                        fullWidth
                    >
                    <option key="" value="">
                        Seleccione una ciudad
                    </option>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} disabled color="primary">
                        Añadir Tienda
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
