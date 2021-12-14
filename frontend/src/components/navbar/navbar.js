import React from "react";
import {
  Button,
    Container,
    Nav,
    Navbar,
} from "react-bootstrap";
// import {useEffect, useState} from 'react';

import Swal from "sweetalert2";
import "./navbar.css";
import Cookies from "universal-cookie/es6";
import Logo from "../Logo.png";
const cookies = new Cookies();
// const [show,setShow] = useState(true);
const show = true;

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // React.useEffect(() => {

    // if(sessionStorage.getItem('token')){

    //      setShow(false) }

    // }, []);

   

    // logout() {
    //     Swal.fire({
    //         title: "Cerrar Sesion",
    //         text: "Está seguro(a) que desea salir?",
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Sí"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             cookies.remove("_s");
    //             window.location.reload();
    //             Swal.fire("Sesion Cerrada!", "Gracias por Visitarnos", "success");
    //         }
    //     });
    // }

    // mostrar() {
    //     if (sessionStorage.getItem("token")) {
    //         show(false);
    //     }
    // }
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className="img-logo"
                        src={Logo}
                        alt="Logo"/>
                    <Navbar.Brand href="/">CompuSmartWeb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/productos">Productos</Nav.Link>
                        </Nav>

                  
                        <Nav>
                            <Button className="me-5" href="/registro">Regristrarse</Button>
                            <Button className="me-5" href="/login">Iniciar Sesion</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}
