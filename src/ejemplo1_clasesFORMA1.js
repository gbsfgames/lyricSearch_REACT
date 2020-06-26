import React from 'react'
import ReactDOM from 'react-dom'
// import { ReactComponent } from '*.svg'


class Saludo extends React.Component{
    constructor(){
        super()
        // aqui se añaden los metodos que se
        const METHODS = [
            'golpear',
            'curar'
        ]

        METHODS.forEach((method)=>{
            this[method] = this[method].bind(this)
        })

        this.state = {
            HP : 100
        }
    }
    golpear(){
        this.setState({
            HP:this.state.HP - 1
        })
    }
    curar(){
        this.setState({
            HP:this.state.HP + 1
        })
    }
    render(){
        return(
            <div>
                <h1>Personaje</h1>
                <p>{this.props.nombre} {this.props.ap1} HP = {this.state.HP}</p>
                <button onClick={this.golpear.bind(this)}>Golpe</button>
                <button onClick={this.curar.bind(this)}>Curar</button>
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