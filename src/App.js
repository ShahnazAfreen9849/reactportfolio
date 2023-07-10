import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
 <header>
        <nav class="navBar">
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
        </nav>
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
        <section class="about-me">
            <h2 id="about-me">About Me</h2>
            <p>

                My name is Shahnaz Afreen, and I am thrilled to have the opportunity to introduce myself as a skilled
                professional in the field of technology and marketing. As a full-stack developer and digital marketer, I
                possess a diverse skill set that allows me to contribute to a wide range of projects and initiatives.
            </p>
            <p>
                With regards to my educational background, I hold an MBA in Marketing and Health Services, as well as a
                Bachelor's degree in Technical Management. This unique combination of qualifications equips me with a
                comprehensive understanding of both the business and technical aspects of the industry, enabling me to
                approach projects from a holistic perspective.
            </p>
            <p>
                In terms of my technical expertise, I excel as a full-stack developer. I have a strong command over
                various programming languages, including but not limited to HTML, CSS, JavaScript, and Python. I am
                proficient in developing responsive and user-friendly websites, as well as creating efficient and
                scalable backend solutions. My experience spans both frontend and backend development, allowing me to
                create seamless and integrated web applications.
            </p>
            <p>
                Additionally, my knowledge and experience in digital marketing complement my technical skills. I have
                successfully developed and executed digital marketing strategies, including search engine optimization
                (SEO), social media marketing, and pay-per-click (PPC) campaigns. I am adept at analyzing data,
                identifying target audiences, and optimizing marketing campaigns to drive results and achieve business
                objectives.
            </p>
            <p>
                Throughout my career, I have been recognized for my ability to effectively collaborate with
                cross-functional teams, communicate complex ideas in a clear and concise manner, and adapt to dynamic
                and fast-paced environments. I am a proactive problem-solver, always striving to stay up-to-date with
                the latest industry trends and technologies.
            </p>
            <p>
                In conclusion, as a full-stack developer and digital marketer with an MBA in Marketing and Health
                Services, I bring a unique blend of technical expertise and business acumen to the table. I am excited
                about the possibility of contributing my skills and knowledge to your organization and am confident that
                my qualifications make me a strong candidate for any challenging projects or roles that may arise.


            </p>
        </section>
        <section class="portfolio">
            <h2 id="portfolio">Portfolio</h2>
            <h2 id="group-project">Group Projects</h2>
            <div class="projects">


                <article>
                    <p>
                        <b> First Group Project</b>
                    </p>
                    <ul class="project1">
                        <li>
                            <a href="https://jadyngg19.github.io/Event-Scout/">Deployed</a>
                        </li>
                        <li>
                            <a href="https://github.com/Jadyngg19/Event-Scout">GitHub</a>
                        </li>
                        <li>
                            <img src="images/groupProject1.jpg" alt="Project1"/>
                        </li>
                    </ul>

                </article>
                <article >
                    <p>
                        <b> Second Group Project</b>
                    </p>
                    <ul class="project2">
                        <li>
                            <a href="https://goodfood2023.herokuapp.com">Deployed</a>
                        </li>
                        <li>
                            <a href="https://github.com/vargacar/Good_food_restaurant">GitHub</a>
                        </li>
                        <li>
                            <img src="images/groupProject2.jpg" alt="Project2"/>
                        </li>

                    </ul>

                </article>
            </div>
        </section>


        <section class="credentials">
            <div class="qualifications">
                <h2>Qualification </h2>

                <ul class="qualifications-pics">
                    <li>
                        Master of Business Administration
                        <img class="MBA" src="images/MBA-icon.jpeg" alt="MBA"/>
                    </li>

                    <li>
                        Bachelor's in Technical Management
                        <img class="BA" src="images/bachelors-degree.jpg" alt="BA"/>
                    </li>
                </ul>
            </div>
            <div class="certifications">
                <h2>Certification</h2>

            </div>
        </section>

        <section class="stay-connected">

            <h2 id="contact-info">Get In Touch</h2>
            <ul class="icons">

                <li>
                    <a href="mailto:shahnazafreen.usa@gmail.com">
                        <img src="images/gmail.svg" alt="Gmail"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ShahnazAfreen9849">
                        <img src="images/github.svg" alt="GitHub"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shahnaz-afreen-851b02111/">
                        <img src="images/linkedin.svg" alt="LinkedIn"/>
                    </a>
                </li>
            </ul>

        </section>
    </div>
   </>
  );
}

export default App;
