import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function AuthLayout() {
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{headerShown: false,
                contentStyle: {backgroundColor: 'transparent'}
            }}/>
            <StatusBar style='light' translucent={true}/>
        </SafeAreaProvider>
    );
}