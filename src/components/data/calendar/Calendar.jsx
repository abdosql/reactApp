import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
  CalendarContainer,
  ButtonContainer,
  PeriodButton,
  CalendarGlobalStyles,
  LeftContainer,
  RightContainer,
  YearButton,
  YearDropdown,
  YearOption,
} from '../../../styles/components/CalendarStyles';

const Calendar = ({ id, onDateSelect }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  // Référence pour détecter les clics en dehors du menu
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsYearDropdownOpen(false); // Fermer le menu si on clique en dehors
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRangeSelect = (info) => {
    const { start, end } = info;
    const endDate = new Date(end);
    endDate.setDate(endDate.getDate() - 1);
    endDate.setHours(23, 59, 59, 999);

    setSelectedPeriod('range');
    onDateSelect({ start: start.toISOString(), end: endDate.toISOString() }, 'range');
  };

  const handleDateClick = (info) => {
    const clickedDate = new Date(info.date);
    const endDate = new Date(clickedDate);
    endDate.setHours(23, 59, 59, 999);

    setSelectedPeriod('day');
    onDateSelect({ start: clickedDate.toISOString(), end: endDate.toISOString() }, 'day');
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    const now = new Date();
    const dateRange = calculateDateRange(period, now);
    onDateSelect(dateRange, period);
  };

  const calculateDateRange = (period, referenceDate) => {
    const start = new Date(referenceDate);
    const end = new Date(referenceDate);

    switch (period) {
      case 'today':
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        break;
      case 'week':
        start.setDate(start.getDate() - start.getDay());
        end.setDate(start.getDate() + 6);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        break;
      case 'month':
        start.setDate(1);
        end.setMonth(end.getMonth() + 1, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        break;
      default:
        break;
    }

    return { start: start.toISOString(), end: end.toISOString() };
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false); // Close dropdown after selecting
    const start = `${year}-01-01T00:00:00.000Z`;
    const end = `${year}-12-31T23:59:59.999Z`;
    onDateSelect({ start, end }, 'year');
  };

  return (
    <CalendarContainer>
      <ButtonContainer>
        <LeftContainer>
          <YearButton onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}>
            {selectedYear} ▼
          </YearButton>
          {isYearDropdownOpen && (
            <YearDropdown ref={dropdownRef}>
              {Array.from({ length: 10 }, (_, i) => (
                <YearOption key={i} onClick={() => handleYearSelect(2024 - i)}>
                  {2024 - i}
                </YearOption>
              ))}
            </YearDropdown>
          )}
        </LeftContainer>

        <RightContainer>
          <PeriodButton isSelected={selectedPeriod === 'today'} onClick={() => handlePeriodSelect('today')}>
            Today
          </PeriodButton>
          <PeriodButton isSelected={selectedPeriod === 'week'} onClick={() => handlePeriodSelect('week')}>
            This Week
          </PeriodButton>
          <PeriodButton isSelected={selectedPeriod === 'month'} onClick={() => handlePeriodSelect('month')}>
            This Month
          </PeriodButton>
        </RightContainer>
      </ButtonContainer>

      <div className="calendar-container flex justify-center">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          select={handleRangeSelect}
          dateClick={handleDateClick}
          selectable={true}
          validRange={{ start: '2024-01-01' }}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next',
          }}
          buttonText={{
            prev: '‹',
            next: '›',
          }}
          height="auto"
        />
      </div>

      <CalendarGlobalStyles />
    </CalendarContainer>
  );
};

export default Calendar;
