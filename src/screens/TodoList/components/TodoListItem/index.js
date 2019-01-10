import React from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  Easing,
} from 'react-native';

export default class extends React.Component {
  state = {
    animation: new Animated.Value(200),
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
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.quad),
      }
    ).start();
  }

  render() {
    const { animation } = this.state;
    const { item } = this.props;
    return (
      <Animated.View style={[styles.container, { marginTop: animation }]}>
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
