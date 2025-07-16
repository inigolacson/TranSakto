import React from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const bgImage = require('../../assets/images/index.webp');

export default function LoginPage() {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    return (
        <ImageBackground
        source={bgImage}
        resizeMode='cover'
        className='flex-1 justify-center items-center px-8 py 16'>
            <View className='items-center mb-8'>
                <Text className=' text-4xl font-bold text-mainBlack mb-4'>Welcome back</Text>
            </View>
                <View className='bg-white rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10' >
                <FontAwesome name="user" size={20} color="#5C5C5C" className='mr-3'/>
                <TextInput
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder={isEmailFocused ? '' : 'email address'}
                className='flex-1 text-black pr-2'
                placeholderTextColor='#5C5C5C'/>
                
            </View>
            <View className='bg-white rounded-full py-2 px-8 mb-10 w-3/4 flex-row items-center space-x-10' >
                <FontAwesome name="lock" size={20} color="#5C5C5C" className='mr-3'/>
                <TextInput
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                placeholder={!isPasswordFocused && password === '' ? 'password' : ''}
                secureTextEntry = {!showPassword}
                className='flex-1 text-black pr-2'
                placeholderTextColor='#5C5C5C'/>

                <Pressable onPress={() => setShowPassword(prev => !prev)}>
                    <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={18}
                    color='#5C5C5C'
                    />
                </Pressable>
            </View>
            <TouchableOpacity className='bg-mainBlue70 py-4 px-8 rounded-full shadow-md w-3/4 items-center'>
                <Text className='text-white text-xl font-semibold'>Login!</Text>
            </TouchableOpacity> 
        </ImageBackground>
    )
}