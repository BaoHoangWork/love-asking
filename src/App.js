import './App.css';
import { Fireworks } from 'fireworks-js'
import Option from './Option.js'
import tick from './tick.png'

function App() {

  const runFirework = () => {
    const yesButton= document.getElementById('answer-checkbox-yes');
    const noButton= document.getElementById('answer-checkbox-no');
    yesButton.style.backgroundImage = "url(" + tick + ")";
    yesButton.style.backgroundSize = "cover";   

    yesButton.setAttribute("disabled", true)
    yesButton.style.cursor = "default"
    noButton.setAttribute("disabled", true)
    noButton.style.cursor = "default"

    const container = document.querySelector('main')
    const fireworks = new Fireworks(container, {
      autoresize: false,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: {
        min: 50,
        max: 50
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      brightness: {
        min: 50,
        max: 80
      },
      decay: {
        min: 0.015,
        max: 0.03
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      }
    })

    // alert("Congratulation! You are now my girl and you cannot do anything beside clicking ok!")

    fireworks.start()
  }

  const runFromClick = () => {
    const noOption= document.getElementById('answer-no');
    
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    noOption.style.position = "absolute"

    noOption.style.top = getRandom(0, 500)+'px';
    noOption.style.left = getRandom(0, 1000)+'px';
  }

  return (
    <>
      <main>
        <h1>Will you be my forever love?</h1>
        <div className='options'>
          <Option answer="yes" click={runFirework} />
          <Option answer="no" click={runFromClick} />
        </div>
      </main>
    </>
  );
}

export default App;
