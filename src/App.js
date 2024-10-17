import logo from './logo.svg';
import './App.css';
import { HorizontalNavBar } from './components/HorizontalNavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HorizontalNavBar />
      <Banner />
    </div>
  );
}

export default App;
