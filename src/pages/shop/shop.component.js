import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.collections";
import { Route } from "react-router-dom";
import CollectionsPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
