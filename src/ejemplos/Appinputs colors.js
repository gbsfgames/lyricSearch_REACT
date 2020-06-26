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
// realiza la peticion a la API lyrics por primera vez y muestra los lyrics
class Httpr extends Component{
    state = {
        lyrics:[],
        nombre:'',
        email:'',
        author:'nirvana',
        song:'polly',
    }

    cambiante = (name,text) =>{
       this.setState({
           [name]:text,
       })
    }
    doSearch = (tosearch) =>{
        const url = 'https://api.lyrics.ovh/v1/' + tosearch + '/' + 'dumb'
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>this.setState({lyrics}))
    }
    componentDidMount(){
        const url = 'https://api.lyrics.ovh/v1/' + this.state.author + '/' + this.state.song
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>this.setState({lyrics}))
    }
    render(){
        const {lyrics} = this.state
        return(
            <div>
                <h2>Lyrics Search</h2>
                <Compdos onSearch={this.doSearch} onChange={this.cambiante} name = 'nombre'/>
                <p>{lyrics.lyrics}</p>
            </div>
        )
    }
}
// Inicializa el input
class Compdos extends Component{
    artref = React.createRef()
    songref = React.createRef()

    state = {
        arttext:'',
        songtext:'',
        Errorr:false,
        color:'#E8E8E8'
    }

    camb = (evento) =>{
        const arttext = this.artref.current.value
        const songtext = this.songref.current.value
        let color = 'orange'
        if ( arttext.trim() ==='') {
            color = 'E8E8E8'
        }
        if ( arttext.trim() !=='' && arttext.length < 5){
            color = 'red'
        }
        this.setState({arttext,color})
        //this.props.onChange(this.props.name,text)
    }
    
    busqueda = (btext) =>{
        console.log(this.artref.current.value)
        console.log(this.songref.current.value)
    }

    render(){
        const stylee = {
            border: '1px solid ' + this.state.color,
            padding : '0.8em 0.8em',
            outline: 'none',
        }
        const bstyle={
            padding : '0.7em 0.6em',
        }

        return(
            <div>
                {/* Se agregan las refs al input para su identificacioon */}
                <input type="text" 
                value={this.state.arttext} 
                onChange={this.camb} 
                style={stylee}
                placeholder='Artist'
                ref={this.artref}/>

                <input type="text" 
                value={this.state.text} 
                onChange={this.camb} 
                style={stylee}
                placeholder='Song'
                ref={this.songref}/>

                <button style={bstyle} onClick={this.busqueda}>Buscar</button>
                
            </div>
        )
    }
    }
class App extends Component{

    render(){
        return(
            <div>
                <Httpr/>
            </div>
            )
    }

} 
export default App