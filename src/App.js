import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/tour';

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/project-one/" element={<Home />} />
        <Route path="/project-one/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
