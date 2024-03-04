import logo from './assets/logo.svg';
import './pageone.css';
import './icons.css';
import './App.css'
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import Icons from './components/icons.js';
import gmail from './assets/gmail.svg';
import Buttons from './components/buttons.js';
import PageOne from './pageone.js';
import PageTwo from './pagetwo.js';
import PageThree from './pagethree.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageFour from './pagefour.js';
import Navbar from "./components/navbar.js"


function MainComponent() {
  // Optional: Use useLocation hook if you need to make decisions based on the current path
  const location = useLocation();

  return (
    <div>
      {/* Navbar can stay at the top level if it's common across all views */}
      {/* <Navbar /> */}
      {/* Render all your pages/components here. 
          You can also use location to conditionally render or modify behavior */}
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      {/* Add any other components you want to render on the main page */}
    </div>
  );
}

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        {/* Keeping these routes if you want direct navigation. 
            They will render the components without the MainComponent layout */}
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path='/pagefour' element={<PageFour />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

  // <PageOne />
  
//    <Router>

// <Route path="/pagetwo" element={<PageTwo />} />
//    </Router>
    /*
    <div className="App">
      <header className="App-header">
        <div className="buttonBody">
          <Buttons link="https://athletics.chabotcollege.edu/sports/bsb/2023-24/schedule" buttonname="About me"/>
          <Buttons link="https://athletics.chabotcollege.edu/sports/bsb/2023-24/schedule" buttonname="Pre-Berkeley"/>
          <Buttons link="https://athletics.chabotcollege.edu/sports/bsb/2023-24/schedule" buttonname="Courses & Clubs"/>
        </div>
        <div className="nameDes">
          <h1 className="Title">Dominic Charles</h1>
          <h3 className="Description">B.A - Applied Mathematics, Data Science concentration</h3>
          <div className="body">
            <p className="bodyText">Pursing Software engineering and Data Science to make strides toward developing projects that are specifically designed to help youth in communities that lack education and representation within professional spaces</p>
        </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <div className="bottomline">
        <div className='icons'>
          <Icons link="https://mail.google.com/mail/u/0/#inbox" img={gmail} className="singleIcon"/>
          <Icons link="http://www.linkedin.com/in/domcharles" img={linkedin} className="singleIcon"/>
          <Icons link="https://github.com/" img = {github} className="singleIcon"/>
          </div>
            <h2 className="number">(510) 316 - 4766</h2>
        </div>
      </header>
    </div>
    */


export default App;
