import { useEffect, useState } from "react"
import './App.css'

const App = () => {
  const image = '/images/hand.png'

  const [userState, setuserState] = useState(null)
  const [computerState, setcomputerState] = useState(null)
  const [result, setResult] = useState("Let's Play")
  const [imageState, setImageState] = useState(image)
  const choices = ['Rock', 'Paper', 'Scissor']
  const handleClick = (value) => {
    setuserState(value)
    if (value === 'Rock') {
      setImageState('./images/rock.png')
    }
    else if (value === 'Paper') {
      setImageState('/images/hand.png')
    }
    else {
      setImageState('./images/scissor.png')
    }
    generateRandomChoice()
  }


  const generateRandomChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setcomputerState(randomChoice)
  }

  useEffect(() => { // eslint-disable-next-line
    switch (userState + computerState) {
      case 'ScissorPaper':
      case 'RockScissor':
      case 'PaperRock':
        setResult("You Win!!! Let's play again.")
        break
      case 'PaperScissor':
      case 'ScissorRock':
      case 'RockPaper':
        setResult("You Lose!!! Let's play again.")
        break
      case 'PaperPaper':
      case 'ScissorScissor':
      case 'RockRock':
        setResult("Draw!!!! Let's play again.")
        break
    }
  }, [userState, computerState])


  return (
    <div className="home">
      <div className="navbar">
        <h1> ROCK-PAPER-SCISSORS </h1>
      </div>
      <div className="home-container">
        <div className="result">
          <h1> {result} </h1>
        </div>
        <div className="game">
          <div className="home-player">
            <div className="player-img">
              <img src={imageState} alt={userState} ></img>
            </div>
            <div className="player-choices">
              <h1>Choose one :</h1>
              <div className="btn">
                {
                  choices.map((choice) =>
                    <button onClick={() => handleClick(choice)}>{choice}</button>
                  )
                }
              </div>
            </div>
          </div>
          <div className="home-computer">
            <div className="computer-img">
              <img src="/images/robot.png" alt="robot"></img>
            </div>
            <div className="computer-choice">
              <h1>Computer's Choice : {computerState}</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App