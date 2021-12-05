import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer class="site-footer mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">A Full Stack Web-Developer Expert In React , Node.js , Express.js , MongoDb And Many More Cool Libraries</p>
                    </div>


                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="/about">About me</a></li>
                            <li><a href="/contact">Contact me</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                            <a href="#">Jubair</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="linkedin" href="https://www.linkedin.com/in/jubair-zaman01/"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fab fa-github-alt"></i></a></li>
                            <li><a class="facebook" href="https://www.facebook.com/profile.php?id=100021941829549"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>


                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;