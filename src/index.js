import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux';
import TodoList from './screens/TodoList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
