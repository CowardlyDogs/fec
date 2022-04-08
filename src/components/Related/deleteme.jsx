import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../../../config.js';
import Carousel from './Carousel.jsx';


function RelatedItems() {

  const [relatedIds  ,    setRelatedIds   ] = useState([]);
  const [items       ,    setItems        ] = useState([]);
  const [stylesData  ,    setStylesData   ] = useState([]);
  const [loading     ,    setLoading      ] = useState(true);

  const product_id = '65631';

  console.log('items: ', items);
  console.log('related ids: ', relatedIds);
  console.log('stylesData: ', stylesData)
  console.log('loading: ', loading)


  //get related ids
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${product_id}/related`, {
      headers: {
        Authorization: API.TOKEN
      }
    })
      .then((res) => {
        setRelatedIds(res.data)
      })
      .catch((err) => {
        console.error(err);
      })

  }, []);

  //get product info
  useEffect(() => {
    relatedIds.map((id, x) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
        headers: {Authorization: API.TOKEN}
      })
      .then(res => {
        setItems(items => items = [...items, res.data])
      })
      .catch(err => console.log('Err 2nd GET: ', err))
    });
  }, [relatedIds])

  //get stylesData info
  useEffect(() => {
    relatedIds.map((id, x) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {
        headers: {Authorization: API.TOKEN}
      })
      .then(res => {
        setStylesData(stylesData => stylesData = [...stylesData, res.data])
      })
      .catch(err => console.log('Err 2nd GET: ', err))
    });
  }, [relatedIds])


  //set loading false
  useEffect(() => {
    setLoading(false);
  }, [items])

  if (loading) {
    return <div></div>
  };

  return (
      <Carousel items={items} stylesData={stylesData}/>
  )
}


export default RelatedItems;


//axios flow

//first get related ids

// [
//   65632,
//   65633,
//   65638,
//   65637
// ]

//then get product info of related ids (pictures not included)

//product name = .name
//category = .category

// {
//   "id": 65632,
//   "campus": "rfp",
//   "name": "Bright Future Sunglasses",
//   "slogan": "You've got to wear shades",
//   "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//   "category": "Accessories",
//   "default_price": "69.00",
//   "created_at": "2022-03-29T15:08:08.445Z",
//   "updated_at": "2022-03-29T15:08:08.445Z",
//   "features": [
//       {
//           "feature": "Lenses",
//           "value": "Ultrasheen"
//       },
//       {
//           "feature": "UV Protection",
//           "value": null
//       },
//       {
//           "feature": "Frames",
//           "value": "LightCompose"
//       }
//   ]
// }

//then get styles info for pictures

//default photo url = results[0].photos.thumbnail_url
//price = results[0].original_price
//sale price = results[0].sale_price

// {
//   "product_id": "65632",
//   "results": [
//       {
//           "style_id": 404880,
//           "name": "Black Lenses & Black Frame",
//           "original_price": "69.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": null,
//                   "url": null
//               }
//           ],
//           "skus": {
//               "null": {
//                   "quantity": null,
//                   "size": null
//               }
//           }
//       },
//       {
//           "style_id": 404881,
//           "name": "Black Lenses & Gold Frame",
//           "original_price": "69.00",
//           "sale_price": null,
//           "default?": true,
//           "photos": [
//               {
//                   "thumbnail_url": null,
//                   "url": null
//               }
//           ],
//           "skus": {
//               "null": {
//                   "quantity": null,
//                   "size": null
//               }
//           }
//       },
//       {
//           "style_id": 404882,
//           "name": "Gold Lenses & Black Frame",
//           "original_price": "69.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": null,
//                   "url": null
//               }
//           ],
//           "skus": {
//               "null": {
//                   "quantity": null,
//                   "size": null
//               }
//           }
//       },
//       {
//           "style_id": 404883,
//           "name": "Gold Lenses & Gold Frame",
//           "original_price": "69.00",
//           "sale_price": null,
//           "default?": false,
//           "photos": [
//               {
//                   "thumbnail_url": null,
//                   "url": null
//               }
//           ],
//           "skus": {
//               "null": {
//                   "quantity": null,
//                   "size": null
//               }
//           }
//       }
//   ]
// }