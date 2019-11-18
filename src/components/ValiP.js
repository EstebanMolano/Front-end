import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import './ValiP.css';
import axios from "axios";






class ValiP extends Component {


  constructor(){
    super();
    this.state = {
      datos : [],
    }
    
  }

  obtenerDatos(){
    axios
      .get("url")
      .then(response => {

        // create an array of contacts only with relevant data
        const newdatos = response.data.map(c => {
          return {
            id: c.id,
            name: c.nombre,
            validacion: c.validacion,
            estado: c.estado,
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          datos: newdatos
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  meterDatos( datos){
    axios.post("url", {datos})
    .then(res => {
      console.log(res);
      console.log(res.datos);
  }
    
  



    
  
 
    render(){
      
      this.obtenerDatos();
      const rows =  this.state.datos;
   
        return(
          <div className="root">
          <AppBar position="absolute">
               
              Cafesitos SA
     
          </AppBar>

          <h1> Despachar Nueva Orden</h1>

          <div className="form-group">
            <label>Cantidad</label>
            <input type ="Text" className ="form-control" name="descripcion"/>
            </div>

            <div className="form-group">
            <label>Proveedor</label>
            <select>
              <option value="volvo">Fabrica Principal</option>
              <option value="saab">Fabrica sector 1</option>
               <option value="mercedes">Fabrica sector 2</option>
               <option value="audi">Fabrica sector 3</option>
</select> 
            </div>

            <div className="form-group">
            <label>Tipo</label>
            <select>
  <option value="volvo">Nescafe</option>
  <option value="saab">Aguila</option>
  <option value="mercedes">Cafe Rojo</option>

</select> 

            </div>




          <React.Fragment>
      <h1>Recent Orders</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>estado</TableCell>
            <TableCell>Validacion</TableCell>
            <TableCell align="center">Trazabilidad</TableCell>
            <TableCell align="center">Validar para siguiente destino</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.cantidad}</TableCell>
              <TableCell>{row.estado}</TableCell>
              <TableCell >{row.validacion}</TableCell>
              <TableCell align="center">
                <button> traz </button>
              </TableCell>
              <TableCell align="center">
                <button> Validar </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="seeMore">
        <Link color="primary" href="javascript:;">
          urban sa
        </Link>
      </div>
    </React.Fragment>
        </div>




        );
    }

}
export default ValiP;