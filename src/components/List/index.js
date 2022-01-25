import React from 'react';
import { Link } from 'react-router-dom';
import ImageError from '../../assets/images/image_error.png';
import { BACKEND } from '../../constants/config';

const index = ({ a }) => {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="property-listing property-1">
        <div className="listing-img-wrapper">
          <img
            src={a.image ? BACKEND + a.image : ImageError}
            className="img-fluid mx-auto"
            alt=""
          />
        </div>

        <div className="listing-content">
          <div className="listing-detail-wrapper-box">
            <div className="listing-detail-wrapper">
              <div className="listing-short-detail">
                <h4 className="listing-name">
                  <Link to={`/plant/${a.slug}`}>{a.binomial_name}</Link>
                </h4>
                <span className="prt-types sale">{a.class}</span>
              </div>
              <div className="list-price">
                <h6 className="listing-card-info-price">{a.kingdom}</h6>
              </div>
            </div>
          </div>

          <div className="price-features-wrapper">
            <div className="list-fx-features">
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <img src="assets/img/bed.svg" width="13" alt="" />
                </div>
                Cutting
              </div>
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <img src="assets/img/bathtub.svg" width="13" alt="" />
                </div>
                Pain
              </div>
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <img src="assets/img/move.svg" width="13" alt="" />
                </div>
                Back Pain
              </div>
            </div>
          </div>

          <div className="listing-footer-wrapper">
            <div className="listing-locate">
              <span className="listing-location">
                <i className="ti-location-pin"></i>Kathmandu, Nepal
              </span>
            </div>
            <div className="listing-detail-btn">
              <Link to={`/plant/${a.slug}`} className="prt-view">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
