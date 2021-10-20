/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {Text, View, TextInput,TouchableHighlight,ScrollView} from 'react-native';
import { styles } from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesTemplate from '../MoviesTemplate';

const SearchScreen = () => {
  const [searchText,setSearchText] = useState();
  const [movies,setMovies] = useState();

  const handleSearch = () =>{
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/search/shows?q=$'+searchText,
        );
        const json = await response.json();
        setMovies(json);
        return json;
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesFromApiAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchText}
          value={searchText}
        />
        <TouchableHighlight
          onPress={handleSearch}
        >
          <View style={styles.searchButton}>
            <Text style={{color :'#fff'}}>Search</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView>
        <MoviesTemplate movies={movies}/>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
