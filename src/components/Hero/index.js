import React, { useState } from 'react';
import './style.css';
import BGImage from '../../assets/images/hero-banner.jpg';
import Search from '../../assets/images/search.svg';
import { GET_SEARCH_FILTER } from '../../constants/config';
import axios from 'axios';
import Select from 'react-select';
import { useEffect } from 'react';

const Index = () => {
  const [kingdom, setKingdom] = useState([]);
  const [division, setDivision] = useState([]);
  const [chemical, setChemical] = useState([]);
  const [uses, setUses] = useState([]);

  const handleChange = (e) => {
    console.log(e);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#edf1fb',
      border: '1px solid #ced4da',
      height: '56px',
      width: '218px',
    }),
    placeholder: (styles) => ({
      ...styles,
      marginLeft: '8px',
    }),
    menuList: (styles) => ({
      ...styles,
      width: '100%',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? '#f5f5f5' : isSelected ? '#fff' : undefined,
      zIndex: 1,
    }),
    singleValue: (styles) => ({
      ...styles,
      marginLeft: '8px',
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
    input: (styles) => ({ ...styles, marginLeft: '8px' }),
  };

  useEffect(() => {
    const getsearch = async () => {
      await axios({
        url: GET_SEARCH_FILTER,
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          setKingdom(
            data.results.kingdom.map((a, i) => ({ label: a, value: 'kingdom' }))
          );
          setDivision(
            data.results.division.map((a, i) => ({
              label: a,
              value: 'division',
            }))
          );
          setChemical(
            data.results.chemical.map((a, i) => ({
              label: a,
              value: 'chemical',
            }))
          );
          setUses(
            data.results.uses.map((a, i) => ({ label: a, value: 'uses' }))
          );
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getsearch();
  }, []);

  return (
    <div
      className="image-cover hero-banner"
      style={{
        background: `url(${BGImage}) no-repeat`,
      }}
    >
      <div className="container">
        <div className="hero-search-wrap">
          <div className="hero-search">
            <h1>Search plants, disease & chemicals.</h1>
          </div>
          <div className="hero-search-content side-form">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search anything"
                    />
                    <img src={Search} width="18" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Kingdom</label>
                  <Select
                    options={kingdom}
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Division</label>
                  <Select
                    options={division}
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Chemical</label>
                  <Select
                    options={chemical}
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Application</label>
                  <Select
                    options={uses}
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-search-action">
            <a href="/" className="btn search-btn">
              Search Result
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
