import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/preview-component/collection-preview.component";

import "./collections-overview.styles.scss"

const CollectionsOverview = ({match, collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} match={match} {...otherCollectionProps} />
      ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview);