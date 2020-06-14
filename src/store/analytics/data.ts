import { AnalyticsStateType } from './types'
import { barChartProps } from '../../commons/styles'
import { DummyData } from '../../models/dummy-data';
import { pieChartProps } from '../../commons/styles/viz-styles';
import { PERCENTAGE, ACTUAL, GOOD, SEVERE, INFO, WARNING } from './types'

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
    },
    notifications: [
        {
            id: 1,
            value: 0.11,
            units: PERCENTAGE,
            text: "Number of Orders received have been growing steadily by {value} over last 4 weeks",
            type: GOOD,
            ack: false
        },
        {
            id: 2,
            value: 0.60,
            units: PERCENTAGE,
            text: "Cosmetics seem to be the most commonly purchased across your products. Its share of total units sold is around {value}",
            type: GOOD,
            ack: false
        },
        {
            id: 3,
            value: 20,
            units: ACTUAL,
            text: "There seem to be around {value} orders which have been returned",
            type: WARNING,
            ack: false
        },
        {
            id: 4,
            value: 1224,
            units: ACTUAL,
            text: "You seem to have sold {value} units across all your products in the last 30 days",
            type: INFO,
            ack: false
        },
        {
            id: 5,
            value: 0.7,
            units: PERCENTAGE,
            text: "We have noticed a drop in sales for luxery items by {value}",
            type: SEVERE,
            ack: false
        }
    ]
}
