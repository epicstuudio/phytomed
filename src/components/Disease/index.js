import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({ a }) => {
  console.log(a);
  return (
    <div className="col-lg-3 col-md-6">
      <div className="property-listing property-1">
        <div className="listing-content">
          <div className="listing-detail-wrapper-box">
            <div className="listing-detail-wrapper">
              <div className="listing-short-detail">
                <h4 className="listing-name">
                  <Link to={`/uses/${a?.slug}`}>{a?.name}</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="listing-footer-wrapper">
            <div className="listing-locate">
              <Link to={`/uses/${a?.slug}`} className="more-btn">
                Treatments
              </Link>
            </div>
            <div className="listing-detail-btn">
              {a.url ? (
                <a
                  href={a.url}
                  className="more-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Blog
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
