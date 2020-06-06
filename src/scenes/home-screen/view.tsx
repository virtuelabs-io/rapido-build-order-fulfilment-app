import React from 'react'
import { Text, View, Button } from 'react-native'
import Styles from './styles'
import { HomeScreenProps, HomeScreenState } from './types'


export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: HomeScreenProps, state: HomeScreenState) {
    super(props)
    this.props.navigation.setOptions({
      title: this.props.route.params.title,
      headerStyle: {
        backgroundColor: '#f2c811',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    })
  }

  detailsNavigationHandler = () => {
    this.props.navigation.navigate("Details", {
      title: "Works"
    })
  }

  render(): React.ReactNode {
    return (
      <View style={Styles.screen}>
        <Text>Home Screen!</Text>
        <Button title="Show Details" onPress={this.detailsNavigationHandler} />
      </View>
    )
  }
}


