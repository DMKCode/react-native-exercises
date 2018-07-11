import React from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native';

import Container from './components/Container';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input as TextInput } from './components/TextInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 23,
    color: '#F9FDFF',
    letterSpacing: 0,
    marginBottom: 12,
    marginTop: 60,
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#575B67',
    width: Dimensions.get('window').width * 0.25,
  },
  input: {
    backgroundColor: '#454754',
    marginHorizontal: 50,
    padding: 14,
    borderRadius: 2,
    marginBottom: 14,
    color: '#EEF1F5',
    fontWeight: '600',
    fontSize: 14,
  },
  touchable: {
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: '#0CD38A',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 0,
  },
});

const Challenge2 = () => (
  <Container styles={styles.container}>
    <StatusBar barStyle="light-content" />
    <Header styles={styles}>
      Welcome to Gaze
    </Header>
    <Image
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <TextInput
      placeholder="email"
      styles={styles.input}
    />
    <TextInput
      placeholder="password"
      secureTextEntry
      styles={styles.input}
    />
    <Button
      onPress={() => null}
      styles={{ 
        touchable: styles.touchable,
        button: styles.button,
        text: styles.text
      }}
    >
      Sign in
    </Button>
  </Container>
);

export default Challenge2;
