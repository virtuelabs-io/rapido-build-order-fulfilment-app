import { BarChartProps, PieChartProps } from "../../commons/styles/viz-styles"

export type KpiProps = {
    label: string
    value: number | string
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
}
