import React from 'react';
import './Usuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Form } from 'reactstrap';

const data = [
    { id: 1, personaje: 'Natalia', localizacion: 'Medellin' },
    { id: 2, personaje: 'Andres', localizacion: 'Rioacha' },
    { id: 3, personaje: 'Jeffrey', localizacion: 'Bogota' },
    { id: 4, personaje: 'Diana', localizacion: 'Barranquilla' },
    { id: 5, personaje: 'Michelle', localizacion: 'Sabanalarga' },
  ];
  
  class Usuario extends React.Component {
    state = {
      data: data,
      form: {
        id: '', personaje: '', localizacion: ''
      }, modalInsertar: false, modalEditar: false
    };
  
    handleChange = element => {
      this.setState({
        form: {
          ...this.state.form, [element.target.name]: element.target.value
          // {/*verificar coma*/}
        }
      });
    }
  
    mostrarModalInsertar = () => {
      this.setState({ modalInsertar: true });
    }
  
    ocultarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    }
  
    mostrarModalEditar = (registro) => {
      this.setState({ modalEditar: true, form: registro });
    }
  
    ocultarModalEditar = () => {
      this.setState({ modalEditar: false });
    }
  
    insertarUsuario = () => {
      var nuevaCuenta = { ...this.state.form };
      nuevaCuenta.id = this.state.data.length + 1;
      var lista = this.state.data;
      lista.push(nuevaCuenta);
      this.setState({ data: lista });
      this.ocultarModalInsertar();
    }
  
    editarUsuario = (elemento) => {
      var cont = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (elemento.id == registro.id) {
          lista[cont].personaje = elemento.personaje;
          lista[cont].anima = elemento.anime;
        }
        cont++;
      });
      this.setState({ data: lista });
      this.ocultarModalEditar();
    }
  
    eliminarUsuario = (elemento) => {
      var opcion = window.confirm('¿Desea eliminar al registro ' + elemento.id + ' definitivamente?');
      if (opcion) {
        var cont = 0;
        var lista = this.state.data;
        lista.map((registro) => {
          if (registro.id == elemento.id) {
            lista.splice(cont, 1);
          }
          cont++;
        });
        this.setState({ data: lista });
      }
    }
    render() {
        return (
          <>
            {/* SI USO ETIQUETAS DIV, LA TABLA SE PEGA AL LADO IZQUIERDO DE LA PANTALLA */}
            <Container className='contenido'>
              <br />
              <Button color='warning' onClick={() => this.mostrarModalInsertar()}>
                Insertar
              </Button>
              <br /><br />
              <Table>
                <thead><tr>
                  <th className='table-casilla1'>
                    Id
                    </th>
                  <th className='table-casilla2'>
                    Nombre
                    </th>
                  <th className='table-casilla3'>
                    Ciudad
                    </th>
                  <th className='table-acciones'>
                    Acciones
                    </th>
                </tr>
                </thead>
    
                <tbody>
                  {this.state.data.map((elemento) => (
                    <tr>
                      <td>
                        {elemento.id}
                      </td>
                      <td>
                        {elemento.personaje}
                      </td>
                      <td>
                        {elemento.localizacion}
                      </td>
                      <td>
                        <Button color='primary' onClick={() => this.mostrarModalEditar(elemento)}>
                          EDITAR
                        </Button>
                        {"     "}
                        <Button color='danger' onClick={() => this.eliminarUsuario(elemento)}>
                          ELIMINAR
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
    
            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader className='modal-header1'>
                <div className='nuevo-registro'>
                  <h3>
                    INSERTAR NUEVO REGISTRO
                  </h3>
                </div>
              </ModalHeader>
    
              <ModalBody className='modal-body1'>
                <FormGroup className='grupo-1'>
                  <label>ID:</label>
                  <input className='control' readOnly type='text' value={this.state.data.length + 1} />
                </FormGroup>
    
                <FormGroup className='grupo-2'>
                  <label>
                    Nombre:
                  </label>
                  <input className='control' name='personaje' type='text' onChange={this.handleChange}></input>
                </FormGroup>
    
                <FormGroup className='grupo-3'>
                  <label>
                    Ciudad:
                  </label>
                  <input className='control' name='localizacion' type='text' onChange={this.handleChange} />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter className='modal-footer1'>
                <Button color='success' onClick={() => this.insertarUsuario()}>INSERTAR</Button>
                <Button color='danger' onClick={() => this.ocultarModalInsertar()}>
                  CANCELAR
                </Button>
              </ModalFooter>
            </Modal>
    
            <Modal isOpen={this.state.modalEditar}>
              <ModalHeader className='modal-header2'>
                <div className='nuevo-registro'>
                  <h3>
                    EDITAR REGISTRO
                  </h3>
                </div>
              </ModalHeader>
    
              <ModalBody className='modal-body2'>
                <FormGroup className='grupo-1'>
                  <label>ID:</label>
                  <input className='control' readOnly type='text' value={this.state.form.id} />
                </FormGroup>
    
                <FormGroup className='grupo-2'>
                  <label>
                    Nombre:
                  </label>
                  <input className='control' name='personaje' type='text' onChange={this.handleChange} value={this.state.form.personaje}></input>
                </FormGroup>
    
                <FormGroup className='grupo-3'>
                  <label>
                    Ciudad:
                  </label>
                  <input className='control' name='localizacion' type='text' onChange={this.handleChange} value={this.state.form.localizacion} />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter className='modal-footer2'>
                <Button color='primary' onClick={() => this.editarUsuario(this.state.form)} >
                  EDITAR
                  </Button>
                <Button color='danger' onClick={() => this.ocultarModalEditar()}>
                  CANCELAR
                </Button>
              </ModalFooter>
            </Modal>
          </>
        );
      }
    }
    
    export default Usuario;
    