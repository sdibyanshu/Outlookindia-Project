import logo from './logo.svg';
import './App.css';
import Navbarg from './Components/Navbar';
import Newsg from './Components/News';
import Allroutes from './Components/Allroutes';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <div className="App">
    
        <Navbarg/>
        <Allroutes/>
        <Newsg/> 
    </div>
  );
}

export default App;
