import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App () {

  const [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
  const [따봉, 따봉변경] = useState(0);

  function sortAlphabetically() {
    const newTitle = [...title].sort(function(a,b){
      return a.localeCompare(b);
    });
    setTitle(newTitle);
  
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}> 개발 Blog</div>
      </div>
      <button onClick={sortAlphabetically}>변경</button>
      <div className="list">
        <h1>
          {title[0]}
          <span
            onClick={() => {따봉변경(따봉 + 1)}} >♡ </span>
          {따봉}
        </h1>
        <p>5월 18일 발행</p>
        <div className="bold-line"></div>
      </div>
      <div className="list">
        <h1> {title[1]} </h1>
        <p>5월 18일 발행</p>
        <div className="bold-line"></div>
      </div>
      <div className="list">
        <h1>제목 </h1>
        <p>5월 18일 발행</p>
        <div className="bold-line"></div>
      </div>
      <Modal />
      <Modal />
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;