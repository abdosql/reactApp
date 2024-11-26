import styled from 'styled-components';
import { FaTemperatureHigh, FaTint } from 'react-icons/fa';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

export const StatsWrapper = styled.div`
  padding: 16px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 450px;
  margin: 20px auto;
`;

export const Header = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  color: #4a4a4a;
  text-align: center;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.3s ease;
  background-color: ${({ isActive }) => (isActive ? '#8d9eff' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : '#4a4a4a')};
  border: 1px solid #d1d5db;

  &:hover {
    background-color: #8d9eff;
    color: white;
  }

  box-shadow: ${({ isActive }) => (isActive ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;


export const StatItem = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  /* Appliquer une ligne de séparation discrète uniquement au premier élément */
  &:first-child {
    border-bottom: 1px solid #e0e0e0; /* Ligne de séparation plus légère */
  }

  /* Eliminer l'ombre pour les autres éléments */
  &:not(:first-child) {
    box-shadow: none;
  }
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 16px;
  color: ${({ type }) => (type === 'temperature' ? '#8d72e1' : '#3AA6B9')};
`;

export const StatLabel = styled.h3`
  font-weight: 600;
  color: #4a4a4a;
`;

export const StatDetails = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permet de déplacer les éléments à la ligne suivante */
  justify-content: space-between; /* Espace égal entre les éléments */
  align-items: center;
  font-size: 0.875rem;
  color: #4a4a4a;
  width: 100%;
  gap: 5px;
`;

export const StatValue = styled.span`
  color: ${({ isMax }) => (isMax ? '#e53e3e' : '#3182ce')};
  display: flex;
  align-items: center;
  margin-left: 8px;
  gap: 11px;
`;
