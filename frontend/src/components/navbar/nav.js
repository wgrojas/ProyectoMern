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
const cookies = new Cookies();
//const [show,setShow] = useState(true);
const show = true;


export default class MenuCrud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // React.useEffect(() => {

  // if(sessionStorage.getItem('token')){

  //      setShow(false) }

  //  }, []);

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

  mostrar() {
    if (sessionStorage.getItem("token")) {
      show(false);
    }
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
        <Container>
          <img className="img-logo" src={Logo} alt="Logo" />
          <Navbar.Brand href="./">CompuSmartWeb</Navbar.Brand>
         
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
               <Nav.Link href="/productos">Nuestros Productos </Nav.Link> 
               <Nav.Link  href="/panel">
                Editar Productos
              </Nav.Link> 
            </Nav> */}

            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />{" "}
                  {/* <Nav.Link href="/login">Login</Nav.Link> */}{" "}
                </Row>
                {/* <Row>Registrarse</Row> */}
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="/panel">Editar Productos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
