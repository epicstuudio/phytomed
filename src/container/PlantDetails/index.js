import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { GET_PLANT } from '../../constants/config';
import './style.css';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { BsDownload } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import Similar from '../../components/Similar';

const Index = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  const [value, setValue] = useState([]);
  useEffect(() => {
    const getSinglePlant = async () => {
      await axios({
        url: GET_PLANT + splitLocation[2],
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          setValue(data.plant);
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getSinglePlant();
  });
  return (
    <>
      <section className="gray-simple">
        {value.length === 0 ? (
          <div id="preloader">
            <div className="preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="property_block_wrap style-2 p-4">
                  <div className="prt-detail-title-desc">
                    <span className="prt-types sale">{value.kingdom}</span>
                    <h3>{value.binomial_name}</h3>
                    <p>Synonym : {value.synonym}</p>
                    <p>
                      Nepali Name :{' '}
                      {value.nepali_name ? value.nepali_name : 'N/A'}
                    </p>
                    <p>
                      English Name :{' '}
                      {value.english_name ? value.english_name : 'N/A'}
                      <span className="m-l-40">
                        Sanskrit Name :{' '}
                        {value.sanskrit_name ? value.sanskrit_name : 'N/A'}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">
                      General Plant Information
                    </h4>
                  </div>
                  <div
                    id="clOne"
                    className="panel-collapse"
                    aria-labelledby="clOne"
                  >
                    <div className="block-body">
                      <ul className="deatil_features">
                        <li>
                          <strong>Kingdom:</strong>
                          {value.kingdom ? value.kingdom : 'N/A'}
                        </li>
                        <li>
                          <strong>Division:</strong>
                          {value.division}
                        </li>
                        <li>
                          <strong>ClassName:</strong>{' '}
                          {value.class ? value.class : 'N/A'}
                        </li>
                        <li>
                          <strong>Order</strong>
                          {value.order ? value.order : 'N/A'}
                        </li>
                        <li>
                          <strong>Family:</strong>
                          {value.family ? value.family : 'N/A'}
                        </li>
                        <li>
                          <strong>Genus:</strong>
                          {value.genus ? value.genus : 'N/A'}
                        </li>
                        <li>
                          <strong>Species:</strong>
                          {value.species ? value.species : 'N/A'}
                        </li>
                      </ul>
                      <hr className="m-t-15" />
                      <ul className="deatil_features deatil_features_full">
                        <li>
                          <strong>Parts Used:</strong>
                          {value.parts_used ? value.parts_used : 'N/A'}
                        </li>
                        <li>
                          <strong>Habitat/Distribution:</strong>
                          {value.habitat ? value.habitat : 'N/A'}
                        </li>
                        <li>
                          <strong>Conservation Status:</strong>{' '}
                          {value.conservation_status
                            ? value.conservation_status
                            : 'N/A'}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {value.chemical_constituents.length !== 0 ? (
                  <div className="property_block_wrap style-2">
                    <div className="property_block_wrap_header">
                      <h4 className="property_block_title">
                        Chemical Constituents
                      </h4>
                    </div>
                    <div id="clTwo" className="panel-collapse collapse show">
                      <div className="block-body">
                        <div className="container">
                          <div className="pricing pricing-5">
                            <div className="table-responsive-md">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Chemical Name</th>
                                    <th scope="col">ZINC15</th>
                                    <th scope="col">PubChem</th>
                                    <th scope="col">DrugBank</th>
                                    <th scope="col">PhytoMed</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {value.chemical_constituents.map((a, i) => (
                                    <tr key={i}>
                                      <th scope="row">{i + 1}</th>
                                      <td>{a.name}</td>
                                      <td>
                                        {a.zinc === 'N/A' || a.zinc === '_' ? (
                                          'N/A'
                                        ) : (
                                          <a
                                            className="chemical_link"
                                            href={`https://zinc15.docking.org/substances/${a.zinc}`}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {a.zinc}
                                          </a>
                                        )}
                                      </td>
                                      <td>
                                        {a.pubchem === 'N/A' ||
                                        a.pubchem === '_' ? (
                                          'N/A'
                                        ) : (
                                          <a
                                            className="chemical_link"
                                            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${a.pubchem}`}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {a.pubchem}
                                          </a>
                                        )}
                                      </td>
                                      <td>
                                        {a.drugbank === 'N/A' ||
                                        a.drugbank === '_' ? (
                                          'N/A'
                                        ) : (
                                          <a
                                            className="chemical_link"
                                            href={`https://go.drugbank.com/drugs/${a.drugbank}`}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            {a.drugbank}
                                          </a>
                                        )}
                                      </td>
                                      <td>{a.phytomed}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    Chemical Constituents is comming soon !!
                  </div>
                )}

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">Uses</h4>
                  </div>

                  <div id="clThree" className="panel-collapse collapse show">
                    <div className="block-body">
                      <ul className="avl-features third color">
                        {value.uses.map((a, i) => (
                          <li key={i}>
                            <MdOutlineMedicalServices className="test" />
                            {a.url === '' ? (
                              a.name
                            ) : (
                              <a
                                className="chemical_link"
                                href={a.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {a.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">
                      Major Documentation
                    </h4>
                  </div>
                  <div id="clTwo" className="panel-collapse collapse show">
                    <div className="block-body">
                      <p>{value.documentation ? value.documentation : 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">References</h4>
                  </div>
                  <div id="clTwo" className="panel-collapse collapse show">
                    <div className="block-body">
                      <ul className="deatil_features deatil_features_full">
                        {value.references.map((a, i) => (
                          <li key={i}>
                            <strong>{i + 1}. </strong>
                            <a href="/">{a}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="like_share_wrap b-0">
                  <ul className="like_share_list">
                    <li>
                      <a
                        href="/"
                        className="btn btn-likes"
                        data-toggle="tooltip"
                        data-original-title="Download"
                      >
                        <BsDownload className="shareIcons" />
                        Export
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="btn btn-likes"
                        data-toggle="tooltip"
                        data-original-title="Share"
                      >
                        <FaShare className="shareIcons" />
                        Share
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="details-sidebar">
                  <div className="sidebar-widgets">
                    <h4>Similar Items</h4>
                    <Similar slug={splitLocation} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Index;
