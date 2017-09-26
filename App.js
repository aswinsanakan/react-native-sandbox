import React, {Component} from 'react';
import { Alert, View, Text, Image, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

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

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    let emojiSet = [
      '🍕', '🍗', '🍔', '🌮', '🌭'
    ];
    var emojiRandom = emojiSet[Math.floor(Math.random() * emojiSet.length)];
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, color: 'black'}}
          placeholder="Type to make pizzas!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 20}}>
          {this.state.text.split(' ').map((word) => word && emojiRandom).join(' ') }
        </Text>
      </View> 
    );
  }
}

export default class HelloWorldApp extends Component {
  
  _onPressButton() {
    Alert.alert('You clicked the button!')
  }
  render() {
    let pic = {
      uri: 'https://brainhub.eu/img/technology/react-native-brainhub-development.png'
    };
    return (
      <View style={styles.container}> 
        <View style={styles.logo} >
          <Image source={pic} style={{width: 100, height: 100}}></Image>
          <Blink text="React Native" style={{fontSize: 15, color: '#fff'}}/>
          <Greeting name='Aswin' style={{fontSize: 15, color: '#fff'}}/>
        </View>
        <View style={styles.pizzaContainer}>
          <PizzaTranslator />
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Prev"
            />
            <Button
              // style={{height: 10, width: 30}}
              onPress={this._onPressButton}
              title="Next"
            />
          </View>
        </View>
        <View style={styles.infoScroll}>
          <ScrollView>
            <Text style={{color: 'blue', fontSize: 20, margin: 10}}>Scroll to View!</Text>
            <Text style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pizzaContainer: {
    flex: 5,
    backgroundColor: 'steelblue',
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoScroll: {
    flex: 2
  },
});