import styled from "styled-components";
import { Timescale } from "../types/Activity";
import profilePic from "../images/image-jeremy.png"
import { devices } from "../styledComponents/devices";

const Panel = styled.div`
    grid-row: 1 / span 2;
    background-color: hsl(235, 46%, 20%);
    border-radius: 1em;
    display: flex;
    flex-flow: column;
`

const UpperPart = styled.div`
    border-radius: 1em;
    background-color: hsl(246, 80%, 60%);
    flex-grow: 1;
    padding: 1.8em;
    line-height: 1.3;

    
    @media ${devices.desktop} {
        height: 18em;
    }
`

const NameDiv = styled.div`
    font-weight: 300;
    font-size: 1.5em;
    
    @media ${devices.desktop} {
        font-size: 2.2em;

    }
`

const ProfileImg = styled.img`
    border: 3px solid white;
    border-radius: 50%;
    width: 4.4em;
    margin-right: 1em;
    float: left;

    @media ${devices.desktop} {
        margin-bottom: 2em;
        float: unset;
    }
`

const ReportForDiv = styled.div`
    font-size: 0.85em;
    font-weight: 300;
    color: hsl(236, 100%, 87%);
    margin-block: 1.15em 0.2em;
    
    @media ${devices.desktop} {
        margin-top: 0;
    }
`

const RadioDiv = styled.div`
    display: flex;
    margin: 1.8em;
    justify-content: space-between;
    
    @media ${devices.desktop} {
        flex-direction: column;
    }
`

const TextRadioLabel = styled.label<{}>`
    cursor: pointer;
    color: hsl(235, 45%, 61%);
    
    @media ${devices.desktop} {
        margin-bottom: 1.3em;

        &: last-child {
            margin-bottom: 0;
        }
    }
`

//compatibility feature for firefox, otherwise i would just use has() selector on parent
const TextRadioText = styled.div`
    color: hsl(235, 45%, 61%);
    
    input:checked ~ & {
        color: white;
    }

    &:hover {
        color: white;
    }
`

const TextRadio = styled.input.attrs<{}>(() => ({
    type: "radio"
})) <{}>`
    display: none;
`

interface LeftDashboardPanelProps {
    timescale: Timescale,
    setTimescale: (timescale: Timescale) => void
}

export default function LeftDashboardPanel(props: LeftDashboardPanelProps) {
    const { timescale, setTimescale } = props

    return <Panel>
        <UpperPart>
            <ProfileImg src={profilePic} alt="profile-picture" />
            <ReportForDiv>Report for</ReportForDiv>
            <NameDiv>Jeremy Robson</NameDiv>
        </UpperPart>
        <RadioDiv onChange={e => setTimescale((e.target as any).value)}>
            <TextRadioLabel>
                <TextRadio value={"daily"} name="timescale" defaultChecked={timescale === "daily"} />
                <TextRadioText>Daily</TextRadioText>
            </TextRadioLabel>
            <TextRadioLabel>
                <TextRadio value={"weekly"} name="timescale" defaultChecked={timescale === "weekly"} />
                <TextRadioText>Weekly</TextRadioText>
            </TextRadioLabel>
            <TextRadioLabel>
                <TextRadio value={"monthly"} name="timescale" defaultChecked={timescale === "monthly"} />
                <TextRadioText>Monthly</TextRadioText>
            </TextRadioLabel>
        </RadioDiv>
    </Panel>
}