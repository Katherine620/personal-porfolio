import logo from './logo.svg';
import './App.css';
import { HorizontalNavBar } from './components/HorizontalNavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HorizontalNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
