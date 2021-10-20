/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#141414',
        flex:1,
        alignItems:'center',
        padding:10,
    },
    title:{
        fontSize:25,
        color:'#fff',
    },
    image:{
        width: 300,
        height: 400,
        resizeMode: 'contain',
    },
    text:{
        color:'#fff',
        fontSize:15,
    },
    genre:{
        backgroundColor:'#E50914',
        borderRadius: 5,
        marginRight:15,
        padding:0,
    },

});

export {styles}