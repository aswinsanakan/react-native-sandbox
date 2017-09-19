import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  render() {
    let toDisplay = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{toDisplay}</Text>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://brainhub.eu/img/technology/react-native-brainhub-development.png'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 100, height: 100}}></Image>
        <Blink text="React Native" style={styles.text}/>
        <Greeting name='Aswin' style={styles.text}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
});


// memory loss - chief shows prev recorded vid of rescue operation
