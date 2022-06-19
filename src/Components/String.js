import React, { useEffect, useState } from "react";
import Fret from "./Fret";
export default function String(props){
    let fretNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    // let fretNum = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",]
    const {stringNum,fretActive} = props
    
    const [active,setActive] = useState('')
    const [frets,setFrets] = useState(fretNum)
    let updateFrets = [...frets]
    let listFrets;
useEffect(()=>{
    console.log(fretActive + " on string: " + stringNum)
    setActive(fretActive)
    setBoard()
    setFrets(updateFrets)
},[active,fretActive])
 const setBoard = ()=>{
      updateFrets = [...fretNum]
     for(let i = 0; i<fretNum.length; i++){
         let f = parseInt(fretActive)
         let g = parseInt(fretNum[i])
         if(f === g){
             updateFrets[i]= 'X'
            //  setActive(i)

         }
     }
    //  setFrets(updateFrets)
    //  console.log(fretNum)
 }


    return(
        <>
        <ul className = "string" id = {"String"+stringNum}  value = {stringNum}>
            {<Fret frets = {frets} stringNum = {stringNum} active = {active}/>}
        </ul>
        </>
    )
}