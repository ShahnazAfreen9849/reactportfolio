import React from 'react';

export default function Contact() {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <section class="stay-connected">

                <h2 id="contact-info">Get In Touch</h2>
                <ul class="icons">

                    <li>
                        <a href="mailto:shahnazafreen.usa@gmail.com">
                            <img src="images/gmail.svg" alt="Gmail" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ShahnazAfreen9849">
                            <img src="images/github.svg" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/shahnaz-afreen-851b02111/">
                            <img src="images/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                </ul>

            </section>
        </>
    );
}
