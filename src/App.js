import logo from './logo.svg';
import './App.css';
import Greet from './Sample/Sample';
import Welcome from './Sample/welcome';
import Hello from './Sample/Hello';
function App() {
  return (
    <div className='App'>
      <Greet></Greet>
      <Welcome />
      <Hello />
    </div> 
  );
}

export default App;
