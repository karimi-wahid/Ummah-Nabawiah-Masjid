import './App.css';
import About from './components/about/About';
import Campaign from './components/campaign/Campaign';
import Donate from './components/donate/Donate';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Services from './components/srv/Services';

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Services />
     <Campaign />
     <Donate />
     <Footer/> 
    </>
  );
}

export default App;
