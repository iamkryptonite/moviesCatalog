/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../MoviesScreen';
import DetailsScreen from '../DetailsScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation,route}) =>{
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        initialParams={{movies:route.params.movies}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
export default HomeScreen;
