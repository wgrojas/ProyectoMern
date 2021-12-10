import React from "react";
import {
  Container,
  Nav,
  Navbar,
 
} from "react-bootstrap";


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
        window.location.replace('/');
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
   
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img className="img-logo" src={Logo} alt="Logo"/>
      <Navbar.Brand href="/productos">Lista de Productos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/panel">Editar Productos</Nav.Link>
         
         
        </Nav>
        {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        <Nav>
          <Nav.Link href="/compras">Compras</Nav.Link>
          <Nav.Link onClick={() => this.logout()}>Cerrar Sesion</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

    );
  }
}
