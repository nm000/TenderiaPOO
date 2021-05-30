import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import Inicio from '../Modulos/Inicio';
import Inventario from '../Modulos/Inventario.js';

import { Link, useHistory } from 'react-router-dom';
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
const Menu = (props) => {
    const [inicio, setInicio] = useState(false);
    const classes = useStyles();

    const openInicio = () =>{
        setInicio(true)
        if (inicio){
            <Inventario></Inventario>
        } else {
            alert("Houston, we have a problem");
        }
    }

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            PaperProps={{ elevation: 10 }}
            variant="persistent"
            open={props.open}
            anchor="left"
        >
            <div className={classes.drawerContainer}>
                <List>
                    <Box p={3} textAlign={'left'}>
                        <h2>{props.name.split(" ")[0]}</h2>
                        {props.storeName}
                        <br></br>
                        {props.address}
                    </Box>
                    <Divider></Divider>
                    {[<Button style={{ width: '100%' }} onClick={(e) => openInicio()}>Inicio </Button>,
                    <Button style={{ width: '100%' }} >Facturación de Compra</Button>,
                    <Button style={{ width: '100%' }} >Manejo de Inventario</Button>,
                    <Button style={{ width: '100%' }} >Proveedores</Button>,
                    <Button style={{ width: '100%' }} >Mis Datos</Button>].map((text, index) => (
                        <>
                            <ListItem button key={text}>
                                <ListItemText>
                                    {text}
                                </ListItemText>
                            </ListItem>
                            <Divider></Divider></>
                    ))}
                </List>
            </div>
        </Drawer>)
}
export default Menu;