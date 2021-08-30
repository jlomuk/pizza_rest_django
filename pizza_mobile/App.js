import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListView from './src/screens/components/list_view';
import DetailView from './src/screens/components/detail_view';
import ScreenA from "./src/screens/drawer/screenA";
import ScreenB from "./src/screens/drawer/screenB";
import ScreenC from "./src/screens/drawer/screenC";



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

renderScreenComponents = () => {
    
}




export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       {<Stack.Screen name='Home' component={ListView}/>}
       {<Stack.Screen name='Detail' component={DetailView}/>}
     </Stack.Navigator>
   </NavigationContainer>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
