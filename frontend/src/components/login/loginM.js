import React from "react";
import './login.css'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { APIHOST as host } from "../../app.json";
import { isNull } from "util";
import axios from "axios";
import Cookies from "universal-cookie";
import { calculaExpiracionSesion } from "../helper/helper";
import { Paper } from "@mui/material";

const cookies = new Cookies();
const theme = createTheme();


export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
     
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });

   axios.post(`${host}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
        
      
      })
      
      .then((response) => {
       

        if (isNull(response.data.token)) {
          // alert('Usuario y/o contraseña invalidos');

          Swal.fire({
            title: "Error!",
            text: "Usuario o Contraseña Incorrecto",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
           
          });
        } 
        else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExpiracionSesion(), 
          });

          Swal.fire({
            title: "Bienvenido!",
            text: 'Usuario logueado correctamente',
            icon: "success",
            showConfirmButton: true,
            timer: 2000
        });

          this.props.history.push("/panel");
        }

        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
    
      <ThemeProvider theme={theme} >
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />{" "}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  m: 10,
                  bgcolor: "secondary.main",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
             
              <Typography component="h1" variant="h5">
                Iniciar Sesion
              </Typography>
              <Box
                component="form"
                noValidate
                // onSubmit={iniciarSesion}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="usuario"
                  label="Email Address"
                  name="usuario"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => this.setState({ usuario: e.target.value })}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="pass"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => this.setState({ pass: e.target.value })}
                />
               
               <Button
                 
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                  }}
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Ingresar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    
    );
  }
}
