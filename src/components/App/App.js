import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header.js';
import Monitor from '../Monitor/Monitor.js';
import CalendarGrid from '../CalendarGrid/CalendarGrid.js';

const ShadowWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

function App() {
  return (
    <ShadowWrapper>
      <Header />
      <Monitor />
      <CalendarGrid  />
    </ShadowWrapper>
  );
}

export default App;
