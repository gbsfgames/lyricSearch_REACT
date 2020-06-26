import React, { Component, useState} from 'react'
// import { ReactComponent } from '*.svg'
// import ReactDOM from 'react-dom'
// import modstyle from './modal.module.css'


// USO DE HOOKS
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Contador de clics</h1>
            </div>
        )
    }
}

// esto es igual a la funcion que hice hooks solo que de una forma mas explicita y larga...
const App = () =>{
    // retorna [value,func()]
    const [clicks,setClicks] = useState(0)

    const cliker = () =>{
        setClicks(clicks + 1)
    }
    return(
        <div>
            <Header/>
            <button onClick={cliker}>
                Clicks ({clicks})
            </button>
        </div>
    )
}

// esto es igual a la funcion que hice con componentes estatales.
// const App = () =>{
//     // retorna [value,func()]
//     const [clicks,setClicks] = useState(10)

//     return(
//         <div>
//             <Header/>
//             <button onClick={()=>setClicks(clicks + 1)}>
//                 Clicks ({clicks})
//             </button>
//         </div>
//     )
// }


// esto es igual a la funcion que hice con hooks solo que con componenetes de clase...
// class App extends Component{
//     state={
//         clicks:0,
//     }

//     setclicks = ()=>{
//         this.setState({clicks:this.state.clicks + 1})
//     }
//     render(){
//         return(
//             <div>
//                 <Header/>
//                 <button onClick={this.setclicks}>
//                 Clicks ({this.state.clicks})
//             </button>
//             </div>
//             )
//     }

// } 
export default App