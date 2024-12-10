import React from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import Breadcrumb from './Breadcrumb';

const ShowPage = ({ 
  title, 
  data, 
  onBack,
  breadcrumbItems 
}) => {
  return (
    <ShowPageContainer>
      <Header>
        <BackButton onClick={onBack}>
          <IoMdArrowBack />
          Back
        </BackButton>
        <Breadcrumb items={breadcrumbItems} />
      </Header>

      <ContentWrapper>
        <Title>{title}</Title>
        
        <DetailsGrid>
          {Object.entries(data).map(([key, value]) => (
            <DetailItem key={key}>
              <DetailLabel>{key}</DetailLabel>
              <DetailValue>
                {typeof value === 'boolean' 
                  ? <StatusBadge status={value ? 'active' : 'inactive'}>
                      {value ? 'Active' : 'Inactive'}
                    </StatusBadge>
                  : value
                }
              </DetailValue>
            </DetailItem>
          ))}
        </DetailsGrid>
      </ContentWrapper>
    </ShowPageContainer>
  );
};

const ShowPageContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: #4a5568;
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    color: #2d3748;
  }
`;

const ContentWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: #718096;
  text-transform: capitalize;
`;

const DetailValue = styled.span`
  font-size: 1rem;
  color: #2d3748;
  font-weight: 500;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => props.status === 'active' ? '#C6F6D5' : '#FED7D7'};
  color: ${props => props.status === 'active' ? '#2F855A' : '#9B2C2C'};
`;

export default ShowPage;
