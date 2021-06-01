import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import Inicio from '../Modulos/Inicio';
import Inventario from '../Modulos/Inventario.js';
import Facturacion from '../Modulos/Facturacion.js';
import Proveedores from '../Modulos/Proveedores';
import { Link, useHistory } from 'react-router-dom';
import { Container } from "@material-ui/core";
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
    container: {
        padding: theme.spacing(10, 0)
    },
}));
const Menu = (props) => {
    const [page, setPage] = useState(0);
    const classes = useStyles();
    const renderModule = () => {
        switch (page) {
            case 0:
                return <Inicio nombre={props.name}></Inicio>
            case 1:
                return <Facturacion uid={props.uid}></Facturacion>
            case 2:
                return <Inventario uid={props.uid}></Inventario>
            case 3:
                return <Proveedores uid={props.uid}></Proveedores>
        }
    }
    return (
        <div>
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
                        {['Inicio', 'Facturación de Compra', 'Manejo de Inventario', 'Proveedores'].map((text, index) => (
                            <>
                                <ListItem button key={text} onClick={() => setPage(index)}>
                                    <ListItemText>
                                        {text}
                                    </ListItemText>
                                </ListItem>
                                <Divider></Divider></>
                        ))}
                    </List>
                </div>
            </Drawer>
            <Container fixed className={classes.container}>
            {renderModule()}
            </Container>
        </div>
    )
}
export default Menu;