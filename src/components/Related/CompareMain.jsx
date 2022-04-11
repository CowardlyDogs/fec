import React, { useState, useEffect } from 'react';
import Helpers from '../APIHelpers.js';
import './css/Related.css';
import CompareDisplay from './CompareDisplay.jsx';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';


//compare same characteristics as those on Overview module (facts or values depending)
//[current product name]    []     [compared product name]
//[current product value]   []     [compared product value]
//etc...
//if fact is true for both, display with checkmark
//if comparison too long to display, should become scrollable
//product names remain fixed at top of list

const CompareMain = ({ mainId, currentId, compare, setCompare }) => {
  const [features,     setFeatures    ] = useState([]);
  const [rel,          setRel         ] = useState([]);
  const [main,         setMain        ] = useState([]);
  const [mainName,     setMainName    ] = useState('');
  const [relatedName,  setRelatedName ] = useState('');
  // console.log('features: ', features);
  // console.log('rel: ', rel);
  // console.log('main: ', main);

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


// {Object.keys(mainFeat).map((feature, index) => {
//   return mainFeat[feature].map((val, index) => {
//     return <CompareDisplay key={index} feature={feature} mainValue={val.main} relatedValue={val.related}/>;
//   });
// })}


const zxc =
{ Buttons: [ { main: 'Brass' }, { related: '"Blue Resin"' }, { related: '"Black Resin"' } ],
  Cut: [ { related: '"Skinny"' } ],
  Fabric: [ { main: 'Canvas' } ],
  Stitching: [ { related: '"Cross Stitch"' } ] };

const a =
  {
    Buttons: ['Brass', 'Blue Resin, Black Resin'],
    Frame: ['Brass', 'Blue Resin, Black Resin'],
    Fabric: ['Brass', 'Blue Resin, Black Resin']
  };

const related = [
  {feature: 'Cut', value: '"Skinny"'},
  {feature: 'Stitching', value: '"Cross Stitch"'},
  {feature: 'Buttons', value: '"Blue Resin"'},
  {feature: 'Buttons', value: '"Black Resin"'}
];
const main = [
  {feature: 'Fabric', value: 'Canvas'},
  {feature: 'Buttons', value: 'Brass'}
];

//previous setState for single object of features
// else {
//   for (var x = 0; x < res.features.length; x++) {
//     let tempArr = [];
//     let mainKey = res.features[x].feature;
//     let mainValue = res.features[x].value;
//     let mainPair = {main: mainValue};
//     tempArr.push(mainPair);
//     if (tempObj[mainKey]) {
//       tempObj[mainKey].push(mainPair);
//     } else {
//       tempObj[mainKey] = tempArr;
//     }
//   }
//   setMainName(res.name);
// }

// else {
//   for (var y = 0; y < res.features.length; y++) {
//     let tempArr = [];
//     let relatedKey = res.features[y].feature;
//     let relatedValue = res.features[y].value;
//     let relatedPair = {related: relatedValue};
//     tempArr.push(relatedPair);
//     if (tempObj[relatedKey]) {
//       tempObj[relatedKey].push(relatedPair);
//     } else {
//       tempObj[relatedKey] = tempArr;
//     }
//   }
//   setMainFeat(tempObj);
//   setRelatedName(res.name);
// }


//workingish solution 2
// console.log('RELATED: ', res.features);
// for (var y = 0; y < res.features.length; y++) {
//   let tempArr = [];
//   let relatedKey = res.features[y].feature;
//   let relatedValue = res.features[y].value;
//   let relatedPair = {related: relatedValue};
//   tempArr.push(relatedPair);
//   if (tempObj[relatedKey]) {
//     for (var z = 0; z < tempObj[relatedKey].length; z++) {
//       if (tempObj[relatedKey][z].related) {
//         relatedPair = tempObj[relatedKey][z].related = tempObj[relatedKey][z].related + relatedValue;
//       }
//       tempObj[relatedKey][z].related = relatedPair;
//     }
//   } else {
//     tempObj[relatedKey] = tempArr;
//   }
// }
// setMainFeat(tempObj);

// console.log('MAIN: ', res.features);
// for (var x = 0; x < res.features.length; x++) {
//   let tempArr = [];
//   let mainKey = res.features[x].feature;
//   let mainValue = res.features[x].value;
//   let mainPair = {main: mainValue};
//   tempArr.push(mainPair);
//   if (tempObj[mainKey]) {
//     for (var i = 0; i < tempObj[mainKey].length; i++) {
//       if (tempObj[mainKey][i].main) {
//         mainPair = tempObj[mainKey][i].main = tempObj[mainKey][i].main + mainValue;
//       }
//       tempObj[mainKey][i].main = mainPair;
//     }
//   } else {
//     tempObj[mainKey] = tempArr;
//   }
// }