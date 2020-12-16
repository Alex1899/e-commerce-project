const INITIAL_STATE = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://images.asos-media.com/products/reclaimed-vintage-inspired-unisex-logo-beanie-hat-in-khaki/20822630-1-green?$n_320w$&wid=317&fit=constrain",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://content.asos-media.com/-/media/images/articles/women/2017/09/16/save-spend-splurge/save-spend-splurge-article-02.jpg?h=700&w=480&la=en-GB&hash=F9C2A8250B67EE787536DB7EA72571A6",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://dapperdude.co.uk/wp-content/uploads/2018/06/CoolShoesforMen.jpg",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://content.asos-media.com/-/media/homepages/ww/2020/12/07/ww_stradivarius_moment_870x1110.jpg",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://content.asos-media.com/-/media/homepages/mw/2020/12/07/mw_quilting_moment_870x1110.jpg",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };

  const directoryReducer = (state=INITIAL_STATE, action) => {
      switch(action.type){
          default:
              return state;
      }
  }

  export default directoryReducer;