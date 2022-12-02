import './App.scss';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home';
import Header from './components/Header';




function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
        <Header/>
           <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/form1' element />
            <Route path='/form2' element />
            <Route path='/form3' element />
            <Route path='/result' element />
           </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
