import React, { Dispatch } from 'react'
import { View, Button, AppState } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { ProfileScreenProps, ProfileScreenState, ProfileScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppActionTypes } from '../../store';
import { signOutUser } from '../../store/core/actions';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
    constructor(props: ProfileScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
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
