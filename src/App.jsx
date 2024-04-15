import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import dado1 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado1.png';
import dado2 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado2.png';
import dado3 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado3.png';
import dado4 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado4.png';
import dado5 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado5.png';
import dado6 from '/home/NewZayn02/vitejs-vite-bstnmb4/src/assets/dado6.png';

function App() {
  const imagens = [
    dado1,
    dado2,
    dado3,
    dado4,
    dado5,
    dado6,
    viteLogo
  ];

  const [index, setIndex] = useState(6); 
  const [index2, setIndex2] = useState(6); 
  const [suaVezPlayer1, setSuaVezPlayer1] = useState(false); 
  const [suaVezPlayer2, setSuaVezPlayer2] = useState(true); 
  const [Player1Jogou, setPlayer1Jogou] = useState(0);
  const [Player2Jogou, setPlayer2Jogou] = useState(0);
  const [player1Ganhou, setPlayer1Ganhou] = useState(0);
  const [player2Ganhou, setPlayer2Ganhou] = useState(0);
  const [eleGanhou, setEleGanhou] = useState(""); 
  const [rodada, setRodada] = useState(0); 
  const [girou, setGirou] = useState(0); 
  const [gameOver, setGameOver] = useState(false);

  const girarDado = () => {
    if (gameOver) return;
    setGirou(girou+1)

    if(suaVezPlayer1){
      setIndex(Math.floor(Math.random() * (imagens.length - 1 )));
      setPlayer1Jogou(Player1Jogou + 1);        
    }
    else if(suaVezPlayer2){
      setIndex2(Math.floor(Math.random() * (imagens.length - 1)));
      setPlayer2Jogou(Player2Jogou + 1);
    }
   
    suaVez();
  };

  const verificar=() =>{
    if(girou==2){
     setRodada(rodada + 1);        
     ganhou()
     setGirou(0)
    }
    if (rodada >= 5 || player1Ganhou >= 3 || player2Ganhou >= 3) {
      setGameOver(true);
    }
  }

  function suaVez() {
    if (suaVezPlayer1) {
      setSuaVezPlayer1(false); 
      setSuaVezPlayer2(true); 
    } else if(suaVezPlayer2){
      setSuaVezPlayer1(true); 
      setSuaVezPlayer2(false); 
    }
  }

  function ganhou(){
    if(index > index2  && Player1Jogou == Player2Jogou){
      setPlayer1Ganhou(player1Ganhou+1)
      if(player1Ganhou + 1 >= 3){
        setEleGanhou( "Player1 ganhou!")
      }
    }
    else if(index2 > index  && Player1Jogou == Player2Jogou){
      setPlayer2Ganhou(player2Ganhou+1)
      if(player2Ganhou + 1 >= 3){
        setEleGanhou( "Player2 ganhou!")
      }
    }
  }



  function resetGame() {
    setIndex(6);
    setIndex2(6);
    setSuaVezPlayer1(false);
    setSuaVezPlayer2(true);
    setPlayer1Jogou(0);
    setPlayer2Jogou(0);
    setPlayer1Ganhou(0);
    setPlayer2Ganhou(0);
    setEleGanhou("");
    setRodada(0);
    setGirou(0);
    setGameOver(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {gameOver && <button className="primeiro" onClick={resetGame}>Jogar Novamente</button>}
        <h1>rodada : {rodada}</h1>
        <h2>{eleGanhou}</h2>
        {!gameOver && <h2>{verificar()}</h2>}
        <h3>Placar</h3>
        <div id= "placar">
          <p id= "placar1"> Player1: {player1Ganhou}</p>
          <p id= "placar1"> Player2: {player2Ganhou}</p>
        </div>        
        <div id ="dados">
          <div id='img'>
            <img src={imagens[index]} />

          </div>

          <div id='img2'>
            <img src={imagens[index2]} />

          </div>
        </div>
        <div id='botoes'>
          <div>
            <button className="primary-button"onClick={girarDado}  disabled={suaVezPlayer1}>girar</button>

          </div>
          <div>
            <button  className="primary-button" onClick={girarDado}  disabled={suaVezPlayer2}>girar</button>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
