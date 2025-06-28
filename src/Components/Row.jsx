import react, { useState, useRef } from 'react';
import './row.css'
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';

const Row = () => {

  const music = new Audio('src/assets/mouse-click-331781.mp3');
  const winningMusic = new Audio('src/assets/winning-218995.mp3');
  const [one,setOne]=useState(0);
  const [two,setTwo]=useState(0);

  const musicOn = () => {
    music.currentTime = 0;
    music.play();
    setTimeout(() => {
      music.pause();
    }, 1000)
  }

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setP(0);
    titleRef.current.innerHTML = '';

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.innerHTML = '';
    });
  };

  const imageArray = [circle, cross];
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [image, setImage] = useState(0);
  const [p, setP] = useState(0);

  function win1(board) {
    if (board[0] === board[1] && board[1] === board[2] && board[0] === "X") return true;
    if (board[3] === board[4] && board[4] === board[5] && board[3] === "X") return true;
    if (board[6] === board[7] && board[7] === board[8] && board[6] === "X") return true;
    if (board[0] === board[3] && board[3] === board[6] && board[0] === "X") return true;
    if (board[1] === board[4] && board[4] === board[7] && board[1] === "X") return true;
    if (board[2] === board[5] && board[5] === board[8] && board[2] === "X") return true;
    if (board[0] === board[4] && board[4] === board[8] && board[0] === "X") return true;
    if (board[2] === board[4] && board[4] === board[6] && board[2] === "X") return true;

    return false;
  }

  function win2(board) {
    if (board[0] === board[1] && board[1] === board[2] && board[0] === "O") return true;
    if (board[3] === board[4] && board[4] === board[5] && board[3] === "O") return true;
    if (board[6] === board[7] && board[7] === board[8] && board[6] === "O") return true;
    if (board[0] === board[3] && board[3] === board[6] && board[0] === "O") return true;
    if (board[1] === board[4] && board[4] === board[7] && board[1] === "O") return true;
    if (board[2] === board[5] && board[5] === board[8] && board[2] === "O") return true;
    if (board[0] === board[4] && board[4] === board[8] && board[0] === "O") return true;
    if (board[2] === board[4] && board[4] === board[6] && board[2] === "O") return true;

    return false;
  }

  function toggle(e, id) {
    if (p % 2 == 0) {
      setImage(p);
      e.target.innerHTML = `<img src='${imageArray[0]}'>`
      setP(prevP => prevP + 1);
      data[id] = "X";
      musicOn();
    } else {
      setImage(p);
      e.target.innerHTML = `<img src='${imageArray[1]}'>`
      setP(prevP => prevP - 1);
      data[id] = "O";
      musicOn();
    }

    if (win1(data)) {
      titleRef2.current.innerHTML = `Congratulation player <img src='${imageArray[0]}'> wins`;
      winningMusic.play();
      setOne(prevOne=>prevOne+1);
      setTimeout(() => {
        winningMusic.pause();
        winningMusic.currentTime = 0;
        resetGame();
        titleRef2.current.innerHTML = `Welcome To TicTAcToe Game <span>By React</span>`
      }, 3000);
    }

    if (win2(data)) {
      titleRef2.current.innerHTML = `Congratulation player <img src='${imageArray[1]}'> wins`
      winningMusic.play();
      setTwo(prevTwo=>prevTwo+1);
      setTimeout(() => {
        winningMusic.pause();
        winningMusic.currentTime = 0;
        titleRef2.current.innerHTML = `Welcome To TicTAcToe Game <span>By React</span>`
        resetGame();
      }, 3000)
    }

    scoreRef2.current.innerHTML=two;
    scoreRef1.current.innerHTML=one;

    console.log(data)
    console.log(p)
  }

  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const scoreRef1 = useRef(null);
  const scoreRef2 = useRef(null);

  return (
    <div className='gamescreen'>

      <div className="sco1">{one}</div>
      <div className="sco2">{two}</div>


      <div className='Head' ref={titleRef2}>
        Welcome To TicTAcToe Game <span>By React</span>
      </div>

      <div className="board">
        <div className="row1">
          <div className='box' ref={titleRef} id="box11" onClick={(e) => toggle(e, 0)}></div>
          <div className='box' ref={titleRef} id="box12" onClick={(e) => toggle(e, 1)}></div>
          <div className='box' ref={titleRef} id="box13" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className='box' ref={titleRef} id="box21" onClick={(e) => toggle(e, 3)}></div>
          <div className='box' ref={titleRef} id="box22" onClick={(e) => toggle(e, 4)}></div>
          <div className='box' ref={titleRef} id="box23" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className='box' ref={titleRef} id="box31" onClick={(e) => toggle(e, 6)}></div>
          <div className='box' ref={titleRef} id="box32" onClick={(e) => toggle(e, 7)}></div>
          <div className='box' ref={titleRef} id="box33" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <div id="reset" onClick={() => {
        window.location.reload();
      }}>Reset</div>

    </div>
  )
}

export default Row;
