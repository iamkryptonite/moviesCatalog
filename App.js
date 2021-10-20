import React, {useState, useEffect} from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [movies, setMovies] = useState();
  const [hideSplash, setSplash] = useState(false);

  const Home = <Icon name="home" size={30} color="#900" />;
  const Search = <Icon name="search" size={30} color="#900" />;

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
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {backgroundColor: '#1a1a1a'},
          tabBarActiveTintColor: '#E50914',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}>
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
