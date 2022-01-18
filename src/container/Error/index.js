import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/images/404.png';

const index = () => {
  return (
    <section className="error-wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="text-center">
              <img src={ErrorImage} className="img-fluid" alt="" />
              <p>
                Do you Know PhytoMedNepal has the largest collection of plants
                found in Bagmati Provience with their chemical compositions and
                uses ??
              </p>
              <Link to="/">
                {' '}
                <a className="btn search-btn" href="/">
                  Back To Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
