import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { todoAction } from '../../redux/todo';

import TodoCard from './components/TodoCard';
import TodoListItem from './components/TodoListItem';
import Menu from './components/Menu';

class TodoListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.todos.length;
  }

  render() {
    const { todos } = this.props;
    return !!todos.length
      ? (
        <View style={styles.container}>
          <TodoCard />
          <FlatList
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
              ({ item }) => (
                <TodoListItem
                  item={item}
                />
              )
            }
          />
          <Menu />
        </View>
      )
    : (
      <View>
        <Text>Loading data from API...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    todos: state.todos.items,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoList: todoAction.fetchTodoList(dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);
