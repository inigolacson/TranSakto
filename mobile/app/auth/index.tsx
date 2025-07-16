import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from 'expo-router';

const bgImage = require('../../assets/images/index.webp');

export default function WelcomeScreen() {
    return (
       <ImageBackground
       source={bgImage}
       resizeMode='cover'
       className='flex-1 justify-center items-center px-8 py-16'>
            {/* logo or artwork section */}
            <View className='w-80 h-80 bg-white rounded-lg shadow-md justify-center items-center mb-20 border border-black'>
                <Text className='text-grey-400 text-center text-sm'>Logo or Artwork</Text>
            </View>
            {/* welcome message */}
            <View className='items-center mb-11'>
                <Text className='text-4xl font-bold text-gray-800 mb-4'>Welcome</Text>
                <Text className='text-lg text-center text-gray-600 px-4'>
                    A smarter POS-easy to use, built to match your unique business needs.
                </Text>
            </View>
            {/* start button (redirects to login) */}
            <View className='w-full items-center'>
                <Link href="/auth/login" asChild>
                    <TouchableOpacity className='bg-mainBlue70 py-4 px-8 rounded-full shadow-md w-3/4 items-center'>
                        <Text className='text-white text-xl font-semibold'>Start Today!</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
    )
}