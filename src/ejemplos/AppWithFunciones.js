import React, { Component, useState} from 'react'
// import { ReactComponent } from '*.svg'
// import ReactDOM from 'react-dom'
// import modstyle from './modal.module.css'


// USO DE HOOKS
const Header = () =>{
        return(
            <div>
                <h1>Counter</h1>
            </div>
        )
}

// esto es igual a la funcion que hice hooks solo que de una forma mas explicita y larga...
const App = () =>{
    
    // los valores se destructuran en forma de array
    // retorna [value,func()]
    const [clicks,setClicks] = useState(0)
    let [text,setText] = useState('')

    const cliker = () =>{
        setClicks(clicks + 1)
    }
    const changetext = (e) =>{
        setText(e.target.value)
        console.log(e.target.value)
    }
    return(
        <div>
            <Header/>
            <input value={text} type={'text'} onChange={changetext}/>
            <button onClick={cliker}>
                Clicks ({clicks})
            </button>
            <h3>{text}</h3>
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