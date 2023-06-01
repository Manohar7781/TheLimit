import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login';
import '../src/App.css'
import Signup from './Components/Signup';
import Forgot_password from './Components/Forgot_password';
import Dashboard from './Components/Dashboard';
import Tasks from './Components/Tasks'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Forgot_password' element={<Forgot_password/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 