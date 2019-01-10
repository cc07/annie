import React from 'react';
import {
  StyleSheet,
  Text,
  Animated,
} from 'react-native';

export default class extends React.Component {
  state = {
    animation: new Animated.Value(20),
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { animation } = this.state;

    Animated.timing(
      animation,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }
    ).start();
  }

  render() {
    const { animation } = this.state;
    return (
      <Animated.View style={[styles.container, { transform: [{ scale: animation }] }]}>
        <Text style={styles.text}>
          M
        </Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 20,
    paddingRight: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: 50,
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  }
});
