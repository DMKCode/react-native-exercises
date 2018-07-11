import React from 'react';
import { 
  SafeAreaView
} from 'react-native';

const Container = ({ children, styles }) => (
  <SafeAreaView style={styles}>
    { children }
  </SafeAreaView>
);

export default Container;