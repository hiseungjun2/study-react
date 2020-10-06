import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import Counter from './Counter'
// import Say from './Say'
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import ScrollBox from './ScrollBox'
// import IterationSample from './IterationSample'
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// const App = () => {
//   return (
//     // <MyComponent name={3}>리액트</MyComponent>
//     // <Counter></Counter>
//     // <Say></Say>
//     // <EventPractice></EventPractice>
//     <ValidationSample />
//   )
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }

  handleClick = (e) => {
    this.setState({
      color : getRandomColor()
    })
  }

  render() {
    return (
      // <ValidationSample/>

      // <div>
      //   <ScrollBox
      //     ref={
      //       (ref) => {
      //         this.scrollBox = ref
      //       }
      //     }
      //   />
      //   <button
      //     onClick={
      //       () => {
      //         this.scrollBox.scrollToBottom()
      //       }
      //     }
      //   >맨밑으로</button>
      // </div>

      // <IterationSample />

      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;