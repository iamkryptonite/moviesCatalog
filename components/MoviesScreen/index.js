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
        TouchableHighlight
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
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:'#141414'}}>
        <View style={styles.scrollViewContainer}>
          <TouchableHighlight
            onPress ={() => navigation.navigate('Details')}
          >
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{uri:movies[0].show.image.original}}
              />
              <View style={{padding:10}}>
                <Text style={styles.title}>{movies[0].show.name}</Text>
                <Text style={{color:'#fff'}}>Summary :</Text>
                <RenderHtml
                  contentWidth={width}
                  source = {{html: movies[0].show.summary}}
                  tagsStyles = {tagsStyles}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;
