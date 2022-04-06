import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import API_KEY from '../../../config.js';
import Carousel from './Carousel.jsx';


function RelatedItems() {

  const [relatedIds, setRelatedIds] = useState([]);
  const [items, setItems] = useState([]);

  const product_id = '65632';

  console.log('Items: ', items);
  let tempItems = [];

  useEffect(() => {
    let tempIds;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/related`, {
      headers: {Authorization: API_KEY}})
      .then(res => {tempIds = res.data})
      .then(() => tempIds.forEach((id, index) => {
        console.log('RELATED IDS: ', tempIds)
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
          headers: {Authorization: API_KEY}
        })
        .then(res => {
          tempItems.push(res.data)
          console.log(tempItems)
        })
        .catch(err => console.log('Err 2nd GET: ', err))
      }))
      //this line not working
      .then(() => setItems(items => {items = tempItems}))

  }, []);

  //if loading true then render?
  return (
      <Carousel items={tempItems}/>
  )
}


export default RelatedItems;