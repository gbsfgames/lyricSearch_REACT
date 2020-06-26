import React, { Component } from 'react'
//import React from 'react'
// import PJ from './componentes/PJ'
// import Input from './componentes/input'
// import Galeria from './componentes/galeria'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
const fuente = [
    {
        info:{
            nombre:'Arthas Menethil',
            raza:'Humano',
            clase:'Paladin - Caballero de la Muerte'
        },
        id:1,
        source:'https://vignette.wikia.nocookie.net/wow/images/1/1c/Arthas.jpg/revision/latest?cb=20080224180708&path-prefix=es',
        imgefaction:'https://vignette.wikia.nocookie.net/wow/images/7/7e/Alliance_64.png/revision/latest/scale-to-width-down/36?cb=20160120222012&path-prefix=es',
        faccion:'Alianza'
    },
    {
        info:{
            nombre:'Sylvanas Windrunner',
            raza:'Alto Elfo',
            clase:'Hunter'
        },
        id:2,
        source:'https://vignette.wikia.nocookie.net/wow/images/d/d9/Sylvanas_Brisaveloz.png/revision/latest/scale-to-width-down/310?cb=20180214232728&path-prefix=es',
        imgefaction:'https://vignette.wikia.nocookie.net/wow/images/4/4f/Horde_32.png/revision/latest?cb=20160108213550&path-prefix=es',
        faccion:'Horda'
    },
    {
        info:{
            nombre:' Arator the Redeemer',
            raza:'Medio Elfo',
            clase:'Paladin'
        },
        id:3,
        source:'https://vignette.wikia.nocookie.net/wow/images/c/c0/Arator_the_redeemer.jpg/revision/latest/scale-to-width-down/190?cb=20071108002046&path-prefix=es',
        imgefaction:'https://vignette.wikia.nocookie.net/wow/images/7/7e/Alliance_64.png/revision/latest/scale-to-width-down/36?cb=20160120222012&path-prefix=es',
        faccion:'Alianza'
    },
    {
        info:{
            nombre:'Garrosh Hellscream',
            raza:'Orco',
            clase:'Guerrero'
        },
        id:4,
        source:'https://vignette.wikia.nocookie.net/wow/images/c/cb/Garrosh_Grito_Infernal.png/revision/latest/scale-to-width-down/300?cb=20180214232727&path-prefix=es',
        imgefaction:'https://vignette.wikia.nocookie.net/wow/images/4/4f/Horde_32.png/revision/latest?cb=20160108213550&path-prefix=es',
        faccion:'Horda'
    }]

class Compdos extends Component{
    state = {
        text:'',
        Errorr:false,
        color:'#E8E8E8'
    }

    camb = (evento) =>{
        const text = evento.target.value
        //const Errorr = text !== '' && text.length < 5 ? true : false
        let color = 'orange'
        if ( text.trim() ==='') {
            color = 'E8E8E8'
        }
        if ( text.trim() !=='' && text.length < 5){
            color = 'red'
        }
        this.setState({text,color})
        this.props.onChange(this.props.name,text)
    }

    render(){
        const stylee = {
            border: '1px solid ' + this.state.color,
            padding : '0.8em 0.8em',
            outline: 'none',
        }
        return(
            <div>
                {/* Se agregan las refs a los input */}
                <input type="text" 
                value={this.state.text} 
                onChange={this.camb} 
                style={stylee}
                placeholder={this.props.placeholda}/>
                
            </div>
        )
    }
    }
class App extends Component{
    state = {
        nombre:'',
        email:''
    }
    cambiante = (name,text) =>{
       this.setState({
           [name]:text,
       })
    }
    render(){
        return(
            <div>
                <Compdos onChange={this.cambiante} name = 'nombre' placeholda = 'Nombre'/>
                <Compdos onChange={this.cambiante} name = 'email' placeholda = 'Email'/>
                <h2>{this.state.nombre}</h2>
                <h2>{this.state.email}</h2>
            </div>
            )
    }

}
export default App