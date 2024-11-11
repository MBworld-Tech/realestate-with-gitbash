import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import OurValue from "./components/Our Value/OurValue";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/Get Started/GetStarted";

import './App.css'
import Footer from "./components/Footer/Footer";






function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <OurValue />
      <Contact />
      <GetStarted />
      <Footer />

    </div>
  );
}

export default App;
