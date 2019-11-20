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


const fabricas = [
  {
    value: 'fabrica1',
    name: 'Fabrica1'
  },
  {
    value: 'fabrica2',
    name: 'Fabrica2'
  },
  {
    value: 'fabrica3',
    name: 'Fabrica3'
  },
];

const empresas = [
  {
    value: 'nescafe',
    name: 'Nescafe'
  },
  {
    value: 'aguilaroja',
    name: 'Aguilaroja'
  },
];

//holis como esta


class ValiP extends Component {


  constructor(){
    super();
    this.state = {
      datos : [{"id":"1", "date":"16 Mar, 2019", "cantidad":"2", "estado":"proceso", "validacion":"o si"},
               {"id":"2", "date":"'16 Mar, 2019", "cantidad":"2", "estado":"proceso", "validacion":"o si"}],
               valueF: 'uruguay',
               valueE: 'uruguay',
    }

    this.state.datos.push({"id":"1", "date":"16 Mar, 2019", "cantidad":"3", "estado":"proceso", "validacion":"o si"});
    this.s = this.s.bind(this);
    
    this.handleChangeE = this.handleChangeE.bind(this);
    this.handleChangeF = this.handleChangeF.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeF(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    this.setState({valueF: event.target.value});
 
  }
  handleChangeE(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    this.setState({valueE: event.target.value});
 
  }


  handleSubmit(event) {
    alert('Tu país es: ' + this.state.valueF);
    alert('Tu país es: ' + this.state.valueP);
    event.preventDefault();
  }

  meterDatos( datos){
    axios.post("url", {datos})
    .then(res => {
      console.log(res);
      console.log(res.datos);
  });
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

  s(e){
    console.log(e.target.id);
    const array = this.state.datos;
    array.push({"id":"1", "date":"16 Mar, 2019", "cantidad":"3", "estado":"proceso", "validacion":"o si"});
    this.setState(array);
    
    
  }
  
 
    render(){
      
      this.obtenerDatos();
      this.state.checked=false;
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
            <select id="fabrica" value={this.state.valueF} onChange={this.handleChangeF}>
            {fabricas.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}
</select> 
            </div>

            <div className="form-group">
            <label>Tipo</label>
            <select id="proveedor" value={this.state.valueE} onChange={this.handleChangeE}>
{empresas.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}

</select> 

            </div>



<div id="principal" hidden={this.state.checked}>
          <React.Fragment>
      <h1>Recent Orders</h1>
      <Table size="small" >
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
          {this.state.datos.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.cantidad}</TableCell>
              <TableCell>{row.estado}</TableCell>
              <TableCell >{row.validacion}</TableCell>
              <TableCell align="center">
                <button> traz </button>
              </TableCell>
              <TableCell align="center">
                <button id={row.id} onClick = {this.s.bind(row.id)}> Validar </button>
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
        </div>




        );
    }

}
export default ValiP;