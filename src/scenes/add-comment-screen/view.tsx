import React from 'react'
import { View, Button } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { AddCommentScreenProps, AddCommentScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class AddCommentScreen extends React.Component<AddCommentScreenProps, AddCommentScreenState> {
    constructor(props: AddCommentScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
                <Button title="Post" onPress={this.backNavigation} />
            </View>
        )
    }
}

export default AddCommentScreen
