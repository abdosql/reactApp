import React from 'react';
import styled from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';

const Breadcrumb = ({ items }) => {
  return (
    <BreadcrumbWrapper>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem 
            onClick={item.onClick} 
            isLast={index === items.length - 1}
            isClickable={!!item.onClick}
          >
            {item.label}
          </BreadcrumbItem>
          {index < items.length - 1 && (
            <Separator>
              <RiArrowRightSLine />
            </Separator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;

const BreadcrumbItem = styled.span`
  font-size: 0.875rem;
  color: ${props => props.isLast ? '#8d72e1' : '#6c757d'};
  font-weight: ${props => props.isLast ? '500' : '400'};
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  transition: color 0.2s;

  &:hover {
    color: ${props => props.isClickable ? '#8d9eff' : props.isLast ? '#8d72e1' : '#6c757d'};
  }
`;

const Separator = styled.span`
  display: flex;
  align-items: center;
  color: #6c757d;
  margin: 0 0.5rem;
  font-size: 1rem;
`;

export default Breadcrumb; 