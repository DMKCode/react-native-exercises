import React from 'react';
import { TextInput } from 'react-native';

export const Input = ({ styles, ...props }) => (
  <TextInput 
    style={styles}
    placeholderTextColor="#6D6F7C"
    autoCorrect={false}
    autoCapitalize="none"
    keyboardAppearance="dark"
    {...props}
  />
); 