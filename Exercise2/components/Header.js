import React from 'react';
import { 
  Text,
  View
} from 'react-native';

export const Header = ({ children, styles }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{ children }</Text>
    <View style={styles.headerBorder} />
  </View>
);
