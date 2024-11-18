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
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PeriodButton = styled.button`
  padding: 0.5rem 1rem;
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
`;
