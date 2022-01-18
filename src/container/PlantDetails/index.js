import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { GET_PLANT } from '../../constants/config';
import './style.css';

const Index = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  useEffect(() => {
    const getSinglePlant = async () => {
      await axios({
        url: GET_PLANT + splitLocation[2],
        method: 'GET',
        dataType: 'json',
      })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((e) => {
          alert('Network Error');
        });
    };
    getSinglePlant();
  }, []);
  return (
    <section className="gray-simple">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="property_block_wrap style-2 p-4">
              <div className="prt-detail-title-desc">
                <span className="prt-types sale">Plantae</span>
                <h3>Pteris wallinchiana J.Agardh</h3>
                <p>Synonym : Campteria wallichiana (J.Agardh)T.Moore</p>
                <p>Nepali Name : Dalumo</p>
                <p>
                  English Name : N/A
                  <span className="m-l-40">Sanskrit Name : N/A</span>
                </p>
                <div className="list-fx-features">
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon">
                      <img src="assets/img/bed.svg" width="13" alt="" />
                    </div>
                    3 Beds
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon">
                      <img src="assets/img/bathtub.svg" width="13" alt="" />
                    </div>
                    1 Bath
                  </div>
                  <div className="listing-card-info-icon">
                    <div className="inc-fleat-icon">
                      <img src="assets/img/move.svg" width="13" alt="" />
                    </div>
                    800 sqft
                  </div>
                </div>
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
                      <strong>Kingdom:</strong>Plantae
                    </li>
                    <li>
                      <strong>Division:</strong>Tracheophyta
                    </li>
                    <li>
                      <strong>ClassName:</strong>Polypodiopsida
                    </li>
                    <li>
                      <strong>Order</strong>Polypodiales
                    </li>
                    <li>
                      <strong>Family:</strong>Pteridaceae
                    </li>
                    <li>
                      <strong>Genus:</strong>Pteris L.
                    </li>
                    <li>
                      <strong>Species:</strong>Pteris longipes D.Don
                    </li>
                  </ul>
                  <hr className="m-t-15" />
                  <ul className="deatil_features deatil_features_full">
                    <li>
                      <strong>Parts Used:</strong>Leaves
                    </li>
                    <li>
                      <strong>Habitat/Distribution:</strong>India, S China,
                      Taiwan, Japan, Malaysia, Philippines
                    </li>
                    <li>
                      <strong>Conservation Status:</strong>N/A
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">Major Documentation</h4>
              </div>
              <div id="clTwo" className="panel-collapse collapse show">
                <div className="block-body">
                  <div className="container">
                    <div className="pricing pricing-5">
                      <div className="row">
                        <div className="col-lg-3 text-center col-md-4 col-sm-12">
                          <ul>
                            <li>
                              <strong>Chemical Name</strong>
                            </li>
                            <li>
                              <span>Pterosin S</span>
                            </li>
                            <li>
                              <span>Flavonoids</span>
                            </li>
                            <li>
                              <span>Phenolic Compounds</span>
                            </li>
                            <li>
                              <span>Sterol</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 text-center">
                          <ul>
                            <li>
                              <strong>ZINC15</strong>
                            </li>
                            <li>
                              <span>N/A</span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span>
                                <a href="#">ZINC896409</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 text-center pricing--emphasise">
                          <ul>
                            <li>
                              <strong>PubChem</strong>
                            </li>
                            <li>
                              <span>
                                <a href="#">44201981</a>
                              </span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span>
                                <a href="#">1107</a>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12 text-center">
                          <ul>
                            <li>
                              <strong>DrugBank</strong>
                            </li>
                            <li>
                              <span>N/A</span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span>
                                <a href="#">DB11325</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                          <ul>
                            <li>
                              <strong>PhytoMed</strong>
                            </li>
                            <li>
                              <span>PM0005W8</span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span></span>
                            </li>
                            <li>
                              <span>PM000315</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">Uses</h4>
              </div>

              <div id="clThree" className="panel-collapse collapse show">
                <div className="block-body">
                  <ul className="avl-features third color">
                    <li>Bleeding</li>
                    <li>Cuts and Wounds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">Major Documentation</h4>
              </div>
              <div id="clTwo" className="panel-collapse collapse show">
                <div className="block-body">
                  <p>
                    A Compendium of Medicinal Plants in Nepal by Baral and
                    Kurmi,2006
                  </p>
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
                    <li>
                      <strong>1. </strong>
                      <a href="#">
                        Benniamin, A. (2011). Medicinal ferns of North Eastern
                        India with special reference to Arunachal Pradesh.
                      </a>
                    </li>
                    <li>
                      <strong>2. </strong>
                      <a href="#">
                        Pteris wallichiana J.Agardh in GBIF Secretariat (2021).
                        GBIF Backbone Taxonomy. Checklist dataset
                        https://doi.org/10.15468/39omei accessed via GBIF.org on
                        2021-09-13.
                      </a>
                    </li>
                    <li>
                      <strong>3. </strong>
                      <a href="#">
                        Wang, R. T., Wan, Z., Gao, F., Khan, A., Fan, J., Yang,
                        X. Y., ... & Zhao, T. R. (2017). Chemical constituents
                        of Pteris wallichiana J. Agardh (Pteridaceae).
                        Biochemical Systematics and Ecology, 71, 225-229.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">Gallery</h4>
              </div>

              <div id="clSev" className="panel-collapse collapse">
                <div className="block-body">
                  <ul className="list-gallery-inline">
                    <li>
                      <a href="assets/img/p-1.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-1.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/p-2.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-2.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/p-3.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-3.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/p-4.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-4.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/p-5.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-5.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/p-6.jpg" className="mfp-gallery">
                        <img
                          src="assets/img/p-6.jpg"
                          className="img-fluid mx-auto"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">102 Reviews</h4>
              </div>

              <div id="clEight" className="panel-collapse collapse show">
                <div className="block-body">
                  <div className="author-review">
                    <div className="comment-list">
                      <ul>
                        <li className="article_comments_wrap">
                          <article>
                            <div className="article_comments_thumb">
                              <img src="assets/img/user-1.jpg" alt="" />
                            </div>
                            <div className="comment-details">
                              <div className="comment-meta">
                                <div className="comment-left-meta">
                                  <h4 className="author-name">
                                    Rosalina Kelian
                                  </h4>
                                  <div className="comment-date">
                                    19th May 2018
                                  </div>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim laborumab. perspiciatis unde omnis
                                  iste natus error.
                                </p>
                              </div>
                            </div>
                          </article>
                        </li>
                        <li className="article_comments_wrap">
                          <article>
                            <div className="article_comments_thumb">
                              <img src="assets/img/user-5.jpg" alt="" />
                            </div>
                            <div className="comment-details">
                              <div className="comment-meta">
                                <div className="comment-left-meta">
                                  <h4 className="author-name">
                                    Rosalina Kelian
                                  </h4>
                                  <div className="comment-date">
                                    19th May 2018
                                  </div>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim laborumab. perspiciatis unde omnis
                                  iste natus error.
                                </p>
                              </div>
                            </div>
                          </article>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="reviews-checked theme-cl">
                    <i className="fas fa-arrow-alt-circle-down mr-2"></i>See
                    More Reviews
                  </a>
                </div>
              </div>
            </div>

            <div className="property_block_wrap style-2">
              <div className="property_block_wrap_header">
                <h4 className="property_block_title">Write a Review</h4>
              </div>

              <div id="clTen" className="panel-collapse collapse show">
                <div className="block-body">
                  <form className="simple-form">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control ht-80"
                            placeholder="Messages"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Property Title"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <button
                            className="btn btn-theme-light-2 rounded"
                            type="submit"
                          >
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="like_share_wrap b-0">
              <ul className="like_share_list">
                <li>
                  <a
                    href="JavaScript:Void(0);"
                    className="btn btn-likes"
                    data-toggle="tooltip"
                    data-original-title="Download"
                  >
                    <i className="fas fa-download"></i>Export
                  </a>
                </li>
                <li>
                  <a
                    href="JavaScript:Void(0);"
                    className="btn btn-likes"
                    data-toggle="tooltip"
                    data-original-title="Share"
                  >
                    <i className="fas fa-share"></i>Share
                  </a>
                </li>
              </ul>
            </div>

            <div className="details-sidebar">
              <div className="sides-widget">
                <div className="sides-widget-header">
                  <div className="agent-photo">
                    <img src="assets/img/user-6.jpg" alt="" />
                  </div>
                  <div className="sides-widget-details">
                    <h4>
                      <a href="#">Shivangi Preet</a>
                    </h4>
                    <span>
                      <i className="lni-phone-handset"></i>(91) 123 456 7895
                    </span>
                  </div>
                  <div className="clearfix"></div>
                </div>

                <div className="sides-widget-body simple-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control">
                      I'm interested in this property.
                    </textarea>
                  </div>
                  <button className="btn btn-black btn-md rounded full-width">
                    Send Message
                  </button>
                </div>
              </div>

              <div className="sides-widget">
                <div className="sides-widget-header">
                  <div className="sides-widget-details">
                    <h4>
                      <a href="#">Shivangi Preet</a>
                    </h4>
                    <span>View your Interest Rate</span>
                  </div>
                  <div className="clearfix"></div>
                </div>

                <div className="sides-widget-body simple-form">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sale Price"
                      />
                      <i className="ti-money"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Down Payment"
                      />
                      <i className="ti-money"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Loan Term (Years)"
                      />
                      <i className="ti-calendar"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Interest Rate"
                      />
                      <i className="fa fa-percent"></i>
                    </div>
                  </div>

                  <button className="btn btn-black btn-md rounded full-width">
                    Calculate
                  </button>
                </div>
              </div>
              <div className="sidebar-widgets">
                <h4>Featured Property</h4>

                <div className="sidebar_featured_property">
                  <div className="sides_list_property">
                    <div className="sides_list_property_thumb">
                      <img
                        src="assets/img/p-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html">
                          Loss vengel New Apartment
                        </a>
                      </h4>
                      <span>
                        <i className="ti-location-pin"></i>Sans Fransico
                      </span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          <div className="property_types_vlix sale">
                            For Sale
                          </div>
                        </div>
                        <div className="lists_property_price_value">
                          <h4>$4,240</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sides_list_property">
                    <div className="sides_list_property_thumb">
                      <img
                        src="assets/img/p-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html">
                          Montreal Quriqe Apartment
                        </a>
                      </h4>
                      <span>
                        <i className="ti-location-pin"></i>Liverpool, London
                      </span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          <div className="property_types_vlix">For Rent</div>
                        </div>
                        <div className="lists_property_price_value">
                          <h4>$7,380</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sides_list_property">
                    <div className="sides_list_property_thumb">
                      <img
                        src="assets/img/p-7.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html">
                          Curmic Studio For Office
                        </a>
                      </h4>
                      <span>
                        <i className="ti-location-pin"></i>Montreal, Canada
                      </span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          <div className="property_types_vlix buy">For Buy</div>
                        </div>
                        <div className="lists_property_price_value">
                          <h4>$8,730</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sides_list_property">
                    <div className="sides_list_property_thumb">
                      <img
                        src="assets/img/p-5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4>
                        <a href="single-property-1.html">
                          Montreal Quebec City
                        </a>
                      </h4>
                      <span>
                        <i className="ti-location-pin"></i>Sreek View, New York
                      </span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          <div className="property_types_vlix">For Rent</div>
                        </div>
                        <div className="lists_property_price_value">
                          <h4>$6,240</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
