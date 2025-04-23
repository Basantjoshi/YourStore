import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <>
      <div className='section__container header__container'>
        <div className='header__content z-30'>
          <h4 className='uppercase'>UP TO 20% DISCOUNT ON</h4>
          <h1>Rocket single seater</h1>
            <button className="btn"><Link to='/shop'>Shop Now </Link> </button>
        </div>
        <div className="header__img">
            <img src={bannerImg} alt="banner image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
