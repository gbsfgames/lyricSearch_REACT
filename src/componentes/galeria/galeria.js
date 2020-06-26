import React from 'react'
import styles from './galeria.module.css'

// opcion1: no cambia estado porque se genera un estado para cada carta y esto no debe ser asi...
class Galeria extends React.Component{
    state = {
       cartaSeleccionada:{},
       veses:false
    }
    // carta = (sell) =>{
        
    //     this.setState((state) =>({
    //         ...state.cartaSeleccionada,
    //         cartaSeleccionada:sell
    //     }))
    //     console.log(sell)
    // }
    verify = (event) =>{
        // aplque destructuracion en la variable veses...
        const {veses:nveses} = this.state
        
        if (nveses===false) {
            this.setState((state) =>({
                ...state.veses,
                veses:true
            }))
        }else{
            this.setState((state) =>({
                ...state.veses,
                veses:false
            }))
        }
       
        console.log(nveses)  
    }
    render(){
        //let parr = this.state.veses % 2
        //const evaluacion = this.state.cartaSeleccionada.id === this.props.personaje.id  ? styles['mainC2'] : ''
        const evaluacion = this.state.veses ? styles['mainC2'] : ''
        const seleccionado = styles['mainC'] + ' ' + evaluacion
        
        return(
            <div className={seleccionado} onClick={this.verify}>
                <img src={this.props.personaje.source} alt='NOIMAGE'className={styles['imgs']}/>
                <div className={styles['figg']}> <img src={this.props.personaje.imgefaction} alt='NOIMAGE'className={styles['logo']}/></div>
                <div>
                    <span>Nombre: {this.props.personaje.info.nombre}</span>
                    <span>Raza: {this.props.personaje.info.raza}</span>
                    <span>Clase: {this.props.personaje.info.clase}</span>
                    <span>Faccion: {this.props.personaje.faccion}</span>
                </div>
            </div>
        )
    }
}
export default Galeria