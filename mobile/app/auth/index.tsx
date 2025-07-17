import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Link } from 'expo-router';

const bgImage = require('../../assets/images/background/index.webp');

export default function WelcomeScreen() {
    return (
            <View className='flex-1 justify-center items-center px-8 py-16 w-full h-full bg-tempBlack'>
                {/* logo or artwork section */}
                <View className='w-80 h-80 border-headerColor rounded-lg shadow-md justify-center items-center mb-20 border'>
                    <Text className='text-headerColor text-center text-sm'>Logo or Artwork</Text>
                </View>
                {/* welcome message */}
                <View className='items-center mb-11'>
                    <Text className='text-4xl font-inter font-extrabold text-headerColor mb-4'>Welcome</Text>
                    <Text className='text-lg text-center text-subheaderColor px-4'>
                        A smarter POS-easy to use, built to match your unique business needs.
                    </Text>
                </View>
                {/* start button (redirects to login) */}
                <View className='w-full items-center'>
                    <Link href="/auth/login" asChild>
                        <TouchableOpacity className='bg-buttonOrange py-4 px-8 rounded-full shadow-md w-3/4 items-center'>
                            <Text className='text-white text-xl font-semibold'>Start Today!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
    )
}