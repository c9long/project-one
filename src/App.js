import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/tour';

function App() {
  return (
    <>
      <SearchAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Tour />} />
      </Routes>
    </>
  );
}

export default App;
