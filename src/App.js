
import './App.css';
import HeaderLogin from './components/Header/HeaderLogin/HeaderLogin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ModalLogin from './modals/ModalLogin/ModalLogin';
import LogisticContainer from './components/Main/LogisticContainer/LogisticContainer';
import RegisterUser from './components/Main/Users/Users/RegisterUser/RegisterUser';
import CreateUser from './components/Main/Users/Users/CreateSearchUser/CreateUser';
import CreatePerson from './components/Main/Users/Persons/CreatePerson/CreatePerson';
import RegisterPerson from './components/Main/Users/Persons/RegisterPerson/RegisterPerson';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <HeaderLogin/>
      <RegisterUser/>
      <CreateUser/>
      <RegisterPerson/>
      <CreatePerson/>
      <ModalLogin/>
        <Routes>
          
          <Route path = '/main' element={<LogisticContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
