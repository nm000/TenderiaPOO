import { Paper, Box, Grid, Icon, IconButton, Button, Link } from "@material-ui/core";
import React from "react";
import './Proveedor.css';
import Proveedor from '../classes/Proovedor.js';
import AddProvider from '../Modulos/Modal/AddProvider';
import firebase from '../utils/firebase';
class Proveedores extends React.Component {
    state = {
        addModal: false,
        data: [],
    }
    peticionGet = () => {
        // adaptado de https://github.com/Borja95/crudFirebase/blob/master/src/App.js
        firebase.database().ref().child('local/' + this.props.uid + '/proveedores/').on("value", (proveedor) => {
            if (proveedor.val() !== null) {
                this.setState({ data: proveedor.val() });
                //this.setState({keys:  FBkeys});
            } else {
                this.setState({ data: [] });
            }
        });
    };
    styles = {
        height: '100%',
        backgroundColor: '#00B086',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
    }
    stylesCall = {
        backgroundColor: '#4CAF50',
        textDecoration: 'none',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '10px',
        justifyContent: 'center',
    }
    stylesDelete = {
        height: '100%',
        textDecoration: 'none',
        backgroundColor: '#FF0000',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '10px',
        justifyContent: 'center',
    }
    componentDidMount() {
        this.peticionGet();
    }
    whatsappButton(bool, index) {
        if (bool == "true") {
            return <Link href={"http://wa.me/57" + this.state.data[index].cel} target="_blank"><Button style={this.styles}>Whatsapp<Icon style={{ padding: '10px' }}> chat</Icon></Button></Link>
        }
    }
    callBtn(index) {
        return <Link href={"tel:+57" + this.state.data[index].cel} target="_blank"><Button style={this.stylesCall}>Llamar<Icon style={{ padding: '10px' }}> phone</Icon></Button></Link>
    }
    delBtn(index) {
        if (window.confirm('¿Estás seguro que deseas eliminar el proveedor '+this.state.data[index].name+'?')) {
            firebase.database().ref().child('local/' + this.props.uid + '/proveedores/'+index).remove();
        }
    }
render() {
    return (
        //<Menu>
        <Grid>
            <AddProvider open={this.state.addModal} uid={this.props.uid}></AddProvider>
            <Paper style={{ 'backgroundColor': '#673AB7', height: '100px', color: 'white' }}>
                <Box style={{ 'height': '100px' }}>
                    <Icon style={{ 'fontSize': '100px' }}>local_shipping</Icon>
                </Box>
            </Paper>
            <Button style={this.styles} onClick={() => { this.state.addModal ? this.setState({ addModal: false }) : this.setState({ addModal: true }) }}>
                <p className="container"> Agregar proveedor </p>
                <Icon fontSize="large" style={{ padding: '5px' }}> add </Icon>
            </Button>
            <table style={{ 'width': '100%', }}>
                <thead>
                    <tr>
                        <th style={{ 'border': 'beige 1px solid' }}>Nombre del proveedor</th>
                        <th style={{ 'border': 'beige 1px solid' }}>Celular</th>
                        <th style={{ 'border': 'beige 1px solid' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    Object.keys(this.state.data).map(i => {
                        // console.log(i);
                        return <tr key={i}>
                            <td style={{ 'border': 'beige 1px solid' }}>{this.state.data[i].name}</td>
                            <td style={{ 'border': 'beige 1px solid'}}>{this.state.data[i].cel}</td>
                            <td style={{ 'border': 'beige 1px solid' }}>
                                {this.callBtn(i)}
                                {this.whatsappButton(this.state.data[i].whatsapp, i)}
                                <Button style={this.stylesDelete} onClick={() => this.delBtn(i)}>Eliminar<Icon style={{ padding: '10px' }}>delete</Icon></Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </Grid>
        //</Menu>
    );
}
}

export default Proveedores;
