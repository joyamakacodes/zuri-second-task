import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element= {<Contact/>}/>
      </Routes>  
    </div>
  );
}

export default App;
