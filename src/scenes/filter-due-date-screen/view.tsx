import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterDueDateScreenProps, FilterDueDateScreenState, FilterDueDateScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setDueDateFilter } from '../../store/orders/actions';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';
import { TODAY, TOMORROW, THIS_WEEK } from '../../store/orders/types';

class FilterDueDateScreen extends React.Component<FilterDueDateScreenProps, FilterDueDateScreenState> {

    constructor(props: FilterDueDateScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectDueDateAndNavigateBackHandler = (dueDate: string) => {
        var rawDueDate = dueDate.replaceAll(" ", "_").toUpperCase()
        if (rawDueDate == "TODAY") {
            this.props.setDueDate(TODAY)
        }
        if (rawDueDate == "TOMORROW") {
            this.props.setDueDate(TOMORROW)
        }
        if (rawDueDate == "THIS_WEEK") {
            this.props.setDueDate(THIS_WEEK)
        }
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value}
                            value={value.replaceAll("_", " ")}
                            onSelection={this.selectDueDateAndNavigateBackHandler}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterDueDateScreenProps): FilterDueDateScreenProps => {
    return {
        ...localProps,
        options: [
            TODAY,
            TOMORROW,
            THIS_WEEK
        ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterDueDateScreenDispatchProps => {
    return {
        setDueDate: (dueDate: typeof TODAY | typeof TOMORROW | typeof THIS_WEEK) => dispatch(setDueDateFilter(dueDate))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterDueDateScreen)
