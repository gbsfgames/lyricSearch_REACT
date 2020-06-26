import React from 'react'
import './PJ.css'
class PJ extends React.Component{

    state = {
        HP : 100
    }
    //metodos con lo que se hace cambio de estado
    golpear =() =>{
        this.setState({
            HP:this.state.HP - 60
        })
    }
    curar = () => {
        this.setState({
            HP:this.state.HP + 20
        })
    }
    // metodo render que se utiliza como plantilla para mi app

    render(){
        // Condiciones para estilos dinamicos
        const evaluacion = this.state.HP <= 40 ? 'PJ-danio' : ''
        const aplicar = 'PJ ' + evaluacion
        return(
            <div className={aplicar}>
                <h1>{this.props.nombre} </h1>
                <p><strong>CLASE:</strong> {this.props.ap1}</p>
                <p><strong>STATUS:</strong> HP = {this.state.HP}</p>
                <button onClick={this.golpear}>Golpe</button>
                <button onClick={this.curar}>Curar</button>
            </div>
        )
    }    
}

export default PJ