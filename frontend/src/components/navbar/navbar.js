import React from "react";
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "./navbar.css";
import Cookies from "universal-cookie/es6";
import Logo from "../Logo.png";
// const show = useState(true);
const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // useEffect(() => {

  //     if (sessionStorage.getItem ('token')){

  //            show(false)}

  // });

  logout() {
    Swal.fire({
      title: "Cerrar Sesion",
      text: "Está seguro(a) que desea salir?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        cookies.remove("_s");
        window.location.reload();
        Swal.fire("Sesion Cerrada!", "Gracias por Visitarnos", "success");
      }
    });
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="success" variant="light">
        <Container>
          <img className="img-logo" src={Logo} alt="Logo" />
          <Navbar.Brand href="./">
            CompuWebSite 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/productos">Lista de Productos</Nav.Link>
              {/* <Nav.Link
                                href="/panel">Editar Productos</Nav.Link> */}
              {/* <Navbar.Brand>
                                    IT SmartWeb
                                </Navbar.Brand> */}{" "}
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Administrador">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />{" "}
                  {/* <Nav.Link href="/login">Login</Nav.Link> */}{" "}
                </Row>
                <Row>Administrador</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="/productos">Productos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/login">Editar Productos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}{" "}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
