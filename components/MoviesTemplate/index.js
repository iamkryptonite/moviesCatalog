/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { styles } from './styles';
import RenderHtml from 'react-native-render-html';
import {
        Text,
        View,
        useWindowDimensions,
        Image,
        TouchableHighlight,
        ScrollView,
      } from 'react-native';

const tagsStyles = {
  p: {
    color: '#fff',
    margin: 0,
  },
};

const MoviesTemplate = (props,{navigation,route}) => {
  const {movies} = props;
  console.log(movies);
  const { width } = useWindowDimensions();

  const getMovies = () =>{
    return movies.map(movie => {
      return (
        <TouchableHighlight
          key = {movie.show.id}
        >
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri:movie.show.image?.medium}}
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
  });
};

    if (movies === undefined)
        {return <></>;}
    return (
        <>
            {getMovies()}
        </>
    );
};

export default MoviesTemplate;
