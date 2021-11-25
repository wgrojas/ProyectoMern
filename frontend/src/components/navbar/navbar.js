import React from "react";
import {
    Container,
    Nav,
    Navbar,
    DropdownButton,
    Dropdown,
    Row
} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Cookies from "universal-cookie/es6";
import Logo from '../Logo.png'
//const show = useState(true);
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
        cookies.remove("_s");
        window.location.reload();
    }

    

    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="warning" variant="light">
                <Container>
                    <img className="img-logo"
                        src={Logo}
                        alt="Logo"/>
                    <Navbar.Brand href="./">
                        SmartWeb {/* <span id="navbar-sub-brand"> Olga</span> */} </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/productos">Productos</Nav.Link>
                            <Nav.Link 
                                href="/panel">Editar Productos</Nav.Link>

                        </Nav>

                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle}/> {/* <Nav.Link href="/login">Login</Nav.Link> */} </Row>
                                <Row>Usuario</Row>
                            </Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={
                                () => this.logout()
                            }>
                                Cerrar sesión
                            </Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/} </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
