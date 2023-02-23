import { StyleSheet, SafeAreaView, View, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton, SongList, SpotifyLogo }from "./components";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './screens/DetailScreen';
import PreviewScreen from './screens/PreviewScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const opts = {
  headerBackTitleVisible: true,
  headerBackTitle: 'Back',
  headerTitleAlign: 'center',
  headerTintColor: '#0b3f78',
  headerStyle: {
    backgroundColor: '#121212',
  },
  headerTitleStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
}

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen options={{...opts, title: 'Song details'}} name="DetailScreen" component={DetailScreen}/>
      <Stack.Screen options={{...opts, title: 'Song preview'}} name="PreviewScreen" component={PreviewScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}