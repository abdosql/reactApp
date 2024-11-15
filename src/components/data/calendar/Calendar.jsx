import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarContainer, ButtonContainer, PeriodButton, CalendarGlobalStyles } from '../../../styles/components/CalendarStyles';

const Calendar = ({ id, onDateSelect }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const handleRangeSelect = (info) => {
    const { start, end } = info;
    const isSameDay = start.toDateString() === new Date(end.getTime() - 1).toDateString();
    const endDate = new Date(end);
    endDate.setDate(end.getDate() - 1);
    endDate.setHours(23, 59, 59, 999);

    setSelectedPeriod('range');
    onDateSelect(
      {
        start: start.toISOString(),
        end: endDate.toISOString()
      },
      'range'
    );
  };

  const handleDateClick = (info) => {
    const clickedDate = new Date(info.date);
    const endDate = new Date(clickedDate);
    endDate.setHours(23, 59, 59, 999);

    setSelectedPeriod('day');
    onDateSelect(
      {
        start: clickedDate.toISOString(),
        end: endDate.toISOString()
      },
      'day'
    );
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

  return (
    <CalendarContainer>
      <ButtonContainer>
        <PeriodButton isSelected={selectedPeriod === 'today'} onClick={() => handlePeriodSelect('today')}>
          Today
        </PeriodButton>
        <PeriodButton isSelected={selectedPeriod === 'week'} onClick={() => handlePeriodSelect('week')}>
          This Week
        </PeriodButton>
        <PeriodButton isSelected={selectedPeriod === 'month'} onClick={() => handlePeriodSelect('month')}>
          This Month
        </PeriodButton>
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
            right: 'next'
          }}
          buttonText={{
            prev: '‹',
            next: '›'
          }}
          height="auto"
        />
      </div>

      <CalendarGlobalStyles />
    </CalendarContainer>
  );
};

export default Calendar;
