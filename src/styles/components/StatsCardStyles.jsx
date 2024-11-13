import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0.5rem;
  flex: 3;
  * Optional: Set a min width if desired */
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  color : rgb(81,96,123);
  font-weight:400;
  
`;

export const CardValue = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color : rgb(40,40,40);
  text-align:left;
`;

export const CardLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

export const CardsSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allows cards to wrap to the next line if the screen is too small */
  gap: 1rem; /* Add space between rows and columns for better spacing */
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;       /* Adjust as needed */
  height: 25px;      /* Adjust as needed */
  border-radius: 20%; /* Creates a soft oval shape */
  color: #fff;       /* Icon color */
  margin-bottom: 8px; /* Space between icon and title */
`;

export const FirstWrapper = 
styled.div`
display:flex;
justify-content: space-between;
`;

export const SecondWrapper = styled.div`


`;

export const Label = styled.div`
color: rgb(97,107,129);

`;