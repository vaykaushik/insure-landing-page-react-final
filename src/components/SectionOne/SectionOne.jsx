import './sectionone.scss';

// Import Image

import HeroImageMobile from '../../assets/image-intro-mobile.jpg';
import HeroImageDesktop from '../../assets/image-intro-desktop.jpg';

// Import wavy background lines

import WaveLeft from '../../assets/bg-pattern-intro-left-mobile.svg';
import WaveRight from '../../assets/bg-pattern-intro-right-mobile.svg';

import WavesDesktopIntroLeft from '../../assets/bg-pattern-intro-left-desktop.svg';
import WavesDesktopIntroRight from '../../assets/bg-pattern-intro-right-desktop.svg';

const SectionOne = () => {
    return (
        <div className="section__one">

            

            <div className="section__one__hero">

                <img src={HeroImageMobile} alt="hero" className="hero__image--mobile"/>
                <img src={HeroImageDesktop} alt="hero" className="hero__image--desktop"/>
                <img src={WavesDesktopIntroLeft} alt="waves-desktop" className="waves__desktop--left"/>
                <img src={WavesDesktopIntroRight} alt="waves desktop" className="waves__desktop--right"/>
            </div>

            <div className="section__one__content">

                <div className="section__one__wave--left">
                    <img src={WaveLeft} alt="left wave" className="wave--left--mobile"/>
                </div>

                <div className="section__one--line"></div>
                
                <div className="section__one__content__text">
                    <h2>Humanizing your insurance.</h2>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <button>View Plans</button>
                </div>
                

                <div className="section__one__wave--right">
                    <img src={WaveRight} alt="right wave" className="wave--right--mobile"/>
                </div>

            </div>
        </div>
    );
};

export default SectionOne;