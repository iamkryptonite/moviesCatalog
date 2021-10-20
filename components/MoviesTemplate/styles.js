/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:'row',
        margin:15,
        // width:250,
        // alignItems:'center',
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
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        flex: 1,
        width: 250,
        height: 200,
        resizeMode: 'cover',
    },
});

export {styles}