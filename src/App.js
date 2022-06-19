import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import ChordForm from './Components/ChordForm';
import Diagram from './Components/Diagram';
function App() {
  const [chord,setChord] = useState(" ");
  const [input,setInput] = useState( {
    Root: "F",
    Quality: "maj",
    Tension: "7",
    Bass:"",
  } )
  const [loading,setLoading] = useState(false)
  const [stringNum,setStringNum] = useState([1,2,3,4,5,6])
  const [frets,setFrets] = useState('')
  // useEffect(()=>{
  //   fetchChord(input.Root,input.Quality,input.Tension)
    
  // },[])

  
  async function fetchChord(Root,Quality){
    const chord = await fetch(`https://api.uberchord.com/v1/chords/${Root}_${Quality}`);
    const data = await chord.json();
    setFrets(data[0].strings)
    setChord(data)
    setLoading(true)
    return data;
    
  }
  // function handleChange(e){
  //   setInput({[e.target.name]:e.target.value})
  //   if(e.target.Bass === "None"){
  //     setInput(input.Bass = null)
  //   }
  // }
  function handleSubmit(Root,Quality,Tension,Bass){
    fetchChord(Root,Quality)

  }


  return (
    <div className="App">
          <div className = "chord-diagram">
          <h1>Chord name:{chord[0].chordName.replaceAll(',','')}</h1>
          <h1>Tones: {chord[0].tones}</h1>
          </div>
        <Diagram frets = {frets} stringNum = {stringNum}/> 
        <div className = "chord-finder">
        <ChordForm
         Root = {input.Root}
         Quality = {input.Quality}
         Tension = {input.Tension}
         Bass = {input.Bass}
         handleSubmit = {handleSubmit}
        />


        </div>
    </div>
  );
}

export default App;
