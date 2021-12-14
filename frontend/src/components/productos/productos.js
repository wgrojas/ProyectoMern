import React, { Fragment } from "react";
import { Col, Card, Button } from "react-bootstrap";
// import InfoProductos from "./infoProductos";
import "./productos.css";
import { useState } from "react";


export default function Productos(props) {
  const date=[props]

  const codigo=props.id
  console.log(codigo)

const [mod, setMod] = useState(3);
const [info, setInfo] = useState(props);

const update=() => {
  
// const resultado=date.filter(item =>item.id)

// setInfo(resultado)
setMod(12)

}


return (

    <Fragment>

      <Col className="card-group" sm={mod}>
        <Card className="Card" body outline color="primary">
          <Card.Img src={info.imagen} />

          <Card.Body>
            <Card.Title>{info.titulo}</Card.Title>

            <Card.Subtitle>
              precio:<b>{info.precio}</b>
            </Card.Subtitle>

            <Card.Text>{info.descripcion}</Card.Text>

            <Card.Text>
              cantidad: <b>{info.stock}</b>
            </Card.Text>

            {/* <Card.Text>
              id: <b>{info.id}</b>
            </Card.Text> */}

            {/* <Card.Text>
                   categoria: <b>{info.categoria}</b>
            </Card.Text> */}
          </Card.Body>

          <Button
            //href="/infoProductos"
            className="Boton"
            
            onClick={()=>update()}
            >
           
         Ver mas
          </Button>

          <Button
            //href="/infoProductos"
            className="Boton"
            
            onClick={()=>setMod(3)}
            >
           
         Ver menos
          </Button>

        </Card>
      </Col>

     
    </Fragment>



  );


}
