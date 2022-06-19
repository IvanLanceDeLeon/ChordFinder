import React from "react";


export default function Fret(props){
    
    const {frets, active,stringNum} = props
    // const fret = frets.map((fret,index)=>(
    //     <li key ={fret+index} className = {frets[index]} value = {frets[index]} >
    //         {fret}
    //     </li> 
    // ))

    return(
        <>
        {frets.map((fret,index)=>(
            fret === 'X'?
        <li key ={fret+index} className = {"Fret" + stringNum } id = {"fret" + index} value = {fret} >
            <div className = "active"></div>
        </li> :         <li key ={fret+index} className = {"Fret" + stringNum } id = {"fret" + index} >
                <div></div>
        </li>
    ))}
        </>
    )
}