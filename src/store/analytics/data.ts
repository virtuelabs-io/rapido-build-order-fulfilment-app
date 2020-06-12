import { AnalyticsStateType } from './types'
import { barChartProps } from '../../commons/styles'
import { DummyData } from '../../models/dummy-data';
import { pieChartProps } from '../../commons/styles/viz-styles';


export const AnalyticsInitialState: AnalyticsStateType = {
    today: {
        firstKpi: {
            label: "Open Orders",
            value: "17"
        },
        secondKpi: {
            label: "To Be Delivered",
            value: "14"
        },
        thirdKpi: {
            label: "Delivered",
            value: "18"
        },
        fourthKpi: {
            label: "Returns",
            value: "3"
        }
    },
    allOrders: {
        kpiHolder: {
            firstKpi: {
                label: "Today",
                value: "81"
            },
            secondKpi: {
                label: "Yesterday",
                value: "93"
            },
            thirdKpi: {
                label: "Last 7 Days",
                value: "279"
            },
            fourthKpi: {
                label: "Last 30 Days",
                value: "793"
            }
        },
        viz: {
            ...barChartProps,
            data: DummyData.barType.slice(0, 60),
            xFunc: (datum: any) => datum.id,
            yFunc: (datum: any) => datum.noOfOrders
        }
    },
    deliveries: {
        kpiHolder: {
            firstKpi: {
                label: "Today",
                value: "18"
            },
            secondKpi: {
                label: "Yesterday",
                value: "71"
            },
            thirdKpi: {
                label: "Last 7 Days",
                value: "154"
            },
            fourthKpi: {
                label: "Last 30 Days",
                value: "793"
            }
        },
        viz: {
            ...barChartProps,
            data: DummyData.barType.slice(0, 60),
            xFunc: (datum: any) => datum.id,
            yFunc: (datum: any) => datum.noOfOrders
        }
    },
    returns: {
        kpiHolder: {
            firstKpi: {
                label: "Today",
                value: "3"
            },
            secondKpi: {
                label: "Yesterday",
                value: "7"
            },
            thirdKpi: {
                label: "Last 7 Days",
                value: "18"
            },
            fourthKpi: {
                label: "Last 30 Days",
                value: "31"
            }
        },
        viz: {
            ...barChartProps,
            data: DummyData.barType.slice(0, 60),
            xFunc: (datum: any) => datum.id,
            yFunc: (datum: any) => datum.noOfOrders
        }
    },
    summary: {
        ...pieChartProps,
        data: DummyData.pieType,
        xFunc: (datum: any) => datum.size,
        yFunc: (datum: any) => datum.noOfOrders,
        dimField: "noOfOrders"
    }
}
