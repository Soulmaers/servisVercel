

export interface GlobalDataOP {
    jobDay: string,
    planMonth: number,
    factBalls: number
    factMonth: string,
    planDay: number,
    factDay: string
}


export interface ManagersDataOP {
    name: string,
    color: string,
    calls: string,
    factballs: number,
    planMonth: number,
    factMonth: string,
    planDay: number,
    factDay: string,
    month: string,
    factMonthNumber: number
}

export interface GlobalDataTM {
    jobDay: string,
    planMonth: number,
    application: number,
    qualityApplications: number,
    factDay: string,
    factMonth: string
}


export interface ManagersDataTM {
    name: string,
    color: string,
    calls: string,
    calls30sec: string,
    calls60sec: string,
    application: number,
    qualityApplications: number,
    factDay: string,
    factMonth: string,
    factMonthNumber: number
}
