import { Colors } from './colors';
// *
// * Colors
// *
const colors = ["#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#d9d9d9", "#f0f0f0"];

const charcoal = "#252525";
const grey = "#969696";
// *
// * Typography
// *
const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const baseProps = {
    width: 300,
    height: 500,
    padding: 5,
    colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 5,
    fill: Colors.primary,
    stroke: "transparent"
};

export type ChartBaseProps = {
    height: any
    padding: any
    domain: {
        y: [number, number]
    }
    barRatio: number
    animation: {
        duration: number
    }
    generalStyles: any
    axisStyles: any
}

export type BarChartProps = {
    chartBaseProps: ChartBaseProps
    data: any[],
    xFunc: (datum: any) => any
    yFunc: (datum: any) => any
}

const chartBaseProps: ChartBaseProps = {
    height: 100,
    padding: 10,
    animation: {
        duration: 500
    },
    domain: {
        y: [0, 1000]
    },
    barRatio: 0.8,
    axisStyles: {
        axis: { stroke: "transparent" },
        ticks: { stroke: "transparent" },
        tickLabels: { fill: "transparent" },
        labels: baseLabelStyles
    },
    generalStyles: {
        data: {
            fill: Colors.warning,
            padding: 8,
            strokeWidth: 0
        }
    }
}

export const barChartProps = {
    chartBaseProps: chartBaseProps,
    data: [],
    xFunc: (datum: any) => datum.x,
    yFunc: (datum: any) => datum.y
}
