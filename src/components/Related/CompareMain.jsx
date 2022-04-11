import React, { useState, useEffect } from 'react';
import Helpers from '../APIHelpers.js';
import './css/Related.css';
import CompareDisplay from './CompareDisplay.jsx';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const CompareMain = ({ mainId, currentId, compare, setCompare }) => {
  const [features,     setFeatures    ] = useState([]);
  const [rel,          setRel         ] = useState([]);
  const [main,         setMain        ] = useState([]);
  const [mainName,     setMainName    ] = useState('');
  const [relatedName,  setRelatedName ] = useState('');

  useEffect(() => {
    let tempFeatures = new Set([]);
    Helpers.getProduct(mainId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        let temp1 = res.features;
        temp1.map(feat => { tempFeatures.add(feat.feature); });
        const mainFilter = temp1.map(relItem => ({
          feature: relItem.feature,
          main: temp1
            .filter(relObj => relObj.feature === relItem.feature)
            .map(relItem => relItem.value)
            .join(', ')
        }));
        let tempMain = {};
        mainFilter.map(obj => {
          tempMain[obj.feature] = obj.main.replaceAll('"', '');
        });
        setMain(tempMain);
        setMainName(res.name);
      }
    });
    Helpers.getProduct(currentId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        let temp2 = res.features;
        temp2.map(feat => { tempFeatures.add(feat.feature); });
        const relatedFilter = temp2.map(relItem => ({
          feature: relItem.feature,
          related: temp2
            .filter(relObj => relObj.feature === relItem.feature)
            .map(relItem => relItem.value)
            .join(', ')
        }));
        let tempRel = {};
        relatedFilter.map(obj => {
          tempRel[obj.feature] = obj.related.replaceAll('"', '');
        });
        setRel(tempRel);
        setRelatedName(res.name);
      }
    });
    setFeatures(tempFeatures);
  }, []);

  const showToggle = (e) => {
    e.stopPropagation();
    if (e.target.className === 'compare-background' || e.target.className === 'compare-title') {
      setCompare(false);
    } else {
      setCompare(true);
    }
  };

  return (
    compare ? (
      <div className="compare-background" onClick={(e) => showToggle(e)}>
        <h1 className="compare-title">
          Comparing
        </h1>
        <div className="main-compare">
          <div className="prod-names">
            <h2>{mainName}</h2><h3 className="compare-arrow"><CompareArrowsIcon/></h3><h2>{relatedName}</h2>
          </div>
          <CompareDisplay feature={[...features]} rel={rel} main={main}/>
        </div>
      </div>
    ) : null );
};



export default CompareMain;