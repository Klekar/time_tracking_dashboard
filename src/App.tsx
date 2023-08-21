import React from 'react';
import AcivityDashboard from './components/AcivityDashboard';
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import { myTheme } from './styledComponents/myTheme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Rubik';
    }
`

const StyledApp = styled.div`
    background-color: hsl(226, 43%, 10%);
    min-height: 100svh;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Attribution = styled.footer`
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 0.8rem;
    text-align: center;

    a {
        color: ${props => props.theme.colors.desaturated}
    }
`

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <StyledApp>
                <main>
                    <h1 style={{ display: "none" }}>Time Tracking Dashboard</h1>
                    <AcivityDashboard />
                </main>
                <Attribution>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                    Coded by <a href="https://www.frontendmentor.io/profile/Klekar" target="_blank" rel="noreferrer">Karel Klečka</a>.
                </Attribution>
            </StyledApp>
        </ThemeProvider >
    );
}

export default App;
