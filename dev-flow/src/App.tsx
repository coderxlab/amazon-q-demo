import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
