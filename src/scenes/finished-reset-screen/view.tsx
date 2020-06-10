import React, { Dispatch } from 'react'
import { View } from 'react-native'
import Styles from './styles'
import { FinishedResetScreenProps, FinishedResetScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { RText, RButton, RHeadingText, Card } from '../../components/atoms'

class FinishedResetScreen extends React.Component<FinishedResetScreenProps, FinishedResetScreenState> {

    constructor(props: FinishedResetScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    loginScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.popToTop()
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Card>
                    <RHeadingText>Success!</RHeadingText>
                    <RText>Your password has been reset sucessfully. You can now try to login.</RText>
                    <RButton name="Login" onPress={this.loginScreenNavigationHandler} />
                </Card>
            </View>
        )
    }
}


export default FinishedResetScreen
