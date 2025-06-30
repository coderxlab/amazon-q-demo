import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
