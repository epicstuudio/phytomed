import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { GET_ALL_PLANTS } from '../../constants/config';
import List from '../../components/List';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const Index = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  let routeval = '';
  if (splitLocation[1] === 'plantae') {
    routeval = 'plant';
  } else {
    routeval = splitLocation[1];
  }
  const [value, setValue] = useState({});
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(1);
  const handleClick = (e) => {
    if (totalpage >= e && e > 0) {
      setPage(e);
    } else {
      setPage(1);
    }
    setValue({});
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const getAllPlants = async () => {
      setValue({});
      await axios({
        url: `${GET_ALL_PLANTS}?type=${routeval}&page=${page}`,
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          setTotalPage(data.totalPage);
          setValue(data);
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getAllPlants();
  }, [page, routeval]);
  return (
    <>
      {Object.keys(value).length === 0 ? (
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
                  <h2 className="ipt-title">{routeval ? routeval : ''}</h2>
                  <span className="ipn-subtitle">
                    We have the largest collections of{' '}
                    {routeval ? routeval : ''} their uses and chemical
                    compositions. Feel Free to know details about the{' '}
                    {routeval ? routeval : ''} you found and let us know if you
                    found any information wrong.
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
                    {value?.plants?.map((a, i) => (
                      <List a={a} key={i} />
                    ))}
                  </div>

                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <ul className="pagination p-center">
                        <li className="page-item">
                          <span
                            className="page-link"
                            onClick={(e) => handleClick(page - 1)}
                            aria-label="Previous"
                          >
                            <GrLinkPrevious className="ti-arrow-left" />
                            <span className="sr-only">Previous</span>
                          </span>
                        </li>

                        {Array.from(Array(value.totalPage), (e, i) => {
                          return (
                            <li
                              className={`page-item ${
                                page === i + 1 && 'active'
                              }`}
                              key={i + 1}
                            >
                              <span
                                className="page-link"
                                onClick={(e) => handleClick(i + 1)}
                              >
                                {i + 1}
                              </span>
                            </li>
                          );
                        })}

                        <li className="page-item">
                          <span
                            className="page-link"
                            onClick={(e) => handleClick(page + 1)}
                            aria-label="Next"
                          >
                            <GrLinkNext className="ti-arrow-right" />
                            <span className="sr-only">Next</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
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
