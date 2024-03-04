import Cblogo from './assets/codebase.svg'
import Hubba from './assets/hubba.svg'
import './pagetwo.css';
import Fellow from './assets/hubbateam.svg'
import Mentored from './assets/cbm.svg'

function PageTwo() {
    return (
        <div className='page'>
            <div className='top'>
            <div className='title'>
            <h1>Clubs & Coursework</h1>
            </div>
            <div className='logos'>
                <img src={Cblogo} alt='missing' width="20 vh"/>
                <h3 className="topicon">Codebase</h3>
                <h3 className='x'>x</h3>
                <h3 className="topicon">Hubba</h3>
                <img src={Hubba} alt='missing' width="20 vh"/>
            </div>
            </div>
                
            <div className='chunk'>
            <div className='firstcol'>
                <div className='firsttop'>
                <img className='fellow' src={Fellow} alt='missing' width="140 vh"/>
                <div className='fsub'>
                <h3>Fellows F23</h3>
                </div>
                </div>
                <img className="mentor" src={Mentored} alt='missing' width="250 vh"/>
                <h3 className='subtitle'>Mentored Sp24</h3>
            </div>
                
            <div className='secondcol'>
                <div className='code_box'>
                    <h2 className='hubtitle'>Hubba Consulting Fellowship</h2>
                        <h3 className='code_des'>Support African American/Black students and other underrepresented groups with their business affiliated aspirations through professional exposure, professional development opportunities, and community involvement.</h3>
                </div>

                <div className='hubba_box'>
                        <h2 className='cbtitle'>Codebase Mentored Team</h2>
                        <h3 className='hubba_des'>A community of developers that empowers students to break into the software industry. Codebase is able to provide a number of resoursces and project based experiences with top companies in the tech industry, all while fostering a cohesive and collaborative environment.</h3>
                </div>

            </div>

            <div className='thirdcol'>
                <h1>Coursework</h1>
                    <ul>
                        <li>Discrete Math</li>
                        <li>Linear Algebra</li>
                        <li>Abstract Algebra</li>
                        <li>Foundation of Data Science</li>
                    </ul>

                <h1>Skills IP</h1>
                <ul>
                        <li>Python</li>
                        <li>HTML/CSS/JS</li>
                        <li>React</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageTwo;