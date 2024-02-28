import React from 'react';
import './Homepage.css';
import logo from './assets/logo.png';
import one from './assets/1.png';
import two from './assets/2.png';
import product from './assets/3.png';
import phone from './assets/phone-call.png';
import facebook from './assets/facebook.png';
import browser from './assets/global.png';

const Homepage = () => {
    return (
        <>
            <div className='logo'>
                <img src={logo} alt='logo-img' />
            </div>
            <div className='details-section'>
                <div className='award'>
                    <img src={one} alt='award-img' />
                </div>
                <div className='details'>
                    <div className='national-awards'>
                        <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </li>
                            <li>
                                C.R.I.is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </li>
                        </ul>
                        <div className='award-winning-img'>
                            <img src={two} alt='award-winning' />
                        </div>
                        <p>
                            Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>

            </div>
            <div className='products'>
                <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h5>
                <div className='products-img'>
                    <img src={product} alt='products-img' />
                </div>
                <h4>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h4>
                <div className='horizontal-line'></div>
            </div>
            <div className='footer'>
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <div className='services'>
                    <p>
                        CHEMICALS & PROCESS <span className='vertical-line'>|</span> POWER<span className='vertical-line'> |</span> WATER & WASTE WATER<span className='vertical-line'> |</span> OILS & GAS<span className='vertical-line'> |</span> PHARMA<span className='vertical-line'> |</span> SUGARS & DISTILLERIES<span className='vertical-line'> |</span> PAPER & PULP<span className='vertical-line'> |</span> MARINE & DEFENCE<span className='vertical-line'> |</span> METAL & MINING<span className='vertical-line'> |</span> FOOD & BEVERAGE <span className='vertical-line'> | </span>PETROCHEMICAL & REFINERIES<span className='vertical-line'> |</span> SOLAR <span className='vertical-line'> |</span>BUILDING<span className='vertical-line'> |</span> HVAC <span className='vertical-line'> |</span>FIRE FIGHTING <span className='vertical-line'>| </span>AGRICULTURE & RESIDENTIAL
                    </p>
                </div>
                <div className='social-icons'>
                    <div className='social-icon'>
                        <img src={phone} alt='phone' />
                        <p>Toll free 1800 200 1234</p>
                    </div>
                    <div className='social-icon'>
                        <img src={facebook} alt='facebook' />
                        <p>www.facebook.com/cripumps</p>
                    </div>
                    <div className='social-icon'>
                        <img src={browser} alt='browser' />
                        <p>www.crigroups.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage