import React, { useEffect, useState } from 'react';
import Slide from '../Slide';
import { GET_RECENT_PLANTS } from '../../constants/config';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Index = () => {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    const getRecent = async () => {
      await axios({
        url: GET_RECENT_PLANTS,
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          setRecent(data.results.slice(0, 6));
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getRecent();
  }, []);
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10 text-center">
            <div className="sec-heading left">
              <h2>Recently Added Plants </h2>
              <p>
                Our team constanly search, identify and report various types of
                plants found in the region and update it regularly.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {recent?.map((a, i) => (
            <Slide data={a} key={i} />
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <Link to="/plantae" className="btn btn-theme-light-2 rounded">
              Browse More Plants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
