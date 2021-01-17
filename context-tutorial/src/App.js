import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color'

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox/>
      </div>
    </ColorProvider>
    // <ColorContext.Provider value={{ color : 'red' }}>
    //   <div>
    //     <ColorBox />
    //   </div>
    // </ColorContext.Provider>
  );
}

export default App;
