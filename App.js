import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import Moment from 'moment';

const image = {
  daytime: require('./assets/bg_day.jpg'),
  night: require('./assets/bg_night.jpg'),
};

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        backgroundName: 'daytime',
        time: Moment().format('LTS'),
      };
    }

  handlePress() {
    if (this.state.backgroundName === 'daytime') {
      this.setState({ backgroundName: 'night' });
    } else {
      this.setState({ backgroundName: 'daytime' });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: Moment().format('LTS') });
    }, 1000);
  }

  render() {
    const time = Moment().format('LTS');
    return (
      <View style={styles.container}>
        <Image style={styles.image} 
                source={image[this.state.backgroundName]}>
          <Text>{this.state.time}</Text>
          <Button title="change background" 
                  color="red" 
                  onPress={() => this.handlePress()} />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
