import "./Footer.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (

        <div className="footer">
        <footer class="text-center">
            <section>

                {/* Facebook */}
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/emmanuel.barinia"
                role="button"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>

                {/* Twitter */}
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://twitter.com/eb8978"
                role="button"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>


                {/* Instagram */}
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/barinia_studio/"
                role="button"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>

                {/* Linkedin */}
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/emmanuel-barinia-a1587027/"
                role="button"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </a>

                {/* Github */}
                <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/ebarinia/"
                role="button"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                
            </section>
        </footer>
        </div>
  );
};

export default Footer;
