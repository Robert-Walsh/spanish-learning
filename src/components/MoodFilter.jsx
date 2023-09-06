import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

export function MoodFilter({ onCheckboxClicked, selectedMoods }){
  return (
    <>
      <Box 
        component="span"
        sx={{ display: 'inline-block' }}
        className="flex flex-col items-center justify-center"
      >
        <div>
          Indicativo Presente
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Presente", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Presente").length > 0}
          />
        </div>

        <div>
          Indicativo Futuro
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Futuro", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Futuro").length > 0}
          />
        </div>

        <div>
          Indicativo Imperfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Imperfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Imperfecto").length > 0}
          />
        </div>

        <div>
          Imperativo Pretérito
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Pretérito", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Pretérito").length > 0}
          />
        </div>

        <div>
          Indicativo Condicional
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Condicional", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Condicional").length > 0}
          />
        </div>

        <div>
          Indicativo Presente perfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Presente perfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Presente perfecto").length > 0}
          />
        </div>
      </Box>

      <Box 
        component="span"
        sx={{ display: 'inline-block' }}
        className="flex flex-col items-center justify-center"
      >
        <div>
          Indicativo Futuro perfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Futuro perfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Futuro perfecto").length > 0}
          />
        </div>
        
        <div>
          Indicativo Pluscuamperfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Pluscuamperfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Pluscuamperfecto").length > 0}
          />
        </div>

        <div>
          Indicativo Pretérito anterior
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Pretérito anterior", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Pretérito anterior").length > 0}
          />
        </div>

        <div>
          Indicativo Condicional perfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Indicativo", tense: "Condicional perfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Indicativo" && moodObj.tense === "Condicional perfecto").length > 0}
          />
        </div>

        <div>
          Subjuntivo Presente
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Presente", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Presente").length > 0}
          />
        </div>

        <div>
          Subjuntivo Imperfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Imperfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Imperfecto").length > 0}
          />
        </div>
      </Box>

      <Box 
        component="span"
        sx={{ display: 'inline-block'}}
        className="flex flex-col items-center justify-center"
      >
        <div>
          Subjuntivo Futuro
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Futuro", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Futuro").length > 0}
          />
        </div>

        <div>
          Subjuntivo Presente perfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Presente perfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Presente perfecto").length > 0}
          />
        </div>

        <div>
          Subjuntivo Futuro perfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Futuro perfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Futuro perfecto").length > 0}
          />
        </div>

        <div>
          Subjuntivo Pluscuamperfecto
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Subjuntivo", tense: "Pluscuamperfecto", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Subjuntivo" && moodObj.tense === "Pluscuamperfecto").length > 0}
          />
        </div>

        <div>
          Imperativo Afirmativo Presente
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Imperativo", tense: "Afirmativo Presente", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Imperativo" && moodObj.tense === "Afirmativo Presente").length > 0}
          />
        </div>
        
        <div>
          Imperativo Negativo Presente
          <Checkbox 
            onClick={(e) => onCheckboxClicked({mood: "Imperativo", tense: "Negativo Presente", checked: e.target.checked})}
            checked={selectedMoods.filter(moodObj => moodObj.mood === "Imperativo" && moodObj.tense === "Negativo Presente").length > 0}
          />
        </div>
      </Box>
    </>
      
  )
}