import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/images/phytomed-logo.svg';
import submit from '../../assets/images/submit.svg';
import user from '../../assets/images/user-light.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { NavLink, useLocation } from 'react-router-dom';

const Index = () => {
  const size = useWindowSize();
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <>
      <div className="header header-light head-shadow">
        <div className="container">
          <nav
            id="navigation"
            className={`navigation ${
              size.width < 1205 ? 'navigation-portrait' : 'navigation-landscape'
            }`}
          >
            <div className="nav-header">
              <a className="nav-brand" href="/">
                <img src={logo} alt="logo" className="logo" width="240" />
              </a>
              <div
                className="nav-toggle"
                onClick={(e) => setSidebar(true)}
              ></div>
            </div>
            <div
              className={`nav-menus-wrapper ${
                sidebar === true
                  ? 'nav-menus-wrapper-open transition-left'
                  : 'transition-none'
              }`}
            >
              {sidebar && (
                <span
                  className="nav-menus-wrapper-close-button"
                  onClick={(e) => setSidebar(false)}
                >
                  X
                </span>
              )}
              <ul className="nav-menu">
                <li className={splitLocation[1] === '' ? 'active' : ''}>
                  <NavLink exact to="/">
                    Home<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li className={splitLocation[1] === 'plantae' ? 'active' : ''}>
                  <NavLink exact to="/plantae">
                    Plantae<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li className={splitLocation[1] === 'fungi' ? 'active' : ''}>
                  <NavLink exact to="/fungi">
                    Fungi<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li
                  className={
                    splitLocation[1] === 'chemical-library' ? 'active' : ''
                  }
                >
                  <NavLink exact to="/chemical-library">
                    Chemical Library<span className="submenu-indicator"></span>
                  </NavLink>
                </li>

                <li
                  className={
                    splitLocation[1] === 'disease-library' ? 'active' : ''
                  }
                >
                  <NavLink exact to="/disease-library">
                    Diseases Library<span className="submenu-indicator"></span>
                  </NavLink>
                </li>
                {size.width > 1401 && (
                  <li
                    className={splitLocation[1] === 'about-us' ? 'active' : ''}
                  >
                    <NavLink exact to="/about-us">
                      About us<span className="submenu-indicator"></span>
                    </NavLink>
                  </li>
                )}
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a href="/" className="text-success">
                    <img src={submit} width="20" alt="" className="mr-2" />
                    Request Data
                  </a>
                </li>
                <li className="add-listing">
                  <a href="/">
                    <img src={user} width="12" alt="" className="mr-2" />
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            {sidebar && (
              <div
                class="nav-overlay-panel"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'block',
                }}
              ></div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Index;
