import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsLoaded, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { compose } from 'redux';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionsLoaded(state),
  });

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage);
  
export default CollectionsPageContainer;