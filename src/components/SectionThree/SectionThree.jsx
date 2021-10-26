import './sectionthree.scss';

// Image import

import BoxWavesRightMobile from '../../assets/bg-pattern-how-we-work-mobile.svg';

import BoxWavesRightDesktop from '../../assets/bg-pattern-how-we-work-desktop.svg';

const SectionThree = () => {
    return (
        <div className="section__three">
                <img src={BoxWavesRightMobile} alt="box waves" className="box__waves--mobile"/>
                <img src={BoxWavesRightDesktop} alt="box waves" className="box__waves--desktop"/>
            <h3>Find out more about how we work</h3>
            <button>How we work</button>
        </div>
    );
};

export default SectionThree;