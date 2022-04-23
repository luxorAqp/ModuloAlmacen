
import './App.css';
import HeaderLogin from './components/Header/HeaderLogin/HeaderLogin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ModalLogin from './modals/ModalLogin/ModalLogin';
import LogisticContainer from './components/Main/LogisticContainer/LogisticContainer';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <HeaderLogin/>
        <Routes>
          
          <Route path = '/main' element={<LogisticContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
