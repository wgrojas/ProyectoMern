import React from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Row
} from "react-bootstrap";
import axios from "axios";
import { APIHOST as host } from '../../app.json';
import Swal from 'sweetalert2';
import Loading from "../loading/loading";
import './registro.css'

export default class Registro2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: '',
      pass: ''
    };
  }
  setValue(index, value) {
    this.setState({
      usuario: {
        ...this.state.usuario,
        [index]: value,
      },
    });
  }

  registrarUsuario() {
    this.setState({ loading: true });

    axios
      .post(`${host}/usuarios`,{
        usuario: this.state.usuario,
        pass: this.state.pass
      })

      .then((response) => {
        if (response.data.exito) {

              Swal.fire("Usuario registrado!", "Bienvenido", "success");

              this.setState({ loading: false });

          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });

          this.props.history.push("/login");
        }

        this.setState({ loading: false });

      })

      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });

   

  }



render() {
  return (<Container id="login-container">
   <Loading show={this.state.loading} />

    <Row>
      <Col>
        <Row>
          <h2>Registrarse</h2>
        </Row>
        <br />
        <Row>
          <Col sm="12" xs="12"
            md={
              {
                span: 4,
                offset: 4
              }
            }
            lg={
              {
                span: 4,
                offset: 4
              }
            }
            xl={
              {
                span: 4,
                offset: 4
              }
            }>
            <Form>
              <Form.Group> {/* <Form.Label>Correo </Form.Label> */}

                <Form.Control
                  onChange={(e) => this.setState({usuario:e.target.value})}

                  type="email"
                  placeholder="Ingrese su correo" />

              </Form.Group>

              <br />
              <br />

              <Form.Group> {/* <Form.Label>Contraseña</Form.Label> */}

                <Form.Control type="password"
                  onChange={
                    (e) => this.setState({pass:e.target.value})
                  }
                  placeholder="Ingrese una contraseña" />

              </Form.Group>

              <br />
              <Button id="btn-iniciar-sesion" variant="primary"
                onClick={
                  () => {
                    this.registrarUsuario();
                  }
                }>
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>

  );


}

}