import './App.css';

// Importando los componentes
import { FooterComp } from './components/FooterComp';
import { HeaderComp } from './components/HeaderComp';
import { NavComp } from './components/NavComp';

// Importando React Router
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importando las vistas
import { SobreMi } from './views/SobreMi';
import { Proyecto } from './views/Proyecto';
import { Habilidades } from './views/Habilidades';
import { Contacto } from './views/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header px-5">
          <HeaderComp />
        </header>
        <NavComp />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <FooterComp />
        </footer>
      </div>
    </Router>
  );
}

export default App;
