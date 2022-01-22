import React from 'react';
import './style.css';
import Slider from 'react-slick';
import Doctor from '../../assets/images/doctor.svg';
import { Link } from 'react-router-dom';
import { BACKEND } from '../../constants/config';
import ImageError from '../../assets/images/image_error.png';

const index = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="property-listing property-2">
        <div className="listing-img-wrapper">
          <div className="list-img-slide">
            <div className="click">
              <Slider {...settings}>
                <div>
                  <Link to={`/plant/${data.slug}`}>
                    <img
                      src={
                        data.image === '' ? ImageError : BACKEND + data.image
                      }
                      className="img-fluid mx-auto"
                      alt="property"
                      width={50}
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="listing-detail-wrapper">
          <div className="listing-short-detail-wrap">
            <div className="listing-short-detail">
              <span className="property-type">
                {data.nepali_name ? data.nepali_name : data.english_name}
              </span>
              <h4 className="listing-name">
                <Link to={`/plant/${data.slug}`}>{data.binomial_name}</Link>
              </h4>
            </div>
            <div className="listing-short-detail-flex">
              <h6 className="listing-card-info-price">{data.kingdom}</h6>
            </div>
          </div>
        </div>

        <div className="price-features-wrapper">
          <div className="list-fx-features">
            <div className="listing-card-info-icon">
              <div className="inc-fleat-icon">
                <img src={Doctor} width="13" alt="icons" />
              </div>
              Bleeding
            </div>
            <div className="listing-card-info-icon">
              <div className="inc-fleat-icon">
                <img src={Doctor} width="13" alt="icons" />
              </div>
              Cuts and Wounds
            </div>
          </div>
        </div>

        <div className="listing-detail-footer">
          <div className="footer-first">
            <div className="foot-location">PM0005W8</div>
          </div>
          <div className="footer-flex">
            <Link to={`plant/${data.slug}`} className="prt-view">
              View
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="npl w-8 h-8 svg cursor-pointer"
              >
                <path
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
