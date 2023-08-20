import styled from "styled-components";
import { Activity, Timescale } from "../types/Activity";
import ellipsis from "../images/icon-ellipsis.svg"
import { devices } from "../styledComponents/devices";
import SkeletonableElement from "./SkeletonableElement";

interface ActivityPanelProps {
    activity: Activity | null,
    timescale: Timescale
}

interface PanelProps {
    readonly $backgroundColor: string,
    readonly $backgroundIcon: string,
    readonly $backgroundPositionY?: string
}

export const SActivityPanel = styled(ActivityPanel).attrs<PanelProps>(() => ({})) <PanelProps>`
    border-radius: 1em;
    background-color: white;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: ${props => props.$backgroundColor};
    background-image: ${props => props.$backgroundIcon};
    background-repeat: no-repeat;
    background-position: 86% ${props => props.$backgroundPositionY ?? "-6%"};
    cursor: pointer;

    &:hover>div:not(:has(.button:hover)) {
        background-color: ${props => props.theme.colors.desaturated}
    }
`
//this hover will not work in Firefox unless it gets "has()" selector implemented

const InnerPanel = styled.div`
    background-color: hsl(235, 46%, 20%);
    border-radius: 1em;
    position: relative;
    top: 18%;
    height: 82%;
    float: left;
    width: 100%;
    padding: 1.8em 2em 3.2em;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-row-gap: 0.1em;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;

    
    @media ${devices.desktop} {
        padding: 1.8em 2em;
    }
`

const ActivityTitle = styled.div`
    font-size: 18px;
    font-weight: 400;
    display: inline-block;
`

const Ellipsis = styled.img`
    float: right;
    cursor: pointer;
    justify-self: end;
    padding-block: 0.5em;

    &:hover {
        filter: contrast(5);
    }
`

const CurrentHrs = styled.div`
    font-size: 2.2em;
    font-weight: 300;
    
    @media ${devices.desktop} {
        font-size: 3em;
        grid-column: 1 / span 2;
        margin-top: 0.4em;
    }
`

const LastHrs = styled.div`
    font-size: 0.9em;
    font-weight: 300;
    color: ${props => props.theme.colors.pale}
`

export default function ActivityPanel(props: ActivityPanelProps) {
    const { activity, timescale, ...restProps } = props

    return <div {...restProps}>
        <InnerPanel>
            <ActivityTitle>
                <SkeletonableElement>{activity?.title}</SkeletonableElement>
            </ActivityTitle>
            <Ellipsis src={ellipsis} className="button" />
            <CurrentHrs>
                <SkeletonableElement loaded={activity !== undefined}>
                    {activity?.timeframes[timescale].current}hrs
                </SkeletonableElement>
            </CurrentHrs>
            <LastHrs>
                <SkeletonableElement loaded={activity !== undefined}>
                    {timescale === "daily" ? "Yesterday"
                        : timescale === "weekly" ? "Last Week"
                            : "Last Month"
                    }
                    -
                    {activity?.timeframes[timescale].previous}hrs
                </SkeletonableElement>
            </LastHrs>
        </InnerPanel>
    </div>
}