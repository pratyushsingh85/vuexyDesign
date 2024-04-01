import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import ECommerce from './pages/ECommerce';
import Academy from './pages/Academy';
import Logisticks from './pages/Logisticks';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          <Route path="/eCommerce" element={<ECommerce />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/logisticks" element={<Logisticks />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;