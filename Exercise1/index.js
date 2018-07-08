import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7b7c75',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  redSquare: {
    backgroundColor: '#f45342',
    flexDirection: 'row',
    width: 200,
    height: 200
  },
  blueRectangle: {
    backgroundColor: '#409bef',
    flex: 2
  },
  greenRectangle: {
    backgroundColor: '#2aaf59',
    flex: 1
  }

});

const Exercise1 = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.redSquare }>
        <View style={ styles.blueRectangle } />
        <View style={ styles.greenRectangle } />
      </View>
    </View>
  );
};

export default Exercise1;
