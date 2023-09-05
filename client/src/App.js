import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateWorkout from './pages/createnewworkout/CreateWorkout';
import CreateNewProduct from './pages/createnewProduct/CreateNewProduct';
function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/creatneworkout' element={<CreateWorkout/>}/>
            <Route path='/createnewproduct' element={<CreateNewProduct/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
