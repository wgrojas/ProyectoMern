import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./buscar.css";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
// import {productos} from "./productos.json";
import Productos from "./productos";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export default function ListarProductos() {
  const [productos, setProductos] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get("https://compuback.herokuapp.com/")
      .then((response) => {
        setProductos(response.data);
        setListaProductos(response.data);
      })
      .catch((error) => {
        console.log();
      });
    console.log(setProductos);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda =listaProductos.filter((elemento) => {
      if (
        elemento.titulo
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  var arrayComponente = productos.map((productos, i) => {
    return (
      <Productos
        Key={i}
        titulo={productos.titulo}
        imagen={productos.imagen}
        descripcion={productos.descripcion}
        precio={productos.precio}
        stock={productos.stock}
        id={productos._id}
        categoria={productos.categoria}

      />
  
     
    );
  });

  return (
    <Fragment>
      <Container>
      <div className="containerInput"></div>
        <div className="containerInput">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar Producto"
              className="me-2"
              aria-label="Buscar"
              onChange={handleChange}
              value={busqueda}
            />
            <Button className="btn btn-success">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </div>

        <h2
          style={{
            marginTop: 120,
            fontSize: 50,
          }}
        >
          <b>Tecnológia y Computadores</b>
        </h2>

        <Row> {arrayComponente} </Row>
      </Container>
    </Fragment>
  );
}
