import React, { useEffect, useState } from "react";
import fretBoard from "./img/bare-dots.png"
import String from "./String";
import '../assets/styles/string.css'
export default function Diagram(props){

    const {stringNum,frets} = props;
    const [activeFret,setActiveFret] = useState([...frets].reverse().join("").replace(/\s+/g, ''))
        // const active = [...frets].reverse().join("").replace(/\s+/g, '')
        // setActiveFret(active)
    useEffect(()=>{
        setActiveFret([...frets].reverse().join("").replace(/\s+/g, ''))
    })

    
    const listString = stringNum.map((string,index)=> 
    <String key = {string+index} fretActive ={activeFret.charAt(index)} stringNum = {index} id = {index}/>
    )


    return(
        <div  className = "diagram">
            {/* <img className = 'fretBoardImage' src = {fretBoard}></img> */}
            <div className = "fretBoard"  >{listString}</div>
        </div>
    )
}