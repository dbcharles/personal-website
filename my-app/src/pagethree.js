import Giants from './assets/giants.svg'
import Club from './assets/club.svg'
import Sl from './assets/sl.svg'
import Chabot from './assets/chabot.svg'
import './pagethree.css'
import Fade from 'react-reveal';

function PageThree() {
    return(
    <div className="page">
        <div className="title3">
            <div className='base'>
            <h1 className='beyond'>Beyond Berkeley</h1>
            <h2 className="subtitle">Hobbies, Passions, etc.</h2> 
            </div>
        </div>
    <div className="body">
    Before Berkeley my life was baseball. I watched, studied, and played the sport season after season for nearly 15 years! While my sports journey has ended, the lessons on adversity, determination, gratitude and so much more will never be forgotten. As long as I live my time on the field and all the time I put into baseball will forever be a part of me.
    </div>
    <h4 className='caption'>Baseball Through the Years</h4>
    <div className="highlights">
        <div className='innerhighlights'>
            <div className="images">
                <img src={Giants} height="255"/>
            </div>
            <div className="images">
                <img src={Club} height="255"/>
            </div>
            <div className="images">
                <img src={Sl} height="255"/>
            </div>
            <div className="images">
                <img src={Chabot} height="255"/>
            </div>
        </div>
    </div>
</div>
    );
}


export default PageThree;