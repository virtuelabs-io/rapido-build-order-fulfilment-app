import React, { Dispatch } from 'react'
import { Text, View, Button, AppState } from 'react-native'
import Styles from './styles'
import { ProfileScreenProps, ProfileScreenState, ProfileScreenDispatchProps } from './types'
import { StackStyleConstants } from '../../commons/styles';
import { AppActionTypes } from '../../store';
import { signOutUser } from '../../store/core/actions';
import { connect } from 'react-redux';


class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
    constructor(props: ProfileScreenProps) {
        super(props)
        this.props.navigation.setOptions({
            title: this.props.route.params.title,
            headerStyle: StackStyleConstants.headerStyle,
            headerTintColor: StackStyleConstants.headerTintColor,
            headerTitleStyle: StackStyleConstants.headerTitleStyle,
            headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>{this.props.route.params.title}</Text>
                <Button title="Logout" onPress={this.props.signOut} />
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProfileScreenProps): {} => {
    console.log(state, localProps)
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProfileScreenDispatchProps => {
    return {
        signOut: () => dispatch(signOutUser())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (ProfileScreen)
