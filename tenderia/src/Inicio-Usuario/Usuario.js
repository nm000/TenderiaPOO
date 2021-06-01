import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Drawer } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthContext } from '../utils/Auth.js';
import AddStoreDialog from '../AddStoreDialog/AddStoreDialog';
import { List, ListItem, ListItemText, Divider, Box } from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Inicio from '../Modulos/Inicio';
import Factura from '../Modulos/Factura';
import Usuario1 from '../classes/Usuario';
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 2000 + 1,
  }, // Drawer
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    padding: theme.spacing(6, 0)
  },
}));
const Usuario = () => {
  let history = useHistory();
  const classes = useStyles();
  const user = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [storeName, setStoreName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [storeExist, setStore] = useState(true);
  const [menu, setMenu] = useState(true);
  const logout = () => {
    if (window.confirm('¿Estás seguro de cerrar tu sesión?')){
      Usuario1.cerrarSesion();
    }
  }
  useEffect(() => {
    firebase.database().ref('usuario/' + user.currentUser.uid).get().then(function (snapshot) {
      if (snapshot.exists()) {
        setName(snapshot.val().nombre)
        setID(snapshot.val().cedula)
        setPhoneNumber(snapshot.val().telefono)
      }
      else {
        console.log("No data available");
      }
    }).catch(function (error) {
      console.error(error);
    });
    firebase.database().ref('local/' + user.currentUser.uid).get().then(function (snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val().nombre)
        setStoreName(snapshot.val().nombre)
        setStoreAddress(snapshot.val().direccion)
      }
      else {
        setStore(false);
      }
    }).catch(function (error) {
      console.error(error);
    });
  })
  const currentUser = user.currentUser.uid;
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={(e) => menu ? setMenu(false) : setMenu(true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            StoreManager
          </Typography>
          <Button color="inherit" onClick={(e) => logout()}>Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
      {storeExist ? <></> : <AddStoreDialog></AddStoreDialog>}
      <Menu name={name} open={menu} storeName={storeName} address={storeAddress} uid={currentUser}></Menu>
    </div>
  )
}

export default Usuario;
