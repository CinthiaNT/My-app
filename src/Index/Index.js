import React, { Component } from 'react';
import Cancion from '../Cancion';
import '../App.css';

class Index extends Component{
    /*************************Uso de ECMA6*************************************/
    //En el cosntructor solo debe ir el estado de los componentes
    constructor(){
        super();
        this.state ={ //declarar variables como tipo diccionario 
            var: 'mundo',
            nombre:'Juana',
            numero: 0,
            contador: 0,
            contFibonacci: 5,
            serie: [],
            img : ''
          }
    }
    componentDidMount(){
        console.log("ya se llamo componentDidMount");
        this.interval = setInterval(() =>  this.setState(state => ({numero:state.numero +1})),1000);
        this.contador = 0;
        this.imagenes = ['img/inmyplace.jpg','img/lostonyou.jpg','img/missterrorista.jpg','img/osito.jpg',
                       'img/zoeazul.jpg'];
        this.setState({img: this.imagenes[this.contador]});
        
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
    render(){
        return(
            <div className ="Index">
                <header className="App-header">
                    Aqui es index
                </header>
                <Cancion img ={this.state.img}/>
                <p><div>{this.state.numero}</div></p>
                <button onClick={this.siguiente}>Next</button> 
            </div>
            
        );
    }
}
export default Index;