import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {SliderData} from "./data/SliderData"
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import InfoSection from './components/InfoSection';
import {InfoDataOne} from "./data/InfoData"
function App() {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle = {toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataOne} />
    </>
  );
}

export default App;
