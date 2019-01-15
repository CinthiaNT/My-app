import React, { Component } from 'react';

class Cancion extends Component{
    constructor(props){
        super(props);

        this.state ={
            imagen: props.img
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('se llamo getDErivedStateFromProps');
        if(nextProps.img != prevState.imagen){
            console.log('cambio');
            return {imagen: nextProps.img};
        }
        console.log('NO cambio');
        return null;

    }
    render(){
        return(
            <div className = "Cancion">
                <h1>Componente Externo</h1>
                <img src = {this.state.imagen}/>
            </div>
        );
    }
}
export default Cancion;