import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { FilterOrderNumberScreenProps, FilterOrderNumberScreenState, FilterOrderNumberScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setOrderNumberFilter } from '../../store/orders/actions';
import { Search } from '../../components/atoms/search/view';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';

class FilterOrderNumberScreen extends React.Component<FilterOrderNumberScreenProps, FilterOrderNumberScreenState> {

    state = {
        searchInput: ""
    }

    constructor(props: FilterOrderNumberScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = (orderNumber: number) => {
        this.props.setOrderNumber(orderNumber)
        this.props.navigation.goBack()
    }

    searchOrderNumber = (partialOrderNumber: string) => {
        this.setState({ searchInput: partialOrderNumber })
        console.log(`Searched partial order number is ${partialOrderNumber}`)
    }

    selectOrderNumberAndNavigateBackHandler = (selectedOrder: string) => {
        this.props.setOrderNumber(Number(selectedOrder))
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <Search
                    value={this.state.searchInput}
                    placeHolder="Search for Order Number"
                    keyboardType="number-pad"
                    onChange={this.searchOrderNumber} />
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value}
                            value={value}
                            onSelection={this.selectOrderNumberAndNavigateBackHandler}
                        />
                    )
                } )}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: FilterOrderNumberScreenProps): FilterOrderNumberScreenProps => {
    return {
        ...localProps,
        options: [
            "1000012",
            "1000013",
            "1000014",
            "1000015",
            "1000016",
            "1000017",
            "1000018",
            "1000019",
            "1000020",
            "1000021",
        ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): FilterOrderNumberScreenDispatchProps => {
    return {
        setOrderNumber: (orderNumber: number) => dispatch(setOrderNumberFilter(orderNumber))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FilterOrderNumberScreen)
