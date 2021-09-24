import React from 'react'
import {  Text, Pressable, StyleSheet } from 'react-native'


interface ButtonProps{
    text: string, 
    onPress: () => {};
}

const Buttons = ({text , onPress}: ButtonProps) => {
    return (
        <Pressable onPress = {onPress} style = {styles.root}>
            <Text style = {styles.text}>{text}</Text>

            </Pressable>
       
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        height: 35,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },




    
});

export default Buttons;
