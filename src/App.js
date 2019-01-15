import React, { Component } from 'react';
import logo from './logo.svg';
import Cancion from './Cancion';
import Botones, {BotonDetener, BotonPlay} from './Botones';
import ReactDOM from 'react-dom'; //Index.js
import './App.css';
import Main from './Main/Main';
class App extends Component { //Clase, div y export siempre igual 
  constructor(){
    console.log("ya se llamo constructor");
    super();
    this.var = 'hola';
    this.state ={ //declarar variables como tipo diccionario 
      var: 'mundo',
      nombre:'Juana',
      numero: 0,
      contador: 0,
      contFibonacci: 5,
      serie: [],
      img : ''
    }  //EStado Todo lo que quieres modificar o usar de preferencia debe ser state
    this.cambiaNombre = this.onChange.bind(this); //bind this lo liga a la variable. Lo denota 
                                                  //Propiedad
    this.contadorFibonacci = this.fibona.bind(this);
   }
   siguiente = () =>{
      this.contador ++;
      var imagen = this.imagenes[this.contador];
      if(imagen == undefined){
        this.contador = 0;
        imagen = this.imagenes[this.contador];
      }
      this.setState({img: imagen});  
   }

   componentDidMount(){
     console.log("ya se llamo componentDidMount");
     this.interval = setInterval(() =>  this.setState(state => ({numero:state.numero +1})),1000);
     this.contador = 0;
     this.imagenes = ['img/inmyplace.jpg','img/lostonyou.jpg','img/missterrorista.jpg','img/osito.jpg',
                    'img/zoeazul.jpg'];
     this.setState({img: this.imagenes[this.contador]});
     
   }

   detenerContador = () =>{
     clearInterval(this.interval);
   }
   continuarContador = () =>{
    this.interval = setInterval(() =>  this.setState(state => ({numero:state.numero +1})),1000);
   }
   reiniciarContador = () =>{
    this.setState({numero: 0});
    this.interval = setInterval(() =>  this.setState(state => ({numero:state.numero +1})),1000);
   }
  onChange(n){
   // this.setState({nombre: e.target.value}); //Con el metodo Onchange recibe elparametro 
    
  }

  fibona(e){
    this.setState({contFibonacci: e.target.value});
  }
  activar(){
    return 'metodo';
  }
  cambiar = e =>{/*Si no se necesitan parametros debes poner cambiar = () */
    this.setState({nombre: e.target.value});

  } 
  fibonacci_method(){
    var fibonacci_array = new Array(); 
        var a = 1;
        var b = 1;
        var c;
        var  contador = 0;
        while (contador < this.state.contFibonacci){
          if (contador == 0){
            c = contador
            fibonacci_array.push(
            <p>{c}</p>);
            contador++;
            fibonacci_array.push(
            <p>{a}</p>);
            contador++;
            fibonacci_array.push(
              <p>{c = c+a}</p>);
              contador++;
          }
          c = a + b;
          a = b;
          b = c;
          if (c % 2 == 0){
            fibonacci_array.push(
              <p><strong>{c}</strong></p>
            );
          }else{
            fibonacci_array.push(
              <p>
                {c}
              </p>
            );
          }
          contador++;
        }
        return fibonacci_array;
  }
    
  render() { //Funcion para renderizar
    let variable = 'hola';
    var datos = ['hugo','cinthia','rebe','hector','hugo'];
    var arreglo = new Array();
    datos.forEach(element => {
      arreglo.push(
        <tr>
          <th>{element}</th>
          <th><input type = "text"></input></th>
        </tr>
      )
    });
    var fibo_body = this.fibonacci_method();
    var cuerpo =  <header className="App-header">
                       {/*<table>{arreglo}</table>*/}
                       {/* {fibo_body}*/}
                        <Cancion img ={this.state.img}/>
                        <p><div>{this.state.numero}</div></p>
                        <button onClick={this.siguiente}>Next</button>                        
                        <button onClick ={this.reiniciarContador}>Reiniciar</button>
                        <button className ="App-Button" onClick={this.detenerContador}>Stop</button>
                        <button onClick ={this.continuarContador}>Continuar</button>
                        
                  </header>;
 
 
    return (    
      <div className="App">
          
         {/*<div id = 'lista'></div>
         <BotonDetener />
         <BotonPlay />
         {cuerpo}
         <input type="text" onChange={this.contadorFibonacci}></input>
         <input type="text" onChange={this.cambiar}></input>
         <p>{this.state.contFibonacci}</p>
         
         {/*<Lista
         numeros={[1,2,3,4,5]}
         numeros2={['Juana','Hugo']}
         />  */} 
         {/*<button onClick = {this.activar}>Boton</button> {/*No ocupa parentesis porque se manda llamar con un evento*/}
         { /*{this.activar()} //mandar llamar al metodo solito si ocupa parentesis*/}
         <Main/>
      </div>
    );
  }
}

function ElemetoLista(props){
  /*return(
    <li>
      {props.value}
    </li>
  );*/
  function metodo(){
    return "funcion dentro del componente interno";
  }
  var res = metodo();
  return (<li>{props.valu}también {res}</li>);
}

function Lista(props){ //Componente Interno
                      //Dentro de un componente ppodemos recibir parametros y meter codigo (props )
  return(
    <div key={'componente'}>
      Esto es un componente interno
      {props.numeros.map((numero)=>
        <ElemetoLista value={numero} />
      )}
      {props.numeros2.map((numero2) =>
        <ElemetoLista value={numero2} />
        )}
    </div>
  );
}

/*setInterval(()=>{
  ReactDOM.render(
  <Lista
    numeros={[1,2,3,4,5]}
    numeros2={['hugo','paco','luis']}  
  />,
  document.getElementById('lista'));  //Tomamos este codigo de Index.js
},1000
);*/



export default App; //Regresar la clase 
