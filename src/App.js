import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import RegisterPageOne from './page/RegisterPageOne';
import RegisterPageTwo from './page/RegisterPageTwo';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/pageone' element={<RegisterPageOne/>}/>
          <Route path='/pagetwo' element={<RegisterPageTwo/>}/>
        </Routes>
        <Link to={"/"} element={<Dashboard/> }>Dashboard</Link>
    </div>
  );
}

export default App;
