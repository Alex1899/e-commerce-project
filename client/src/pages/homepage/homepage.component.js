import React from "react";

import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.components";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
