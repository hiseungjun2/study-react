import React, { useState } from 'react';
import Counter from './Counter'
import Info from './Info'
import Average from './Average'

const App = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <Counter /> */}
      {/* <Info /> */}
      <Average />
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Info />} */}
    </div>
  );
};

export default App;