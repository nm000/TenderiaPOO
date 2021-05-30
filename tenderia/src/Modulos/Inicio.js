import { Paper, Box, Grid, Icon } from "@material-ui/core";
import React from "react";

class Inicio extends React.Component {
    styles = {
        height: '100%',
        backgroundColor: '#3f51b5',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    render() {
        return (
            <Grid container style={{ 'height': '100vh' }} spacing={3}>
                <Grid item xs={12} >
                    <Paper p={3} style={this.styles} elevation={3}>
                        <Box p={3}>
                            <h1>¡Hola, parce!</h1>
                            <p>{"¡Qué tal, Don " + this.props.nombre + "!"}</p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ 'backgroundColor': '#4CAF50', color: 'white' }} elevation={3}>
                        <Box p={3}>
                            <Icon fontSize="large">shopping_cart</Icon>
                            <p>Facturación de compra</p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ 'backgroundColor': '#F44336', color: 'white' }} elevation={3}>
                        <Box p={3}>
                            <Icon fontSize="large">category</Icon>
                            <p>Manejo de inventario</p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ 'backgroundColor': '#673AB7', color: 'white' }} elevation={3}>
                        <Box p={3}>
                            <Icon fontSize="large">local_shipping</Icon>
                            <p>Proveedores</p>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}
export default Inicio;