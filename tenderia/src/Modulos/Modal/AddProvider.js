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
import Proveedor from '../../classes/Proovedor.js';
import { MenuItem } from "@material-ui/core";
export default function AddProvider(props) {
    let tienda = null;
    const [open, setOpen] = React.useState(props.open);
    const [providerName, setProviderName] = React.useState('');
    const [cel, setCel] = React.useState('');
    const [whatsapp, setWhatsapp] = React.useState(false);
    const addProveedor = () => {
        if (providerName !== "" && cel !== "") {
            const p = new Proveedor(providerName, cel, whatsapp);
            if (p.addProveedor(props.uid)==true) {
                handleClose()
            }
        } else {
            alert("Verifique los datos de su proveedor porfavor.");
        }
    };
    React.useEffect(() => {
        setOpen(props.open);
        setWhatsapp(false)
        setProviderName('');
        setCel('');
    }, [props.open]);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Añadir Proveedor</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre del proveedor"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setProviderName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        variant="outlined"
                        label="Celular"
                        fullWidth
                        onChange={(e) => setCel(e.target.value)}
                    />
                    <p style={{fontFamily: 'Inter'}}>Tiene whatsapp?</p>
                    <Select
                        id="ciudades"
                        value={whatsapp}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setWhatsapp(e.target.value)}
                    >
                        <MenuItem value="true">Si</MenuItem>
                        <MenuItem value="false">no</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={addProveedor} color="primary">
                        Añadir Proveedor
                    </Button>
                    <Button onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
