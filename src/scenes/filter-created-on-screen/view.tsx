import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterCreatedOnScreenProps, FilterCreatedOnScreenState, FilterCreatedOnScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setCreatedOnFilter } from '../../store/orders/actions';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';
import { LAST_7_DAYS, LAST_14_DAYS, CURRENT_MONTH } from '../../store/orders/types';

class FilterCreatedOnScreen extends React.Component<FilterCreatedOnScreenProps, FilterCreatedOnScreenState> {

    constructor(props: FilterCreatedOnScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectCreatedOnAndNavigateBackHandler = (createdOn: string) => {
        var rawCreatedOn = createdOn.replaceAll(" ", "_").toUpperCase()
        if (rawCreatedOn == "LAST_7_DAYS") {
            this.props.setCreatedOn(LAST_7_DAYS)
        }
        if (rawCreatedOn == "LAST_14_DAYS") {
            this.props.setCreatedOn(LAST_14_DAYS)
        }
        if (rawCreatedOn == "CURRENT_MONTH") {
            this.props.setCreatedOn(CURRENT_MONTH)
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
                            onSelection={this.selectCreatedOnAndNavigateBackHandler}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterCreatedOnScreenProps): FilterCreatedOnScreenProps => {
    return {
        ...localProps,
        options: [ typeof LAST_7_DAYS, LAST_14_DAYS, CURRENT_MONTH ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterCreatedOnScreenDispatchProps => {
    return {
        setCreatedOn: (createdOn: typeof LAST_7_DAYS | typeof LAST_14_DAYS | typeof CURRENT_MONTH) => dispatch(setCreatedOnFilter(createdOn))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterCreatedOnScreen)
