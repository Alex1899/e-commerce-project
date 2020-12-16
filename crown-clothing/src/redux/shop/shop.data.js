const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://images.asos-media.com/products/asos-daysocial-oversized-beanie-in-black/20869427-1-black?$n_480w$&wid=476&fit=constrain',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://images.asos-media.com/products/tommy-hilfiger-classic-flag-baseball-cap-in-navy/6360418-1-navy?$n_480w$&wid=476&fit=constrain',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://images.asos-media.com/products/asos-daysocial-co-ord-5-panel-cap-in-khaki-cord/21041176-1-khaki?$n_480w$&wid=476&fit=constrain',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://images.asos-media.com/products/polo-ralph-lauren-logo-baseball-cap-in-beige/4851099-1-beige?$n_480w$&wid=476&fit=constrain',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://images.asos-media.com/products/asos-design-bobble-beanie-in-khaki-cable-knit/21617509-1-khaki?$n_480w$&wid=476&fit=constrain',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://images.asos-media.com/products/reclaimed-vintage-inspired-unisex-logo-bucket-hat-in-black/21146267-1-black?$n_480w$&wid=476&fit=constrain',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://images.asos-media.com/products/reclaimed-vintage-inspired-unisex-logo-fisherman-beanie-hat-in-chocolate/20822627-1-chocolate?$n_480w$&wid=476&fit=constrain',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://images.asos-media.com/products/the-north-face-recycled-66-classic-cap-in-black/21377761-1-tnfblack?$n_480w$&wid=476&fit=constrain',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://images.asos-media.com/products/napapijri-faro-beanie-in-blue/22944037-1-blumarine?$n_480w$&wid=476&fit=constrain',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://images.asos-media.com/products/asos-design-trainers-in-light-blue-with-chunky-sole/21008672-1-blue?$n_480w$&wid=476&fit=constrain',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://images.asos-media.com/products/asos-design-trainers-in-dark-grey-with-chunky-sole/21008674-1-grey?$n_480w$&wid=476&fit=constrain',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://images.asos-media.com/products/nike-air-max-97-trainers-in-triple-black/14020996-1-tripleblack?$n_480w$&wid=476&fit=constrain',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://images.asos-media.com/products/puma-x-ray-trainer-in-white/20613716-1-white?$n_480w$&wid=476&fit=constrain',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://images.asos-media.com/products/pullbear-high-top-trainer-with-chunky-sole-in-blue/22864614-1-blue?$n_480w$&wid=476&fit=constrain',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/25f9aefa-b981-4e20-becc-1e809c77de26/lebron-18-sisterhood-basketball-shoe-k6mR0z.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/42f8a672-7945-4f9c-ab52-fc0d81f5df0b/lebron-witness-5-basketball-shoe-H81NdB.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e05a5046-3699-4378-af8b-8e493ddca2d7/zoom-freak-2-basketball-shoe-whjvs4.jpg',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c09e7dcd-3a24-4b5c-9cf8-31f1409ceecf/pro-1-4-zip-hoodie-pkdDXK.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://images.asos-media.com/products/berghaus-colshaw-jacket-in-beige/21262626-1-lightgrey?$n_320w$&wid=317&fit=constrain',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://images.asos-media.com/products/berghaus-tempest-89-jacket-in-black-grey/21262933-1-black?$n_320w$&wid=317&fit=constrain',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://images.asos-media.com/products/asos-design-oversized-wadded-gilet-in-black-with-borg-collar/21526477-1-black?$n_320w$&wid=317&fit=constrain',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://images.asos-media.com/products/asos-design-polar-fleece-sweatshirt-with-half-zip-and-nylon-panels-in-dusty-pink/21721938-1-mistyrose?$n_320w$&wid=317&fit=constrain',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://images.asos-media.com/products/river-island-satin-crop-top-co-ord-bra-in-khaki/23136719-1-khaki?$n_320w$&wid=317&fit=constrain',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://images.asos-media.com/products/river-island-lace-sleeved-bodyfit-knit-top-in-black/23045165-1-black?$n_320w$&wid=317&fit=constrain',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://images.asos-media.com/products/new-look-petite-3-piece-ribbed-lounge-set-in-camel/22993969-1-camel?$n_320w$&wid=317&fit=constrain',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://images.asos-media.com/products/ripndip-great-wave-hoodie-in-blue/22691203-1-babyblue?$n_320w$&wid=317&fit=constrain',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://images.asos-media.com/products/in-the-style-x-billie-faiers-knitted-contrast-stripe-jumper-in-brown-multi/22572716-1-multi?$n_320w$&wid=317&fit=constrain',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://images.asos-media.com/products/asos-weekend-collective-co-ord-oversized-sweatshirt-with-tonal-embroidery-logo-in-white/22460111-1-white?$n_320w$&wid=317&fit=constrain',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://images.asos-media.com/products/only-petite-puff-sleeve-jumper-in-pink/22394919-1-pink?$n_320w$&wid=317&fit=constrain',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://images.asos-media.com/products/nike-basketball-nba-brooklyn-nets-logo-hoodie-in-black/20558681-1-black?$n_320w$&wid=317&fit=constrain',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://images.asos-media.com/products/nike-training-therma-pullover-hoodie-in-black/21299590-1-black?$n_320w$&wid=317&fit=constrain',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://images.asos-media.com/products/adidas-originals-premium-joggers-co-ord-in-off-white/21140569-1-white?$n_320w$&wid=317&fit=constrain',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://images.asos-media.com/products/adidas-training-long-sleeve-t-shirt-in-black-with-logo-taping/22290933-1-black?$n_320w$&wid=317&fit=constrain',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://images.asos-media.com/products/adidas-training-3-bar-logo-shorts-in-black/21285048-1-black?$n_320w$&wid=317&fit=constrain',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://images.asos-media.com/products/adidas-running-space-joggers-in-black/21278760-1-black?$n_320w$&wid=317&fit=constrain',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
