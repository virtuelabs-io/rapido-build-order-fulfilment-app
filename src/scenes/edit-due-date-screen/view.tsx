import React, { Dispatch } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import Styles from './styles'
import { EditDueDateScreenProps, EditDueDateScreenState, EditDueDateScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { RTitleText } from '../../components/atoms/r-title-text/view';
import { Card, RButton } from '../../components/atoms';
import DateTimePicker from '@react-native-community/datetimepicker';

class EditDueDateScreen extends React.Component<EditDueDateScreenProps, EditDueDateScreenState> {

    state = {
        selectedDate: new Date()
    }

    constructor(props: EditDueDateScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    selectDueDateAndNavigateBackHandler = (dueDate: string) => {
        this.props.navigation.goBack()
    }

    onDateChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            this.setState({ selectedDate: selectedDate })
        }
    };

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <KeyboardAvoidingView>
                    <View style={Styles.datePickerContianer}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.selectedDate}
                            mode='date'
                            display="default"
                            is24Hour={false}
                            minimumDate={new Date()}
                            maximumDate={new Date(2020, 6, 30)}
                            onChange={this.onDateChange}
                        />
                    </View>
                    <RButton name="Select Date" onPress={this.selectDueDateAndNavigateBackHandler} />
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: EditDueDateScreenProps): EditDueDateScreenProps => {
    return {
        ...localProps,
        dueDate: new Date()
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): EditDueDateScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditDueDateScreen)
