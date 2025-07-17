import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, ImageBackground, Pressable, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const bgImage = require('../../assets/images/index.webp')

export default function CreateAccount() {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isConfirmEmailFocused, setIsConfirmEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false)

    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <ImageBackground
        source={bgImage}
        resizeMode='cover'
        className='flex-1 justify-center items-center px-8 py-16'>
            <View className='items-center mb-8'>
                <Text className='text-4xl font-bold text-mainBlack mb-4'>Create Account</Text> 
            </View>
            <View className='bg-white rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10'>
                <FontAwesome name='user' size={20} color="#5C5C5C" className='mr-3'/>
                <TextInput
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder={isEmailFocused ? '' : 'email address'}
                className='flex-1 text-black pr-2'
                placeholderTextColor='#5C5C5C'
                />
            </View>
            <View className='bg-white rounded-full py-2 px-8 mb-5 w-3/4 flex-row items-center space-x-10'>
                <FontAwesome name='user' size={20} color="#5C5C5C" className='mr-3'/>
                <TextInput
                value={emailConfirm}
                onChangeText={setEmailConfirm}
                onFocus={() => setIsConfirmEmailFocused(true)}
                onBlur={() => setIsConfirmEmailFocused(false)}
                placeholder={ isConfirmEmailFocused ? '' : 'confirm email address'}
                className='flex-1 text-black pr-2'
                placeholderTextColor="#5C5C5C"
                />
            </View>
            <View className='bg-white rounded-full py-2 px-8 mb-3 w-3/4 flex-row items-center space-x-10'>
                <FontAwesome name='lock' size={20} color="#5C5C5C" className='mr-3'/>
                <TextInput
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                placeholder={ isPasswordFocused ? '' : 'password'}
                secureTextEntry = {!showPassword}
                className='flex-1 text-black pr-2'
                placeholderTextColor="#5C5C5C"/>

                <Pressable onPress={() => setShowPassword(prev => ! prev)}>
                    <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={18}
                    color="#5C5C5C"
                    />
                </Pressable>
            </View>
            <View className='flex-row items-center space-x-10 mb-14 justify-items-start w-3/4 pl-1' >
                <Pressable className='h-6 w-6 rounded-md bg-white items-center'
                onPress={() => setChecked(!checked)}>
                {checked && <Text className='text-mainBlack font-bold text-xl'>✓</Text>}
                </Pressable>
                <Text className='text-mainBlack ml-2 text-sm'>Agree with Terms and Conditions</Text>
            </View>
            <TouchableOpacity className='bg-mainBlue70 py-4 px-8 rounded-full shadow-md w-3/4 items-center mb-12'>
                <Text className='text-white text-xl font-semibold'>Sign Up!</Text>
            </TouchableOpacity>
            <View className='flex-row items-center'>
                <Text>Already managing a business? </Text>
                <Link href='/auth/login' asChild>
                <Text className='text-blue-900'>Login!</Text>
                </Link>
            </View>
        </ImageBackground>

    )
} 