/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    card:{
        flex:1,
        margin:15,
        width:250,
        alignItems:'center',
        color:'#fff',
        backgroundColor:'#1a1a1a',
        borderRadius:5,
    },
    scrollViewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        color:'#fff',
    },
    image:{
        borderRadius:5,
        width: 250,
        height: 250,
    },
});

export {styles};