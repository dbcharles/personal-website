import logo from './assets/logo.svg';
import './pageone.css';
import './icons.css';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import Icons from './components/icons.js';
import gmail from './assets/gmail.svg';
import Buttons from './components/buttons.js';
import Profile from './assets/profile.svg'
import PageTwo from './pagetwo.js';
import { Link } from 'react-router-dom';
import Pose from './assets/pose.svg';
import PageFour from './pagefour.js';
import React from "react";


function PageOne() {
    return (
        <div className="App">
        <header className="App-header">
          <div className='bs'>
            <div className="nameDes">
              <div className='beginning'>
                <div className='bandt'>
                <h1 className="Title">Dominic Charles</h1>
                <div className='buttonBody'>
              
              
                  {/* <Buttons link='pagetwo.js' buttonname="About me"/> */}
                  </div>
                </div>
                <h3 className="Description">B.A - Applied Mathematics, Data Science concentration</h3>
              </div>
                <div /*className='centerchunk'*/>
                  <div /*className="body"*/ className='roni'>
                    <p className="bodyText">Throughout my pursuit of Software Engineering and Data Science, I have developed a passion for exploring the vast opportunites stem provides. With experience I hope to introduce the world of stem to those who come from situations similar to my own.</p>
                    
                  </div>

                </div>
            <div className="bottomline">
              <div className='iconsbox'>
                <Icons link="https://mail.google.com/mail/u/0/#inbox" img={gmail} className="singleIcon"/>
                <Icons link="http://www.linkedin.com/in/domcharles" img={linkedin} className="singleIcon"/>
                <Icons link="https://github.com/" img = {github} className="singleIcon"/>
                </div>
                <div className='phonebox'>
                  <h2 className="number">(510) 316 - 4766</h2>
                </div>
            </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default PageOne;

/*
old buttons

<Link to="/pagefour">
                  <Buttons buttonname="About me"/>
                </Link>
                <Link to="/pagethree">
                  <Buttons link="pagethree.js" buttonname="Beyond Berkeley"/>
                </Link>
                <Link to='/pagetwo'>
                    <Buttons link={PageTwo} buttonname="Courses & Clubs"/>
                </Link>
*/