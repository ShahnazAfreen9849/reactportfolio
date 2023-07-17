import logo from './logo.svg';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
   <>
 <header>
    <PortfolioContainer/>
        {/* <nav class="navBar">
            <ul class="navLinks">
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#qualification">Qualification</a>
                </li>
                <li>
                    <a href="#certification">Certification</a>
                </li>
                <li>
                    <a href="#contact-info">Contact</a>
                </li>
            </ul>
        </nav> */}
    </header>
    <div>
        <div>
            <section class="banner">
                <div>
                    <h1>Shahnaz Afreen</h1>
                    <p>
                        Digital Marketer, Full-stack Developer,
                        Scrum Master.
                    </p>
                </div>
                <img class="profile-pic" src="images/profilePic.jpg" alt="Selfie time"/>
            </section>
        </div>
        
        


        <section class="credentials">
            
           
        </section>

        
    </div>
   </>
  );
}

export default App;
