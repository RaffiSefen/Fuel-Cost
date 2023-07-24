import logo from './logo.svg';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <div className="App-Body" >
   <CalculatorPage></CalculatorPage>
      </div>

      </header>
    </div>
    
  )
}

export default App;
