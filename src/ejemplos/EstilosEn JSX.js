import React from 'react'

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
        const styles ={
            width:'200px',
            padding:'10px',
            margin:'5px',
            borderRadius:'10px',
            background:this.state.HP<=40 ? '#ff0000' : '#40ff00',
            color:this.state.HP<=40 ? 'white' : 'black',
            transition: 'all 1s', 
        }
        return(
            <div style={styles}>
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