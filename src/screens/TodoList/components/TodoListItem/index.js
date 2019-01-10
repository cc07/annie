import React from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  Easing,
} from 'react-native';

export default class extends React.Component {
  state = {
    animation: new Animated.Value(500),
  }

  componentDidMount() {
    const { animation } = this.state;

    Animated.timing(
      animation,
      {
        toValue: 0,
        duration: 700,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }
    ).start();
  }

  render() {
    const { animation } = this.state;
    const { item } = this.props;
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: animation }] }]}>
        <Text style={styles.text}>{ item.title }</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  text: {
    fontSize: 20,
  }
});
