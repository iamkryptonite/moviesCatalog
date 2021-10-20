/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { styles } from './styles';
import {Text, View,Image, useWindowDimensions,ScrollView} from 'react-native';
import RenderHtml from 'react-native-render-html';

const tagsStyles = {
  p: {
    color: '#fff',
    margin: 0,
    fontSize: 15,
  },
};

const DetailsScreen = ({navigation,route}) => {
  const {movie} = route.params;
  const { width } = useWindowDimensions();

  const genres = movie.show.genres.map((genre,index)=>
    <View style={styles.genre} key={index}>
      <Text
        style={{color:'#fff'}}
        key={genre}>{genre}
      </Text>
    </View>
  );

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri:movie.show.image.original}}
        />
        {/* <View> */}
          <Text style={styles.title}>{movie.show.name}</Text>
          <Text style={styles.text}>Genre: {genres}</Text>
          <Text style={styles.text}>Rating: {movie.show.rating.average}</Text>
          
        {/* </View> */}

        <RenderHtml
          contentWidth={width}
          source = {{html: movie.show.summary}}
          tagsStyles = {tagsStyles}
        />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
