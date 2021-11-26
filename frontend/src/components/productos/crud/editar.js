import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromprs from '../../prompts/confirmation';

export default class ProductosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProducto: this.props.getIdProducto(),
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      confirmation: {
        title: 'Modificar Producto',
        text: '¿Deseas modificar el producto?',
        show: false,
      },
      loading: false,
      producto: {
        titulo: '',
        imagen: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: '',
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getProducto();
  }

  getProducto() {
    this.setState({ loading: true });
    request
      .get(`/productos/${this.state.idProducto}`)
      .then((response) => {
        this.setState({
          producto: response.data,
          loading: false,
        });
      }
      )
      
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  setValue(index, value) {
    this.setState({
      producto: {
        ...this.state.producto,
        [index]: value,
      },
    });
  }

  guardarProductos() {
    this.setState({ loading: true });
    request
      .put(`/productos/${this.state.idProducto}`, this.state.producto)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
          
        }
       
        this.setState({ loading: false });
        
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });

     
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab('buscar');
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.guardarProductos()
      
    );
    
  }

  render() {
    return (
      <Container id="productos-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Editar Productos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                value={this.state.producto.titulo}
                onChange={(e) => this.setValue('titulo', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Link Imagen</Form.Label>
              <Form.Control
                value={this.state.producto.imagen}
                onChange={(e) => this.setValue('imagen', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                value={this.state.producto.descripcion}
                onChange={(e) => this.setValue('descripcion', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                value={this.state.producto.precio}
                onChange={(e) => this.setValue('precio', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                value={this.state.producto.stock}
                onChange={(e) => this.setValue('stock', e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                value={this.state.producto.categoria}
                onChange={(e) => this.setValue('categoria', e.target.value)}
              />
            </Form.Group> */}

            <Button id="btn-enviar"
              variant="success"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
                
              }
            >
              Guardar Producto
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
