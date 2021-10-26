import './sectiontwo.scss';

// Import images

import SnappyProcess from '../../assets/icon-snappy-process.svg';
import AffordablePrices from '../../assets/icon-affordable-prices.svg';
import PeopleFirst from '../../assets/icon-people-first.svg';

const SectionTwo = () => {
    return (
        <div className="section__two">

            <div className="section__two__intro">
                <div className="section__two__line"></div>
                <h2>We're different</h2>
            </div>

            <div className="section__two__content">

                <div className="section__two__content__block">
                    <img src={SnappyProcess} alt="snappy process"/>
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                </div>

                <div className="section__two__content__block">
                    <img src={AffordablePrices} alt="affordable prices"/>
                    <h3>Affordable Prices</h3>
                    <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                </div>

                <div className="section__two__content__block">
                    <img src={PeopleFirst} alt="people first"/>
                    <h3>People First</h3>
                    <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                </div>

            </div>

        </div>
    );
};

export default SectionTwo;