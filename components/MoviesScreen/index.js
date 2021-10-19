/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const MoviesScreen = ({navigation,route}) => {
  const {movies} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>Movies Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
