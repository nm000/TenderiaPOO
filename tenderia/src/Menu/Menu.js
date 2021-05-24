import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
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
    const classes = useStyles();
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
                    {['Inicio','Facturación de Compra', 'Manejo de Inventario', 'Proveedores', 'Mis Datos'].map((text, index) => (
                        <>
                            <ListItem button key={text}>
                                <ListItemText>{text}</ListItemText>
                            </ListItem>
                            <Divider></Divider></>
                    ))}
                </List>
            </div>
        </Drawer>)
}
export default Menu;