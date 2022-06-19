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

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.handleSubmit(e.target.Root.value,e.target.Quality.value)
    }



    return(
    <div className = "chord-form">
    <form onSubmit = {handleSubmit}>
      <label>Root</label>
      <select id = "root" name = 'Root' value = {input.Root} onChange = {handleChange}>
        <option value = "C">C</option>
        <option value = "Db">Db</option>
        <option value = "D">D</option>
        <option value = "Eb">Eb</option>
        <option value = "E">E</option>
        <option value = "F">F</option>
        <option value = "Gb">Gb</option>
        <option value = "G">G</option>
        <option value = "Ab">Ab</option>
        <option value = "A">A</option>
        <option value = "Bb">Bb</option>
        <option value = "B">B</option>
      </select>
      <label>Quality</label>
        <select id = "quality" name = 'Quality' value = {input.Quality} onChange = {handleChange} >
        <option value = ''>Maj</option>
          <option value = "maj7">Maj7</option>
          <option value = "m">min</option>
          <option value = "m7">min7</option>
          <option value = "dim">dim</option>
          <option value = "aug">aug</option>
          <option value = "sus4">Sus4</option>
          <option value = "sus5">Sus5</option>
          <option value = "7">7</option>
          <option value = "79">9</option>
          <option value = "11">11</option>
          <option value = "add9">add9</option>



        </select>
      {/* <label>Tension</label>
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
      </select> */}
      <input type = "submit" value = "submit" ></input>
    </form>
  </div>)
}