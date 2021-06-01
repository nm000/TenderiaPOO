import { Paper, Box, Grid, Icon, IconButton, Button, Modal } from "@material-ui/core";
import React from "react";
import './Inventario.css';
import firebase from '../utils/firebase';
import AddProduct from '../Modulos/Modal/AddProduct';
import UpdateProduct from '../Modulos/Modal/UpdateProduct';
//import Menu from "../Menu/Menu";
//import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap'
class Inventario extends React.Component {
    state = {
        addModal: false,
        updateModal: false,
        data: [],
        currentProduct: 'null'
    }
    peticionGet = () => {
        // adaptado de https://github.com/Borja95/crudFirebase/blob/master/src/App.js
        firebase.database().ref().child('local/' + this.props.uid + '/productos').on("value", (proveedor) => {
            if (proveedor.val() !== null) {
                this.setState({ data: proveedor.val() });
                //this.setState({keys:  FBkeys});
                console.log(proveedor.val())
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
    stylesDelete = {
        height: '100%',
        backgroundColor: '#FF0000',
        color: 'white',
        display: 'list',
        alignItems: 'center',
        margin: '30px',
        justifyContent: 'center',
    }
    componentDidMount() {
        this.peticionGet()
    }
    delBtn(index) {
        if (window.confirm('¿Estás seguro que deseas eliminar el producto ' + this.state.data[index].nombre + '?')) {
            firebase.database().ref().child('local/' + this.props.uid + '/productos/' + index).remove();
        }
    }
    updateBtn(i) {
        this.setState({ currentProduct: i })
        { this.state.updateModal ? this.setState({ updateModal: false }) : this.setState({ updateModal: true }) }
    }
    render() {
        return (
            //<Menu>
            <>
                <Grid>
                    <UpdateProduct open={this.state.updateModal} uid={this.props.uid} i={this.state.currentProduct}></UpdateProduct>
                    <AddProduct open={this.state.addModal} uid={this.props.uid}></AddProduct>
                    <Paper style={{ 'backgroundColor': '#F44336', color: 'white', height: '100px' }}>
                        <Box style={{ 'height': '100px' }}>
                            <Icon style={{ 'fontSize': '100px' }}>category</Icon>
                        </Box>
                    </Paper>
                    <Button style={this.styles} onClick={() => { this.state.addModal ? this.setState({ addModal: false }) : this.setState({ addModal: true }) }}>
                        Agregar producto
                        <Icon fontSize="large" style={{ color: 'white' }}> add </Icon>
                    </Button>
                </Grid>
                <table style={{ 'width': '100%', }}>
                    <thead>
                        <tr>
                            <th style={{ 'border': 'beige 1px solid' }}>Nombre del producto</th>
                            <th style={{ 'border': 'beige 1px solid' }}>Precio</th>
                            <th style={{ 'border': 'beige 1px solid' }}>Unidades</th>
                            <th style={{ 'border': 'beige 1px solid' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(this.state.data).map(i => {
                                // console.log(i);
                                return <tr key={i}>
                                    <td style={{ 'border': 'beige 1px solid' }}>{this.state.data[i].nombre}</td>
                                    <td style={{ 'border': 'beige 1px solid' }}>{this.state.data[i].precio}</td>
                                    <td style={{ 'border': 'beige 1px solid' }}>{this.state.data[i].unidades}</td>
                                    <td style={{ 'border': 'beige 1px solid' }}>
                                        <Button style={this.styles} onClick={() => this.updateBtn(i)}>Editar<Icon style={{ padding: '10px' }}>create</Icon></Button>
                                        <Button style={this.stylesDelete} onClick={() => this.delBtn(i)}>Eliminar<Icon style={{ padding: '10px' }}>delete</Icon></Button>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </>

            //</Menu>
        );
    }

}
export default Inventario;


/*Línea 42
<p style={{'fontSize':'large'}}>Inventario</p>
                    <Button style={this.styles}>
                        <p className="container" >Modificar producto</p>
                        <Icon style={{ 'fontSize': "30px", color: 'white', padding: '5px' }}> create </Icon>
                    </Button>
 <Button style={this.stylesDelete}>
                        <p className="container">Eliminar productos</p>
                        <Icon fontSize="large" style={{ color: 'black', padding: '5px' }}> clear </Icon>
                    </Button>
*/