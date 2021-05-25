import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import Inicio from "../Modulos/Inicio";
import Factura from "../Modulos/Factura";
import Inventario from "../Modulos/Inventario";
import Proveedores from "../Modulos/Proveedores";
import clsx from "clsx";
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(10, 3),
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        flexGrow: 1,
        padding: theme.spacing(10, 3),
        paddingLeft: drawerWidth
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
const paths = ['/', '/factura', '/inventario', '/proveedores']
const Menu = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const pageRender = () => {
        /*if (page == 0) {
           
        } else if (page == 1) {
            
        } else if (page == 2) {
            
        } else if (page == 3) {
            
        }*/
        switch(page){
            case 0:
                return <Inicio nombre={props.name}></Inicio>;
            case 1:
                return <Factura></Factura>
            case 2:
                return <Inventario></Inventario>
            case 3:
                return <Proveedores></Proveedores>
        }
    }
    return (
        <>
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
                                    <ListItemText>{text}</ListItemText>
                                </ListItem>
                                <Divider></Divider>
                            </>
                        ))}
                    </List>
                </div>
            </Drawer>
            <div class={clsx(classes.content, {
                [classes.contentShift]: props.open
            })}>{pageRender()}
            </div>
        </>
    )
}
export default Menu;