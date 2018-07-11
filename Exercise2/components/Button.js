import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

export const Button = ({ 
  styles, 
  onPress = () => null, 
  children 
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.touchable}
  >
    <View style={styles.button}>
      <Text style={styles.text}>Sign in</Text>
    </View>
  </TouchableHighlight>
) 