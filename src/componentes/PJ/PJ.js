import React from 'react'
// import './PJ.css'
import styles from './PJ.module.css'
import turalyon from '../imgs/Turalyon.png'
import alleria from '../imgs/Alleria.png'



class PJ extends React.Component{

    state = {
        hud:{
            HP : 100,
            MP : 100
        },
    }
    //metodos con lo que se hace cambio de estado
    golpear =() =>{
        this.setState((state) =>({
            hud:{
                // esta linea copia las propiedades de el estado y las mantiene
                // de otra forma quedarian vacias... 
                ...state.hud,
                HP: state.hud.HP - 60
            }
        })
        )
    }
    curar = () => {
        this.setState((state) =>({
            hud:{
                // esta linea copia las propiedades de el estado y las mantiene
                // de otra forma quedarian vacias... 
                ...state.hud,
                HP: state.hud.HP + 20
            }
        })
        )
    }
    lanzaH = () => {
        this.setState((state) =>({
            hud:{
                // esta linea copia las propiedades de el estado y las mantiene
                // de otra forma quedarian vacias... 
                ...state.hud,
                MP: state.hud.MP - 50
            }
        })
        )
    }
    potM = () => {
        this.setState((state) =>({
            hud:{
                // esta linea copia las propiedades de el estado y las mantiene
                // de otra forma quedarian vacias... 
                ...state.hud,
                MP: state.hud.MP + 10
            }
        })
        )
    }
    // metodo render que se utiliza como plantilla para mi app

    render(){
        // Condiciones para estilos dinamicos
        const evaluacion = this.state.hud.HP <= 40 ? styles['PJ-danio'] : ''
        const aplicar = styles['PJ'] + ' ' + evaluacion
        const img = this.props.nombre === "Turalyon" ? turalyon : alleria
        const clase = this.props.nombre === "Turalyon" ? 'Paladin' : 'Hunter'
        if (this.props.nombre === "Turalyon"){
            return(
                <div className={aplicar}>
                    <img src={img} alt="NOIMAGE"></img>
                    <h1>{this.props.nombre} </h1>
                    <p><strong>CLASS:</strong> {clase}</p>
                    <p><strong>HP</strong>  = {this.state.hud.HP}</p>
                    <p><strong>MP</strong>  = {this.state.hud.MP}</p>
                    <button onClick={this.golpear}>Stroke</button>
                    <button onClick={this.curar}>Heal</button>
                    <button onClick={this.lanzaH}>Spell</button>
                    <button onClick={this.potM}>Potion</button>
                </div>
            )
        }
        if(this.props.nombre === "Alleria"){
            return (
                <div className={aplicar}>
                    <img src={img} alt="NOIMAGE"></img>
                    <h1>{this.props.nombre} </h1>
                    <p><strong>CLASS:</strong> {clase}</p>
                    <p><strong>HP</strong>  = {this.state.hud.HP}</p>
                    <p><strong>MP</strong>  = {this.state.hud.MP}</p>
                    <button onClick={this.golpear}>Stroke</button>
                    <button onClick={this.curar}>Heal</button>
                    <button onClick={this.lanzaH}>Spell</button>
                    <button onClick={this.potM}>Potion</button>
                </div>
        )
        }else{
            return null
        }

    }    
}

export default PJ