import React from 'react';

export default function Blog() {
  return (
    <section class="portfolio">
    <h2 id="portfolio">Portfolio</h2>
    <h2 id="group-project">Group Projects</h2>
    <div class="projects">


        <article>
            <h3>
                <b> First Group Project</b>
            </h3>
            <ul class="project1">
            <li>
                    <img src="images/groupProject1.jpg" alt="Project1"/>
                </li>
            <li>
                    <a href="https://github.com/Jadyngg19/Event-Scout">GitHub</a>
                </li>
            
                <li>
                    <a href="https://jadyngg19.github.io/Event-Scout/">Deployed</a>
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
        <article >
            <p>
                <b> Fund My Project</b>
            </p>
            <ul class="fundmyproject">
            <li>
                    <img src="images/fundMyProject.png" alt="fundMyProject"/>
                </li>
                <li>
                    <a href="https://goodfood2023.herokuapp.com">Deployed</a>
                </li>
                <li>
                    <a href="https://github.com/vargacar/Good_food_restaurant">GitHub</a>
                </li>
                

            </ul>

        </article>
    </div>
</section>
  );
}