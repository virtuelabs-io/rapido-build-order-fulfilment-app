import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { SettingsScreenProps, SettingsScreenState } from './types'


export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props: SettingsScreenProps) {
    super(props)
  }

  componentDidMount() {
    console.log("Settings: componentDidMount")
  }

  render(): React.ReactNode {
    return (
      <View style={Styles.screen}>
        <Text>{this.props.route.params.title}!</Text>
      </View>
    )
  }
}
