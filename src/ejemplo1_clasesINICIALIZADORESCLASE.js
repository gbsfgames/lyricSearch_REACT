import React from 'react'
import ReactDOM from 'react-dom'
// Uso de inicializadores de propiedad


class Saludo extends React.Component{

    state = {
        HP : 100
    }
    //metodos con lo que se hace cambio de estado
    golpear =() =>{
        this.setState({
            HP:this.state.HP - 1
        })
    }
    curar = () => {
        this.setState({
            HP:this.state.HP + 1
        })
    }
    // metodo render que se utiliza como plantilla para mi app
    render(){
        return(
            <div>
                <h1>{this.props.nombre} </h1>
                <p>CLASE: {this.props.ap1}</p>
                <p>STATUS: HP = {this.state.HP}</p>
                <button onClick={this.golpear}>Golpe</button>
                <button onClick={this.curar}>Curar</button>
            </div>
        )
    }    
}

// const Saludo = (props) =>(
//     <div>
//         <h1>Saludo</h1>
//         <p>Hola {props.nombre} {props.ap1} edad {props.edad}</p>
//     </div>
//     )

const App = () =>(
    <div>
        <Saludo nombre={'Telarion'} ap1={'Paladin'} />
        <Saludo nombre={'Azara'} ap1={'Hunter'} />
    </div>
)
ReactDOM.render(<App/>,document.getElementById('root'))