export type Activity = {
    title: string,
    timeframes: {
        daily: ActivityTimeframe,
        weekly: ActivityTimeframe,
        monthly: ActivityTimeframe
    },
}

export type ActivityTimeframe = {
    current: number,
    previous: number
}

export type Timescale = "daily" | "weekly" | "monthly"