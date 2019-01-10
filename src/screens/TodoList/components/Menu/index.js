import React from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

export default class extends React.Component {
  state = {
    animation: new Animated.Value(400),
  }

  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    const { animation } = this.state;

    Animated.timing(
      animation,
      {
        toValue: 20,
        duration: 700,
      }
    ).start();
  }

  render() {
    const { animation } = this.state;
    return (
      <Animated.View style={[styles.container, { paddingTop: animation, paddingRight: animation }]}>
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
