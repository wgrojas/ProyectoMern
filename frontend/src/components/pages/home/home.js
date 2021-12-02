import React from "react";
import {Carousel} from "react-bootstrap";
import "./home.css";

export default class Home extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\1.jpg"
                        width="20%"
                        height="900"
                        alt="Firs slide"/>
                    <Carousel.Caption>
                        <h2>Computadores Gamer</h2>
                        <p>Vive la experiencia gamer a su maxima potencia con equipos avanzados</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="assets\\7.png" width="20%" height="900" alt="Second slide"/>{" "}
                    <Carousel.Caption>
                        <h2>Todo lo que necesitas para tu computador</h2>
                        <p>Todos los componentes que necesitas para armar tu equipo</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
