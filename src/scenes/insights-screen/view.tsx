import React, { Dispatch } from 'react'
import { ScrollView, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { InsightsScreenProps, InsightsScreenState, InsightsScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles'
import { AppState, AppActionTypes } from '../../store'
import { connect } from 'react-redux'
import { setAckInsight } from '../../store/analytics/actions';
import { InsightHolder } from '../../components/molecules/insight-holder/view';
import { InsightAllAck } from '../../components/molecules/insight-all-ack/view'
import Constants from '../../commons/constants/index';

class InsightsScreen extends React.Component<InsightsScreenProps, InsightsScreenState> {
    constructor(props: InsightsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    ackNotification = (insightId: number) => {
        this.props.ackInsight(insightId)
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.props.data.insights.map((insight, index) => {
                    if (!insight.ack) {
                        return (
                            <InsightHolder
                                key={insight.id.toString()}
                                insight={insight}
                                onAck={this.ackNotification.bind(this, insight.id)}
                            />
                        )
                    }
                })}
                <InsightAllAck
                    icon="rocket1"
                    text1={Constants.DEFAULT_TEXT.insightsText1}
                    text2={Constants.DEFAULT_TEXT.insightsText2}
                />
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: InsightsScreenProps): InsightsScreenProps => {
    return {
        ...localProps,
        data: {
            insights: state.analytics.notifications!
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): InsightsScreenDispatchProps => {
    return {
        ackInsight: (insightId: number) => dispatch(setAckInsight(insightId))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(InsightsScreen)
