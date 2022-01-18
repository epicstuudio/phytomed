import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { GET_ANALYTICS } from '../../constants/config';
import CountUp from 'react-countup';

const Index = () => {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    'aria-busy': loading,
  };
  const [plant, setPlant] = useState('');
  const [plantae, setPlantae] = useState('');
  const [fungi, setFungi] = useState('');
  const [chemicals, setChemicals] = useState('');
  useEffect(() => {
    const getsearch = async () => {
      await axios({
        url: GET_ANALYTICS,
        method: 'GET',
        dataType: 'json',
      }).then(({ data }) => {
        setPlant(data.plants);
        setPlantae(data.plantae);
        setFungi(data.fungi);
        setChemicals(data.chemicals);
      });
    };
    getsearch();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 text-center">
            <div className="sec-heading center mb-4">
              <h2>Achievement</h2>
              <p>
                We have the most comprehensive collection of plants found in
                Bagmati Province, as well as their chemical compositions and use
                in everyday life.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="achievement-wrap">
              <div className="achievement-content">
                <h4>
                  <CountUp
                    end={plant}
                    duration="2"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                </h4>
                <p>Total plants</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="achievement-wrap">
              <div className="achievement-content">
                <h4>
                  {' '}
                  <CountUp
                    end={plantae}
                    duration="2"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                </h4>
                <p>Total Plantae</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="achievement-wrap">
              <div className="achievement-content">
                <h4>
                  <CountUp
                    end={fungi}
                    duration="2"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                </h4>
                <p>Total Fungi</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="achievement-wrap">
              <div className="achievement-content">
                <h4>
                  <CountUp
                    end={chemicals}
                    duration="2"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                </h4>
                <p>Chemical Constituents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
