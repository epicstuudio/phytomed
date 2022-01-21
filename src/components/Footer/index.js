import React from 'react';
import logo from '../../assets/images/phytomed-logo.svg';
import './style.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <footer className="dark-footer skin-dark-footer">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5  col-md-4 col-12">
              <div className="footer-widget">
                <img src={logo} className="img-footer" alt="" />
                <div className="footer-add">
                  <p>Kathmandu, Nepal.</p>
                  <p>+977 01 3723 87263</p>
                  <p>Info@phytochemNepal@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="footer-widget">
                <ul className="footer-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-widget">
                <ul className="footer-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/plant">Plantae</Link>
                  </li>
                  <li>
                    <Link to="/fungi">Fungi</Link>
                  </li>
                  <li>
                    <Link to="/chemical-library">Chemical Library</Link>
                  </li>
                  <li>
                    <Link to="/disease-library">Disease Library</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p className="mb-0">
                © 2022 <Link to="/">Phytomed Nepal </Link>
                All Rights Reserved
              </p>
            </div>

            <div className="col-lg-6 col-md-6 text-right">
              <ul className="footer-bottom-social">
                <li>
                  <a href="https://www.facebook.com/phyotmed">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/phyotmed">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/phyotmed">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/phyotmed">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
