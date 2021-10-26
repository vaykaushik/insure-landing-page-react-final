// Components Components

import Header from './components/Header/Header';

import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';

import Footer from './components/Footer/Footer';

// Main Stylesheet

import './sass/modules/styles.scss';

function App() {
  return (
    <>
      <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
      <Footer/>
    </>
  );
}

export default App;
