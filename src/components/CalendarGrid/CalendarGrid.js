import React from 'react';
import moment from 'moment';
import styled from 'styled-components';



const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1.5px;
    background-color: #404040;
`;

const CellWrapper = styled.div`
    min-width: 140px;
    min-height: 80px;
    background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21'};
    color: #DDDCDD;
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

 const CalendarGrid = ({startDay}) => {

    const day = startDay.clone();

    const totalDays = 42;
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

    console.log(daysArray);

    return (
        <GridWrapper>
            {
                daysArray.map((dayItem) => (
                <CellWrapper 
                    key={dayItem.format('DDMMYYYY')}
                    isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                >
                    <RowInCell
                        justifyContent={'flex-end'}
                    >
                        <DayWrapper>
                            {dayItem.format('D')}
                        </DayWrapper>
                    </RowInCell>
                   
                </CellWrapper>)
            )}        
        </GridWrapper>
    )
}

export default CalendarGrid;
