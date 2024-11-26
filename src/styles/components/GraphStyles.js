import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

export const CustomTooltip = styled.div`
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TooltipText = styled.p`
  margin: 0;
`;

export const TooltipValue = styled.p`
  margin: 5px 0 0 0;
  color: ${({ color }) => color || 'black'};
`;

export const NoDataMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 8px;
`;

export const NoDataText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #4A4A4A;
`;

export const NoDataSubText = styled.p`
  font-size: 0.875rem;
  color: #7C7C7C;
  margin-top: 8px;
`;

export const GradientDefinitions = [
  {
    id: "colorTemp",
    stops: [
      { offset: "5%", stopColor: '#E4B1F0', stopOpacity: 0.8 },
      { offset: "95%", stopColor: '#B9E0FF', stopOpacity: 0 }
    ]
  },
  {
    id: "colorHum",
    stops: [
      { offset: "5%", stopColor: '#4A90E2', stopOpacity: 0.8 },
      { offset: "95%", stopColor: '#007AFF', stopOpacity: 0 }
    ]
  }
];
