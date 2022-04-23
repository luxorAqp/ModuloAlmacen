
import './App.css';
import HeaderLogin from './components/Header/HeaderLogin/HeaderLogin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ModalLogin from './modals/ModalLogin/ModalLogin';
import LogisticContainer from './components/Main/LogisticContainer/LogisticContainer';
import RegisterUser from './components/Main/Users/Users/RegisterUser/RegisterUser';
import CreateUser from './components/Main/Users/Users/CreateSearchUser/CreateUser';
import CreatePerson from './components/Main/Users/Persons/CreatePerson/CreatePerson';
import RegisterPerson from './components/Main/Users/Persons/RegisterPerson/RegisterPerson';
import RegisterStore from './components/Main/Store/RegisterStore/RegisterStore';
import RegisterPerPro from './components/Main/Products/PersonalProducts/RegisterPerPro/RegisterPerPro';
import RegisterRawMat from './components/Main/Products/RawMaterial/RegisterRawMat/RegisterRawMat';
import ToPerson from './components/Main/AssingProduct/ToPerson/ToPerson';
import DetailToStore from './components/Main/AssingProduct/ToStore/DetailToStore/DetailToStore';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <ModalLogin/>
        <HeaderLogin/>
        <RegisterUser/>
        <CreateUser/>
        <RegisterPerson/>
        <CreatePerson/>
        <RegisterStore/>
        <RegisterPerPro/>
        <RegisterRawMat/>
        <ToPerson/>
        <DetailToStore/>
        <Routes>
          
          <Route path = '/main' element={<LogisticContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
