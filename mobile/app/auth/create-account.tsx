import React from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, ImageBackground, Pressable, TextInput } from 'react-native';

const bgImage = require('../../assets/images/index.webp')

export default function CreateAccount() {
    return (
        <ImageBackground
        source={bgImage}
        resizeMode='cover'
        className='flex-1 justify-center items-center px-8 py-16'>
            <View className='items-center mb-8'>
                <Text className='text-4xl font-bold text-mainBlack mb-4'>Create Account</Text> 
            </View>
            

        </ImageBackground>

    )
}