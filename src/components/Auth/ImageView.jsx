import React from 'react';
import { ImageWrapper, StyledImage } from '../../styles/components/ImageViewStyles';

const ImageView = ({ src, alt = 'Auth Page Image' }) => {
  return (
    <ImageWrapper>
      <StyledImage src="assets/AuthImageViewTest.jpg" alt="dashboard "/>
    </ImageWrapper>
  );
};

export default ImageView;
