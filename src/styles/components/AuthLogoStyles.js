import styled from 'styled-components';

export const LogoWrapper = styled.div`
  position: fixed;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  display: flex;
  gap: 5px;
  align-items: center;
  z-index: 1000; /* Ensures it stays on top */
`;


export const LogoText = styled.div`
padding-top:10px;
 letter-spacing: 2px;
 font-size:1rem;
`;

export const LogoImage = styled.img`
  width: 52px;
  height: 52px;

`;