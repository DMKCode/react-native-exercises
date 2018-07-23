import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c5e1f9',
    flex: 1,
  },
  list: {
    marginTop: 35
  },
  listItem: {
    borderBottomWidth: 1,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  listItemMainText: {
    fontSize: 18,
    fontWeight: '600'
  },
  listItemSubText: {
    fontSize: 14,
  }
});

class Challenge3 extends Component {
  state = {
    people: [],
  }

  _renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemMainText}>{item.name}</Text>
      <Text style={styles.listItemSubText}>Birth Year: {item.birth_year}</Text>
    </View>
  ) 

  _keyExtractor = (item, index) => index;

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={this.state.people}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={styles.list}
        />
      </SafeAreaView>
    );
  }
}

export default Challenge3;
