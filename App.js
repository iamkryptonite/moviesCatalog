import React, {useState, useEffect} from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  const [movies, setMovies] = useState();
  const [hideSplash, setSplash] = useState(false);

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/search/shows?q=all',
        );
        const json = await response.json();
        setMovies(json);
        setSplash(true);
        // console.log(movies);
        return json;
      } catch (error) {
        console.error(error);
      }
    };
    if (hideSplash === false) {
      getMoviesFromApiAsync();
    }
  });
  if (!hideSplash) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{movies: movies}}
        />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
