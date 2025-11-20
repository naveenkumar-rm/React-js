import Mathoperators from './Components/Mathoperators';
import Profitorloss from './Components/Profitorloss';
import Electricitybillcalculator from './Components/Electricitybillcalculator';
import Salarytaxcalculator from './Components/Salarytaxcalculator';
import Arrayandmap from './Components/Arrayandmap';
import String from './Components/String';
import Task from './Components/Task';
import Parent from './Components/Propss/Parent';
import Students from './Components/Propss/Students';
import Department from './Components/Propss/Departsment';
import Anagram from './Components/Anagram';
import UsestateParent from './Components/Usestatecomp/Parent';
import UsestateChild from './Components/Usestatecomp/Child1';
import Librarymanagement from './Components/Librarymanagement/System';
import Stonepaper from './Components/Stonepaper';
import Moviemain from './Components/Usestatecomp/Movie/Moviemain';
import FormValidation from './Components/Form/FormValidation';
import Userprint from './Components/Form/Userprint';
import Marksheet from './Components/Marksheet';
import NavLink from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
  <NavLink/>

  <Routes>
    <Route path='' element={<Profitorloss />} />
    <Route path='/game' element={<Stonepaper />} />
    <Route path='/Electricitybillcalculator' element={<Electricitybillcalculator />} />
    <Route path='/Salarytaxcalculator' element={<Salarytaxcalculator />} />
    <Route path='/Librarymanagement' element={<Librarymanagement />} />
    <Route path='/Moviemanagement' element={<Moviemain />} />
    <Route path='/FormValidation' element={<FormValidation />} />
    <Route path='/Userprint' element={<Userprint />} />
    <Route path='/Marklist' element={<Marksheet />} />

    {/* Basic Components */}
    <Route path='/Mathoperators' element={<Mathoperators />} />
    <Route path='/Arrayandmap' element={<Arrayandmap />} />
    <Route path='/String' element={<String />} />
    <Route path='/Task' element={<Task />} />

    {/* Props Examples */}
    <Route path='/PropsParent' element={<Parent />} />
    <Route path='/PropsStudents' element={<Students />} />
    <Route path='/Department' element={<Department />} />

    {/* Anagram */}
    <Route path='/Anagram' element={<Anagram />} />


    <Route path='/UsestateParent' element={<UsestateParent />} />
    <Route path='/UsestateChild' element={<UsestateChild />} />

  </Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
