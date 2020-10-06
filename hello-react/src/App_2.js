import React from 'react';
import logo from './logo.svg';
import './App.css';

function App_2() {
  const name = "리액트";
  const testName = undefined;

  const style = {
    // background-color 와 같은 스타일은 카멜 표기볍으로 변경
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    /*
    오류
    <h1>리액트 안녕</h1>
    <h2>잘 되니?</h2>
    */

    /*
    잘됨
    <>
      <h1>{name} 안녕</h1>
      <h2>잘 되니?</h2>
    </>
    */
   
    /*
    조건 연산자
    <div>
      {name === '리액트' ? (
        <h1>리액트 입니다</h1>
      ) : (
        <h2>리액트가 아닙니다</h2>
      )}
    </div>
    */

    /*
    조건부 렌더링
    <div>
      {name === '리액트' && <h1>리액트 입니다..</h1>}
    </div>
    */

    /*
    testName = undefined; 일 경우
    return testName 은 오류
    */

    /*
    정상
    testName || '값이 undefined 입니다'
    */

    /*
    정상
    <div>
      {testName}
    </div>
    */

    /*
    정상
    <div>
      {testName || '리액트 undefined 일 수도'}
    </div>
    */

    /*
    스타일 적용
    <div style={style}>
      {name}
    </div>
    */

    /*
    스타일 인라인 적용
    <div style={
      {
        // background-color 와 같은 스타일은 카멜 표기볍으로 변경
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : 16
      }
    }>
      {name}
    </div>
    */

    /*
    스타일 클래스 적용
    <div className="react">
      {name}
    </div>
    */

    /*
    태그를 안닫았기 때문에 에러
    <div className="react">
      {name}
      <input>
    </div>
    */

    /*
    정상
    <div className="react">
      {name}
      <input />
    </div>
    */

    <>
      {/* 주석 적용중 */}
      <div className="react"  // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있음.
      >
        {name}
        // 하지만 이런주석이나
        /* 이런 건 표시가 됨 */
      </div>
    </>
    

  );
}

export default App_2;
