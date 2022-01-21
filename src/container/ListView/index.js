import React from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { GET_SEARCH_VARIABLE } from '../../constants/config';
import { useState } from 'react';
import List from '../../components/List';

const Index = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const [value, setValue] = useState([]);
  useEffect(() => {
    const getPlants = async () => {
      await axios({
        url: GET_SEARCH_VARIABLE + splitLocation[1] + '=' + splitLocation[2],
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          console.log(data.results);
          setValue(data.results);
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getPlants();
  }, []);
  return (
    <>
      {value.length === 0 ? (
        <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <>
          <div className="page-title">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h2 className="ipt-title">{splitLocation[1]}</h2>
                  <span className="ipn-subtitle">
                    {splitLocation[1] === 'uses' &&
                      `Following Plants & Fungis can be used for the cure of ${splitLocation[2]}`}
                    {splitLocation[1] === 'kingdom' &&
                      `Following are the list that comes under kingdom ${splitLocation[2]}`}
                    {splitLocation[1] === 'division' &&
                      `Following are the list that comes under division ${splitLocation[2]}`}
                    {splitLocation[1] === 'chemical' &&
                      `Following are the list of plants & fungi that contains chemical ${splitLocation[2]}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12 list-layout">
                  <div className="row">
                    {value?.map((a, i) => (
                      <List a={a} key={i} />
                    ))}
                  </div>

                  {/* <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <ul className="pagination p-center">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span className="ti-arrow-left"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            18
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span className="ti-arrow-right"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Index;
