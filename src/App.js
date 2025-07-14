import logo from './logo.svg';
import './App.css';
import { DemoApp } from './Vercel/DemoApp';
import { DarkLightTheme } from './Theme_Toggle_App/DarkLightTheme';
import { ToDoListApp } from './To-Do_List/ToDoListApp';
import { Navigation } from './UserLoginSimulation/Navigation'
import { ComponentA } from './Shared_Counter/ComponentA';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserName } from './Jotai_Practice/UserName';
 import { UserDepartment } from './Jotai_Practice/UserDepartment';
 import { UserAge } from './Jotai_Practice/UserAge';
 import { UserEmail } from './Jotai_Practice/UserEmail';
 import { UserLocation } from './Jotai_Practice/UserLocation';
 import { Summary } from './Jotai_Practice/Summary';

function App() {
  return (
    // <DemoApp/>
    // <DarkLightTheme/>
    // <ToDoListApp/>
    // <Navigation/>
    // <ComponentA/>

    <BrowserRouter>
     <Routes>
        <Route path='/' element={<UserName/>}></Route>
        <Route path='/userdepartment' element={<UserDepartment/>}></Route>
        <Route path='/userage' element={<UserAge/>}></Route>
        <Route path='/useremail' element={<UserEmail/>}></Route>
        <Route path='/userlocation' element={<UserLocation/>}></Route>
        <Route path='/summary' element={<Summary/>}></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
