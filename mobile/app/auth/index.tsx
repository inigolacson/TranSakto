import React from 'react';
import { View, Text } from "react-native";
import { Link } from 'expo-router';

export default function WelcomeScreen() {
    return (
        <View className='flex-1 justify-around items-center px-8 py-16'> 
            <View className='w-48 h-48 bg-white rounded-lg shadow-md justify-center items-center'>
                <Text>Logo or Artwork</Text>
            </View>
        </View>
    )
}