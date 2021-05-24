import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthContext } from '../utils/Auth.js';
import './BarraUser';
import { BarChartRounded } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
}));
const Usuario = () => {
  let history = useHistory();
  const classes = useStyles();
  const user = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const logout = () => {
    firebase.auth().signOut().then(() => {
      history.push("/login");
    }).catch((error) => {
      alert("Houston, we have a problem");
    });
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
  })
  const currentUser = user.currentUser.email;

  return (
    <div className={classes.appBar}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" 
          aria-label="menu" href='http://5500/src/Inventario/PagInventario.html'>
            <MenuIcon>
              <nav className={classes.appBar}>
                <li>
                  <a href="">EDITAR PERFIL</a>
                </li>
                <li>
                  <a href="">INVENTARIO</a>
                </li>
              </nav>
            </MenuIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            StoreManager
          </Typography>
          <Button color="inherit">{name.split(" ")[0]}</Button>
        </Toolbar>
      </AppBar>
      <h1>Hola, parce!</h1>
      <p>Usuario actual: {currentUser}</p>
      <p>{name}</p>
      <p>Cedula {id}</p>
      <p>Telefono {phone}</p>
      <Button onClick={(e) => logout()}>Log out</Button>
    </div>
  )
}

export default Usuario;
