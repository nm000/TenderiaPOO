import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
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
        paddingTop: '70px'
    },
}));

const Menu = (props) => {
    const classes = useStyles();
    return (<Drawer
        className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
    >
        <div className={classes.drawerContainer}>
            <List>
                <Button color="inherit">{props.name.split(" ")[0]}</Button>
                <Divider></Divider>
                {['Facturación de Compra', 'Manejo de Inventario', 'Mis Datos'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText>{text}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    </Drawer>)
}
export default Menu;