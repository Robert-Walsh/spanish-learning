import verbs from "../verb_database.json"
import { useState } from "react";
import { VerbAnswerBox } from "../components/VerbAnswerBox";
import { MoodFilter } from "../components/MoodFilter";
import Box from '@mui/material/Box';

export function VerbQuizzer(){
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [newVerbNumber, setNewVerbNumber] = useState(-1)
  const [selectedMoods, setSelectedMoods] = useState([{ mood: "Indicativo", tense: "Presente", checked: true }])

  const verbsToQuiz = verbs.filter(verb => {
    for(var i=0; i<selectedMoods.length; i++){
      if(selectedMoods[i].mood === verb.mood && selectedMoods[i].tense === verb.tense){
        return true
      }
    }
    return false
  }) 

  const onNextClicked = () => {
    const length = verbsToQuiz.length

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


  const onCheckboxClicked = (data) => {
    if(data.checked){
      setSelectedMoods([...selectedMoods, data])
    }

    else {
      const newSelectedMoods = selectedMoods.filter((obj) => !(obj.tense === data.tense && obj.mood === data.mood))

      if(newSelectedMoods.length > 0){
        setSelectedMoods(newSelectedMoods)
      }
    }

  }


  let selectedVerb = verbsToQuiz[newVerbNumber]

  if(newVerbNumber === -1){
    const length = verbsToQuiz.length

    selectedVerb = verbsToQuiz[Math.floor(Math.random() * length)]
  }

  const verbForm = getSelectedVerbForm(selectedVerb)
  
  return (
    <>
      <Box 
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        className="flex flex-col items-center justify-center"
      >
        <VerbAnswerBox next={onNextClicked} selectedVerb={selectedVerb} verbForm={verbForm}/>
      </Box>

      <Box 
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        className="flex flex-col items-center justify-center"
      >
        <MoodFilter onCheckboxClicked={onCheckboxClicked} selectedMoods={selectedMoods}/>
      </Box>
    </>

  )
}




function getSelectedVerbForm(selectedVerb){
  const num = Math.floor(Math.random() * (6 - 1 + 1) + 1)

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