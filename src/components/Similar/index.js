import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND } from '../../constants/config';
import ImageError from '../../assets/images/image_error.png';
import axios from 'axios';
import { GET_SIMILAR_PLANT } from '../../constants/config';

const Index = ({ slug }) => {
  const url = slug[2];
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    const getSinglePlant = async () => {
      await axios({
        url: GET_SIMILAR_PLANT + url,
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          console.log(data);
          setSimilar(data.plants);
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getSinglePlant();
  }, [url]);
  return (
    <div className="sidebar_featured_property">
      {similar?.map((a, i) => (
        <div className="sides_list_property" key={i}>
          <div className="sides_list_property_thumb">
            <img
              src={a.image === '' ? ImageError : BACKEND + a.image}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="sides_list_property_detail">
            <h4>
              <Link to={`/plant/${a.slug}`}>{a.binomial_name}</Link>
            </h4>
            <span>
              <i className="ti-location-pin"></i>
              {a.division}
            </span>
            <div className="lists_property_price">
              <div className="lists_property_types">
                <div className="property_types_vlix sale">{a.kingdom}</div>
              </div>
              <div className="lists_property_price_value">
                <h4>{a.species ? a.species : ''}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
