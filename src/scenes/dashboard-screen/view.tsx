import React from 'react'
import { ScrollView, View, Dimensions, Text } from 'react-native'
import { RHeadingText, RText } from '../../components/atoms'
import Styles from './styles'
import { DashboardScreenProps, DashboardScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native"
import { barChartProps, BarChartProps } from '../../commons/styles'
import { DummyData } from '../../models/dummy-data'
import { Card } from '../../components/atoms/card/view';

export class DashboardScreen extends React.Component<DashboardScreenProps, DashboardScreenState> {
    private barChartConfig: BarChartProps
    private screenWidth: number
    private padding: number
    constructor(props: DashboardScreenProps, state: DashboardScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
        this.barChartConfig = barChartProps
        this.barChartConfig.data = DummyData.barType.slice(0, 60)
        this.barChartConfig.xFunc = (datum) => datum.id
        this.barChartConfig.yFunc = (datum) => datum.noOfOrders
        this.screenWidth = Math.round(Dimensions.get('window').width * 0.79);
        this.padding = Math.round(Dimensions.get('window').width * 0.01);
        console.log(this.screenWidth, this.padding)
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <RHeadingText>New Orders</RHeadingText>
                <Card>
                    <View style={Styles.kpiParentContainer}>
                        <View style={Styles.kpiContainer}>
                            <Text style={Styles.kpiLabel}>Today</Text>
                            <Text style={Styles.kpiValue}>80</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Yesterday</Text>
                            <Text style={Styles.kpiValue}>120</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Last 7 Days</Text>
                            <Text style={Styles.kpiValue}>280</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Last 30 Days</Text>
                            <Text style={Styles.kpiValue}>720</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={Styles.vizHeader}>60 Day Trend</Text>
                        <VictoryChart
                            width={this.screenWidth}
                            height={this.barChartConfig.chartBaseProps.height}
                            domain={{ y: this.barChartConfig.chartBaseProps.domain.y }}
                            animate={this.barChartConfig.chartBaseProps.animation}
                            padding={this.padding}>
                            <VictoryBar
                                data={this.barChartConfig.data}
                                x={this.barChartConfig.xFunc}
                                y={this.barChartConfig.yFunc}
                                style={this.barChartConfig.chartBaseProps.generalStyles}
                                barRatio={this.barChartConfig.chartBaseProps.barRatio}
                            />
                            <VictoryAxis style={this.barChartConfig.chartBaseProps.axisStyles} />
                        </VictoryChart>
                    </View>
                </Card>
                <RHeadingText>Delivered Orders</RHeadingText>
                <Card>
                    <View style={Styles.kpiParentContainer}>
                        <View style={Styles.kpiContainer}>
                            <Text style={Styles.kpiLabel}>Today</Text>
                            <Text style={Styles.kpiValue}>10</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Yesterday</Text>
                            <Text style={Styles.kpiValue}>34</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Last 7 Days</Text>
                            <Text style={Styles.kpiValue}>280</Text>
                        </View>
                        <View style={Styles.kpiContainer}>
                        <Text style={Styles.kpiLabel}>Last 30 Days</Text>
                            <Text style={Styles.kpiValue}>720</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={Styles.vizHeader}>60 Day Trend</Text>
                        <VictoryChart
                            width={this.screenWidth}
                            height={this.barChartConfig.chartBaseProps.height}
                            domain={{ y: this.barChartConfig.chartBaseProps.domain.y }}
                            animate={this.barChartConfig.chartBaseProps.animation}
                            padding={this.padding}>
                            <VictoryBar
                                data={this.barChartConfig.data}
                                x={this.barChartConfig.xFunc}
                                y={this.barChartConfig.yFunc}
                                style={this.barChartConfig.chartBaseProps.generalStyles}
                                barRatio={this.barChartConfig.chartBaseProps.barRatio}
                            />
                            <VictoryAxis style={this.barChartConfig.chartBaseProps.axisStyles} />
                        </VictoryChart>
                    </View>
                </Card>
            </ScrollView>
        )
    }
}

