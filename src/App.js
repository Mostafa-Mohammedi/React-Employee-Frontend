import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomePage from './layout/HomePage';
import AddEmployee from './Employee/AddEmployee';
import EditEmployee from './Employee/EditEmployee';
import ViewEmployee from './Employee/ViewEmployee';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route exact path='/addEmployee' element={<AddEmployee/>}/>
          <Route exact path='/editEmployee/:id' element={<EditEmployee/>}/>
          <Route exact path='/viewEmployee/:id' element={<ViewEmployee/>}/>


        </Routes>

      </Router> 
      <Footer/>
    </div>
  );
}

export default App;
