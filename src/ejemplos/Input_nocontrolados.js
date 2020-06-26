import React, { Component } from 'react'
//import React from 'react'
// import PJ from './componentes/PJ'
// import Input from './componentes/input'
// import Galeria from './componentes/galeria'
import PropTypes from 'prop-types'
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

class Compuno extends Component{

    //declaracion de refs
    nombre = React.createRef()
    email = React.createRef()

    // static propTypes = {
    //     name:PropTypes.string,
    //     edad:PropTypes.number,
    // }

    clickeado = () =>{
        const nombre = this.nombre.current.value
        const email = this.email.current.value

        this.props.onSend({nombre,email})
    }

    render(){
        const {nombre,email} = this.props
        return(
            <div>
                {/* Se agregan las refs a los input */}
                <input type='text' ref={this.nombre} placeholder='Nombre'/>
                <input type='text' ref={this.email} placeholder='EMAIL'/>
                <button onClick={this.clickeado}>Enviar</button>
                <h1> {nombre}- {email}</h1>
            </div>
        )
    }
    }
class App extends Component{
    state ={
        enombre:'',
        emmal:''
    }
    send = (data) =>{
        this.setState((state) =>({
            ...state.veses,
            enombre:data.nombre,
            emmal:data.email
        }))
        console.log(data)
        const no = data.nombre
        const em = data.email 
        console.log(no + em)
    }
    
    render(){
        const nnomb = ''
        const emal = ''
        return(
            
            <div>
                {/* {fuente.map(personaje=>(
                 <Galeria personaje={personaje} key={personaje.id}/>
                ))} */}
                <Compuno onSend={this.send} nombre={this.state.enombre} email={this.state.emmal}/>
            </div>
            
            )
    }

}
export default App