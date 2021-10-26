import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

import Header from '../Header/Header.js';
import Monitor from '../Monitor/Monitor.js';
import CalendarGrid from '../CalendarGrid/CalendarGrid.js';

const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-right: 1px solid #464648;
  border-bottom: 1px solid #464648;
  border-left: 1px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

function App() {

  const today = moment();
  const startDay = today.clone().startOf('month').startOf('week');

  return (
    <ShadowWrapper>
      <Header />
      <Monitor today={today} />
      <CalendarGrid  startDay={startDay} />
    </ShadowWrapper>
  );
}

export default App;
