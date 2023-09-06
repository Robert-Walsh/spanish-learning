import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export function VerbAnswerBox({next, selectedVerb, verbForm}){
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)

  const { infinitive, infinitive_english, mood, tense } = selectedVerb

  const onNextClicked = (e) => {
    e.preventDefault()
    setAnswer("")
    setCorrect(false)
    setAnswered(false)
    next()
  }

  const onChange = (e) => {
    setAnswer(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const correct = verbForm.form.toLowerCase() === answer.toLowerCase()

    setAnswered(true)
    setCorrect(correct)
  }

  const check = () => {
    const correct = verbForm.form.toLowerCase() === answer.toLowerCase()

    setAnswered(true)
    setCorrect(correct)
  }

  return (
    <Card className="place-items-center flex flex-col justify-center w-96 min-w-96 max-w-96 h-72 min-h-72 max-h-72">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom className="place-items-center flex flex-col justify-center"> 
          What is the "{mood} {tense}" {verbForm.name} form of {infinitive}?
        </Typography>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={!answered ? onSubmit : onNextClicked}
          className="place-items-center flex flex-col justify-center"
        >
          <TextField id="outlined-basic" label="Answer here" variant="outlined" value={answer} onChange={onChange}/>
        </Box>

        {answered && 
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom className="place-items-center flex flex-col justify-center"
          >
            {correct && <>You answered correctly!</>}
            {!correct && <>You answered incorrect, the correct answer is: <b>{verbForm.form}</b></>}
            <br/> 
            It means "{infinitive_english}"
          </Typography>
        }
      </CardContent>
      <CardActions>
          <div>
            <Button onClick={check}>Check</Button>
          </div>

          {answered && 
            <Box component="form" onSubmit={onNextClicked}>
              <Button onClick={onNextClicked}>Next</Button>
            </Box>
          }
        </CardActions>
    </Card>
    
  )
}
