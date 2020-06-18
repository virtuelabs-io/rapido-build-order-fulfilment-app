import React, { Dispatch } from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './styles'
import { EditAssigneeScreenProps, EditAssigneeScreenState, EditAssigneeScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { Search } from '../../components/atoms/search/view';
import { SimpleListHolder } from '../../components/molecules/simple-list-item/view';

class EditAssigneeScreen extends React.Component<EditAssigneeScreenProps, EditAssigneeScreenState> {

    state = {
        searchInput: ""
    }

    constructor(props: EditAssigneeScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = (assignee: string) => {
        // this.props.setAssignee(assignee)
        this.props.navigation.goBack()
    }

    searchAssignee = (partialAssignee: string) => {
        this.setState({ searchInput: partialAssignee })
        console.log(`Searched partial assignee is ${partialAssignee}`)
    }

    selectAssigneeAndNavigateBackHandler = (assignee: string) => {
        // this.props.setAssignee(assignee)
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <Search
                    value={this.state.searchInput}
                    placeHolder="Search for Assignees"
                    keyboardType="name-phone-pad"
                    onChange={this.searchAssignee} />
                {this.props.options.map((value, index) => {
                    return (
                        <SimpleListHolder
                            key={value}
                            value={value}
                            onSelection={this.selectAssigneeAndNavigateBackHandler}
                        />
                    )
                } )}
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: EditAssigneeScreenProps): EditAssigneeScreenProps => {
    return {
        ...localProps,
        options: [
            "Employee A",
            "Employee B",
            "Employee C",
            "Employee D",
            "Employee E"
        ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): EditAssigneeScreenDispatchProps => {
    return {
        // setAssignee: (assignee: string) => dispatch(setAssigneeEdit(assignee))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditAssigneeScreen)
