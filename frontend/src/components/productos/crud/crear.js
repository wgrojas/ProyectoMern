import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class ProductosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: '',
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
      .post('/productos', this.state.producto)
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

  render() {
    return (
      <Container id="productos-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Crear Productos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('titulo', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Link Imagen</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('imagen', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('descripcion', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('precio', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('stock', e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('categoria', e.target.value)}
              />
            </Form.Group> */}

            <Button id="btn-enviar"
              variant="success"
              onClick={() => console.log(this.guardarProductos())
             
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
