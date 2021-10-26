import './footer.scss';

// Images

import FooterWaves from '../../assets/bg-pattern-footer-mobile.svg';

import FooterWavesD from '../../assets/bg-pattern-footer-desktop.svg';

import InsureLogo from '../../assets/logo.svg';

// Icons

import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container">

                <div className="footer__waves">
                    <img src={FooterWaves} alt="wave pattern" className="footer__waves--mobile"/>
                    <img src={FooterWavesD} alt="wave pattern" className="footer__waves--desktop"/>
                </div>

                <div className="footer__row">

                    <div className="footer__left__list">

                        <div className="footer__column__one">

                            <div>
                                <img src={InsureLogo} alt="Insure Logo" className="logo"/>
                            </div>

                            <div class="footer__socials">
                                <a href="/">
                                    <AiFillFacebook className="i"></AiFillFacebook>
                                </a>
                                <a href="/">
                                    <AiOutlineTwitter className="i"></AiOutlineTwitter>
                                </a>
                                <a href="/">
                                    <BsPinterest className="i"></BsPinterest>
                                </a>
                                <a href="/">
                                    <AiOutlineInstagram className="i"></AiOutlineInstagram>
                                </a>
                            </div>
                            
                        </div>

                        
                        <div className="footer__column__two">

                            <div>
                                <h3>Our Company</h3>
                                <ul>
                                    
                                    <li><a href="/">How We Work</a></li>
                                    <li><a href="/">Why Insure?</a></li>
                                    <li><a href="/">Check Price</a></li>
                                    <li><a href="/">Reviews</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3>Help Me</h3>
                                <ul>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Terms Of Use</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Cookies</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3>Contact</h3>
                                <ul>
                                    <li><a href="/">Sales</a></li>
                                    <li><a href="/">Support</a></li>
                                    <li><a href="/">Live Chat</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3>Others</h3>
                                <ul>
                                    <li><a href="/">Careers</a></li>
                                    <li><a href="/">Press</a></li>
                                    <li><a href="/">Licenses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;