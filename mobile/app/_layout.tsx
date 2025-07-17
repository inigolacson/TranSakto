import "../global.css";
import { View, Text } from 'react-native';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
 
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require('../assets/fonts/inter/Inter.ttf'),
    'Inter-Italic': require('../assets/fonts/inter/Inter-Italic.ttf'),
    'Ronzino-Regular': require('../assets/fonts/ronzino/Ronzino-Regular.otf'),
    'Ronzino-Medium': require('../assets/fonts/ronzino/Ronzino-Medium.otf'),
    'Ronzino-Bold': require('../assets/fonts/ronzino/Ronzino-Bold.otf'),
    'Ronzino-Oblique': require('../assets/fonts/ronzino/Ronzino-Oblique.otf'),
    'Ronzino-MediumOblique': require('../assets/fonts/ronzino/Ronzino-MediumOblique.otf'),
    'Ronzino-BoldOblique': require('../assets/fonts/ronzino/Ronzino-BoldOblique.otf'),
  })
  
if (!fontsLoaded) {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text>Loading fonts...</Text>
    </View>
  )
}

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}