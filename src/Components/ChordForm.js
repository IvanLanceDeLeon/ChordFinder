import React from "react"
import { useState } from "react";
export default function ChordForm(props){
  const [input,setInput] = useState( {
    Root: "F",
    Quality: "maj",
    Tension: "7",
    Bass:"",
  } )
    const {Root,Quality,Tension,Bass} = props;
    // const handleChange = (e) =>{
    //     props.handleChange(e)
    // }

    function handleChange(e){
      setInput({[e.target.name]:e.target.value})
      if(e.target.Bass === "None"){
        setInput(input.Bass = null)
      }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.handleSubmit(e.target.Root.value,e.target.Quality.value,e.target.Tension.value,e.target.Bass.value)
    }



    return(
    <div className = "chord-form">
            
    <form onSubmit = {handleSubmit}>
      <label>Root</label>
      <select id = "root" name = 'Root' value = {input.Root} onChange = {handleChange}>
        <option value = "C">C</option>
        <option value = "D">D</option>
        <option value = "E">E</option>
        <option value = "F">F</option>
        <option value = "G">G</option>
        <option value = "A">A</option>
        <option value = "B">B</option>
      </select>
      <label>Quality</label>
        <select id = "quality" name = 'Quality' value = {input.Quality} onChange = {handleChange} >
        <option value = ''>None</option>
          <option value = "maj">maj</option>
          <option value = "m">min</option>
          <option value = "dim">dim</option>
          <option value = "aug">aug</option>
        </select>
      <label>Tension</label>
        <select id = "Tension" name = 'Tension' value = {input.Tension} onChange = {handleChange}>
        <option value = ''>None</option>
          <option>7</option>
          <option value = "79">9</option>
          <option>11</option>
        </select>
      <label>Bass</label>
      <select id = "bass" name = 'Bass' value = {input.Bass} onChange = {handleChange}>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>A</option>
        <option>B</option>
        <option value = ''>None</option>
      </select>
      <input type = "submit" value = "submit" ></input>
    </form>
  </div>)
}