import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row } from "react-bootstrap";
// import {listaProductos} from "./listaProductos.json";
 import Productos from "../productos/productos"
import MenuCrud from "../navbar/nav";

export default class ListarProductos extends Component {
    constructor(){
      super()
      this.state={
        titulo:"",
        imagen:"",
        descripcion:"",
        precio:"",
        stock:"",
        categoria:"",
        listaProductos:[]
      };
  
    }
    componentDidMount(){
        this.fetchProductos();
    }

    fetchProductos(){
        fetch('http://localhost:3001/productos')
        .then(res => res.json())
        .then(data => {
            this.setState({listaProductos:data})
            console.log(this.state.listaProductos)

        })
        

    }
    render(){
       
      var arrayComponente= this.state.listaProductos.map(
        (listaProductos,i) =>{
          return(
           
  
            <Productos
             
            Key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
            categoria={listaProductos.categoria}
            />
          )
        }
      )

      return (
        

        
      <div>
        
     
       <Container>
         
         <h2 style={{ marginTop: 120, fontSize:50 }}><b>Productos Tecnológicos</b></h2>
         
           <Row>
         
               {arrayComponente}
               
           </Row>
    
        </Container>
    
        </div>
      );

      }
    }
    
    
   
    