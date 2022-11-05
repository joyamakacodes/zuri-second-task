import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element= {<Contact/>}/>
      </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
