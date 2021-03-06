/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { styles } from './styles';
import RenderHtml from 'react-native-render-html';

import {
        SafeAreaView,
        Text,
        View,
        ScrollView,
        useWindowDimensions,
        Image,
        TouchableHighlight,
      } from 'react-native';

const tagsStyles = {
  p: {
    color: '#fff',
    margin: 0,
  },
};



const MoviesScreen = ({navigation,route}) => {
  const {movies} = route.params;
  const { width } = useWindowDimensions();

  const getMovies = () =>{
    return movies.map(movie => {
      return (
        <TouchableHighlight
          onPress ={() => navigation.navigate('Details',{movie:movie})}
          key = {movie.show.id}
        >
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri:movie.show.image.original}}
            />
            <View style={{padding:10,flex:2,height:200,overflow:'hidden'}}>
              <Text style={styles.title}>{movie.show.name}</Text>
              <Text style={{color:'#fff'}}>Summary :</Text>
              <ScrollView>
                <RenderHtml
                  contentWidth={width}
                  source = {{html: movie.show.summary}}
                  tagsStyles = {tagsStyles}
                />
              </ScrollView>
              
            </View>
          </View>
        </TouchableHighlight>
      );
  })};
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:'#141414'}}>
        {getMovies()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;
