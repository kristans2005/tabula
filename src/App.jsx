import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Translation from './Translation';
import Questions from './Jautājumi/Questions';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Translation />} />
        <Route path="/jautajumi" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
