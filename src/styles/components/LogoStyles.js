import styled from 'styled-components';

export const LogoImage = styled.img.attrs({
  src: '/assets/logo.svg',
  alt: 'Logo',
  loading: 'eager',
})`
  width: 10rem;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`; 