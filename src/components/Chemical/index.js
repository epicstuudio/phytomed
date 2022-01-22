import React from 'react';
import { Link } from 'react-router-dom';
import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';
import { BACKEND } from '../../constants/config';

const index = ({ a }) => {
  const truncate = (input) =>
    input.length > 20 ? `${input.substring(0, 26)}...` : input;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="property-listing property-2">
        <div className="listing-img-wrapper">
          <div className="list-img-slide">
            <div className="click">
              <div>
                <Zoom>
                  <img
                    src={BACKEND + a.image}
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-detail-wrapper">
          <div className="listing-short-detail-wrap">
            <div className="listing-short-detail">
              <h4 className="listing-name verified">{truncate(a.name)}</h4>
            </div>
          </div>
        </div>

        <div className="listing-detail-footer">
          <div className="footer-first">
            <div className="foot-location listing-card-info-icon">
              {a.chemId}
            </div>
          </div>
          <div className="footer-flex">
            <Link
              to={{ pathname: `${BACKEND + a.file}` }}
              target="_blank"
              className="np-download prt-view"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
