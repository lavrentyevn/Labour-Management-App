import logo from './logo.svg';
import './App.css';
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
        <div>
            <Router>
                <Header />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ListEmployees/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/create-employee" element={<CreateEmployee/>}/>
                            <Route path="/update-employee/:id" element={<UpdateEmployee/>}/>
                            <Route path="/view-employee/:id" element={<ViewEmployee/>}/>
                        </Routes>
                    </div>
                <Footer />
           </Router>
        </div>
  );
}

export default App;
