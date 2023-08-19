import React from 'react';
import logo from './logo.svg';
import './App.css';
import AcivityDashboard from './components/AcivityDashboard';
import { ThemeProvider, styled } from 'styled-components';
import { myTheme } from './styledComponents/myTheme';

const StyledApp = styled.div`
  background-color: hsl(226, 43%, 10%);
  min-height: 100svh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <StyledApp>
        <header>

        </header>
        <main>
          <AcivityDashboard />
        </main>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
