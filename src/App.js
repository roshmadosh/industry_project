import './App.scss';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import Header from './components/Header';




function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
        <Header/>
           <Routes>
            <Route path='/' element={<HomePage/>} />
            {/* <Route path='' element={} />
            <Route path='' element={} /> */}
           </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
