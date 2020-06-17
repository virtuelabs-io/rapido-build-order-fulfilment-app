import React from 'react'
import { View, Button, KeyboardAvoidingView } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { AddCommentScreenProps, AddCommentScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { ScrollView } from 'react-native-gesture-handler'
import { CommentInput } from '../../components/molecules/comment-input/view'
import { Card } from '../../components/atoms/card/view';

class AddCommentScreen extends React.Component<AddCommentScreenProps, AddCommentScreenState> {

    state = {
        value: ""
    }

    constructor(props: AddCommentScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    backNavigation = () => {
        this.props.navigation.goBack()
    }

    updateValue = (value: string) => {
        this.setState({ value: value })
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Card>
                        <CommentInput
                            value={this.state.value}
                            numberOfLines={5}
                            author="Administrator"
                            onChange={this.updateValue}
                            placeholder="Enter your comment"
                        />
                    </Card>
                    <View style={Styles.buttonContainer}>
                        <RButton name="Add Comment" onPress={this.backNavigation} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

export default AddCommentScreen
