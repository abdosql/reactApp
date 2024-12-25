import styled, { createGlobalStyle } from 'styled-components';

export const CalendarContainer = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  max-width: 500px;
`;

export const ButtonContainer = styled.div`
margin-left:15px;
  display: grid;
  grid-template-columns: auto 1fr; /* Le conteneur gauche prend la taille de son contenu, et le droit s'étend */
  align-items: center;
  gap: 0.5rem; /* Ajuste l'espacement entre les colonnes */
   margin-bottom: 1rem;
`;


export const PeriodButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.3s;
  color: ${(props) => (props.isSelected ? 'white' : '#1a202c')};
  background: ${(props) => (props.isSelected ? '#8d9eff' : 'white')};
  border: 1px solid #e2e8f0;
  &:hover {
    background: #8d9eff;
    color: white;
  }
`;
export const YearButton = styled.button`
  background: #8d9eff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex; /* Aligne les éléments en ligne */
  align-items: center; /* Aligne verticalement */
  justify-content: center; /* Centre horizontalement */
  gap: 0.25rem; /* Ajuste l'espace entre le texte et la flèche */

  &:hover {
    background: #7c8cd0;
  }
    
`;


export const YearDropdown = styled.div`
  position: absolute;
  top: 40px; 
  left: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 100px; 
`;

export const YearOption = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #f7fafc;
  }
`;
export const LeftContainer = styled.div`
  flex: 0; /* Désactive la prise d'espace supplémentaire */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative; /* Nécessaire pour le dropdown */
  margin-right: 0; /* Supprime l'espace après le bouton */
  width: auto; /* Assure que la largeur dépend de son contenu */
`;



export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Assure un alignement naturel à gauche */
  gap: 1rem; /* Réduit l'espacement entre les boutons */
  margin-left: 20px; /* Supprime toute marge supplémentaire */
`;


export const CalendarGlobalStyles = createGlobalStyle`
  .fc {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
  }
  .fc .fc-button {
    background: white;
    border: 1px solid #e2e8f0;
    color: #1a202c;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.3s;
  }
  .fc .fc-button:hover {
    background: #f7fafc;
    border-color: #cbd5e1;
  }
  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }
  .fc-theme-standard td, .fc-theme-standard th {
    border-color: #e2e8f0;
  }
  .fc .fc-daygrid-day:hover {
    background: #f7fafc;
  }
  .fc .fc-highlight {
    background: #bfdbfe;
  }
  .fc-day-today {
    background-color: #e5e7eb !important;
    color: #1f2937 !important;
  }
  .fc .fc-prev-button, .fc .fc-next-button {
    border-radius: 50%;
    background: #8d9eff;
    color: white;
    width: 30px;
    height: 30px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fc .fc-prev-button:hover, .fc .fc-next-button:hover {
    background: #7c8cd0;
  }
  .fc-daygrid-day {
    height: 40px;
  }
  .fc .fc-daygrid-body-natural .fc-daygrid-day-events {
    margin-bottom: 0em;
  }
    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
  min-height: 1em; 
  position: relative;
}
  .fc-toolbar-chunk {
  margin: 0 !important; /* Réduit les marges des sections */
}

`;
