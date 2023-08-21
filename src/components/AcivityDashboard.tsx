import { useEffect, useState } from "react"
import fetchData from "../data/GetData"
import { Activity, Timescale } from "../types/Activity"
import { SActivityPanel } from "./ActivityPanel"
import styled from "styled-components"
import LeftDashboardPanel from "./LeftDashboardPanel"
import { devices } from "../styledComponents/devices"

const Dashboard = styled.div`
    color: white;
    display: grid;
    width: 320px;
    grid-gap: 1.4em;
    padding-block: 4em;


    @media ${devices.desktop} {
        grid-template-rows: repeat(2, 48%);
        grid-template-columns: repeat(4, 23%);
        justify-content: center;
        width: 1000px;
        padding: 0;
    }
`

export default function AcivityDashboard() {
    const [data, setData] = useState<(Activity | null)[]>(Array.from(Array(6)))
    const [timescale, setTimescale] = useState<Timescale>("daily")

    useEffect(() => {
        fetchData().then(data => {
            setData(data)
        })
    }, [])

    return <Dashboard>
        <LeftDashboardPanel setTimescale={setTimescale} timescale={timescale} />

        {data.map((activity, i) => <SActivityPanel
            activity={activity}
            timescale={timescale}
            key={i}
            $backgroundColor={activityMap[activity?.title ?? "default"].bgColor}
            $backgroundIcon={`url(./images/${activityMap[activity?.title ?? "default"].bgIcon})`}
            $backgroundPositionY={activityMap[activity?.title ?? "default"].bgPositionY}
        />)}
    </Dashboard>
}

const activityMap: {
    [title: string]: {
        bgColor: string,
        bgIcon: string,
        bgPositionY?: number
    }
} = {
    "default": {
        bgColor: "#555",
        bgIcon: ""
    },
    "Work": {
        bgColor: "hsl(15, 100%, 70%)",
        bgIcon: "icon-work.svg",
    },
    "Play": {
        bgColor: "hsl(195, 74%, 62%)",
        bgIcon: "icon-play.svg",
        bgPositionY: -5
    },
    "Study": {
        bgColor: "hsl(348, 100%, 68%)",
        bgIcon: "icon-study.svg"
    },
    "Exercise": {
        bgColor: "hsl(145, 58%, 55%)",
        bgIcon: "icon-exercise.svg",
        bgPositionY: -1
    },
    "Social": {
        bgColor: "hsl(264, 64%, 52%)",
        bgIcon: "icon-social.svg",
        bgPositionY: -12
    },
    "Self Care": {
        bgColor: "hsl(43, 84%, 65%)",
        bgIcon: "icon-self-care.svg",
        bgPositionY: -8
    }
}