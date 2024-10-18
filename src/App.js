import logo from './logo.svg';
import './App.css';
import { HorizontalNavBar } from './components/HorizontalNavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HorizontalNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
