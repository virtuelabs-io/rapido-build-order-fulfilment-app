import { BarChartProps, PieChartProps } from "../../commons/styles/viz-styles"

export const PERCENTAGE = 'PERCENTAGE'
export const ACTUAL = 'ACTUAL'

export const INFO = 'INFO'
export const GOOD = 'GOOD'
export const WARNING = 'WARNING'
export const SEVERE = 'SEVERE'

export type KpiProps = {
    label: string
    value: number | string
}

export type NotificationProps = {
    id: number
    value: number
    units: typeof PERCENTAGE | typeof ACTUAL
    text: string
    type: typeof INFO | typeof WARNING | typeof SEVERE | typeof GOOD
    ack: boolean
}

export type KpiHolder = {
    firstKpi: KpiProps
    secondKpi: KpiProps
    thirdKpi: KpiProps
    fourthKpi: KpiProps
}

export type AnalyticalComponentProps = {
    kpiHolder: KpiHolder
    viz: BarChartProps
}

export type AnalyticsStateType = {
    today: KpiHolder
    allOrders: AnalyticalComponentProps
    deliveries: AnalyticalComponentProps
    returns: AnalyticalComponentProps
    summary: PieChartProps
    notifications?: NotificationProps[]
}
