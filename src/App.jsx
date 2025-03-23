import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
