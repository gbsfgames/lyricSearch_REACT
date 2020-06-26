import React, { useState, useRef, useReducer} from 'react'
import ReactDOM from 'react-dom'
import modstyle from './modal.module.css'

// Search lyrics application

// modal component
const PortalModal = (props) =>{
    return(
        ReactDOM.createPortal((
            <div>
                {props.children}
            </div>
        ),document.getElementById('modal-root'))
    )
}

const ini_state = {
    Atext:'',
    hist:[],
    histLyc:[],
    Aimg:'',
}

const fn_reducer = (state, action) => {
    switch (action.type) {
        case 'ART_TEXT':
            return {
                ...state,
                Atext: action.Atext
            }
        case 'ADD_HYST':
            return {
                ...state,
                hist: [action.Atext.toUpperCase() + ' - ' + action.Stext.toUpperCase(), ...action.array]
            }
        case 'ADD_HYST_LYC':
            return {
                ...state,
                histLyc: [action.lyric, ...action.prevLycarray]
            } 
        case 'SET_IMAGE':
            return {
                ...state,
                Aimg: action.eimg
            } 
        default:
            return state
    }
}  

// search component
const Search = () =>{
    const artref = useRef()
    const songref = useRef()
    const [myprops,setMyprops] = useReducer(fn_reducer,ini_state)
    const [songtext,setSongtext] = useState('')
    const [mstate,setMstate] = useState('En espera')
    const [textLyrics,setTextLyrics] = useState('')
    const [title,setTitle] = useState('')

    //realiza la busqueda de lyrics en API
    const toSearch = () =>{
        const url = 'https://api.lyrics.ovh/v1/' + myprops.Atext + '/' + songtext
        
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>{
            // asigna los titulos
            if (myprops.Atext !== '' && songtext !== ''){ 
                setTitle(myprops.Atext.toUpperCase() + ' - ' + songtext.toUpperCase())
            }
            // obtiene los lyrics.
            if (lyrics.lyrics) {
                let lineas = lyrics.lyrics.split('\n').map((item,i)=>{
                    return <p key={i}>{item}</p>
                })
                setMyprops({type:'ART_TEXT',Atext:''})
                setSongtext('')
                setMstate('Busqueda Exitosa')
                setTextLyrics(lineas)
                //Creacion de historico...
                setMyprops({type:'ADD_HYST',Atext:myprops.Atext, Stext:songtext ,array:myprops.hist})
                setMyprops({type:'ADD_HYST_LYC',lyric:lineas,prevLycarray:myprops.histLyc})
                // focus on artist input
                artref.current.focus()
                SearchImage()
            }else{
                setMstate('Busqueda no encontrada')
                setTitle('')
                setTextLyrics('')
                artref.current.focus()
            }
           
        })
        
    }

    //realiza la busqueda de la imagen del artista.
        const SearchImage = () =>{
        const mproxy = 'https://cors-anywhere.herokuapp.com/'
        const imageUrl = 'http://api.deezer.com/artist/' + myprops.Atext
        // Se junta la URL con la de la proxy para prevenir el error del cors HTTP
        fetch(mproxy + imageUrl)
        .then(res=>res.json())
        .then(img=>{
            console.log('Esto es img: ' + img)
            if (img.picture) {
                setMyprops({type:'SET_IMAGE',eimg:img.picture})   
            }

        })
    }

    const cerrarModal = () =>{
        setMstate('')
    }
    const loadLyrics = (id) =>{
        setTextLyrics(myprops.histLyc[id]); 
        setTitle(myprops.hist[id]); 
    }

    // verificar si enter se presiono...
    const pEnter = (event) =>{
        if (event.key === 'Enter') {
            toSearch()
        }
        
    }

    let styleverif = ''
        let styleverif2 = ''
        if (mstate === 'Busqueda Exitosa') {
            styleverif = modstyle['modal-contenido-success']
            styleverif2 = modstyle['modal-success']
        }else if(mstate === 'Busqueda no encontrada'){
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
        <div className={modstyle['searchinp']}>
            <h2 className={modstyle['title1']}>LYRICS SEARCH</h2>
            <p className={modstyle['songtitle']}>SEARCH:</p>
            {/* Se agregan las refs al input para su identificacion */}
            <div>
                <input type="text" 
                    value={myprops.Atext} 
                    onChange={(e) => {setMyprops({type:'ART_TEXT',Atext:e.target.value});
                    }}
                    className={modstyle['inputs']}
                    placeholder='Artist'
                    ref={artref}/>

                <input type="text" 
                    value={songtext} 
                    onChange={(e) => {setSongtext(e.target.value)}} 
                    className={modstyle['inputs']}
                    placeholder='Song'
                    ref={songref}
                    onKeyUp={pEnter}/>
                <button className={modstyle['bstyle']} onClick={toSearch}>Search</button>
            </div>
            {/* Imagen del artista... */}
            <div className={modstyle['images']}>
                <p className={modstyle['titlehistory']}>Artist</p>
                <img src={myprops.Aimg} alt={"Imagen"}></img>
            </div>
            
            {/* all about lyrics */}
            <div className={modstyle['songlyrics']}>
                <h2 className={modstyle['songtitle']}>{title}</h2>
                {textLyrics}
            </div>
            <div className={modstyle['history']}>
                <p className={modstyle['titlehistory']}>History</p>
                {/* cada elemento de el array history */}
                {myprops.hist.map((item,i)=>{ 
                    return <p className={modstyle['elementhistory']} key={i} id={i} onClick={()=>{loadLyrics(i)}}> {item}</p>
                    })}
            </div>

            <PortalModal titleportal='TitleExample'>
                <div className={aplystyle2}>
                    <div className={apllystyle}>
                        <button onClick={cerrarModal} className={modstyle['Mbutton']}>X</button>
                        {mstate}
                    </div>
                </div>
            </PortalModal>
        </div>
        
    )
}

const App = () =>{

    return(
        <div>
            <Search />
        </div>
    )
}

export default App