import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text } from 'react-native'
import { RHeadingText, RText } from '../../components/atoms'
import Styles from './styles'
import { DashboardScreenProps, DashboardScreenState, DashboardScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { Card } from '../../components/atoms/card/view';
import { AppState, AppActionTypes } from '../../store';
import { setTodaysKPIs, setAllOrdersData, setDeliveriesData, setReturnsData, set30DaySummaryData } from '../../store/analytics/actions'
import { connect } from 'react-redux';
import { FourKPI } from '../../components/atoms/four-kpis/view';
import { RBarChart } from '../../components/atoms/r-bar-chart/view'
import { RPieChart } from '../../components/atoms/r-pie-chart/view';

class DashboardScreen extends React.Component<DashboardScreenProps, DashboardScreenState> {

    constructor(props: DashboardScreenProps, state: DashboardScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <RHeadingText>Today</RHeadingText>
                <Card>
                    <FourKPI data={this.props.data.analyticsData.today} />
                </Card>
                <RHeadingText>All Orders</RHeadingText>
                <Card>
                    <FourKPI data={this.props.data.analyticsData.allOrders.kpiHolder} />
                    <RBarChart data={{ barChartProps: this.props.data.analyticsData.allOrders.viz }}/>
                </Card>
                <RHeadingText>Deliveries</RHeadingText>
                <Card>
                    <FourKPI data={this.props.data.analyticsData.deliveries.kpiHolder} />
                    <RBarChart data={{ barChartProps: this.props.data.analyticsData.deliveries.viz }}/>
                </Card>
                <RHeadingText>Returns</RHeadingText>
                <Card>
                    <FourKPI data={this.props.data.analyticsData.returns.kpiHolder} />
                    <RBarChart data={{ barChartProps: this.props.data.analyticsData.returns.viz }}/>
                </Card>
                <RHeadingText>30 Day Summary</RHeadingText>
                <Card>
                    <RPieChart data={{ pieChartProps: this.props.data.analyticsData.summary }}/>
                </Card>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: DashboardScreenProps): DashboardScreenProps => {
    return {
        ...localProps,
        data: {
            analyticsData: state.analytics
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): DashboardScreenDispatchProps => {
    return {
        setTodaysKPIs: (data: any) => dispatch(setTodaysKPIs(data)),
        setAllOrdersData: (data: any) => dispatch(setAllOrdersData(data)),
        setAllDeliveriesData: (data: any) => dispatch(setDeliveriesData(data)),
        setAllReturnsData: (data: any) => dispatch(setReturnsData(data)),
        set30DaySummaryData: (data: any) => dispatch(set30DaySummaryData(data))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DashboardScreen)
