import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from './Components/Mathoperators';
import B from './Components/Profitorloss';
import C from './Components/Electricitybillcalculator';
import D from './Components/Salarytaxcalculator';
import E from './Components/Arrayandmap';
import F from './Components/String';
import G from './Components/Task';
import H from './Components/Propss/Parent';
import I from './Components/Propss/Students';
import J from './Components/Propss/Departsment';
import K from './Components/Anagram';
import L from './Components/Usestatecomp/Parent';
import M from './Components/Usestatecomp/Child1';
import System from './Components/Librarymanagement/System';
import Stonepaper from './Components/Stonepaper';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moviemain from './Components/Usestatecomp/Movie/Moviemain';
import FormValidation from './Components/FormValidation';
function App() {
  return (
    <div>
      {/* <A/>  
      <B/>
      <C/>
      <D/>
      <E/>
      <F/>
      <G/>
      <H/>
      <I/>
      <J/> 
      <K/>
      <M/>
      <L/>
      <System/>*/}
     
     
       <BrowserRouter>
             <Navbar />

      <Routes>
        <Route path='' element={<B />} />
        <Route path='/game' element={ <Stonepaper />} />
        <Route path='/Electricitybillcalculator' element={<C />} />
        <Route path='/Salarytaxcalculator' element={<D />} />
        <Route path='/Librarymanagement' element={<System />} />
        <Route path='/Moviemanagement' element={<Moviemain/>} />
        <Route path='/FormValidation' element={<FormValidation/>} />
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
