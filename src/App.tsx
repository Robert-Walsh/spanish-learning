import './App.css';
import { VerbQuizzer } from './pages/VerbQuizzer';

function App() {
  return (
    <div className="h-screen place-items-center bg-orange-100 flex flex-col justify-center">
      <img src={'/spanishVerbQuizzer.png'} alt="QuizNinja Logo"/>
      <VerbQuizzer/>
    </div>
  );
}

export default App;
