import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { APIHOST as host } from '../../app.json';
import Swal from 'sweetalert2';
import './registro.css'
const theme = createTheme();


export default class Registro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: '',
      pass: ''
    };
  }

  registrarUsuario() {
    this.setState({ loading: true });

    axios
      .post(`${host}/usuarios`,{
        usuario: this.state.usuario,
        pass: this.state.pass
      })

      .then((response) => {
        if (response.data.exito) {

              Swal.fire("Usuario registrado!", "Bienvenido", "success");

              this.setState({ loading: false });

          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });

          this.props.history.push("/productos");
        }

        this.setState({ loading: false });

      })

      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  
  render() {

    return (
      <ThemeProvider theme={theme} >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrate
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => this.setState({ usuario: e.target.value })}

                type="email"
                placeholder="Ingrese su correo"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => this.setState({ pass: e.target.value })}
                placeholder="Ingrese una contraseña"
              />
             
              <Button
                
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={
                  () => {
                    this.registrarUsuario();
                    }
                }>
                Registarse
              </Button>

            </Box>
          </Box>
         
        </Container>
      </ThemeProvider>
    );
  }
}
