import verbs from "../verb_database.json"
import { useState } from "react";
import { VerbAnswerBox } from "../components/VerbAnswerBox";
import Box from '@mui/material/Box';

export function VerbQuizzer(){
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [newVerbNumber, setNewVerbNumber] = useState(0)

  const presentIndicative = verbs.filter(verb => verb.mood === "Indicativo" && verb.tense === "Presente") 

  const onNextClicked = () => {
    const length = presentIndicative.length

    let foundRandomNumber = false
    let randomNumber;

    while(!foundRandomNumber){
      randomNumber = Math.floor(Math.random() * length)

      if(selectedNumbers.includes(randomNumber)){
        continue;
      }

      foundRandomNumber = true
    }

    setSelectedNumbers([...selectedNumbers, randomNumber])
    setNewVerbNumber(randomNumber)
  }


  const selectedVerb = presentIndicative[newVerbNumber]

  const verbForm = getSelectedVerbForm(selectedVerb)
  
  return (
    <Box 
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      className="flex flex-col items-center justify-center"
    >
      <VerbAnswerBox next={onNextClicked} selectedVerb={selectedVerb} verbForm={verbForm}/>
    </Box>
  )
}




function getSelectedVerbForm(selectedVerb){
  const num = Math.floor(Math.random() * (6 - 1 + 1) + 1)

  console.log(num)

  switch(num){
    case 1: 
      return {
        name: "yo",
        form: selectedVerb.form_1s
      }
    case 2: 
      return {
        name: "tú",
        form: selectedVerb.form_2s
      }    
    case 3: 
      return {
        name: "él/ella/usted",
        form: selectedVerb.form_3s
      }    
    case 4: 
      return {
        name: "nosotros/nosotras",
        form: selectedVerb.form_1p
      }    
    case 5: 
      return {
        name: "vosotros/vosotras",
        form: selectedVerb.form_2p
      }    
    case 6: 
      return {
        name: "ellos/ellas/ustedes",
        form: selectedVerb.form_3p
      }
    default: 
      return {
        name: "yo",
        form: selectedVerb.form_1s
      }
  }


}