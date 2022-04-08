

const relatedids = [
  65632,
  65633,
  65638,
  65637
]


// product name = .name
// category = .category

const productinfo = {
  "id": 65632,
  "campus": "rfp",
  "name": "Bright Future Sunglasses",
  "slogan": "You've got to wear shades",
  "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  "category": "Accessories",
  "default_price": "69.00",
  "created_at": "2022-03-29T15:08:08.445Z",
  "updated_at": "2022-03-29T15:08:08.445Z",
  "features": [
      {
          "feature": "Lenses",
          "value": "Ultrasheen"
      },
      {
          "feature": "UV Protection",
          "value": null
      },
      {
          "feature": "Frames",
          "value": "LightCompose"
      }
  ]
}

// default photo url = results[0].photos.thumbnail_url
// price = results[0].original_price
// sale price = results[0].sale_price

const stylesinfo = {
  "product_id": "65632",
  "results": [
      {
          "style_id": 404880,
          "name": "Black Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 404881,
          "name": "Black Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 404882,
          "name": "Gold Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 404883,
          "name": "Gold Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      }
  ]
}

const reviews =
  {
    "product": "65631",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1175803,
            "rating": 4,
            "summary": "the cake is a lie",
            "recommend": true,
            "response": null,
            "body": "At Aperture Science Enrichment Laboratories, we pride ourselves on the best products. The Enrichment Center reminds you that the Aperture Science Weighted Companion Cube will never threaten to stab you and, in fact, cannot speak. In the event that the Weighted Companion Cube does speak, the Enrichment Center urges you to disregard its advice.",
            "date": "2022-04-08T00:00:00.000Z",
            "reviewer_name": "GLaDOS",
            "helpfulness": 69,
            "photos": [
                {
                    "id": 2259120,
                    "url": "https://www.pngitem.com/pimgs/m/282-2822626_weighted-companion-cube-portal-companion-cube-hd-png.png"
                }
            ]
        },
        {
            "review_id": 1175743,
            "rating": 2,
            "summary": "y'all need to stop reporting reviews",
            "recommend": true,
            "response": null,
            "body": "I put on these fatigues and instantly it brought me back...Potato Boy. I shuddered... I hadn't felt Potato Boy's presence in years. What mysteries lay behind those sad potato eyes? His thoughts- an enigma. His motives- forever unknown. All things fade in time, but I will never forget you, Potato Boy.",
            "date": "2022-04-07T00:00:00.000Z",
            "reviewer_name": "rememberingPotato",
            "helpfulness": 33,
            "photos": []
        },
        {
            "review_id": 1175746,
            "rating": 4,
            "summary": "Hey stop reporting reviews please lol",
            "recommend": true,
            "response": null,
            "body": "Please don't report this review, it hides the reviews from the get requests",
            "date": "2022-04-07T00:00:00.000Z",
            "reviewer_name": "noreport",
            "helpfulness": 12,
            "photos": []
        },
        {
            "review_id": 1155713,
            "rating": 4,
            "summary": "was meh",
            "recommend": true,
            "response": null,
            "body": "pretty meh i but could be better",
            "date": "2022-03-31T00:00:00.000Z",
            "reviewer_name": "Bob Bloblaw",
            "helpfulness": 2,
            "photos": [
                {
                    "id": 2219385,
                    "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                }
            ]
        },
        {
            "review_id": 1175798,
            "rating": 3,
            "summary": "help im stuck",
            "recommend": false,
            "response": null,
            "body": "inside this review form, they won't let me out, I've been here for 4 days and I'm starting to lose my mind!!!",
            "date": "2022-04-08T00:00:00.000Z",
            "reviewer_name": "danny",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2259112,
                    "url": "https://res.cloudinary.com/df5y8o3sk/image/upload/v1649402835/ckjmm0agt8uylllzig0u.webp"
                }
            ]
        }
    ]
}