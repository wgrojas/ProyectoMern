import React from 'react';
import { request } from '../../helper/helper';
import { Container, Row } from 'react-bootstrap';
//import './empleados.css';
import DataGrid from '../../grid/grid';
import ConfirmationPromprs from '../../prompts/confirmation';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ListarProductos from '../listarProductos';
// import { set } from 'react-ga';

const columns = [
  {
    dataField: '_id',
    text: 'Product ID',
    hidden: true,
  },
  {
    dataField: 'titulo',
    text: 'Titulo',
  },
  {
    dataField: 'imagen',
    text: 'Link',
  },
  {
    dataField: 'descripcion',
    text: 'descripcion',
  },
  {
    dataField: 'precio',
    text: 'Precio',
  },
  {
    dataField: 'stock',
    text: 'Cantidad',
  },
  // {
  //   dataField: 'categoria',
  //   text: 'Categoria',
  // },
];

export default class ProductosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idProducto: null,
      confirmation: {
        title: 'Eliminar el producto',
        text: '¿Deseas eliminar el producto?',
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onClickEditButton(row) {
    this.props.setIdProducto(row._id);

    this.props.changeTab('editar');
  }

  onClickDeleteButton(row) {
    this.setState({
      idProducto: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarProducto()
    );
  }

  eliminarProducto() {
    this.setState({ loading: true });
    request
      .delete(`/productos/${this.state.idProducto}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <div>
      <Container id="productos-buscar-container">
        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />

        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Buscar Productos</h1>
        </Row>
        <Row>
          <DataGrid
            url="/productos"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
      <ListarProductos/>
      </div>
    );
  }
}
