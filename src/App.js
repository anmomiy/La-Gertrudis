
import './App.css';
import Banner from './components/Banner/Banner';
import Galery from './components/Galery/Galery';
import Reviews from './components/Reviews/Reviews';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Reviews/>
      <Banner/>
      <Galery/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
