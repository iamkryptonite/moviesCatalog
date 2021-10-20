/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#939393',
    margin:5,
    padding:0,

  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    padding:5,
    borderRadius:20,
  },
  searchButton: {
    flex:2,
    paddingHorizontal:5,
    margin:0,
    borderRadius:20,
    backgroundColor:'#E50914',
    justifyContent:'center',
    marginLeft:5,

  },
});

export {styles};
