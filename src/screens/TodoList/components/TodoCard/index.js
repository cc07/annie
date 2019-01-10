import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class extends React.Component {
  state = {
    toggle: false,
    containerHeight: 0,
    toggleHeight: 0,
    toggleAnimation: new Animated.Value(0),
    containerSlideInAnimation: new Animated.Value(500),
    containerAnimationOnToggle: new Animated.Value(15),
  }

  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    const { containerSlideInAnimation } = this.state;

    Animated.timing(
      containerSlideInAnimation,
      {
        toValue: 0,
        duration: 700,
        easing: Easing.out(Easing.quad),
      }
    ).start();
  }

  setHeight = (container) => (event) => {
    this.setState({
      [container]: event.nativeEvent.layout.height,
    });
  }

  handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const { toggle, containerAnimationOnToggle, toggleHeight, toggleAnimation } = this.state;

    const containerMarginBottomValue = !toggle ? 15 + toggleHeight : 15;
    const toggleHeightValue = toggle ? 0 : toggleHeight * -1;

    this.setState({
      toggle: !toggle,
    });

    Animated.spring(
      toggleAnimation,
      {
        toValue: toggleHeightValue,
      }
    ).start();

    Animated.spring(
      containerAnimationOnToggle,
      {
        toValue: containerMarginBottomValue,
        friction: 5,
      }
    ).start();
  }

  render() {
    const {
      containerSlideInAnimation,
      containerAnimationOnToggle,
      toggleAnimation,
    } = this.state;
    return (
      <Animated.View style={[styles.container, {
          marginTop: containerSlideInAnimation,
          marginBottom: containerAnimationOnToggle,
        } ]} onLayout={this.setHeight('containerHeight')}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <LinearGradient
            start={{x: 0.0, y: 0.0 }}
            end={{x: 1.0, y: 1.0}}
            colors={['#8088ff', '#b4b8ff']}
            style={styles.cardContainer}
          >
            <View onLayout={this.setMinHeight}>
              <Text style={styles.text}>
                Fever Pack
              </Text>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.toggleCard, { bottom: toggleAnimation }]} onLayout={this.setHeight('toggleHeight')}>
          <Text style={styles.toggleCardText}>Order the Pack</Text>
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    zIndex: 999,
    alignSelf: 'stretch',
  },
  cardContainer: {
    borderRadius: 5,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 50,
    paddingRight: 50,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 20,
    zIndex: 9,
  },
  toggleCardText: {
    fontSize: 20,
    color: '#333',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  }
});
