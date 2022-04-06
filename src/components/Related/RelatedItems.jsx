import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import API_KEY from '../../../config.js';
import Carousel from './Carousel.jsx';


function RelatedItems() {

  const [relatedIds, setRelatedIds] = useState(() => firstGet());
  const [items, setItems] = useState([]);

  // console.log('Items: ', items);
  console.log(relatedIds);


  function firstGet() {
    const product_id = '65632';
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/related`, {
      headers: {Authorization: API_KEY}})
      .then(res => {
        let resData = res.data
        setRelatedIds({resData});
      })
      .catch(err => console.log('Err 2nd GET: ', err));
      console.log(relatedIds);

  };


  function relatedFunc(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
        headers: {Authorization: API_KEY}
      })
      .then(res => {
        setItems((items) => items.push(res.data))
        // console.log(tempItems)
      })
      .catch(err => console.log('Err 2nd GET: ', err))
  }


  // function relatedData() {
  //   tempIds.forEach((id, index) => {
  //     // console.log('RELATED IDS: ', tempIds)
  //     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
  //       headers: {Authorization: API_KEY}
  //     })
  //     .then(res => {
  //       tempItems.push(res.data)
  //       // console.log(tempItems)
  //     })
  //     .catch(err => console.log('Err 2nd GET: ', err))
  //   });
  // };

  // useEffect(() => {
  //   firstGet();
  //   console.log('firstGet invoked');
  //   console.log('RelatedIds: ', relatedIds)
  //   // relatedData();
  //   // console.log('relatedData invoked');
  //   // console.log('tempItems: ', tempItems);
  // }, []);

  useEffect(() => {
    let temp = relatedIds;
    temp.forEach((id, index) => {
      relatedFunc(id)
      // console.log('RELATED IDS: ', tempIds)
    });
  }, [relatedIds])


  // useEffect(() => {
  //   let tempItems = [];
  //   let tempIds;
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/related`, {
  //     headers: {Authorization: API_KEY}})
  //     .then(res => {tempIds = res.data})
  //     .then(() => tempIds.forEach((id, index) => {
  //       console.log('RELATED IDS: ', tempIds)
  //       axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
  //         headers: {Authorization: API_KEY}
  //       })
  //       .then(res => {
  //         tempItems.push(res.data)
  //         console.log(tempItems)
  //       })
  //       .catch(err => console.log('Err 2nd GET: ', err))
  //     }))
  //     //this line not working
  //     .then(() => setItems(items => {items = tempItems}))

  // }, []);

  //if loading true then render?
  return (
      <Carousel items={items}/>
  )
}


export default RelatedItems;