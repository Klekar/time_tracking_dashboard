import React from 'react';
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
            <StyledApp>
                <main>
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
