import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.collections";
import { Route } from "react-router-dom";
import CollectionsPage from "../collection/collection.component";

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPage}/>
    </div>
  );
};


export default ShopPage;