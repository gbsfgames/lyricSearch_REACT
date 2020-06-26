import React from 'react'
import PJ from '../PJ'

class Input extends React.Component{
    state = {
       texto:'',
    }

    manage = (event) =>{
        this.setState({
            texto : event.target.value
        })
    }

    render(){
        return(
            <div>
                <span>Propietario: </span>
                <input type="text" onChange={this.manage}/>
                <h2>Busqueda: {this.state.texto}</h2>
                <PJ nombre={this.state.texto}/>
            </div>
        )
    }
}
export default Input