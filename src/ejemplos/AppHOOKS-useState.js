import React, { useState, useRef,useEffect} from 'react'
// import { ReactComponent } from '*.svg'
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

// search component
const Search = () =>{
    const artref = useRef()
    const songref = useRef()
    const [arttext,setArttext] = useState('')
    const [songtext,setSongtext] = useState('')
    const [mstate,setMstate] = useState('En espera')
    const [textLyrics,setTextLyrics] = useState('')
    const [title,setTitle] = useState('')

    const changing = () =>{
        setArttext(arttext)
    }
    //realiza la busqueda de lyrics en API
    const toSearch = () =>{

        console.log({arttext, songtext});
        
        const url = 'https://api.lyrics.ovh/v1/' + arttext + '/' + songtext
        fetch(url)
        .then(res=>res.json())
        .then(lyrics=>{
            // asigna los titulos
            if (arttext !== '' && songtext !== ''){ 
                setTitle(arttext.toUpperCase() + ' - ' + songtext.toUpperCase())
            }
            // obtiene los lyrics.
            if (lyrics.lyrics) {
                let lineas = lyrics.lyrics.split('\n').map((item,i)=>{
                    return <p key={i}>{item}</p>
                })
                setArttext('')
                setSongtext('')
                setMstate('Busqueda Exitosa')
                setTextLyrics(lineas)
            }else{
                setMstate('Busqueda no encontrada')
                setTextLyrics('')
            }
           
        })
        
    }

    const cerrarModal = () =>{
        setMstate('')
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
            <p className={modstyle['songtitle']}>BUSQUEDA:</p>
            {/* Se agregan las refs al input para su identificacioon */}
            <input type="text" 
                value={arttext} 
                onChange={(e) => {setArttext(e.target.value)}}
                className={modstyle['inputs']}
                placeholder='Artist'
                ref={artref}/>

            <input type="text" 
                value={songtext} 
                onChange={(e) => {setSongtext(e.target.value)}} 
                className={modstyle['inputs']}
                placeholder='Song'
                ref={songref}/>

            <button className={modstyle['bstyle']} onClick={toSearch}>Buscar</button>
            <div>
                <h2 className={modstyle['songtitle']}>{title}</h2>
            </div>
            <div className={modstyle['songlyrics']}>
                {textLyrics}
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