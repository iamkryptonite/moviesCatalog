/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Welcome</Text>
    </View>
  );
};

export default SplashScreen;
