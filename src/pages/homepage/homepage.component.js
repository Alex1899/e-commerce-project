import React from "react";

import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.components";


// const DirectoryWithSpinner = WithSpinner(Directory);

const HomePage = (props) => {
  // const { isCollectionFetching, fetchCollectionsStartAsync } = props;

  // useEffect(() => {
  //   fetchCollectionsStartAsync();
  // }, []);

  return (
    <HomePageContainer>
      <Directory/>
    </HomePageContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
// });

export default HomePage;
