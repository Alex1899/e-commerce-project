import React from "react";
import { useHistory } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  
  return (
    <MenuItemContainer size={size} onClick={()=>history.push(linkUrl)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle  className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
