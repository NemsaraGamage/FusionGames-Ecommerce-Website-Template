import React, { useState } from 'react';
import '../components/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PsPage from '../components/psPage.js';

import ban1 from '../components/banner/ban1.jpg'
import ad1 from '../components/banner/acMirage.jpg'
import ad2 from '../components/banner/starWarsJedi.jpg'
import ad3 from '../components/banner/godOFWar.jpg'
import ad4 from '../components/banner/hogwarts.jpg'
import ad5 from '../components/banner/avatar.jpg'
import ad6 from '../components/banner/ghost.jpg'
import ban2 from '../components/banner/ban2.jpg'
import ban3 from '../components/banner/ban3.jpg'
import ban4 from '../components/banner/ban4.jpg'
import ban5 from '../components/banner/ban5.jpg'
import psLogo from '../components/icons/psLogo.jpg'
import xboxLogo from '../components/icons/xboxLogo.jpg'
import ninLogo from '../components/icons/ninLogo.jpg'
import funkoLogo from '../components/icons/funkoLogo.jpg'
import pokoLogo from '../components/icons/pokoLogo.jpg'
import razerLog from '../components/icons/razerLogo.jpg'
import amdLogo from '../components/icons/amdLogo.jpg'
import metaLogo from '../components/icons/metaLogo.jpg'

import face from '../components/icons/face.png'
import insta from '../components/icons/insta.png'
import twit from '../components/icons/twit.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { summerDeal } from './data';
import { funkoPop } from './funko';
import { consoleData } from './console';
import { accessories } from './accessories';

import Slider2 from 'infinite-react-carousel';


const Main = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
          ...prev,
          [data.target.alt]: data.target.alt,
        }));
    };

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 100);
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
      <>
      <div className='backColor'>

        {/* <!-- navigation bar --> */}
        <div className="navbar">
            <a href="#" className="logo">FusionGames</a>
            <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
            <ul className={menuOpen ? 'menu active' : 'menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#cata">Catagories</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>

        {/* banner */}
        <div className='banner'>
            <img src={ban1}></img>
        </div>
        
        {/* Ad1 */}
        <div className='addDisplay'>
            <div>
                <img src={ad1}></img>
                <p>PRE-ORDER NOW | 23.10.2023</p>
                <p>Assassin's Creed Mirage</p>
            </div>
            <div>
                <img src={ad2}></img>
                <p>AVAILABLE NOW</p>
                <p>Star Wars Jedi: Survivor</p>
            </div>
        </div>

        <div className="carsolCon">
            <h4>Summer Deals</h4>
            <Slider {...settings}>
                {summerDeal.map((item) => (
                <div className="card">
                    <div className="card-top">
                        <img
                            src={
                            defaultImage[item.title] === item.title
                                ? defaultImage.linkDefault
                                : item.linkImg
                            }
                            alt={item.title}
                            onError={handleErrorImage}
                        />
                        <h1>{item.title}</h1>
                        </div>
                        <div className="card-bottom">
                            <h3 className='discountSlash'>{item.price}</h3>
                            <h3>{item.discount}</h3>
                            <span className="category">{item.category}</span>
                        </div>
                </div>
                ))}
          </Slider>
        </div>

        <div className='ban2Con'>
          <Slider2
          arrowClass="custom-arrows" // Add a custom class name for the arrows
          // prevArrow={<div className="custom-prev-arrow" />}
          // nextArrow={<div className="custom-next-arrow" />}
          >
            <div>
              <img src={ban3}></img>
            </div>
            <div>
              <img src={ban2}></img>
            </div>
          </Slider2>
        </div>

          {/* Ad2 */}
        <div className='addDisplay'>
            <div>
                <img src={ad3}></img>
                <p>PRE-ORDER NOW | 05.01.2023</p>
                <p>God of War Ragnarök</p>
            </div>
            <div>
                <img src={ad4}></img>
                <p>AVAILABLE NOW</p>
                <p>Hogwarts Legacy</p>
            </div>
        </div>

        {/* FunkoPop */}
        <div className="carsolCon">
          <h4>Funko POP!</h4>
          <Slider {...settings}>
              {funkoPop.map((item) => (
              <div className="card">
                <div className="card-top">
                    <img
                        src={
                        defaultImage[item.title] === item.title
                            ? defaultImage.linkDefault
                            : item.linkImg
                        }
                        alt={item.title}
                        onError={handleErrorImage}
                    />
                    <h1>{item.title}</h1>
                    </div>
                    <div className="card-bottom">
                        <h3>{item.price}</h3>
                        <span className="category">{item.category}</span>
                    </div>
              </div>
              ))}
          </Slider>
        </div>
        
        <br></br>
        <br></br>
        <br></br>

        {/* Console and Hardware */}
        <div className="carsolCon">
          <h4>Console</h4>
          <Slider {...settings}>
              {consoleData.map((item) => (
              <div className="card">
                <div className="card-top">
                    <img
                        src={
                        defaultImage[item.title] === item.title
                            ? defaultImage.linkDefault
                            : item.linkImg
                        }
                        alt={item.title}
                        onError={handleErrorImage}
                    />
                    <h1>{item.title}</h1>
                    </div>
                    <div className="card-bottom">
                        <h3>{item.price}</h3>
                        <span className="category">{item.category}</span>
                    </div>
              </div>
              ))}
          </Slider>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* banner4 */}
        <div className='banner'>
            <img src={ban4}></img>
        </div>
        
         {/* Accessory*/}
         <div className="carsolCon">
          <h4>Accessories</h4>
          <Slider {...settings}>
              {accessories.map((item) => (
              <div className="card">
                <div className="card-top">
                    <img
                        src={
                        defaultImage[item.title] === item.title
                            ? defaultImage.linkDefault
                            : item.linkImg
                        }
                        alt={item.title}
                        onError={handleErrorImage}
                    />
                    <h1>{item.title}</h1>
                    </div>
                    <div className="card-bottom">
                        <h3>{item.price}</h3>
                        <span className="category">{item.category}</span>
                    </div>
              </div>
              ))}
          </Slider>
        </div>

        <br></br>
        <br></br>
        <br></br>

        {/* Ad3 */}
        <div className='addDisplay'>
            <div>
                <img src={ad5}></img>
                <p>PRE-ORDER NOW | 05.01.2023</p>
                <p>Avatar: Frontiers of Pandora</p>
            </div>
            <div>
                <img src={ad6}></img>
                <p>AVAILABLE NOW</p>
                <p>Ghost of Tsushima</p>
            </div>
        </div>

        <h1 id='cata' className='cataH1'>Top Labels</h1>
        <div className='cataOptionCon'>
          <img src={psLogo} className="product-logo" />
          <img src={xboxLogo}  className="product-logo" />
          <img src={ninLogo}  className="product-logo" />
          <img src={funkoLogo}  className="product-logo" />
          <img src={pokoLogo}  className="product-logo" />
          <img src={razerLog}  className="product-logo" />
          <img src={amdLogo}  className="product-logo" />
          <img src={metaLogo}  className="product-logo" />
        </div>

        <button className={`back-to-top ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
          &#8593;
        </button>

        <footer class="footer">
                <h4>FusionGames</h4>
                <div className='links'> 
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">About</a>
                    <a href="#" class="nav-link">Services</a>
                    <a href="#" class="nav-link">Contact</a>
                </div>
            
                <div class="icons">
                    <img src={twit}></img>
                    <img src={face}></img>
                    <img src={insta}></img>
                </div>
                <p class="footer-text">© 2023 FusionGames. All rights reserved.</p>
            </footer>

      </div>
      </>
    )
}

export default Main;