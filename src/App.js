import './App.scss';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home';
import Form from './pages/Form/Form';
import Form2 from './pages/Form/Form2';
import Form3 from './pages/Form/Form3';
import Conclusion from './pages/conclusion/Conclusion'
// import Header from './components/Header';




function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
        {/* <Header/> */}
           <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/form1' element={<Form/>} />
            <Route path='/form2' element={<Form2/>} />
            <Route path='/form3' element={<Form3/>} />
            <Route path='/result' element />
            <Route path='/conclusion' element={<Conclusion/>} />
           </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
