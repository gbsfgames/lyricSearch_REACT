import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import modstyle from './modal.module.css'
//import React from 'react'
// import PJ from './componentes/PJ'
// import Input from './componentes/input'
// import Galeria from './componentes/galeria'
// import PropTypes from 'prop-types'
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

class PortalModal extends Component{
    render(){
            return(
                ReactDOM.createPortal((
                    <div>
                        <p>{this.props.children}</p>
                    </div>
                ),document.getElementById('modal-root'))
            )
    }
}

// realiza la peticion a la API lyrics por primera vez y muestra los lyrics
class Httpr extends Component{
    state = {
        nombre:'',
        email:'',
        author:'',
        song:'',
        textot:[],
        estado:'En espera',
        modvis:false
    }

    fetchdatas = () =>{
        const url = 'https://api.lyrics.ovh/v1/' + this.state.author + '/' + this.state.song
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>{
            // esta linea aplica el formato a los lyrics...
            let lineas = lyrics.lyrics.split('\n').map((item,i)=>{
                return <p key={i}>{item}</p>
            })
            this.setState({textot:lineas})
        }) 
        .catch(errorsote=>{
            alert()
        })
    }
    cerrarModal = () =>{
        this.setState({estado:'En espera'})
    }
    doSearch = (arts,songs) =>{
        const url = 'https://api.lyrics.ovh/v1/' + arts + '/' + songs
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>{
            if (lyrics.lyrics) {
                let lineas = lyrics.lyrics.split('\n').map((item,i)=>{
                    return <p key={i}>{item}</p>
                })
                this.setState({estado:'Busqueda Exitosa',author:arts,song:songs,textot:lineas})
            }else{
                console.log('Busqueda no encontrada.')
                this.setState({estado:'Busqueda no encontrada',textot:'',author:'',song:''})
            }
           
        })
        .catch(console.log('resul'))        
    }
    
    render(){
        const {modvis,author,song,textot,estado} = this.state

        let styleverif = ''
        let styleverif2 = ''
        if (estado=='Busqueda Exitosa') {
            styleverif = modstyle['modal-contenido-success']
            styleverif2 = modstyle['modal-success']
        }else if(estado=='Busqueda no encontrada'){
            styleverif = modstyle['modal-contenido-fail']
            styleverif2 = modstyle['modal-fail']
        }
        else{
            styleverif = ''
            styleverif2 = ''
        }

        const apllystyle = modstyle['modal-contenido'] + ' ' + styleverif
        const aplystyle2 = modstyle['modal'] + ' ' + styleverif2
        return(
            <div>     
                <h2 className={modstyle['title1']}>LYRICS SEARCH</h2>
                <p className={modstyle['songtitle']}>BUSQUEDA:</p>
                <Compdos onSearch={this.doSearch} name = 'nombre'/>
                <br/>
                <h3 className={modstyle['songtitle']}>{author.toUpperCase()} - {song.toUpperCase()}</h3>
                <div className={modstyle['songlyrics']}>{textot}</div>
                <PortalModal>
                    <div className={aplystyle2}>
                        <div className={apllystyle}>
                            <button onClick={this.cerrarModal} className={modstyle['Mbutton']}>X</button>
                            {estado}
                        </div>
                    </div>
                </PortalModal>

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
        color:'#E8E8E8',
    }

    camb = () =>{
        const arttext = this.artref.current.value
        const songtext = this.songref.current.value
        this.setState({arttext,songtext})
        //this.props.onChange(this.props.name,text)
    }
    
    busqueda = (btext) =>{
        this.props.onSearch(this.artref.current.value,this.songref.current.value)
        // console.log(this.artref.current.value)
        // console.log(this.songref.current.value)
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
            <div className={modstyle['searchinp']}>
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