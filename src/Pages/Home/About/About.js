import React from 'react';
import './about.css'
import pp from '../../../images/man-03.png'

const About = () => {


    return (
        <section class="about section App" id="about">
            <h1 className='my-5'>About</h1>
            <hr className='w-50 mx-auto text-danger' />

            <div class="about__container bd-grid">
                <div class="about__img mx-auto">
                    <img src={pp} alt="" />
                </div>

                <div>
                    <h2 class="about__subtitle">I'am Jubair Zaman</h2>
                    <span class="about__profession">Web Developer</span>
                    <p class="about__text">A Full Stack Web-Developer Expert In React , Node.js , Express.js , MongoDb And Many More Cool Libraries
                    </p>

                    <div class="about__social">
                        <a href="#" class="about__social-icon"><i class='bx bxl-linkedin' ></i></a>
                        <a href="#" class="about__social-icon"><i class='bx bxl-github' ></i></a>
                        <a href="#" class="about__social-icon"><i class='bx bxl-dribbble' ></i></a>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default About;