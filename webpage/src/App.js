import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './Main.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Validation from './Validation.js'
import ErrorPage from './ErrorPage';
import { BuyLand } from './BuyLand';
import NavBar from './NavBar';


export default function App() {
  return (
    <div className="backgroundColor">
    <Router> 
      <Routes>
        <Route path="/validation/:id" element={<Validation/>}/>
        <Route path="/buyland" element={<BuyLand/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<Main/>}/>
     </Routes>
    </Router>
    </div>
  );
}

