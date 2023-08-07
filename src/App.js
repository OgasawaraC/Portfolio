import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { NavBar } from "./assets/components/NavBar";
import { Banner } from "./assets/components/Banner";
import { Skills } from "./assets/components/Skills";
import { Projects } from "./assets/components/Projects";
import { Contact } from "./assets/components/Contact";
import { Footer } from './assets/components/Footer';

function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
