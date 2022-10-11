import './App.css';
import Home from './pages/home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/tour';

function App() {
  return (
    <HashRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/project-one/" element={<Home />} />
        <Route path="/project-one/:id" element={<Tour />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
