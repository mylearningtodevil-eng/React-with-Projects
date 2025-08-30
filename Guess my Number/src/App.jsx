import { useState} from "react"
function App() {
  let [randomNumber,setRandomNumber] = useState(()=>Math.trunc(Math.random()*20)+1)
  let [guesText,setGuessText] = useState('Guess My Number!');
  let [number,setNumber] = useState('?')
  let [paragraph,setParagraph] = useState('Start Guessing...');
  let [inputValue,setInputValue] = useState('');
  let [score,setScore] = useState(20)
  let [highScore,setHighScore] = useState(0);
  let [playing, setPlaying] = useState(true);
  const checkNumber = function (){
    if(playing){
    console.log('Playing is running');
    console.log(randomNumber);
    
    if(Number(inputValue)<randomNumber){
      setParagraph('Too Low');
      setScore(score-1)
    }
    else if(Number(inputValue)>randomNumber){
      setParagraph('Too High');
      setScore(score-1)
    }
    if(inputValue===''){
      setParagraph('No Number')
      setScore(score-1);
    }
    if(score<=1) {
      document.body.style.background = 'red';
      setGuessText('Game Over');
      setPlaying(false)
    }
    else if(Number(inputValue)===randomNumber){
      setNumber(randomNumber);
      setHighScore(randomNumber);
      setParagraph('Correct Number');
      setPlaying(false)
      document.body.style.background = 'green';
    }
    }
  }
  const playAgain = function (){
    setRandomNumber(()=>Math.trunc(Math.random()*20)+1);
    setInputValue('');
    setParagraph('Start guessing...');
    setGuessText("Guess My Number!");
    setNumber('?');
    setScore(20);
    setHighScore(0);    
    setPlaying(true);
    document.body.style.background = '#222'
  }
  return (
    <>
    <header>
      <h1>{guesText}</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={()=>{
        playAgain()
      }}>Again!</button>
      <div className="number">{number}</div>
    </header>
    <main>
      <section className="left">
        <input type="number" className="guess" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button className="btn check" onClick={()=>{
          checkNumber()
        }}>Check!</button>
      </section>
      <section className="right">
        <p className="message">{paragraph}</p>
        <p className="label-score">💯 Score: <span className="score">{score}</span></p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highScore}</span>
        </p>
      </section>
    </main>
    </>
  )
}

export default App
