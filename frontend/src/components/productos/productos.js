import React from 'react'
import { Col,Card,Button } from 'react-bootstrap';
import './productos.css'


export default function Productos(props) {
   

    return (

       
        <Col className="card-group" sm="3">
        

        <Card className="Card" body outline color="primary">
           
         <Card.Img src={props.imagen}/>

        <Card.Body>

            <Card.Title>
                {props.titulo}
            </Card.Title>

            <Card.Subtitle>
                 precio:<b>{props.precio}</b>
            </Card.Subtitle>

            <Card.Text>
                    {props.descripcion}
            </Card.Text>

            <Card.Text>
                   cantidad: <b>{props.stock}</b>
            </Card.Text>

            {/* <Card.Text>
                   categoria: <b>{props.categoria}</b>
            </Card.Text> */}


        </Card.Body>

         <Button className="Boton">Comprar</Button>

       
        </Card>
            
        </Col>
    )
}

